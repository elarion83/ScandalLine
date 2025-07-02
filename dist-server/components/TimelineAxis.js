import React from 'react';
import { generateYearMarkers } from '../utils/timelineLayout';
var TimelineAxis = function (_a) {
    var startYear = _a.startYear, endYear = _a.endYear, timelineWidth = _a.timelineWidth, zoomLevel = _a.zoomLevel, timelineY = _a.timelineY, scrollPosition = _a.scrollPosition, viewportWidth = _a.viewportWidth;
    var yearMarkers = generateYearMarkers(startYear, endYear, timelineWidth, zoomLevel);
    return (React.createElement("div", { className: "absolute inset-0 pointer-events-none" },
        React.createElement("div", { className: "absolute bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 shadow-lg shadow-gray-200/20 dark:shadow-gray-900/20", style: {
                left: 0,
                right: 0,
                top: timelineY - 2,
                height: '8px',
                borderRadius: '4px'
            } }),
        yearMarkers.map(function (_a) {
            var year = _a.year, x = _a.x, isMainMarker = _a.isMainMarker;
            return (React.createElement("div", { key: year, className: "absolute", style: { left: x, top: timelineY } }, isMainMarker ? (React.createElement("div", { className: "absolute writing-mode-vertical text-4xl font-black whitespace-nowrap", style: {
                    writingMode: 'vertical-rl',
                    transform: 'translateX(-50%) rotate(180deg)',
                    top: '-80px'
                } },
                React.createElement("div", { className: "relative" },
                    React.createElement("div", { className: "relative px-3 py-4 rounded-2x border border-white/30 dark:border-white/10 pb-0" },
                        React.createElement("span", { className: "relative z-10 text-grey dark:text-white tracking-wide inline-block", style: { transform: 'rotate(0deg) translateY(25px)',
                                fontSize: '1em', opacity: 0.1 } }, year))))) : (React.createElement("div", { className: "absolute writing-mode-vertical text-sm whitespace-nowrap", style: {
                    writingMode: 'vertical-rl',
                    transform: 'translateX(-50%) rotate(180deg)',
                    top: '-50px'
                } },
                React.createElement("div", { className: "relative" },
                    React.createElement("div", { className: "absolute inset-0 opacity-5", style: {
                            backgroundImage: "\n                      linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),\n                      linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)\n                    ",
                            backgroundSize: '6px 6px'
                        } }),
                    React.createElement("div", { className: "relative px-2 py-3 rounded-xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-[1px] border border-white/20 dark:border-white/5", style: { transform: 'rotate(90deg)' } },
                        React.createElement("span", { className: "relative z-10 text-black/60 dark:text-gray-300 tracking-wide inline-block" }, year)))))));
        })));
};
export default TimelineAxis;
