import React from 'react';
import { ArrowLeft, Users, Building, Scale, FileText, ZoomIn, ZoomOut, Filter, BarChart3, RotateCcw } from 'lucide-react';
import { ContextualFilter } from '../types/scandal';
import { getContextualTitle, getContextualDescription } from '../utils/contextualFilters';
import ShareTimeline from './ShareTimeline';
import { useTimeline } from '../contexts/TimelineContext';
import { calculateTimelineWidth } from '../utils/timelineLayout';

interface ContextualHeaderProps {
  contextualFilter: ContextualFilter;
  filteredCount: number;
  totalMoney: number;
  filteredScandals: any[];
  onBack: () => void;
  shouldUseAdaptiveLayout: boolean;
  startYear: number;
  endYear: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ContextualHeader: React.FC<ContextualHeaderProps> = ({
  contextualFilter,
  filteredCount,
  totalMoney,
  filteredScandals,
  onBack,
  shouldUseAdaptiveLayout,
  startYear,
  endYear,
  containerRef
}) => {
  const { state, dispatch } = useTimeline();

  // Format zoom level for display
  const formatZoomLevel = (zoom: number): string => {
    // Normalize zoom level: 15 = 100%, 1 = 6.67%, 30 = 200%
    const normalizedZoom = (zoom / 15) * 100;
    return `${Math.round(normalizedZoom)}%`;
  };

  // Zoom handlers (copied from Timeline.tsx)
  const handleZoomIn = React.useCallback(() => {
    if (state.zoomLevel >= 300 || shouldUseAdaptiveLayout) return;
    
    const container = containerRef.current;
    if (!container) return;

    const currentCenter = state.scrollPosition + state.viewportWidth / 2;
    const timelineWidth = calculateTimelineWidth(startYear, endYear, state.zoomLevel);
    const currentCenterRatio = currentCenter / timelineWidth;
    
    const zoomFactor = state.zoomLevel < 15 ? 1.5 : state.zoomLevel < 75 ? 1.4 : 1.3;
    const newZoomLevel = Math.min(300, state.zoomLevel * zoomFactor);
    dispatch({ type: 'SET_ZOOM', payload: newZoomLevel });
    
    setTimeout(() => {
      if (container) {
        const newTimelineWidth = calculateTimelineWidth(startYear, endYear, newZoomLevel);
        const newCenter = currentCenterRatio * newTimelineWidth;
        const newScrollLeft = newCenter - state.viewportWidth / 2;
        container.scrollLeft = Math.max(0, newScrollLeft);
        dispatch({ type: 'SET_SCROLL_POSITION', payload: container.scrollLeft });
      }
    }, 0);
  }, [dispatch, state.zoomLevel, state.scrollPosition, state.viewportWidth, startYear, endYear, shouldUseAdaptiveLayout, containerRef]);

  const handleZoomOut = React.useCallback(() => {
    if (state.zoomLevel <= 1.5 || shouldUseAdaptiveLayout) return;
    
    const container = containerRef.current;
    if (!container) return;

    const currentCenter = state.scrollPosition + state.viewportWidth / 2;
    const timelineWidth = calculateTimelineWidth(startYear, endYear, state.zoomLevel);
    const currentCenterRatio = currentCenter / timelineWidth;
    
    const zoomFactor = state.zoomLevel > 75 ? 1.3 : state.zoomLevel > 15 ? 1.4 : 1.5;
    const newZoomLevel = Math.max(1.5, state.zoomLevel / zoomFactor);
    dispatch({ type: 'SET_ZOOM', payload: newZoomLevel });
    
    setTimeout(() => {
      if (container) {
        const newTimelineWidth = calculateTimelineWidth(startYear, endYear, newZoomLevel);
        const newCenter = currentCenterRatio * newTimelineWidth;
        const newScrollLeft = newCenter - state.viewportWidth / 2;
        container.scrollLeft = Math.max(0, newScrollLeft);
        dispatch({ type: 'SET_SCROLL_POSITION', payload: container.scrollLeft });
      }
    }, 0);
  }, [dispatch, state.zoomLevel, state.scrollPosition, state.viewportWidth, startYear, endYear, shouldUseAdaptiveLayout, containerRef]);

  const handleResetZoom = React.useCallback(() => {
    if (shouldUseAdaptiveLayout) return;
    
    const container = containerRef.current;
    if (!container) return;

    const currentCenter = state.scrollPosition + state.viewportWidth / 2;
    const timelineWidth = calculateTimelineWidth(startYear, endYear, state.zoomLevel);
    const currentCenterRatio = currentCenter / timelineWidth;
    
    dispatch({ type: 'SET_ZOOM', payload: 15 });
    
    setTimeout(() => {
      if (container) {
        const newTimelineWidth = calculateTimelineWidth(startYear, endYear, 15);
        const newCenter = currentCenterRatio * newTimelineWidth;
        const newScrollLeft = newCenter - state.viewportWidth / 2;
        container.scrollLeft = Math.max(0, newScrollLeft);
        dispatch({ type: 'SET_SCROLL_POSITION', payload: container.scrollLeft });
      }
    }, 0);
  }, [dispatch, state.scrollPosition, state.viewportWidth, startYear, endYear, shouldUseAdaptiveLayout, containerRef]);

  const getIcon = () => {
    switch (contextualFilter.type) {
      case 'personality':
        return <Users className="w-6 h-6" />;
      case 'party':
        return <Building className="w-6 h-6" />;
      case 'status':
        return <Scale className="w-6 h-6" />;
      case 'scandalType':
        return <FileText className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  const getColorClasses = () => {
    switch (contextualFilter.type) {
      case 'personality':
        return 'bg-slate-600 text-white';
      case 'party':
        return 'bg-slate-700 text-white';
      case 'status':
        return 'bg-slate-500 text-white';
      case 'scandalType':
        return 'bg-slate-800 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 border-b border-gray-700">
      <div className="flex items-center justify-between">
        {/* Left section - Back button and context info */}
      <div className="flex items-center gap-4">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium">Retour</span>
        </button>

        {/* Separator */}
        <div className="w-px h-8 bg-white/20" />

        {/* Context info */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${getColorClasses()}`}>
            {getIcon()}
          </div>
          
          <div>
            <h1 className="text-xl font-bold">
              {getContextualTitle(contextualFilter)}
            </h1>
            <p className="text-sm text-gray-300">
              {getContextualDescription(contextualFilter, filteredCount)} • {totalMoney.toLocaleString('fr-FR')}€ concernés
            </p>
          </div>
          </div>
        </div>

        {/* Right section - Control buttons */}
        <div className="flex items-center gap-3">
          {/* Share button */}
          <ShareTimeline 
            scandals={filteredScandals}
            contextualFilter={contextualFilter}
          />
          
          {/* Zoom controls - only show for scrollable timelines */}
          {!shouldUseAdaptiveLayout && (
            <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-md hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Dézoomer"
                disabled={state.zoomLevel <= 1.5}
              >
                <ZoomOut className="w-4 h-4 text-white" />
              </button>
              
              <button
                onClick={handleResetZoom}
                className="px-3 py-2 text-sm text-gray-300 min-w-[4rem] text-center hover:bg-white/20 rounded-md transition-colors"
                title="Réinitialiser le zoom (100%)"
              >
                {formatZoomLevel(state.zoomLevel)}
              </button>
              
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-md hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Zoomer"
                disabled={state.zoomLevel >= 300}
              >
                <ZoomIn className="w-4 h-4 text-white" />
              </button>
            </div>
          )}
          
          <button
            onClick={() => dispatch({ type: 'TOGGLE_FILTERS' })}
            className={`p-2 rounded-lg transition-colors ${
              state.showFilters 
                ? 'bg-blue-500 text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
            title="Filtres"
          >
            <Filter className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => dispatch({ type: 'TOGGLE_STATS' })}
            className={`p-2 rounded-lg transition-colors ${
              state.showStats 
                ? 'bg-green-500 text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
            title="Statistiques"
          >
            <BarChart3 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContextualHeader;