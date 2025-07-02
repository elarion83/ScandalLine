import React from 'react';
import { X, TrendingUp, Users, DollarSign, Scale, Calendar, FileText, Building2, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatLargeNumber, getCategoryLabel, getMainCategory, getCategoryColors } from '../utils/scandalUtils';
var StatsPanel = function (_a) {
    var stats = _a.stats, scandals = _a.scandals, onClose = _a.onClose;
    // Regrouper les statistiques par catégorie principale
    var statsByMainCategory = Object.entries(stats.byType).reduce(function (acc, _a) {
        var type = _a[0], count = _a[1];
        var mainCategory = getMainCategory(type);
        acc[mainCategory] = (acc[mainCategory] || 0) + count;
        return acc;
    }, {});
    var maxByType = Math.max.apply(Math, Object.values(statsByMainCategory));
    var maxByParty = Math.max.apply(Math, Object.values(stats.byParty));
    var maxByDecade = Math.max.apply(Math, Object.values(stats.byDecade));
    return (React.createElement(motion.div, { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' }, transition: { type: 'tween', duration: 0.2 }, className: "w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col h-full shadow-2xl" },
        React.createElement("div", { className: "p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-gray-100 dark:bg-gray-800" },
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement(BarChart2, { className: "w-5 h-5 text-gray-900 dark:text-white" }),
                React.createElement("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white" }, "Statistiques")),
            React.createElement("button", { onClick: onClose, className: "p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" },
                React.createElement(X, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" }))),
        React.createElement("div", { className: "flex-1 overflow-y-auto p-4 space-y-6 bg-white dark:bg-gray-800" },
            React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                React.createElement("div", { className: "bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg" },
                    React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                        React.createElement(TrendingUp, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" }),
                        React.createElement("span", { className: "text-xs text-blue-600 dark:text-blue-400 font-medium" }, "Total")),
                    React.createElement("div", { className: "text-2xl font-bold text-blue-700 dark:text-blue-300" }, stats.total),
                    React.createElement("div", { className: "text-xs text-blue-600 dark:text-blue-400" }, "affaires")),
                React.createElement("div", { className: "bg-red-50 dark:bg-red-900/20 p-4 rounded-lg" },
                    React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                        React.createElement(DollarSign, { className: "w-4 h-4 text-red-600 dark:text-red-400" }),
                        React.createElement("span", { className: "text-xs text-red-600 dark:text-red-400 font-medium" }, "Concern\u00E9s")),
                    React.createElement("div", { className: "text-lg font-bold text-red-700 dark:text-red-300" }, formatLargeNumber(stats.totalMoney)),
                    React.createElement("div", { className: "text-xs text-red-600 dark:text-red-400" }, "au total")),
                React.createElement("div", { className: "bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg" },
                    React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                        React.createElement(Scale, { className: "w-4 h-4 text-purple-600 dark:text-purple-400" }),
                        React.createElement("span", { className: "text-xs text-purple-600 dark:text-purple-400 font-medium" }, "Prison")),
                    React.createElement("div", { className: "text-2xl font-bold text-purple-700 dark:text-purple-300" }, stats.totalPrisonYears),
                    React.createElement("div", { className: "text-xs text-purple-600 dark:text-purple-400" }, "ann\u00E9es")),
                React.createElement("div", { className: "bg-green-50 dark:bg-green-900/20 p-4 rounded-lg" },
                    React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                        React.createElement(Users, { className: "w-4 h-4 text-green-600 dark:text-green-400" }),
                        React.createElement("span", { className: "text-xs text-green-600 dark:text-green-400 font-medium" }, "Amendes")),
                    React.createElement("div", { className: "text-lg font-bold text-green-700 dark:text-green-300" }, formatLargeNumber(stats.totalFines)),
                    React.createElement("div", { className: "text-xs text-green-600 dark:text-green-400" }, "cumul\u00E9es"))),
            React.createElement("div", null,
                React.createElement("h3", { className: "text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2" },
                    React.createElement(FileText, { className: "w-4 h-4" }),
                    React.createElement("span", null, "Par type")),
                React.createElement("div", { className: "space-y-3" }, Object.entries(statsByMainCategory)
                    .sort(function (_a, _b) {
                    var a = _a[1];
                    var b = _b[1];
                    return b - a;
                })
                    .map(function (_a) {
                    var category = _a[0], count = _a[1];
                    var colors = getCategoryColors(category);
                    var gradientClass = colors.gradient.replace('bg-gradient-to-br', 'bg-gradient-to-r');
                    return (React.createElement("div", { key: category },
                        React.createElement("div", { className: "flex justify-between items-center mb-1" },
                            React.createElement("span", { className: "text-sm text-gray-700 dark:text-gray-300" }, getCategoryLabel(category)),
                            React.createElement("span", { className: "text-sm font-medium text-gray-900 dark:text-white" }, count)),
                        React.createElement("div", { className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" },
                            React.createElement("div", { className: "h-full transition-all duration-300 ".concat(gradientClass), style: { width: "".concat((count / maxByType) * 100, "%") } }))));
                }))),
            Object.keys(stats.byParty).length > 0 && (React.createElement("div", null,
                React.createElement("h3", { className: "text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2" },
                    React.createElement(Building2, { className: "w-4 h-4" }),
                    React.createElement("span", null, "Par parti politique")),
                React.createElement("div", { className: "space-y-3" }, Object.entries(stats.byParty)
                    .sort(function (_a, _b) {
                    var a = _a[1];
                    var b = _b[1];
                    return b - a;
                })
                    .map(function (_a) {
                    var party = _a[0], count = _a[1];
                    return (React.createElement("div", { key: party },
                        React.createElement("div", { className: "flex justify-between items-center mb-1" },
                            React.createElement("span", { className: "text-sm text-gray-700 dark:text-gray-300" }, party),
                            React.createElement("span", { className: "text-sm font-medium text-gray-900 dark:text-white" }, count)),
                        React.createElement("div", { className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" },
                            React.createElement("div", { className: "h-full bg-red-500 transition-all duration-300", style: { width: "".concat((count / maxByParty) * 100, "%") } }))));
                })))),
            React.createElement("div", null,
                React.createElement("h3", { className: "text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2" },
                    React.createElement(Calendar, { className: "w-4 h-4" }),
                    React.createElement("span", null, "Par d\u00E9cennie")),
                React.createElement("div", { className: "space-y-3" }, Object.entries(stats.byDecade)
                    .sort(function (_a, _b) {
                    var a = _a[0];
                    var b = _b[0];
                    return parseInt(a) - parseInt(b);
                })
                    .map(function (_a) {
                    var decade = _a[0], count = _a[1];
                    return (React.createElement("div", { key: decade },
                        React.createElement("div", { className: "flex justify-between items-center mb-1" },
                            React.createElement("span", { className: "text-sm text-gray-700 dark:text-gray-300" },
                                decade,
                                "s"),
                            React.createElement("span", { className: "text-sm font-medium text-gray-900 dark:text-white" }, count)),
                        React.createElement("div", { className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" },
                            React.createElement("div", { className: "h-full bg-green-500 transition-all duration-300", style: { width: "".concat((count / maxByDecade) * 100, "%") } }))));
                }))))));
};
export default StatsPanel;
