import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import { ZoomIn, ZoomOut, Filter, BarChart3, FileText, Building2, Users } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Scandal } from '../types/scandal';
import { filterScandals, calculateStats, getCategoryLabel } from '../utils/scandalUtils';
import { filterTimelineBy } from '../utils/contextualFilters';
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
  findNearestYearMarker
} from '../utils/timelineLayout';
import { useTimeline } from '../contexts/TimelineContext';
import ScandalCard from './ScandalCard';
import TimelineAxis from './TimelineAxis';
import TimelineGaps from './TimelineGaps';
import FilterPanel from './FilterPanel';
import StatsPanel from './StatsPanel';
import ScandalDetails from './ScandalDetails';
import DynamicStatsBar from './DynamicStatsBar';
import ContextualHeader from './ContextualHeader';
import ShareTimeline from './ShareTimeline';

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
  const [showDragHelp, setShowDragHelp] = useState(false);
  const dragHelpTimeoutRef = useRef<NodeJS.Timeout>();

  // Afficher la tooltip d'aide après la fermeture du SplashScreen
  useEffect(() => {
    if (!splashClosedTime) return;

    console.log('⌚ SplashScreen fermé à:', new Date(splashClosedTime).toLocaleTimeString());
    console.log('🚀 Début du compte à rebours pour la tooltip (12s)');
    
    // On attend 12 secondes après la fermeture du SplashScreen
    dragHelpTimeoutRef.current = setTimeout(() => {
      console.log('⏰ 12 secondes écoulées - Affichage de la tooltip');
      setShowDragHelp(true);
      // On cache la tooltip après 4 secondes
      setTimeout(() => {
        console.log('🔚 4 secondes écoulées - Masquage de la tooltip');
        setShowDragHelp(false);
      }, 4000);
    }, 12000);

    return () => {
      if (dragHelpTimeoutRef.current) {
        console.log('♻️ Nettoyage des timeouts de la tooltip');
        clearTimeout(dragHelpTimeoutRef.current);
      }
    };
  }, [splashClosedTime]); // On réagit au changement de splashClosedTime

  // Effet pour logger les changements d'état de la tooltip
  useEffect(() => {
    console.log('🔄 État de la tooltip:', showDragHelp ? 'visible' : 'cachée');
  }, [showDragHelp]);

  // Scroll to top when timeline opens
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [scandals, state.contextualFilter]); // Déclencher quand les scandales changent ou quand on change de contexte

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
  
  // Determine if we need adaptive layout
  const shouldUseAdaptiveLayout = false;
  
  // Calculate timeline dimensions based on adaptive behavior
  const { timelineWidth, gaps, scandalPositions } = useMemo(() => {
    if (shouldUseAdaptiveLayout) {
      // Single affair or no affairs - use optimized layout
      const { width, gaps } = calculateOptimizedTimelineWidth(filteredScandals, startYear, endYear, state.zoomLevel);
      const positions = calculateOptimizedScandalPositions(filteredScandals, gaps);
      return { timelineWidth: width, gaps, scandalPositions: positions };
    } else {
      // Multiple affairs - use standard layout
      const width = calculateTimelineWidth(startYear, endYear, state.zoomLevel);
      const positions = calculateScandalPositions(filteredScandals, startYear, endYear, width);
      return { timelineWidth: width, gaps: [], scandalPositions: positions };
    }
  }, [filteredScandals, startYear, endYear, state.zoomLevel, shouldUseAdaptiveLayout]);

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

  // Handle contextual filter changes with transition
  const handleContextualFilterChange = useCallback((filter: any) => {
    dispatch({ type: 'SET_TRANSITIONING', payload: true });
    
    setTimeout(() => {
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
      
      // Calculate positions with new date range
      const width = calculateTimelineWidth(start, end, state.zoomLevel);
      const positions = calculateScandalPositions(filteredContextScandals, start, end, width);
      
      // Get the last scandal's position
      if (positions.length > 0 && containerRef.current) {
        const lastPosition = positions[positions.length - 1];
        const viewportWidth = containerRef.current.clientWidth;
        
        // Calculate scroll position to center the last scandal
        const newScrollPosition = Math.max(0, lastPosition.x - (viewportWidth / 2));
        
        containerRef.current.scrollLeft = newScrollPosition;
        dispatch({ type: 'SET_SCROLL_POSITION', payload: newScrollPosition });
      }
    }, 150);
  }, [dispatch, scandals, state.filters, state.zoomLevel]);

  // Handle back to main timeline
  const handleBackToMain = useCallback(() => {
    dispatch({ type: 'SET_TRANSITIONING', payload: true });
    setTimeout(() => {
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
      
      // Reset scroll position when returning to main
      if (containerRef.current) {
        containerRef.current.scrollLeft = 0;
        dispatch({ type: 'SET_SCROLL_POSITION', payload: 0 });
      }
      window.location.replace('/');
    }, 150);
  }, [dispatch, scandals, state.filters]);

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

  // Initial scroll to last scandal
  useEffect(() => {
    if (!initialScrollDoneRef.current && containerRef.current && scandalPositions.length > 0) {
      const lastPosition = scandalPositions[scandalPositions.length - 1];
      const viewportWidth = containerRef.current.clientWidth;
      
      // Calculate scroll position to center the last scandal
      const newScrollPosition = Math.max(0, lastPosition.x - (viewportWidth / 2));
      
      containerRef.current.scrollLeft = newScrollPosition;
      dispatch({ type: 'SET_SCROLL_POSITION', payload: newScrollPosition });
      initialScrollDoneRef.current = true;
    }
  }, [scandalPositions, dispatch]);

  // Handle zoom with center preservation (disabled for adaptive layout)
  const handleZoomIn = useCallback(() => {
    if (state.zoomLevel >= 300 || shouldUseAdaptiveLayout) return;
    
    const container = containerRef.current;
    if (!container) return;

    const currentCenter = state.scrollPosition + state.viewportWidth / 2;
    const currentCenterRatio = currentCenter / timelineWidth;
    
    // Facteur de zoom plus agressif pour permettre un zoom plus fin
    const zoomFactor = state.zoomLevel < 15 ? 1.5 : state.zoomLevel < 75 ? 1.4 : 1.3;
    const newZoomLevel = Math.min(300, state.zoomLevel * zoomFactor);
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
    if (state.zoomLevel <= 1.5 || shouldUseAdaptiveLayout) return;
    
    const container = containerRef.current;
    if (!container) return;

    const currentCenter = state.scrollPosition + state.viewportWidth / 2;
    const currentCenterRatio = currentCenter / timelineWidth;
    
    // Facteur de dézoom plus agressif
    const zoomFactor = state.zoomLevel > 75 ? 1.3 : state.zoomLevel > 15 ? 1.4 : 1.5;
    const newZoomLevel = Math.max(1.5, state.zoomLevel / zoomFactor);
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

  // Handle mouse drag (disabled for adaptive layout)
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (shouldUseAdaptiveLayout) return;
    
    dispatch({ type: 'SET_DRAGGING', payload: true });
    dragStartRef.current = {
      x: e.pageX,
      scrollLeft: containerRef.current?.scrollLeft || 0
    };
  }, [dispatch, shouldUseAdaptiveLayout]);

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
  const handleScroll = useCallback(() => {
    if (containerRef.current && !state.isDragging && !shouldUseAdaptiveLayout) {
      const scrollLeft = containerRef.current.scrollLeft;
      
      // Empêcher le scroll forcé à droite en mode contextuel
      if (state.contextualFilter) {
      dispatch({ type: 'SET_SCROLL_POSITION', payload: scrollLeft });
        return;
      }
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Debounce scroll updates for better performance
      scrollTimeoutRef.current = setTimeout(() => {
        dispatch({ type: 'SET_SCROLL_POSITION', payload: scrollLeft });
      }, 16); // ~60fps
    }
  }, [dispatch, state.isDragging, shouldUseAdaptiveLayout, state.contextualFilter]);

  // Format zoom level for display
  const formatZoomLevel = (zoom: number): string => {
    // Normalize zoom level: 15 = 100%, 1 = 6.67%, 30 = 200%
    const normalizedZoom = (zoom / 15) * 100;
    return `${Math.round(normalizedZoom)}%`;
  };

  const selectedScandal = state.selectedScandalId 
    ? filteredScandals.find(s => s.id === state.selectedScandalId) 
    : null;

  // Scroll to latest scandal on initial load
  useEffect(() => {
    if (!initialScrollDoneRef.current && containerRef.current && scandalPositions.length > 0 && !shouldUseAdaptiveLayout) {
      // Get the latest scandal position
      const sortedPositions = [...scandalPositions].sort((a, b) => b.date.getTime() - a.date.getTime());
      const latestPosition = sortedPositions[0];
      
      // Ne pas scroller automatiquement si on est en mode contextuel
      if (state.contextualFilter) {
        containerRef.current.scrollLeft = 0;
        dispatch({ type: 'SET_SCROLL_POSITION', payload: 0 });
      } else {
      // Calculate scroll position to center the latest scandal
      const viewportWidth = containerRef.current.clientWidth;
      const targetScrollLeft = Math.max(0, latestPosition.x - (viewportWidth / 2) + (CARD_WIDTH / 2));
      
      // Smooth scroll to position
      containerRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
      
      // Update scroll position in state
      dispatch({ type: 'SET_SCROLL_POSITION', payload: targetScrollLeft });
      }
      
      // Mark initial scroll as done
      initialScrollDoneRef.current = true;
    }
  }, [scandalPositions, shouldUseAdaptiveLayout, dispatch, state.contextualFilter]);

  // Reset initial scroll flag when scandals change significantly
  useEffect(() => {
    initialScrollDoneRef.current = false;
  }, [state.filters, state.contextualFilter]);

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
        <div className="texture-overlay bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-xl font-bold">
                  Skandalz : Timeline globale des données
                </h1>
                <span className="text-sm text-gray-300">
                  25 années d'ffaires et de controverses du paysage politique français
                </span>
              </div>
            </div>
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
        splashClosedTime={splashClosedTime}
        onScrollChange={(newPosition) => {
          if (containerRef.current) {
            containerRef.current.scrollLeft = newPosition;
            dispatch({ type: 'SET_SCROLL_POSITION', payload: newPosition });
          }
        }}
      />

      <div className="flex flex-1 overflow-hidden relative">
          <div 
            className={`timeline-controls ${state.showFilters ? 'filters-open' : ''} ${state.showStats ? 'stats-open' : ''} fixed`} 
            style={{ zIndex: 50 }}
          >
                {/* Container principal */}
                <div 
                  className="flex items-center px-3 py-2 rounded-full shadow-lg bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-200 hover:scale-105 hover:shadow-2xl relative"
                  style={{ transformOrigin: 'center' }}
                >

                    {/* Groupe de zoom */}
                    <div className="flex items-center">
                        <button
                          onClick={handleZoomOut}
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 active:bg-black/30 disabled:opacity-50 disabled:hover:bg-black/10 transition-all"
                          title="Dézoomer"
                          disabled={state.zoomLevel <= 5}
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
                          disabled={state.zoomLevel >= 300}
                        >
                          <ZoomIn className="w-6 h-6 text-white" />
                        </button>
                    </div>

                    {/* Séparateur invisible pour l'espacement */}
                    <div className="w-[25px]"></div>
                    
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
                    </div>
                </div>
          </div>

          {/* Tooltip d'aide pour le drag */}
          <div 
            className="absolute top-2 px-4 py-3 bg-black/90 backdrop-blur-sm rounded-xl shadow-xl text-white text-sm font-medium z-[100] border border-white/10 whitespace-nowrap pointer-events-none"
            style={{
              left: `${(state.scrollPosition + state.viewportWidth / 2) / timelineWidth * 100}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div className="absolute -top-1 right-3/4 -translate-x-2/3 w-2 h-2 bg-black/90 rotate-45"></div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Glissez-moi pour sroller !
            </div>
          </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {state.showFilters && (
            <FilterPanel
              filters={state.filters}
              onFiltersChange={(filters) => dispatch({ type: 'SET_FILTERS', payload: filters })}
              scandals={contextuallyFilteredScandals}
              onClose={() => dispatch({ type: 'TOGGLE_FILTERS' })}
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
              <div className="timeline-grid-bg" />
              {/* Timeline background with grid */}
              <div 
                className="absolute inset-0"
                style={{ width: timelineWidth }}
              >
                {/* Current year background */}
                <div 
                  className="absolute flex items-center justify-center pointer-events-none select-none"
                  style={{
                    left: state.scrollPosition,
                    width: state.viewportWidth,
                    transition: 'left 150ms ease',
                    top: '-55px'  // Déplace l'année vers le haut
                  }}
                >
                  <span className="text-[9rem] font-bold bg-gradient-to-r from-violet-200 to-pink-200 dark:from-violet-900 dark:to-pink-900 bg-clip-text text-transparent">
                    {(() => {
                      const yearMarkers = generateYearMarkers(startYear, endYear, timelineWidth, 1);
                      return findNearestYearMarker(state.scrollPosition, state.viewportWidth, yearMarkers);
                    })()}
                  </span>
                </div>

                <TimelineAxis
                  startYear={startYear}
                  endYear={endYear}
                  timelineWidth={timelineWidth}
                  zoomLevel={state.zoomLevel}
                  timelineY={TIMELINE_Y}
                />
              </div>

              {/* Timeline Gaps */}
              {gaps.length > 0 && (
                <TimelineGaps
                  gaps={gaps}
                  timelineY={TIMELINE_Y}
                />
              )}

              {/* Scandal Cards */}
              {visibleScandalPositions.map((position) => {
                const scandal = filteredScandals.find(s => s.id === position.id);
                if (!scandal) return null;
                
                return (
                  <ScandalCard
                    
                    key={scandal.id}
                    scandal={scandal}
                    position={position}
                    timelineY={TIMELINE_Y}
                    onClick={() => dispatch({ type: 'SELECT_SCANDAL', payload: scandal.id })}
                    isSelected={state.selectedScandalId === scandal.id}
                  />
                );
              })}

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
    </div>
  );
};

export default Timeline;