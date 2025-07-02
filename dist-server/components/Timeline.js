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
import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import { ZoomIn, ZoomOut, Filter, BarChart3, FileText, Building2, Users } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { filterScandals, calculateStats, getCategoryLabel } from '../utils/scandalUtils';
import { filterTimelineBy } from '../utils/contextualFilters';
import { calculateTimelineWidth, calculateScandalPositions, TIMELINE_Y, getVisibleScandals, getCumulativeScandals, calculateOptimizedTimelineWidth, calculateOptimizedScandalPositions, calculateDynamicDateRange } from '../utils/timelineLayout';
import { useTimeline } from '../contexts/TimelineContext';
import ScandalCard from './ScandalCard';
import TimelineAxis from './TimelineAxis';
import TimelineGaps from './TimelineGaps';
import FilterPanel from './FilterPanel';
import StatsPanel from './StatsPanel';
import ScandalDetails from './ScandalDetails';
import DynamicStatsBar from './DynamicStatsBar';
import ContextualHeader from './ContextualHeader';
import ScrollHint from './modals/ScrollHint';
import CurrentYearDisplay from './CurrentYearDisplay';
import TimelineGrid from './TimelineGrid';
var Timeline = function (_a) {
    var scandals = _a.scandals, splashClosedTime = _a.splashClosedTime;
    var _b = useTimeline(), state = _b.state, dispatch = _b.dispatch;
    var containerRef = useRef(null);
    var dragStartRef = useRef({ x: 0, scrollLeft: 0 });
    var scrollTimeoutRef = useRef();
    var initialScrollDoneRef = useRef(false);
    var _c = useState(true), showDragHelp = _c[0], setShowDragHelp = _c[1];
    var _d = useState(false), hasUsedDrag = _d[0], setHasUsedDrag = _d[1];
    var _e = useState(true), showScrollHint = _e[0], setShowScrollHint = _e[1];
    var _f = useState(false), hasScrolledHorizontally = _f[0], setHasScrolledHorizontally = _f[1];
    // Apply contextual filter first, then regular filters
    var contextuallyFilteredScandals = state.contextualFilter
        ? filterTimelineBy(scandals, state.contextualFilter)
        : scandals;
    var filteredScandals = filterScandals(contextuallyFilteredScandals, state.filters);
    var stats = calculateStats(filteredScandals);
    // Calculate dynamic date range based on filtered scandals
    var _g = useMemo(function () {
        return calculateDynamicDateRange(filteredScandals);
    }, [filteredScandals]), startYear = _g.start, endYear = _g.end;
    // Determine if we need adaptive layout
    var shouldUseAdaptiveLayout = false;
    // Calculate timeline dimensions based on adaptive behavior
    var _h = useMemo(function () {
        if (shouldUseAdaptiveLayout) {
            // Single affair or no affairs - use optimized layout
            var _a = calculateOptimizedTimelineWidth(filteredScandals, startYear, endYear, state.zoomLevel), width = _a.width, gaps_1 = _a.gaps;
            var positions = calculateOptimizedScandalPositions(filteredScandals, gaps_1);
            return { timelineWidth: width, gaps: gaps_1, scandalPositions: positions };
        }
        else {
            // Multiple affairs - use standard layout
            var width = calculateTimelineWidth(startYear, endYear, state.zoomLevel);
            var positions = calculateScandalPositions(filteredScandals, startYear, endYear, width);
            return { timelineWidth: width, gaps: [], scandalPositions: positions };
        }
    }, [filteredScandals, startYear, endYear, state.zoomLevel, shouldUseAdaptiveLayout]), timelineWidth = _h.timelineWidth, gaps = _h.gaps, scandalPositions = _h.scandalPositions;
    var scrollProgress = useMemo(function () {
        // Si la timeline est plus petite que la viewport ou si on utilise le layout adaptatif, on est à 100%
        if (shouldUseAdaptiveLayout || timelineWidth <= state.viewportWidth)
            return 1;
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
    useEffect(function () {
        if (hasUsedDrag) {
            setShowDragHelp(false);
        }
    }, [hasUsedDrag]);
    // Scroll to top when timeline opens
    useEffect(function () {
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, [scandals, state.contextualFilter]); // Déclencher quand les scandales changent ou quand on change de contexte
    // Update filters with new date range
    useEffect(function () {
        // Ne pas mettre à jour les dates si les filtres ont changé à cause d'une case à cocher
        var hasOnlyCheckboxChanges = state.filters.types.length > 0 ||
            state.filters.parties.length > 0 ||
            state.filters.personalities.length > 0;
        if (!hasOnlyCheckboxChanges && (startYear !== state.filters.dateRange.start || endYear !== state.filters.dateRange.end)) {
            dispatch({
                type: 'SET_FILTERS',
                payload: __assign(__assign({}, state.filters), { dateRange: { start: startYear, end: endYear } })
            });
        }
    }, [startYear, endYear, state.filters]);
    // Calculate visible scandals for rendering optimization
    var visibleScandalPositions = useMemo(function () {
        if (shouldUseAdaptiveLayout) {
            // For adaptive layout, show all scandals (no scrolling)
            return scandalPositions;
        }
        return getVisibleScandals(scandalPositions, state.scrollPosition, state.viewportWidth);
    }, [scandalPositions, state.scrollPosition, state.viewportWidth, shouldUseAdaptiveLayout]);
    // Calculate cumulative scandals for statistics (from start to current position)
    var cumulativeScandals = useMemo(function () {
        if (shouldUseAdaptiveLayout) {
            // For adaptive layout, always show all scandals in stats
            return filteredScandals;
        }
        return getCumulativeScandals(scandalPositions, filteredScandals, state.scrollPosition, state.viewportWidth);
    }, [scandalPositions, filteredScandals, state.scrollPosition, state.viewportWidth, shouldUseAdaptiveLayout]);
    // Méthode commune pour gérer le scroll initial
    var handleInitialScroll = useCallback(function () {
        if (!initialScrollDoneRef.current && containerRef.current) {
            // On commence toujours au début de la timeline
            containerRef.current.scrollLeft = 0;
            dispatch({ type: 'SET_SCROLL_POSITION', payload: 0 });
            initialScrollDoneRef.current = true;
            console.log('🎯 Scroll initial appliqué - Position: début de la timeline');
        }
    }, [dispatch]);
    // Scroll initial uniquement au montage et changement de contexte
    useEffect(function () {
        // Reset du flag quand le contexte change
        initialScrollDoneRef.current = false;
        if (scandalPositions.length > 0) {
            handleInitialScroll();
        }
    }, [state.contextualFilter]); // Ne dépend plus de scandalPositions
    // Handle contextual filter changes with transition
    var handleContextualFilterChange = useCallback(function (filter) {
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        setTimeout(function () {
            // Reset du flag avant de changer de contexte
            initialScrollDoneRef.current = false;
            // Set contextual filter
            dispatch({ type: 'SET_CONTEXTUAL_FILTER', payload: filter });
            // Get filtered scandals
            var filteredContextScandals = filterTimelineBy(scandals, filter);
            // Calculate new date range based on filtered scandals
            var _a = calculateDynamicDateRange(filteredContextScandals), start = _a.start, end = _a.end;
            // Update filters with new date range
            dispatch({
                type: 'SET_FILTERS',
                payload: __assign(__assign({}, state.filters), { dateRange: { start: start, end: end } })
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
            // Utiliser la méthode commune pour le scroll initial
            handleInitialScroll();
        }, 150);
    }, [dispatch, scandals, state.filters, handleInitialScroll]);
    // Handle back to main timeline
    var handleBackToMain = useCallback(function () {
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        setTimeout(function () {
            // Reset du flag avant de revenir au main
            initialScrollDoneRef.current = false;
            // Reset contextual filter
            dispatch({ type: 'SET_CONTEXTUAL_FILTER', payload: null });
            // Calculate new date range based on all scandals
            var _a = calculateDynamicDateRange(scandals), start = _a.start, end = _a.end;
            // Reset filters with new date range
            dispatch({
                type: 'SET_FILTERS',
                payload: __assign(__assign({}, state.filters), { dateRange: { start: start, end: end }, types: [], parties: [], personalities: [] })
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
            // Utiliser la méthode commune pour le scroll initial
            handleInitialScroll();
            window.location.replace('/');
        }, 150);
    }, [dispatch, scandals, state.filters, handleInitialScroll]);
    // Handle viewport width changes
    useEffect(function () {
        var handleResize = function () {
            if (containerRef.current) {
                dispatch({ type: 'SET_VIEWPORT_WIDTH', payload: containerRef.current.clientWidth });
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, [dispatch]);
    // Handle zoom with center preservation (disabled for adaptive layout)
    var handleZoomIn = useCallback(function () {
        if (state.zoomLevel >= 300 || shouldUseAdaptiveLayout)
            return;
        var container = containerRef.current;
        if (!container)
            return;
        var currentCenter = state.scrollPosition + state.viewportWidth / 2;
        var currentCenterRatio = currentCenter / timelineWidth;
        // Facteur de zoom plus agressif pour permettre un zoom plus fin
        var zoomFactor = state.zoomLevel < 15 ? 1.5 : state.zoomLevel < 75 ? 1.4 : 1.3;
        var newZoomLevel = Math.min(300, state.zoomLevel * zoomFactor);
        dispatch({ type: 'SET_ZOOM', payload: newZoomLevel });
        // Preserve center position after zoom
        setTimeout(function () {
            if (container) {
                var newTimelineWidth = calculateTimelineWidth(startYear, endYear, newZoomLevel);
                var newCenter = currentCenterRatio * newTimelineWidth;
                var newScrollLeft = newCenter - state.viewportWidth / 2;
                container.scrollLeft = Math.max(0, newScrollLeft);
                dispatch({ type: 'SET_SCROLL_POSITION', payload: container.scrollLeft });
            }
        }, 0);
    }, [dispatch, state.zoomLevel, state.scrollPosition, state.viewportWidth, timelineWidth, startYear, endYear, shouldUseAdaptiveLayout]);
    var handleZoomOut = useCallback(function () {
        if (state.zoomLevel <= 1.5 || shouldUseAdaptiveLayout)
            return;
        var container = containerRef.current;
        if (!container)
            return;
        var currentCenter = state.scrollPosition + state.viewportWidth / 2;
        var currentCenterRatio = currentCenter / timelineWidth;
        // Facteur de dézoom plus agressif
        var zoomFactor = state.zoomLevel > 75 ? 1.3 : state.zoomLevel > 15 ? 1.4 : 1.5;
        var newZoomLevel = Math.max(1.5, state.zoomLevel / zoomFactor);
        dispatch({ type: 'SET_ZOOM', payload: newZoomLevel });
        // Preserve center position after zoom
        setTimeout(function () {
            if (container) {
                var newTimelineWidth = calculateTimelineWidth(startYear, endYear, newZoomLevel);
                var newCenter = currentCenterRatio * newTimelineWidth;
                var newScrollLeft = newCenter - state.viewportWidth / 2;
                container.scrollLeft = Math.max(0, newScrollLeft);
                dispatch({ type: 'SET_SCROLL_POSITION', payload: container.scrollLeft });
            }
        }, 0);
    }, [dispatch, state.zoomLevel, state.scrollPosition, state.viewportWidth, timelineWidth, startYear, endYear, shouldUseAdaptiveLayout]);
    // Reset zoom to 100%
    var handleResetZoom = useCallback(function () {
        if (shouldUseAdaptiveLayout)
            return;
        var container = containerRef.current;
        if (!container)
            return;
        var currentCenter = state.scrollPosition + state.viewportWidth / 2;
        var currentCenterRatio = currentCenter / timelineWidth;
        dispatch({ type: 'SET_ZOOM', payload: 15 });
        // Preserve center position after reset
        setTimeout(function () {
            if (container) {
                var newTimelineWidth = calculateTimelineWidth(startYear, endYear, 15);
                var newCenter = currentCenterRatio * newTimelineWidth;
                var newScrollLeft = newCenter - state.viewportWidth / 2;
                container.scrollLeft = Math.max(0, newScrollLeft);
                dispatch({ type: 'SET_SCROLL_POSITION', payload: container.scrollLeft });
            }
        }, 0);
    }, [dispatch, state.scrollPosition, state.viewportWidth, timelineWidth, startYear, endYear, shouldUseAdaptiveLayout]);
    // Handle mouse drag
    var handleMouseDown = useCallback(function (e) {
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
    var handleMouseMove = useCallback(function (e) {
        if (!state.isDragging || !containerRef.current || shouldUseAdaptiveLayout)
            return;
        e.preventDefault();
        var x = e.pageX;
        var walk = (x - dragStartRef.current.x) * 1.5;
        var newScrollLeft = Math.max(0, dragStartRef.current.scrollLeft - walk);
        containerRef.current.scrollLeft = newScrollLeft;
        dispatch({ type: 'SET_SCROLL_POSITION', payload: newScrollLeft });
    }, [state.isDragging, dispatch, shouldUseAdaptiveLayout]);
    var handleMouseUp = useCallback(function () {
        dispatch({ type: 'SET_DRAGGING', payload: false });
    }, [dispatch]);
    // Handle scroll with debouncing for performance (disabled for adaptive layout)
    var handleScroll = useCallback(function (e) {
        var container = containerRef.current;
        if (!container)
            return;
        // Mettre à jour la position de scroll
        var newPosition = container.scrollLeft;
        if (newPosition !== state.scrollPosition) {
            dispatch({ type: 'SET_SCROLL_POSITION', payload: newPosition });
            // Si on a scrollé horizontalement, marquer comme utilisé
            if (newPosition > 0 && !hasScrolledHorizontally) {
                setHasScrolledHorizontally(true);
            }
        }
    }, [state.scrollPosition, dispatch, hasScrolledHorizontally]);
    // Gérer le scroll avec la molette/pad
    var handleWheel = useCallback(function (e) {
        var container = containerRef.current;
        if (!container)
            return;
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
    useEffect(function () {
        var container = containerRef.current;
        if (!container)
            return;
        var handleTouch = function (e) {
            if (container.scrollLeft > 0 && !hasScrolledHorizontally) {
                setHasScrolledHorizontally(true);
            }
        };
        container.addEventListener('touchmove', handleTouch, { passive: true });
        container.addEventListener('wheel', handleWheel, { passive: false });
        return function () {
            container.removeEventListener('touchmove', handleTouch);
            container.removeEventListener('wheel', handleWheel);
        };
    }, [handleWheel, hasScrolledHorizontally]);
    var selectedScandal = state.selectedScandalId
        ? filteredScandals.find(function (s) { return s.id === state.selectedScandalId; })
        : null;
    // Vérifie si des filtres sont actifs
    var hasActiveFilters = useMemo(function () {
        return state.filters.types.length > 0 ||
            state.filters.parties.length > 0 ||
            state.filters.personalities.length > 0;
    }, [state.filters]);
    return (React.createElement("div", { className: "flex flex-col h-full" },
        !state.contextualFilter ? (React.createElement("div", { className: "texture-overlay bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 border-b border-gray-700" },
            React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement("div", { className: "flex items-center gap-4" },
                    React.createElement("div", null,
                        React.createElement("h1", { className: "text-xl font-bold" }, "Skandalz : Timeline globale des donn\u00E9es"),
                        React.createElement("span", { className: "text-sm text-gray-300" }, "25 ann\u00E9es d'ffaires et de controverses du paysage politique fran\u00E7ais")))))) : (React.createElement(ContextualHeader, { contextualFilter: state.contextualFilter, filteredCount: filteredScandals.length, totalMoney: stats.totalMoney, filteredScandals: filteredScandals, onBack: handleBackToMain, shouldUseAdaptiveLayout: shouldUseAdaptiveLayout, startYear: startYear, endYear: endYear, containerRef: containerRef })),
        React.createElement(DynamicStatsBar, { visibleScandals: cumulativeScandals, totalScandals: filteredScandals.length, scrollProgress: scrollProgress, startYear: startYear, endYear: endYear, scrollPosition: state.scrollPosition, viewportWidth: state.viewportWidth, timelineWidth: timelineWidth, onScrollChange: function (newPosition) {
                if (containerRef.current) {
                    containerRef.current.scrollLeft = newPosition;
                    dispatch({ type: 'SET_SCROLL_POSITION', payload: newPosition });
                }
            }, onDragClick: function () { return setHasUsedDrag(true); } }),
        React.createElement("div", { className: "flex flex-1 overflow-hidden relative" },
            React.createElement("div", { className: "timeline-controls ".concat(state.showFilters ? 'filters-open' : '', " ").concat(state.showStats ? 'stats-open' : '', " fixed"), style: { zIndex: 50 } },
                React.createElement("div", { className: "flex items-center px-3 py-2 rounded-full shadow-lg bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-200 hover:scale-105 hover:shadow-2xl relative", style: { transformOrigin: 'center' } },
                    React.createElement("div", { className: "flex items-center" },
                        React.createElement("button", { onClick: handleZoomOut, className: "w-10 h-10 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 active:bg-black/30 disabled:opacity-50 disabled:hover:bg-black/10 transition-all", title: "D\u00E9zoomer", disabled: state.zoomLevel <= 5 },
                            React.createElement(ZoomOut, { className: "w-6 h-6 text-white" })),
                        React.createElement("span", { className: "w-12 text-center text-sm font-bold text-white" },
                            Math.round((state.zoomLevel / 15) * 100),
                            "%"),
                        React.createElement("button", { onClick: handleZoomIn, className: "w-10 h-10 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 active:bg-black/30 disabled:opacity-50 disabled:hover:bg-black/10 transition-all", title: "Zoomer", disabled: state.zoomLevel >= 300 },
                            React.createElement(ZoomIn, { className: "w-6 h-6 text-white" }))),
                    React.createElement("div", { className: "w-[25px]" }),
                    React.createElement("div", { className: "flex items-center" },
                        React.createElement("button", { onClick: function () { return dispatch({ type: 'TOGGLE_FILTERS' }); }, className: "w-10 h-10 rounded-full flex items-center justify-center relative transition-all group ".concat(state.showFilters
                                ? 'bg-black/30 ring-2 ring-white/50'
                                : 'bg-black/10 hover:bg-black/20 active:bg-black/30'), title: "Filtres" },
                            React.createElement(Filter, { className: "w-6 h-6 text-white transition-transform ".concat(state.showFilters ? 'scale-110' : '') }),
                            hasActiveFilters && (React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-red-500 rounded-full ring-2 ring-violet-500 animate-pulse flex items-center justify-center" },
                                    React.createElement("span", { className: "text-xs font-bold text-white" }, state.filters.types.length + state.filters.parties.length + state.filters.personalities.length)),
                                React.createElement("div", { className: "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-[300px] bg-gradient-to-br from-gray-900 to-gray-800 text-white text-xs rounded-xl py-3 px-4 hidden group-hover:block z-50 shadow-xl border border-gray-700/50 backdrop-blur-sm transform origin-bottom scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" },
                                    React.createElement("div", { className: "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900 to-gray-800 rotate-45 border-r border-b border-gray-700/50" }),
                                    React.createElement("div", { className: "space-y-2" },
                                        state.filters.types.length > 0 && (React.createElement("div", { className: "flex items-center gap-2" },
                                            React.createElement(FileText, { className: "w-3 h-3 text-violet-400" }),
                                            React.createElement("span", { className: "font-semibold text-violet-400" }, "Types :"),
                                            React.createElement("span", { className: "text-gray-300" }, state.filters.types.map(function (type) { return getCategoryLabel(type); }).join(', ')))),
                                        state.filters.parties.length > 0 && (React.createElement("div", { className: "flex items-center gap-2" },
                                            React.createElement(Building2, { className: "w-3 h-3 text-blue-400" }),
                                            React.createElement("span", { className: "font-semibold text-blue-400" }, "Partis :"),
                                            React.createElement("span", { className: "text-gray-300" }, state.filters.parties.join(', ')))),
                                        state.filters.personalities.length > 0 && (React.createElement("div", { className: "flex items-center gap-2" },
                                            React.createElement(Users, { className: "w-3 h-3 text-pink-400" }),
                                            React.createElement("span", { className: "font-semibold text-pink-400" }, "Personnalit\u00E9s :"),
                                            React.createElement("span", { className: "text-gray-300" }, state.filters.personalities.join(', '))))))))),
                        React.createElement("button", { onClick: function () { return dispatch({ type: 'TOGGLE_STATS' }); }, className: "w-10 h-10 ml-1 rounded-full flex items-center justify-center transition-all ".concat(state.showStats
                                ? 'bg-black/30 ring-2 ring-white/50'
                                : 'bg-black/10 hover:bg-black/20 active:bg-black/30'), title: "Statistiques" },
                            React.createElement(BarChart3, { className: "w-6 h-6 text-white transition-transform ".concat(state.showStats ? 'scale-110' : '') }))))),
            !showDragHelp && (React.createElement("div", { className: "absolute text-xs top-1 px-4 py-1 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm rounded-xl shadow-xl text-white font-medium z-[49] border border-white/20 whitespace-nowrap pointer-events-none animate-bounce-subtle", style: {
                    left: "".concat((state.scrollPosition + state.viewportWidth / 2) / timelineWidth * 100, "%"),
                    transform: 'translateX(-50%)'
                } },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("span", { className: "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent" }, "Glissez-moi pour un voyage \u00E9clair !")))),
            React.createElement(AnimatePresence, null, state.showFilters && (React.createElement(FilterPanel, { filters: state.filters, onFiltersChange: function (filters) { return dispatch({ type: 'SET_FILTERS', payload: filters }); }, scandals: contextuallyFilteredScandals, onClose: function () { return dispatch({ type: 'TOGGLE_FILTERS' }); } }))),
            React.createElement("div", { className: "flex-1 flex flex-col min-w-0 relative h-full" },
                React.createElement("div", { ref: containerRef, className: "relative flex-1 overflow-x-auto overflow-y-scroll ".concat(state.isTransitioning ? 'opacity-0' : 'opacity-100', " transition-opacity duration-150"), style: {
                        height: '100%',
                        cursor: state.isDragging ? 'grabbing' : 'grab',
                        WebkitOverflowScrolling: 'touch'
                    }, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, onScroll: handleScroll },
                    React.createElement("div", { className: "relative timeline-container", style: {
                            width: timelineWidth,
                            minHeight: '800px',
                            paddingBottom: '100px'
                        } },
                        React.createElement(ScrollHint, { scrollPosition: state.scrollPosition }),
                        React.createElement(TimelineGrid, { timelineWidth: timelineWidth }),
                        React.createElement("div", { className: "absolute inset-0", style: { width: timelineWidth } },
                            React.createElement(CurrentYearDisplay, { startYear: startYear, endYear: endYear, timelineWidth: timelineWidth, scrollPosition: state.scrollPosition, viewportWidth: state.viewportWidth }),
                            React.createElement(TimelineAxis, { startYear: startYear, endYear: endYear, timelineWidth: timelineWidth, zoomLevel: state.zoomLevel, timelineY: TIMELINE_Y, scrollPosition: state.scrollPosition, viewportWidth: state.viewportWidth })),
                        gaps.length > 0 && (React.createElement(TimelineGaps, { gaps: gaps, timelineY: TIMELINE_Y })),
                        visibleScandalPositions.map(function (position) {
                            var scandal = filteredScandals.find(function (s) { return s.id === position.id; });
                            if (!scandal)
                                return null;
                            return (React.createElement(ScandalCard, { key: scandal.id, scandal: scandal, onClick: function () { return dispatch({ type: 'SELECT_SCANDAL', payload: scandal.id }); }, isSelected: state.selectedScandalId === scandal.id, position: position, timelineY: TIMELINE_Y, allScandals: scandals }));
                        }),
                        filteredScandals.length === 0 && (React.createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
                            React.createElement("div", { className: "text-center text-gray-500 dark:text-gray-400" },
                                React.createElement("p", { className: "text-lg font-medium mb-2" }, "Aucune affaire trouv\u00E9e"),
                                React.createElement("p", { className: "text-sm" }, "Essayez de modifier vos filtres"))))))),
            React.createElement(AnimatePresence, null, state.showStats && (React.createElement(StatsPanel, { stats: stats, scandals: filteredScandals, onClose: function () { return dispatch({ type: 'TOGGLE_STATS' }); } })))),
        selectedScandal && (React.createElement(ScandalDetails, { scandal: selectedScandal, onClose: function () { return dispatch({ type: 'SELECT_SCANDAL', payload: null }); } }))));
};
export default Timeline;
