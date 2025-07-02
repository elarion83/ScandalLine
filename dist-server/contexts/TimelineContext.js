var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { createContext, useContext, useReducer } from 'react';
import { shareUtils } from '../utils/shareUtils';
var initialState = {
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
var timelineReducer = function (state, action) {
    switch (action.type) {
        case 'SET_ZOOM':
            // Limites de zoom étendues : de 1.5x (10%) à 300x (2000%)
            return __assign(__assign({}, state), { zoomLevel: Math.max(1.5, Math.min(300, action.payload)) });
        case 'SET_SCROLL_POSITION':
            return __assign(__assign({}, state), { scrollPosition: action.payload });
        case 'SELECT_SCANDAL':
            return __assign(__assign({}, state), { selectedScandalId: action.payload });
        case 'TOGGLE_FILTERS':
            return __assign(__assign({}, state), { showFilters: !state.showFilters });
        case 'TOGGLE_STATS':
            return __assign(__assign({}, state), { showStats: !state.showStats });
        case 'SET_FILTERS':
            return __assign(__assign({}, state), { filters: action.payload });
        case 'SET_VIEWPORT_WIDTH':
            return __assign(__assign({}, state), { viewportWidth: action.payload });
        case 'SET_DRAGGING':
            return __assign(__assign({}, state), { isDragging: action.payload });
        case 'SET_CONTEXTUAL_FILTER':
            return __assign(__assign({}, state), { contextualFilter: action.payload });
        case 'SET_TRANSITIONING':
            return __assign(__assign({}, state), { isTransitioning: action.payload });
        default:
            return state;
    }
};
var TimelineContext = createContext(null);
export var TimelineProvider = function (_a) {
    var children = _a.children, initialContext = _a.initialContext;
    // Parse URL filter and merge with initial state
    var urlFilter = shareUtils.parseUrlFilter();
    var contextualFilter = initialContext ? {
        type: initialContext.type,
        value: initialContext.value,
        label: initialContext.value
    } : urlFilter;
    var mergedInitialState = __assign(__assign({}, initialState), { contextualFilter: contextualFilter });
    var _b = useReducer(timelineReducer, mergedInitialState), state = _b[0], dispatch = _b[1];
    return (React.createElement(TimelineContext.Provider, { value: { state: state, dispatch: dispatch } }, children));
};
export var useTimeline = function () {
    var context = useContext(TimelineContext);
    if (!context) {
        throw new Error('useTimeline must be used within a TimelineProvider');
    }
    return context;
};
