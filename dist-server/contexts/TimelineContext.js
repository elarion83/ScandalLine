import React, { createContext, useContext, useReducer } from 'react';
import { shareUtils } from '../utils/shareUtils';
const initialState = {
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
    isTransitioning: false
};
const timelineReducer = (state, action) => {
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
        default:
            return state;
    }
};
const TimelineContext = createContext(null);
export const TimelineProvider = ({ children }) => {
    // Parse URL filter and merge with initial state
    const urlFilter = shareUtils.parseUrlFilter();
    const mergedInitialState = {
        ...initialState,
        contextualFilter: urlFilter
    };
    const [state, dispatch] = useReducer(timelineReducer, mergedInitialState);
    return (<TimelineContext.Provider value={{ state, dispatch }}>
      {children}
    </TimelineContext.Provider>);
};
export const useTimeline = () => {
    const context = useContext(TimelineContext);
    if (!context) {
        throw new Error('useTimeline must be used within a TimelineProvider');
    }
    return context;
};
