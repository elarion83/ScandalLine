import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { FilterOptions, ContextualFilter } from '../types/scandal';
import { shareUtils } from '../utils/shareUtils';

export interface TimelineState {
  zoomLevel: number;
  scrollPosition: number;
  selectedScandalId: string | null;
  showFilters: boolean;
  showStats: boolean;
  filters: FilterOptions;
  viewportWidth: number;
  isDragging: boolean;
  contextualFilter: ContextualFilter | null;
  isTransitioning: boolean;
  displayMode: 'cards' | 'points'; // New display mode for zoomed out view
}

export type TimelineAction =
  | { type: 'SET_ZOOM'; payload: number }
  | { type: 'SET_SCROLL_POSITION'; payload: number }
  | { type: 'SELECT_SCANDAL'; payload: string | null }
  | { type: 'TOGGLE_FILTERS' }
  | { type: 'TOGGLE_STATS' }
  | { type: 'SET_FILTERS'; payload: FilterOptions }
  | { type: 'SET_VIEWPORT_WIDTH'; payload: number }
  | { type: 'SET_DRAGGING'; payload: boolean }
  | { type: 'SET_CONTEXTUAL_FILTER'; payload: ContextualFilter | null }
  | { type: 'SET_TRANSITIONING'; payload: boolean }
  | { type: 'SET_DISPLAY_MODE'; payload: 'cards' | 'points' };

const initialState: TimelineState = {
  zoomLevel: 15,
  scrollPosition: 0,
  selectedScandalId: null,
  showFilters: false,
  showStats: false,
  filters: {
    types: [],
    dateRange: { start: 2000, end: 2025 },
    personalities: [],
    parties: []
  },
  viewportWidth: 1200,
  isDragging: false,
  contextualFilter: null,
  isTransitioning: false,
  displayMode: 'cards' // Default to cards mode
};

const timelineReducer = (state: TimelineState, action: TimelineAction): TimelineState => {
  switch (action.type) {
    case 'SET_ZOOM':
      // Limites de zoom étendues : de 1.5x (10%) à 300x (2000%)
      return { ...state, zoomLevel: Math.max(1.5, Math.min(300, action.payload)) };
    case 'SET_SCROLL_POSITION':
      return { ...state, scrollPosition: action.payload };
    case 'SELECT_SCANDAL':
      return { ...state, selectedScandalId: action.payload };
    case 'TOGGLE_FILTERS':
      return { ...state, showFilters: !state.showFilters };
    case 'TOGGLE_STATS':
      return { ...state, showStats: !state.showStats };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    case 'SET_VIEWPORT_WIDTH':
      return { ...state, viewportWidth: action.payload };
    case 'SET_DRAGGING':
      return { ...state, isDragging: action.payload };
    case 'SET_CONTEXTUAL_FILTER':
      return { ...state, contextualFilter: action.payload };
    case 'SET_TRANSITIONING':
      return { ...state, isTransitioning: action.payload };
    case 'SET_DISPLAY_MODE':
      return { ...state, displayMode: action.payload };
    default:
      return state;
  }
};

const TimelineContext = createContext<{
  state: TimelineState;
  dispatch: React.Dispatch<TimelineAction>;
} | null>(null);

interface TimelineProviderProps {
  children: ReactNode;
  initialContext?: {
    type: 'personality';
    value: string;
  };
}

export const TimelineProvider: React.FC<TimelineProviderProps> = ({ children, initialContext }) => {
  // Parse URL filter and merge with initial state
  const urlFilter = shareUtils.parseUrlFilter();
  const contextualFilter = initialContext ? {
    type: initialContext.type,
    value: initialContext.value,
    label: initialContext.value
  } : urlFilter;

  const mergedInitialState = {
    ...initialState,
    contextualFilter
  };

  const [state, dispatch] = useReducer(timelineReducer, mergedInitialState);

  return (
    <TimelineContext.Provider value={{ state, dispatch }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error('useTimeline must be used within a TimelineProvider');
  }
  return context;
};