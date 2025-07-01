import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import { ZoomIn, ZoomOut, Filter, BarChart3, RotateCcw, HelpCircle } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { Scandal } from '../types/scandal';
import { filterScandals, calculateStats } from '../utils/scandalUtils';
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
  calculateCurrentYear
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
import OnboardingTour from './modals/OnboardingTour';

interface TimelineProps {
  scandals: Scandal[];
}

const Timeline: React.FC<TimelineProps> = ({ scandals }) => {
  const { state, dispatch } = useTimeline();
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const scrollTimeoutRef = useRef<number>();
  const initialScrollDoneRef = useRef(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

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
    if (shouldUseAdaptiveLayout || timelineWidth <= state.viewportWidth) return 1;
    return Math.min(1, (state.scrollPosition + state.viewportWidth) / timelineWidth);
  }, [state.scrollPosition, state.viewportWidth, timelineWidth, shouldUseAdaptiveLayout]);

  // Handle contextual filter changes with transition
  const handleContextualFilterChange = useCallback((filter: any) => {
    dispatch({ type: 'SET_TRANSITIONING', payload: true });
    
    setTimeout(() => {
      dispatch({ type: 'SET_CONTEXTUAL_FILTER', payload: filter });
      dispatch({ type: 'SET_TRANSITIONING', payload: false });
      
      // Reset scroll position when switching contexts
      if (containerRef.current) {
        containerRef.current.scrollLeft = 0;
        dispatch({ type: 'SET_SCROLL_POSITION', payload: 0 });
      }
    }, 150);
  }, [dispatch]);

  // Handle back to main timeline
  const handleBackToMain = useCallback(() => {
    dispatch({ type: 'SET_TRANSITIONING', payload: true });
    
    setTimeout(() => {
      dispatch({ type: 'SET_CONTEXTUAL_FILTER', payload: null });
      dispatch({ type: 'SET_TRANSITIONING', payload: false });
      
      // Reset scroll position when returning to main
      if (containerRef.current) {
        containerRef.current.scrollLeft = 0;
        dispatch({ type: 'SET_SCROLL_POSITION', payload: 0 });
      }
    }, 150);
  }, [dispatch]);

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

  // Gestion de l'onboarding
  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
  };

  useEffect(() => {
    // Check if it's the first visit
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  return (
    <div className="flex flex-col h-full relative">
      {/* Header with controls */}
      {!state.contextualFilter ? (
        <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              ScandalList : La bibliothèque aux scandales
            </h1>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Affaires et controverses du paysage politique français
            </span>
          </div>
          
          {/* Share button */}
          <ShareTimeline 
            scandals={filteredScandals}
            contextualFilter={state.contextualFilter}
            data-tour="share"
          />
        </header>
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

      {/* Dynamic Stats Bar - Only show for scrollable timelines */}
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
        />

      {/* Timeline years */}
      <div className="absolute left-2 opacity-50 right-4 flex justify-between font-bold text-sm text-gray-500 dark:text-gray-400" style={{ top: '130px', marginTop: '2px' }}>
        <span>{startYear}</span>
        <span>{endYear}</span>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Timeline Controls - Hide when only one scandal */}
        {filteredScandals.length > 1 && (
          <div className={`timeline-controls ${showOnboarding ? 'tour-highlight' : ''} ${
            state.showFilters ? 'filters-open' : ''
          } ${state.showStats ? 'stats-open' : ''}`} style={{ zIndex: 99 }}>
            {/* Zoom controls - only show for scrollable timelines */}
            {!shouldUseAdaptiveLayout && (
              <>
                <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg px-0.5">
                <button
                  onClick={handleZoomOut}
                    className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Dézoomer"
                    disabled={state.zoomLevel <= 5}
                >
                  <ZoomOut className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                
                <button
                  onClick={handleResetZoom}
                    className="px-2 py-1.5 min-w-[3.5rem] text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors"
                >
                    {Math.round((state.zoomLevel / 15) * 100)}%
                </button>
                
                <button
                  onClick={handleZoomIn}
                    className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Zoomer"
                  disabled={state.zoomLevel >= 300}
                >
                  <ZoomIn className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
                <div className="w-px h-6 bg-gray-200 dark:bg-gray-600 self-center mx-1"></div>
              </>
            )}
            
            <button
              onClick={() => dispatch({ type: 'TOGGLE_FILTERS' })}
              data-tour="filters"
              className={`p-2 rounded-lg transition-colors relative ${
                state.showFilters 
                  ? 'bg-blue-500 text-white dark:bg-blue-600' 
                  : 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800'
              }`}
              title="Filtres"
            >
              <Filter className="w-5 h-5" />
              {hasActiveFilters && !state.showFilters && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></div>
              )}
            </button>
            
            <button
              onClick={() => dispatch({ type: 'TOGGLE_STATS' })}
              data-tour="stats"
              className={`p-2 rounded-lg transition-colors ${
                state.showStats 
                  ? 'bg-green-500 text-white dark:bg-green-600' 
                  : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800'
              }`}
              title="Statistiques"
            >
              <BarChart3 className="w-5 h-5" />
            </button>

            <div className="w-px h-6 bg-gray-200 dark:bg-gray-600 self-center mx-1"></div>
            
            <button
              onClick={() => setShowOnboarding(true)}
              className="p-2 rounded-lg transition-colors bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800"
              title="Aide"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
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
            />
          )}
        </AnimatePresence>

        {/* Main Timeline */}
        <div className="flex-1 flex flex-col min-w-0 relative h-full">
          {/* Timeline Container */}
          <div
            ref={containerRef}
            className={`flex-1 h-full transition-all duration-300 overflow-auto ${state.isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${state.isTransitioning ? 'pointer-events-none' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onScroll={handleScroll}
          >
            <div 
              className={`relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300 timeline-grid-bg timeline-container ${
                state.isTransitioning ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
              }`}
              style={{ 
                width: timelineWidth, 
                height: '100vh',
                minHeight: '700px',
                paddingTop: '60px',
                paddingBottom: '100px'
              }}
            >
              {/* Timeline background with grid */}
              <div 
                className="absolute inset-0"
                style={{ width: timelineWidth }}
              >
                {/* Current year background */}
                <div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                  style={{
                    left: state.scrollPosition,
                    width: state.viewportWidth,
                    transition: 'left 150ms ease'
                  }}
                >
                  <span className="text-[20rem] font-bold text-gray-100 dark:text-gray-800/50 opacity-80">
                    {calculateCurrentYear(
                      state.scrollPosition,
                      state.viewportWidth,
                      timelineWidth,
                      startYear,
                      endYear
                    )}
                  </span>
                </div>

                <TimelineAxis
                  startYear={startYear}
                  endYear={endYear}
                  timelineWidth={timelineWidth}
                  zoomLevel={state.zoomLevel}
                  timelineY={TIMELINE_Y}
                  data-tour="timeline-axis"
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

      {/* Onboarding Tour */}
      {showOnboarding && <OnboardingTour onComplete={handleOnboardingComplete} />}
    </div>
  );
};

export default Timeline;