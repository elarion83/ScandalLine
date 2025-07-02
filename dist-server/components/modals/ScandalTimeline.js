import React from 'react';
import { formatDate } from '../../utils/scandalUtils';
export var ScandalTimeline = function (_a) {
    var events = _a.events;
    var getEventStyle = function (type) {
        switch (type) {
            case 'start':
                return {
                    dot: 'bg-blue-500 dark:bg-blue-400 ring-blue-100 dark:ring-blue-900',
                    text: 'text-blue-700 dark:text-blue-300'
                };
            case 'investigation':
                return {
                    dot: 'bg-amber-500 dark:bg-amber-400 ring-amber-100 dark:ring-amber-900',
                    text: 'text-amber-700 dark:text-amber-300'
                };
            case 'judgment':
                return {
                    dot: 'bg-purple-500 dark:bg-purple-400 ring-purple-100 dark:ring-purple-900',
                    text: 'text-purple-700 dark:text-purple-300'
                };
            case 'conviction':
                return {
                    dot: 'bg-red-500 dark:bg-red-400 ring-red-100 dark:ring-red-900',
                    text: 'text-red-700 dark:text-red-300'
                };
        }
    };
    return (React.createElement("div", { className: "relative py-8 overflow-x-auto" },
        React.createElement("div", { className: "absolute left-0 right-0 top-11 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1" }),
        React.createElement("div", { className: "relative flex justify-between items-center min-w-[600px] px-4" }, events.map(function (event, index) {
            var style = getEventStyle(event.type);
            return (React.createElement("div", { key: index, className: "flex flex-col items-center" },
                React.createElement("div", { className: "w-4 h-4 rounded-full ".concat(style.dot, " ring-4 mb-2") }),
                React.createElement("div", { className: "text-sm font-medium text-gray-900 dark:text-white" }, formatDate(event.date)),
                React.createElement("div", { className: "text-xs ".concat(style.text) }, event.label)));
        }))));
};
