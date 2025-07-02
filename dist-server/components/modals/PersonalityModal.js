import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, DollarSign, Scale, Users } from 'lucide-react';
import { useTimeline } from '../../contexts/TimelineContext';
import { createContextualFilter, filterTimelineBy } from '../../utils/contextualFilters';
import { nameToSlug } from '../../utils/shareUtils';
import { calculateStats, formatLargeNumber } from '../../utils/scandalUtils';
var PersonalityModal = function (_a) {
    var name = _a.name, onClose = _a.onClose, scandals = _a.scandals;
    var dispatch = useTimeline().dispatch;
    // Filtrer les scandales pour cette personne
    var personalityFilter = createContextualFilter('personality', name, name);
    var filteredScandals = filterTimelineBy(scandals, personalityFilter);
    var stats = calculateStats(filteredScandals);
    useEffect(function () {
        var handleEscape = function (event) {
            if (event.key === 'Escape')
                onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return function () { return document.removeEventListener('keydown', handleEscape); };
    }, [onClose]);
    var handleOverlayClick = function (event) {
        if (event.target === event.currentTarget)
            onClose();
    };
    var handleTimelineClick = function () {
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        // Mettre à jour l'URL avec le slug
        var slug = nameToSlug(name);
        var newUrl = "/timeline/".concat(slug);
        window.history.pushState({}, '', newUrl);
        // Appliquer le filtre contextuel
        setTimeout(function () {
            dispatch({
                type: 'SET_CONTEXTUAL_FILTER',
                payload: personalityFilter
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
        }, 300);
        onClose();
    };
    return (React.createElement(AnimatePresence, null,
        React.createElement("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4", onClick: handleOverlayClick },
            React.createElement(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 }, transition: { duration: 0.2 }, className: "bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-lg w-full overflow-hidden" },
                React.createElement("div", { className: "flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700" },
                    React.createElement("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white" }, name),
                    React.createElement("button", { onClick: onClose, className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" },
                        React.createElement(X, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" }))),
                React.createElement("div", { className: "p-6 space-y-6" },
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
                    React.createElement("div", { className: "flex justify-center" },
                        React.createElement("button", { onClick: handleTimelineClick, className: "px-6 py-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 ease-out" }, "Acc\u00E9der \u00E0 la timeline")))))));
};
export default PersonalityModal;
