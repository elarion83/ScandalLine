import React from 'react';
import { Scissors, Calendar } from 'lucide-react';
var TimelineGaps = function (_a) {
    var gaps = _a.gaps, timelineY = _a.timelineY;
    if (gaps.length === 0)
        return null;
    return (React.createElement("div", { className: "absolute inset-0 pointer-events-none" }, gaps.map(function (gap, index) { return (React.createElement("div", { key: index, className: "absolute flex flex-col items-center justify-center", style: {
            left: gap.x,
            width: gap.width,
            top: timelineY - 30,
            height: 60
        } },
        React.createElement("div", { className: "flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-dashed border-gray-400 dark:border-gray-500 rounded-lg px-3 py-2 shadow-sm" },
            React.createElement(Scissors, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
            React.createElement("div", { className: "text-center" },
                React.createElement("div", { className: "text-xs font-medium text-gray-600 dark:text-gray-400" }, "Gap temporel"),
                React.createElement("div", { className: "text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1" },
                    React.createElement(Calendar, { className: "w-3 h-3" }),
                    gap.startYear,
                    " - ",
                    gap.endYear))),
        React.createElement("div", { className: "w-px border-l-2 border-dashed border-gray-400 dark:border-gray-500", style: { height: '20px' } }))); })));
};
export default TimelineGaps;
