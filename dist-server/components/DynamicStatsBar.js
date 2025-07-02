import React, { useRef } from 'react';
import { TrendingUp, DollarSign, Scale, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { formatLargeNumber } from '../utils/scandalUtils';
import { generateYearMarkers, findNearestYearMarker } from '../utils/timelineLayout';
var DynamicStatsBar = function (_a) {
    var visibleScandals = _a.visibleScandals, totalScandals = _a.totalScandals, scrollProgress = _a.scrollProgress, startYear = _a.startYear, endYear = _a.endYear, scrollPosition = _a.scrollPosition, viewportWidth = _a.viewportWidth, timelineWidth = _a.timelineWidth, onScrollChange = _a.onScrollChange, onDragClick = _a.onDragClick;
    var isDraggingRef = useRef(false);
    var containerRef = useRef(null);
    // Calculate the current year being viewed based on scroll position
    var calculateCurrentYear = function () {
        // Générer les markers d'années
        var yearMarkers = generateYearMarkers(startYear, endYear, timelineWidth, 1);
        // Utiliser la même fonction que dans la timeline
        return findNearestYearMarker(scrollPosition, viewportWidth, yearMarkers);
    };
    var currentYear = calculateCurrentYear();
    // Calculate comprehensive stats for visible scandals
    var visibleStats = {
        count: visibleScandals.length,
        totalMoney: visibleScandals.reduce(function (sum, s) { return sum + (s.moneyAmount || 0); }, 0),
        totalPrison: visibleScandals.reduce(function (sum, s) { return sum + (s.prisonYears || 0); }, 0),
        totalFines: visibleScandals.reduce(function (sum, s) { return sum + (s.fine || 0); }, 0),
        totalIneligibility: visibleScandals.reduce(function (sum, s) { return sum + (s.ineligibilityYears || 0); }, 0),
        // Status analysis
        byStatus: visibleScandals.reduce(function (acc, scandal) {
            acc[scandal.status] = (acc[scandal.status] || 0) + 1;
            return acc;
        }, {})
    };
    var handleMouseDown = function (e) {
        if (!containerRef.current || !onScrollChange)
            return;
        // Notifier le parent que l'utilisateur a cliqué
        onDragClick === null || onDragClick === void 0 ? void 0 : onDragClick();
        isDraggingRef.current = true;
        containerRef.current.classList.add('dragging');
        var rect = containerRef.current.getBoundingClientRect();
        var clickPositionRatio = (e.clientX - rect.left) / rect.width;
        var newScrollPosition = (clickPositionRatio * timelineWidth) - (viewportWidth / 2);
        onScrollChange(Math.max(0, Math.min(timelineWidth - viewportWidth, newScrollPosition)));
        var handleMouseMove = function (e) {
            if (!containerRef.current || !isDraggingRef.current)
                return;
            var rect = containerRef.current.getBoundingClientRect();
            var positionRatio = (e.clientX - rect.left) / rect.width;
            var newScrollPosition = (positionRatio * timelineWidth) - (viewportWidth / 2);
            onScrollChange(Math.max(0, Math.min(timelineWidth - viewportWidth, newScrollPosition)));
        };
        var handleMouseUp = function () {
            isDraggingRef.current = false;
            if (containerRef.current) {
                containerRef.current.classList.remove('dragging');
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };
    return (React.createElement("div", { ref: containerRef, className: "relative w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm cursor-grab active:cursor-grabbing [&.dragging_.transition-all]:transition-none", onMouseDown: handleMouseDown, style: {
            overflowX: 'hidden'
        } },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 dark:from-blue-600 dark:via-blue-500 dark:to-blue-600 opacity-20 dark:opacity-30 transition-all duration-300 ease-out", style: {
                width: "".concat(scrollProgress * 100, "%"),
                transitionProperty: isDraggingRef.current ? 'none' : 'all'
            } }),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 dark:opacity-10 transition-all duration-300 ease-out animate-pulse", style: {
                width: "".concat(scrollProgress * 100, "%"),
                transitionProperty: isDraggingRef.current ? 'none' : 'all'
            } }),
        React.createElement("div", { className: "absolute top-0 bottom-0 flex items-center transition-all duration-300 ease-out", style: {
                left: "".concat(scrollProgress * 100, "%"),
                transform: 'translateX(-50%)',
                transitionProperty: isDraggingRef.current ? 'none' : 'all'
            } },
            React.createElement("div", { className: "flex texture-overlay items-center gap-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white px-2 py-1 mt-1 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform" },
                React.createElement(ArrowLeft, { className: "w-4 h-4 animate-pulse" }),
                currentYear,
                React.createElement(ArrowRight, { className: "w-4 h-4 animate-pulse" }))),
        React.createElement("div", { className: "relative flex items-center justify-between px-4 py-2" },
            React.createElement("div", { className: "flex items-center gap-4 transition-all duration-300 ".concat(scrollProgress < 0.5 ? 'ml-auto' : '') },
                React.createElement("div", { className: "flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg" },
                    React.createElement(TrendingUp, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" }),
                    React.createElement("span", { className: "text-sm font-medium text-blue-700 dark:text-blue-300" }, visibleStats.count),
                    React.createElement("span", { className: "text-xs text-blue-600 dark:text-blue-400" },
                        "/ ",
                        totalScandals,
                        " affaires")),
                React.createElement("div", { className: "flex items-center gap-2 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg" },
                    React.createElement(DollarSign, { className: "w-4 h-4 text-red-600 dark:text-red-400" }),
                    React.createElement("span", { className: "text-sm font-bold text-red-700 dark:text-red-300" }, formatLargeNumber(visibleStats.totalMoney)),
                    React.createElement("span", { className: "text-xs text-red-600 dark:text-red-400" }, "concern\u00E9s")),
                visibleStats.totalFines > 0 && (React.createElement("div", { className: "flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-lg" },
                    React.createElement(Award, { className: "w-4 h-4 text-orange-600 dark:text-orange-400" }),
                    React.createElement("span", { className: "text-sm font-bold text-orange-700 dark:text-orange-300" }, formatLargeNumber(visibleStats.totalFines)),
                    React.createElement("span", { className: "text-xs text-orange-600 dark:text-orange-400" }, "d'amendes"))),
                React.createElement("div", { className: "flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 rounded-lg" },
                    React.createElement(Scale, { className: "w-4 h-4 text-purple-600 dark:text-purple-400" }),
                    React.createElement("span", { className: "text-sm font-bold text-purple-700 dark:text-purple-300" }, visibleStats.totalPrison),
                    React.createElement("span", { className: "text-xs text-purple-600 dark:text-purple-400" },
                        "an",
                        visibleStats.totalPrison > 1 ? 's' : '',
                        " prison"))))));
};
export default DynamicStatsBar;
