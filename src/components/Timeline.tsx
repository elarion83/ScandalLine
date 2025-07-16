import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import { ZoomIn, ZoomOut, Filter, BarChart3, FileText, Building2, Users, ArrowRight, TrendingUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Scandal } from '../types/scandal';
import { filterScandals, calculateStats, getCategoryLabel } from '../utils/scandalUtils';
import { filterTimelineBy } from '../utils/contextualFilters';
import { nameToSlug } from '../utils/shareUtils';
import { 
  calculateTimelineWidth, 
  calculateScandalPositions, 
  TIMELINE_Y,
  CARD_WIDTH,
  getVisibleScandals,
  getCumulativeScandals,
  needsScrolling,
  calculateOptimizedTimelineWidth,
  calculateOptimizedScandalPositions,
  calculateDynamicDateRange,
  generateYearMarkers,
  findNearestYearMarker,
  calculateScandalPointPositions,
  ScandalPointPosition
} from '../utils/timelineLayout';
import { useTimeline } from '../contexts/TimelineContext';
import ScandalCard from './ScandalCard';
import ScandalPoint from './ScandalPoint';
import TimelineAxis from './TimelineAxis';

import FilterPanel from './FilterPanel';
import StatsPanel from './StatsPanel';
import ScandalDetails from './ScandalDetails';
import DynamicStatsBar from './DynamicStatsBar';
import ContextualHeader from './ContextualHeader';
import ShareTimeline from './ShareTimeline';
import ScrollHint from './modals/ScrollHint';
import PersonalityHint from './modals/PersonalityHint';
import ContextualTimelinePanel from './modals/ContextualTimelinePanel';
import CurrentYearDisplay from './CurrentYearDisplay';
import TimelineGrid from './TimelineGrid';

interface TimelineProps {
  scandals: Scandal[];
  splashClosedTime: number | null;
}

const Timeline: React.FC<TimelineProps> = ({ 
  scandals,
  splashClosedTime
}) => {
  const { state, dispatch } = useTimeline();
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const initialScrollDoneRef = useRef(false);
  const [showDragHelp, setShowDragHelp] = useState(() => {
    // Vérifier si l'utilisateur a déjà vu la tooltip
    return localStorage.getItem('hasSeenDragHelp') !== 'true';
  });
  const [hasUsedDrag, setHasUsedDrag] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [hasScrolledHorizontally, setHasScrolledHorizontally] = useState(false);
  const [showContextualPanel, setShowContextualPanel] = useState(false);

  // Apply contextual filter first, then regular filters
  const contextuallyFilteredScandals = state.contextualFilter 
    ? filterTimelineBy(scandals, state.contextualFilter)
    : scandals;
  
  const filteredScandals = filterScandals(contextuallyFilteredScandals, state.filters);
  const stats = calculateStats(filteredScandals);

  // Calculate dynamic date range based on filtered scandals
  const { start: startYear, end: endYear } = useMemo(() => 
    calculateDynamicDateRange(filteredScandals),
    [filteredScandals]
  );

  // Determine if we need adaptive layout
  const shouldUseAdaptiveLayout = false;
  
  // Detect if we're on mobile
  const isMobile = state.viewportWidth < 768; // Standard mobile breakpoint
  
  // Force mobile behavior: 43% zoom and points mode
  const mobileZoomLevel = 6.45; // 43% of default zoom (15 * 0.43)
  
  // Auto-switch to points mode when zoomed out significantly (zoom < 40%) or on mobile
  const shouldUsePointsMode = state.zoomLevel < 6 || isMobile; // 40% of default zoom level or mobile
  
  // Force mobile zoom and mode
  useEffect(() => {
    if (isMobile) {
      // Force zoom to 43% on mobile
      if (state.zoomLevel !== mobileZoomLevel) {
        dispatch({ type: 'SET_ZOOM', payload: mobileZoomLevel });
      }
      // Force points mode on mobile
      if (state.displayMode !== 'points') {
        dispatch({ type: 'SET_DISPLAY_MODE', payload: 'points' });
      }
    }
  }, [isMobile, state.zoomLevel, state.displayMode, dispatch]);
  
  // Debug: log current values
  console.log('🔍 Debug mode points:', {
    zoomLevel: state.zoomLevel,
    shouldUsePointsMode,
    currentDisplayMode: state.displayMode,
    zoomPercentage: (state.zoomLevel / 15) * 100,
    isMobile,
    viewportWidth: state.viewportWidth
  });
  
  // Update display mode based on zoom level and mobile detection (desktop only)
  useEffect(() => {
    if (!isMobile) {
      const newDisplayMode = shouldUsePointsMode ? 'points' : 'cards';
      if (state.displayMode !== newDisplayMode) {
        console.log('🔄 Switching display mode:', { from: state.displayMode, to: newDisplayMode, isMobile });
        dispatch({ type: 'SET_DISPLAY_MODE', payload: newDisplayMode });
      }
    }
  }, [shouldUsePointsMode, state.displayMode, dispatch, isMobile]);

  // Calculate timeline dimensions based on adaptive behavior
  const { timelineWidth, scandalPositions, scandalPointPositions } = useMemo(() => {
    if (shouldUseAdaptiveLayout) {
      // Single affair or no affairs - use optimized layout
      const { width } = calculateOptimizedTimelineWidth(filteredScandals, startYear, endYear, state.zoomLevel);
      const positions = calculateOptimizedScandalPositions(filteredScandals, []);
      return { timelineWidth: width, scandalPositions: positions, scandalPointPositions: [] };
    } else {
      // Multiple affairs - use standard layout
      const width = calculateTimelineWidth(startYear, endYear, state.zoomLevel);
      const positions = calculateScandalPositions(filteredScandals, startYear, endYear, width);
      const pointPositions = calculateScandalPointPositions(filteredScandals, startYear, endYear, width);
      return { timelineWidth: width, scandalPositions: positions, scandalPointPositions: pointPositions };
    }
  }, [filteredScandals, startYear, endYear, state.zoomLevel, shouldUseAdaptiveLayout]);

  const scrollProgress = useMemo(() => {
    // Si la timeline est plus petite que la viewport ou si on utilise le layout adaptatif, on est à 100%
    if (shouldUseAdaptiveLayout || timelineWidth <= state.viewportWidth) return 1;

    // Si le bord gauche est visible (scrollPosition = 0) et que le bord droit n'est pas visible
    if (state.scrollPosition === 0 && state.scrollPosition + state.viewportWidth < timelineWidth) {
      return 0;
    }

    // Si le bord droit est visible
    if (state.scrollPosition + state.viewportWidth >= timelineWidth) {
      return 1;
    }

    // Sinon, on calcule le pourcentage de progression
    return (state.scrollPosition) / (timelineWidth - state.viewportWidth);
  }, [state.scrollPosition, state.viewportWidth, timelineWidth, shouldUseAdaptiveLayout]);

  // Gérer l'affichage initial de la modal d'aide
  useEffect(() => {
    // Masquer la tooltip si l'utilisateur a utilisé le drag OU s'il a scrollé à plus de 20%
    const scrollProgress = state.scrollPosition / (timelineWidth - state.viewportWidth);
    if (hasUsedDrag || scrollProgress > 0.2) {
      setShowDragHelp(false);
      // Sauvegarder dans le localStorage pour ne plus afficher la tooltip
      localStorage.setItem('hasSeenDragHelp', 'true');
    }
  }, [hasUsedDrag, state.scrollPosition, timelineWidth, state.viewportWidth]);

  // Scroll to top when timeline opens
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [scandals, state.contextualFilter]); // Déclencher quand les scandales changent ou quand on change de contexte

  // Update filters with new date range
  useEffect(() => {
    // Ne pas mettre à jour les dates si les filtres ont changé à cause d'une case à cocher
    const hasOnlyCheckboxChanges = 
      state.filters.types.length > 0 || 
      state.filters.parties.length > 0 || 
      state.filters.personalities.length > 0;

    if (!hasOnlyCheckboxChanges && (startYear !== state.filters.dateRange.start || endYear !== state.filters.dateRange.end)) {
      dispatch({ 
        type: 'SET_FILTERS', 
        payload: { 
          ...state.filters, 
          dateRange: { start: startYear, end: endYear } 
        } 
      });
    }
  }, [startYear, endYear, state.filters]);

  // Calculate visible scandals for rendering optimization
  const visibleScandalPositions = useMemo(() => {
    if (shouldUseAdaptiveLayout) {
      // For adaptive layout, show all scandals (no scrolling)
      return scandalPositions;
    }
    return getVisibleScandals(scandalPositions, state.scrollPosition, state.viewportWidth);
  }, [scandalPositions, state.scrollPosition, state.viewportWidth, shouldUseAdaptiveLayout]);

  // Calculate cumulative scandals for statistics (from start to current position)
  const cumulativeScandals = useMemo(() => {
    if (shouldUseAdaptiveLayout) {
      // For adaptive layout, always show all scandals in stats
      return filteredScandals;
    }
    return getCumulativeScandals(scandalPositions, filteredScandals, state.scrollPosition, state.viewportWidth);
  }, [scandalPositions, filteredScandals, state.scrollPosition, state.viewportWidth, shouldUseAdaptiveLayout]);

  // Méthode commune pour gérer le scroll initial
  const handleInitialScroll = useCallback(() => {
    if (!initialScrollDoneRef.current && containerRef.current) {
      // On commence toujours au début de la timeline
      containerRef.current.scrollLeft = 0;
      dispatch({ type: 'SET_SCROLL_POSITION', payload: 0 });
      initialScrollDoneRef.current = true;
      console.log('🎯 Scroll initial appliqué - Position: début de la timeline');
    }
  }, [dispatch]);

  // Scroll initial uniquement au montage et changement de contexte
  useEffect(() => {
    // Reset du flag quand le contexte change
    initialScrollDoneRef.current = false;
    
    if (scandalPositions.length > 0) {
      handleInitialScroll();
    }
  }, [state.contextualFilter]); // Ne dépend plus de scandalPositions

  // Handle contextual filter changes with transition
  const handleContextualFilterChange = useCallback((filter: any) => {
    dispatch({ type: 'SET_TRANSITIONING', payload: true });
    
    setTimeout(() => {
      // Reset du flag avant de changer de contexte
      initialScrollDoneRef.current = false;
      
      // Set contextual filter
      dispatch({ type: 'SET_CONTEXTUAL_FILTER', payload: filter });
      
      // Get filtered scandals
      const filteredContextScandals = filterTimelineBy(scandals, filter);
      
      // Calculate new date range based on filtered scandals
      const { start, end } = calculateDynamicDateRange(filteredContextScandals);
      
      // Update filters with new date range
      dispatch({ 
        type: 'SET_FILTERS', 
        payload: { 
          ...state.filters,
          dateRange: { start, end }
        } 
      });
      
      dispatch({ type: 'SET_TRANSITIONING', payload: false });
      
      // Utiliser la méthode commune pour le scroll initial
      handleInitialScroll();
    }, 150);
  }, [dispatch, scandals, state.filters, handleInitialScroll]);

  // Handle back to main timeline
  const handleBackToMain = useCallback(() => {
    dispatch({ type: 'SET_TRANSITIONING', payload: true });
    setTimeout(() => {
      // Reset du flag avant de revenir au main
      initialScrollDoneRef.current = false;
      
      // Reset contextual filter
      dispatch({ type: 'SET_CONTEXTUAL_FILTER', payload: null });
      
      // Calculate new date range based on all scandals
      const { start, end } = calculateDynamicDateRange(scandals);
      
      // Reset filters with new date range
      dispatch({ 
        type: 'SET_FILTERS', 
        payload: { 
          ...state.filters,
          dateRange: { start, end },
          types: [],
          parties: [],
          personalities: []
        } 
      });
      
      dispatch({ type: 'SET_TRANSITIONING', payload: false });
      
      // Utiliser la méthode commune pour le scroll initial
      handleInitialScroll();
      window.location.replace('/');
    }, 150);
  }, [dispatch, scandals, state.filters, handleInitialScroll]);

  // Handle contextual timeline selection
  const handleSelectContextualTimeline = useCallback((type: 'personality' | 'party', value: string, label: string) => {
    dispatch({ type: 'SET_TRANSITIONING', payload: true });
    
    // Mettre à jour l'URL avec le slug pour les personnalités
    if (type === 'personality') {
      const slug = nameToSlug(value);
      const newUrl = `/timeline/${slug}`;
      window.history.pushState({}, '', newUrl);
    }
    
    setTimeout(() => {
      // Reset du flag avant de changer de contexte
      initialScrollDoneRef.current = false;
      
      // Create contextual filter
      const contextualFilter = {
        type,
        value,
        label
      };
      
      // Set contextual filter
      dispatch({ type: 'SET_CONTEXTUAL_FILTER', payload: contextualFilter });
      
      // Get filtered scandals
      const filteredContextScandals = filterTimelineBy(scandals, contextualFilter);
      
      // Calculate new date range based on filtered scandals
      const { start, end } = calculateDynamicDateRange(filteredContextScandals);
      
      // Update filters with new date range
      dispatch({ 
        type: 'SET_FILTERS', 
        payload: { 
          ...state.filters,
          dateRange: { start, end }
        } 
      });
      
      dispatch({ type: 'SET_TRANSITIONING', payload: false });
      
      // Utiliser la méthode commune pour le scroll initial
      handleInitialScroll();
    }, 150);
  }, [dispatch, scandals, state.filters, handleInitialScroll]);

  // Handle viewport width changes
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        dispatch({ type: 'SET_VIEWPORT_WIDTH', payload: containerRef.current.clientWidth });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  // Handle zoom with center preservation (disabled for adaptive layout)
  const handleZoomIn = useCallback(() => {
    if (state.zoomLevel >= 500 || shouldUseAdaptiveLayout) return;
    
    const container = containerRef.current;
    if (!container) return;

    const currentCenter = state.scrollPosition + state.viewportWidth / 2;
    const currentCenterRatio = currentCenter / timelineWidth;
    
    // Zoom de 20% à chaque clic (plus marqué)
    const newZoomLevel = Math.min(500, state.zoomLevel * 1.20);
    dispatch({ type: 'SET_ZOOM', payload: newZoomLevel });
    
    // Preserve center position after zoom
    setTimeout(() => {
      if (container) {
        const newTimelineWidth = calculateTimelineWidth(startYear, endYear, newZoomLevel);
        const newCenter = currentCenterRatio * newTimelineWidth;
        const newScrollLeft = newCenter - state.viewportWidth / 2;
        container.scrollLeft = Math.max(0, newScrollLeft);
        dispatch({ type: 'SET_SCROLL_POSITION', payload: container.scrollLeft });
      }
    }, 0);
  }, [dispatch, state.zoomLevel, state.scrollPosition, state.viewportWidth, timelineWidth, startYear, endYear, shouldUseAdaptiveLayout]);

  const handleZoomOut = useCallback(() => {
    if (state.zoomLevel <= 1 || shouldUseAdaptiveLayout) return;
    
    const container = containerRef.current;
    if (!container) return;

    const currentCenter = state.scrollPosition + state.viewportWidth / 2;
    const currentCenterRatio = currentCenter / timelineWidth;
    
    // Dézoom de 20% à chaque clic (plus marqué)
    const newZoomLevel = Math.max(1, state.zoomLevel / 1.20);
    dispatch({ type: 'SET_ZOOM', payload: newZoomLevel });
    
    // Preserve center position after zoom
    setTimeout(() => {
      if (container) {
        const newTimelineWidth = calculateTimelineWidth(startYear, endYear, newZoomLevel);
        const newCenter = currentCenterRatio * newTimelineWidth;
        const newScrollLeft = newCenter - state.viewportWidth / 2;
        container.scrollLeft = Math.max(0, newScrollLeft);
        dispatch({ type: 'SET_SCROLL_POSITION', payload: container.scrollLeft });
      }
    }, 0);
  }, [dispatch, state.zoomLevel, state.scrollPosition, state.viewportWidth, timelineWidth, startYear, endYear, shouldUseAdaptiveLayout]);

  // Reset zoom to 100%
  const handleResetZoom = useCallback(() => {
    if (shouldUseAdaptiveLayout) return;
    
    const container = containerRef.current;
    if (!container) return;

    const currentCenter = state.scrollPosition + state.viewportWidth / 2;
    const currentCenterRatio = currentCenter / timelineWidth;
    
    dispatch({ type: 'SET_ZOOM', payload: 15 });
    
    // Preserve center position after reset
    setTimeout(() => {
      if (container) {
        const newTimelineWidth = calculateTimelineWidth(startYear, endYear, 15);
        const newCenter = currentCenterRatio * newTimelineWidth;
        const newScrollLeft = newCenter - state.viewportWidth / 2;
        container.scrollLeft = Math.max(0, newScrollLeft);
        dispatch({ type: 'SET_SCROLL_POSITION', payload: container.scrollLeft });
      }
    }, 0);
  }, [dispatch, state.scrollPosition, state.viewportWidth, timelineWidth, startYear, endYear, shouldUseAdaptiveLayout]);

  // Handle mouse drag
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    dispatch({ type: 'SET_DRAGGING', payload: true });
    
    if (!hasUsedDrag) {
      setHasUsedDrag(true);
    }

    if (containerRef.current) {
    dragStartRef.current = {
        x: e.pageX - containerRef.current.offsetLeft,
        scrollLeft: containerRef.current.scrollLeft
    };
    }
  }, [dispatch, hasUsedDrag]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!state.isDragging || !containerRef.current || shouldUseAdaptiveLayout) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - dragStartRef.current.x) * 1.5;
    const newScrollLeft = Math.max(0, dragStartRef.current.scrollLeft - walk);
    containerRef.current.scrollLeft = newScrollLeft;
    dispatch({ type: 'SET_SCROLL_POSITION', payload: newScrollLeft });
  }, [state.isDragging, dispatch, shouldUseAdaptiveLayout]);

  const handleMouseUp = useCallback(() => {
    dispatch({ type: 'SET_DRAGGING', payload: false });
  }, [dispatch]);

  // Handle scroll with debouncing for performance (disabled for adaptive layout)
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement> | WheelEvent | TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;

    // Mettre à jour la position de scroll
    const newPosition = container.scrollLeft;
    if (newPosition !== state.scrollPosition) {
      dispatch({ type: 'SET_SCROLL_POSITION', payload: newPosition });
      
      // Si on a scrollé horizontalement, marquer comme utilisé
      if (newPosition > 0 && !hasScrolledHorizontally) {
        setHasScrolledHorizontally(true);
      }
    }
  }, [state.scrollPosition, dispatch, hasScrolledHorizontally]);

  // Gérer le scroll avec la molette/pad
  const handleWheel = useCallback((e: WheelEvent) => {
    const container = containerRef.current;
    if (!container) return;

    // Si shift + scroll ou scroll horizontal natif
    if (e.deltaX !== 0 || e.shiftKey) {
      container.scrollLeft += e.deltaX || e.deltaY;
      if (container.scrollLeft > 0 && !hasScrolledHorizontally) {
        setHasScrolledHorizontally(true);
      }
      e.preventDefault();
    }
  }, [hasScrolledHorizontally]);

  // Gérer le scroll tactile et pad
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouch = (e: TouchEvent) => {
      if (container.scrollLeft > 0 && !hasScrolledHorizontally) {
        setHasScrolledHorizontally(true);
      }
    };

    container.addEventListener('touchmove', handleTouch, { passive: true });
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('touchmove', handleTouch);
      container.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel, hasScrolledHorizontally]);


  const selectedScandal = state.selectedScandalId 
    ? filteredScandals.find(s => s.id === state.selectedScandalId) 
    : null;

  // Vérifie si des filtres sont actifs
  const hasActiveFilters = useMemo(() => {
    return state.filters.types.length > 0 || 
           state.filters.parties.length > 0 || 
           state.filters.personalities.length > 0;
  }, [state.filters]);

  return (
    <div className="flex flex-col h-full">
      {/* Main Header */}
      {!state.contextualFilter ? (
        <div className="texture-overlay bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 md:py-4 py-2 border-b border-gray-700">
          {/* Desktop version - show full header */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-xl font-bold">
                  Skandal : Timeline globale des données
                </h1>
                <span className="text-sm text-gray-300">
                  25 années d'ffaires et de controverses du paysage politique français
                </span>
              </div>
            </div>
          </div>
          
          {/* Mobile version - show only "Skandal" centered */}
          <div className="md:hidden flex items-center justify-center">
            <h1 className="text-xl font-bold">
              Skandal
            </h1>
          </div>
        </div>
      ) : (
        <ContextualHeader
          contextualFilter={state.contextualFilter}
          filteredCount={filteredScandals.length}
          totalMoney={stats.totalMoney}
          filteredScandals={filteredScandals}
          onBack={handleBackToMain}
          shouldUseAdaptiveLayout={shouldUseAdaptiveLayout}
          startYear={startYear}
          endYear={endYear}
          containerRef={containerRef}
        />
      )}

      {/* Dynamic Stats Bar */}
      <DynamicStatsBar 
        visibleScandals={cumulativeScandals}
        totalScandals={filteredScandals.length}
        scrollProgress={scrollProgress}
        startYear={startYear}
        endYear={endYear}
        scrollPosition={state.scrollPosition}
        viewportWidth={state.viewportWidth}
        timelineWidth={timelineWidth}
        onScrollChange={(newPosition) => {
          if (containerRef.current) {
            containerRef.current.scrollLeft = newPosition;
            dispatch({ type: 'SET_SCROLL_POSITION', payload: newPosition });
          }
        }}
        onDragClick={() => setHasUsedDrag(true)}
        isVisible={!state.showFilters && !state.showStats}
      />

      <div className="flex flex-1 overflow-hidden relative">
          <div 
            className={`timeline-controls ${state.showFilters ? 'filters-open' : ''} ${state.showStats ? 'stats-open' : ''} fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-12 md:mb-0`} 
            style={{ zIndex: 50 }}
          >
                {/* Container principal */}
                <div 
                  className="flex items-center px-3 py-2 rounded-full shadow-lg bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-200 hover:scale-105 hover:shadow-2xl relative"
                  style={{ transformOrigin: 'center' }}
                >

                    {/* Groupe de zoom - masqué sur mobile */}
                    {!isMobile && (
                      <>
                        <div className="flex items-center">
                            <button
                              onClick={handleZoomOut}
                              className="w-10 h-10 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 active:bg-black/30 disabled:opacity-50 disabled:hover:bg-black/10 transition-all"
                              title="Dézoomer"
                              disabled={state.zoomLevel <= 1}
                            >
                              <ZoomOut className="w-6 h-6 text-white" />
                            </button>
                            
                            <span className="w-12 text-center text-sm font-bold text-white">
                                {Math.round((state.zoomLevel / 15) * 100)}%
                            </span>
                            
                            <button
                              onClick={handleZoomIn}
                              className="w-10 h-10 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 active:bg-black/30 disabled:opacity-50 disabled:hover:bg-black/10 transition-all"
                              title="Zoomer"
                              disabled={state.zoomLevel >= 500}
                            >
                              <ZoomIn className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Séparateur invisible pour l'espacement */}
                        <div className="w-[25px]"></div>
                      </>
                    )}
                    
                    {/* Groupe des boutons filtres et stats */}
                    <div className="flex items-center">
                        <button
                          onClick={() => dispatch({ type: 'TOGGLE_FILTERS' })}
                          className={`w-10 h-10 rounded-full flex items-center justify-center relative transition-all group ${
                            state.showFilters 
                              ? 'bg-black/30 ring-2 ring-white/50' 
                              : 'bg-black/10 hover:bg-black/20 active:bg-black/30'
                          }`}
                          title="Filtres"
                        >
                          <Filter className={`w-6 h-6 text-white transition-transform ${state.showFilters ? 'scale-110' : ''}`} />
                          {hasActiveFilters && (
                            <>
                              {/* Pastille avec le nombre de filtres */}
                              <div className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-red-500 rounded-full ring-2 ring-violet-500 animate-pulse flex items-center justify-center">
                                <span className="text-xs font-bold text-white">
                                  {state.filters.types.length + state.filters.parties.length + state.filters.personalities.length}
                                </span>
                              </div>
                              
                              {/* Tooltip qui liste les filtres */}
                              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-[300px] bg-gradient-to-br from-gray-900 to-gray-800 text-white text-xs rounded-xl py-3 px-4 hidden group-hover:block z-50 shadow-xl border border-gray-700/50 backdrop-blur-sm transform origin-bottom scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900 to-gray-800 rotate-45 border-r border-b border-gray-700/50"></div>
                                <div className="space-y-2">
                                  {state.filters.types.length > 0 && (
                                    <div className="flex items-center gap-2">
                                      <FileText className="w-3 h-3 text-violet-400" />
                                      <span className="font-semibold text-violet-400">Types :</span>
                                      <span className="text-gray-300">{state.filters.types.map(type => getCategoryLabel(type)).join(', ')}</span>
                                    </div>
                                  )}
                                  {state.filters.parties.length > 0 && (
                                    <div className="flex items-center gap-2">
                                      <Building2 className="w-3 h-3 text-blue-400" />
                                      <span className="font-semibold text-blue-400">Partis :</span>
                                      <span className="text-gray-300">{state.filters.parties.join(', ')}</span>
                                    </div>
                                  )}
                                  {state.filters.personalities.length > 0 && (
                                    <div className="flex items-center gap-2">
                                      <Users className="w-3 h-3 text-pink-400" />
                                      <span className="font-semibold text-pink-400">Personnalités :</span>
                                      <span className="text-gray-300">{state.filters.personalities.join(', ')}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                        
                        {/* Button to open contextual timelines panel - le bouton central de l'app */}
                        <button
                          onClick={() => setShowContextualPanel(true)}
                          className={`sk-central-button ml-2 flex items-center justify-center ${
                            state.contextualFilter
                              ? 'ring-2 ring-violet-500/60 animate-pulse' 
                              : ''
                          }`}
                          title="Timelines contextualisées"
                        >
                          <div className="flex items-center justify-center relative">
                            <span className="text-white font-bold text-lg tracking-tight drop-shadow-sm">Sk</span>
                            {/* Petit point décoratif pour rendre l'icône plus distinctive */}
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-violet-400 rounded-full opacity-80"></div>
                          </div>
                        </button>
                        
                        <button
                          onClick={() => dispatch({ type: 'TOGGLE_STATS' })}
                          className={`w-10 h-10 ml-1 rounded-full flex items-center justify-center transition-all ${
                            state.showStats 
                              ? 'bg-black/30 ring-2 ring-white/50' 
                              : 'bg-black/10 hover:bg-black/20 active:bg-black/30'
                          }`}
                          title="Statistiques"
                        >
                          <BarChart3 className={`w-6 h-6 text-white transition-transform ${state.showStats ? 'scale-110' : ''}`} />
                        </button>
                        
                        {/* Button to switch between cards and points mode by adjusting zoom - masqué sur mobile */}
                        {!isMobile && (
                          <button
                            onClick={() => {
                              if (state.displayMode === 'points') {
                                // Switch to cards mode: zoom in to 100% (default zoom level)
                                dispatch({ type: 'SET_ZOOM', payload: 15 });
                              } else {
                                // Switch to points mode: zoom out to 30% of default
                                dispatch({ type: 'SET_ZOOM', payload: 4.5 });
                              }
                            }}
                            className={`w-10 h-10 ml-1 rounded-full flex items-center justify-center transition-all ${
                              state.displayMode === 'points'
                                ? 'bg-green-500/30 ring-2 ring-green-500/50' 
                                : 'bg-black/10 hover:bg-black/20 active:bg-black/30'
                            }`}
                            title={`Passer au mode ${state.displayMode === 'points' ? 'cartes' : 'points'}`}
                          >
                            <div className={`w-3 h-3 rounded-full ${state.displayMode === 'points' ? 'bg-green-400' : 'bg-white'}`} />
                          </button>
                        )}
                    </div>
                </div>
          </div>

          {/* Tooltip d'aide pour le drag */}
          {showDragHelp && (
            <div 
              className="absolute text-xs top-1 px-4 py-1 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm rounded-xl shadow-xl text-white font-medium z-[49] border border-white/20 whitespace-nowrap pointer-events-none animate-bounce-subtle"
              style={{
                left: `${(state.scrollPosition + state.viewportWidth / 2) / timelineWidth * 100}%`,
                transform: 'translateX(-50%)'
              }}
            >
              <div className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                  Glissez-moi pour un voyage éclair !
                </span>
              </div>
            </div>
          )}

        {/* Filters Panel */}
        <AnimatePresence>
          {state.showFilters && (
            <FilterPanel
              filters={state.filters}
              onFiltersChange={(filters) => dispatch({ type: 'SET_FILTERS', payload: filters })}
              scandals={contextuallyFilteredScandals}
              onClose={() => dispatch({ type: 'TOGGLE_FILTERS' })}
              contextualFilter={state.contextualFilter}
            />
          )}
        </AnimatePresence>

        {/* Main Timeline */}
        <div className="flex-1 flex flex-col min-w-0 relative h-full">
          {/* Timeline Container */}
          <div
            ref={containerRef}
            className={`relative flex-1 overflow-x-auto overflow-y-scroll ${
              state.isTransitioning ? 'opacity-0' : 'opacity-100'
            } transition-opacity duration-150`}
            style={{
              height: '100%',
              cursor: state.isDragging ? 'grabbing' : 'grab',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onScroll={handleScroll}
          >
            <div 
              className="relative timeline-container"
              style={{ 
                width: timelineWidth,
                minHeight: '800px',
                paddingBottom: '100px'
              }}
            >
              {/* Afficher PersonalityHint pour les timelines contextuelles, ScrollHint pour la timeline générale */}
              {state.contextualFilter && state.contextualFilter.type === 'personality' ? (
                <PersonalityHint 
                  contextualFilter={state.contextualFilter}
                  scrollPosition={state.scrollPosition} 
                />
              ) : (
                <ScrollHint scrollPosition={state.scrollPosition} />
              )}
              <TimelineGrid timelineWidth={timelineWidth} />
              {/* Timeline background with grid */}
              <div 
                className="absolute inset-0"
                style={{ width: timelineWidth }}
              >
                {/* Current year background */}
                <CurrentYearDisplay
                  startYear={startYear}
                  endYear={endYear}
                  timelineWidth={timelineWidth}
                  scrollPosition={state.scrollPosition}
                  viewportWidth={state.viewportWidth}
                  displayMode={state.displayMode}
                />

                <TimelineAxis
                  startYear={startYear}
                  endYear={endYear}
                  timelineWidth={timelineWidth}
                  zoomLevel={state.zoomLevel}
                  timelineY={TIMELINE_Y}
                  scrollPosition={state.scrollPosition}
                  viewportWidth={state.viewportWidth}
                  displayMode={state.displayMode}
                />
              </div>



              {/* Scandal Cards or Points based on display mode */}
              {state.displayMode === 'cards' ? (
                // Render cards in normal mode
                visibleScandalPositions.map((position) => {
                  const scandal = filteredScandals.find(s => s.id === position.id);
                  if (!scandal) return null;
                  
                  return (
                    <ScandalCard
                      key={scandal.id}
                      scandal={scandal}
                      onClick={() => dispatch({ type: 'SELECT_SCANDAL', payload: scandal.id })}
                      isSelected={state.selectedScandalId === scandal.id}
                      position={position}
                      timelineY={TIMELINE_Y}
                      allScandals={scandals}
                    />
                  );
                })
              ) : (
                // Render points in zoomed out mode
                scandalPointPositions.map((position) => {
                  const scandal = filteredScandals.find(s => s.id === position.id);
                  if (!scandal) return null;
                  
                  return (
                    <ScandalPoint
                      key={scandal.id}
                      scandal={scandal}
                      onClick={() => dispatch({ type: 'SELECT_SCANDAL', payload: scandal.id })}
                      isSelected={state.selectedScandalId === scandal.id}
                      position={position}
                    />
                  );
                })
              )}

              {/* No scandals message */}
              {filteredScandals.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <p className="text-lg font-medium mb-2">Aucune affaire trouvée</p>
                    <p className="text-sm">Essayez de modifier vos filtres</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Panel */}
        <AnimatePresence>
        {state.showStats && (
          <StatsPanel
            stats={stats}
            scandals={filteredScandals}
            onClose={() => dispatch({ type: 'TOGGLE_STATS' })}
          />
        )}
        </AnimatePresence>
      </div>

      {/* Scandal Details Modal */}
      {selectedScandal && (
        <ScandalDetails
          scandal={selectedScandal}
          onClose={() => dispatch({ type: 'SELECT_SCANDAL', payload: null })}
        />
      )}

      {/* Contextual Timeline Panel */}
      <ContextualTimelinePanel
        isOpen={showContextualPanel}
        onClose={() => setShowContextualPanel(false)}
        scandals={scandals}
        onSelectTimeline={handleSelectContextualTimeline}
      />
    </div>
  );
};

export default Timeline;