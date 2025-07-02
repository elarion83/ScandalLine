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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useMemo, useState } from 'react';
import { X, ChevronDown, ChevronUp, FileText, Building2, Users, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { getMainCategory, getCategoryLabel } from '../utils/scandalUtils';
var ITEMS_PER_SECTION = 6;
var FilterPanel = function (_a) {
    var filters = _a.filters, onFiltersChange = _a.onFiltersChange, scandals = _a.scandals, onClose = _a.onClose;
    var _b = useState({
        types: false,
        parties: false,
        personalities: false
    }), expandedSections = _b[0], setExpandedSections = _b[1];
    // Calculate counts for each filter option based on current filters
    var filterCounts = useMemo(function () {
        var scandalTypes = Array.from(new Set(scandals.map(function (s) {
            var mainCategory = getMainCategory(s.type);
            return mainCategory || 'non-categorise';
        })));
        var parties = Array.from(new Set(scandals.filter(function (s) { return s.politicalParty; }).map(function (s) { return s.politicalParty; })));
        var personalities = Array.from(new Set(scandals.flatMap(function (s) { return s.personalities || []; })));
        // For each filter option, calculate how many scandals would match if only that filter was applied
        var getCountForFilter = function (filterType, filterValue) {
            return scandals.filter(function (scandal) {
                // Créer un nouveau filtre qui ne contient que le filtre qu'on veut compter
                var tempFilters = {
                    types: filterType === 'type' ? [filterValue] : [],
                    parties: filterType === 'party' ? [filterValue] : [],
                    personalities: filterType === 'personality' ? [filterValue] : [],
                    dateRange: filters.dateRange
                };
                // Utiliser la même logique que filterScandals
                if (tempFilters.types.length > 0) {
                    var mainCategory = getMainCategory(scandal.type);
                    if (!mainCategory || !tempFilters.types.includes(mainCategory)) {
                        return false;
                    }
                }
                var scandalYear = new Date(scandal.startDate).getFullYear();
                if (scandalYear < tempFilters.dateRange.start || scandalYear > tempFilters.dateRange.end) {
                    return false;
                }
                if (tempFilters.parties.length > 0) {
                    if (!scandal.politicalParty || !tempFilters.parties.includes(scandal.politicalParty)) {
                        return false;
                    }
                }
                if (tempFilters.personalities.length > 0) {
                    var scandalPersonalities = scandal.personalities || [];
                    var hasPersonality = scandalPersonalities.some(function (p) {
                        return tempFilters.personalities.some(function (fp) { return p.toLowerCase().includes(fp.toLowerCase()); });
                    });
                    if (!hasPersonality)
                        return false;
                }
                return true;
            }).length;
        };
        return {
            types: scandalTypes.reduce(function (acc, type) {
                acc[type] = getCountForFilter('type', type);
                return acc;
            }, {}),
            parties: parties.reduce(function (acc, party) {
                acc[party] = getCountForFilter('party', party);
                return acc;
            }, {}),
            personalities: personalities.reduce(function (acc, person) {
                acc[person] = getCountForFilter('personality', person);
                return acc;
            }, {})
        };
    }, [scandals, filters]);
    // Vérifie si des filtres sont actifs
    var hasActiveFilters = useMemo(function () {
        return filters.types.length > 0 ||
            filters.parties.length > 0 ||
            filters.personalities.length > 0;
    }, [filters]);
    var handleTypeToggle = function (type) {
        var newTypes = filters.types.includes(type)
            ? filters.types.filter(function (t) { return t !== type; })
            : __spreadArray(__spreadArray([], filters.types, true), [type], false);
        onFiltersChange(__assign(__assign({}, filters), { types: newTypes }));
    };
    var handlePartyToggle = function (party) {
        var newParties = filters.parties.includes(party)
            ? filters.parties.filter(function (p) { return p !== party; })
            : __spreadArray(__spreadArray([], filters.parties, true), [party], false);
        onFiltersChange(__assign(__assign({}, filters), { parties: newParties }));
    };
    var handlePersonalityToggle = function (person) {
        var newPersonalities = filters.personalities.includes(person)
            ? filters.personalities.filter(function (p) { return p !== person; })
            : __spreadArray(__spreadArray([], filters.personalities, true), [person], false);
        onFiltersChange(__assign(__assign({}, filters), { personalities: newPersonalities }));
    };
    var handleDateRangeChange = function (field, value) {
        var _a;
        var newDateRange = __assign(__assign({}, filters.dateRange), (_a = {}, _a[field] = value, _a));
        onFiltersChange(__assign(__assign({}, filters), { dateRange: newDateRange }));
    };
    var clearFilters = function () {
        onFiltersChange({
            types: [],
            dateRange: { start: 2000, end: 2025 },
            personalities: [],
            parties: []
        });
    };
    var getTypeLabel = function (type) {
        var labels = {
            political: 'Politique',
            media: 'Médiatique',
            financial: 'Financier',
            corruption: 'Corruption'
        };
        return labels[type] || type;
    };
    var toggleSection = function (section) {
        setExpandedSections(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[section] = !prev[section], _a)));
        });
    };
    return (React.createElement(motion.div, { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' }, transition: { type: 'tween', duration: 0.2 }, style: { zIndex: 50 }, className: "w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full absolute top-0 left-0 shadow-2xl" },
        React.createElement("div", { className: "p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-gray-100 dark:bg-gray-800" },
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement(Filter, { className: "w-5 h-5 text-gray-900 dark:text-white" }),
                React.createElement("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white" }, "Filtres")),
            React.createElement("button", { onClick: onClose, className: "p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" },
                React.createElement(X, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" }))),
        React.createElement("div", { className: "flex-1 overflow-y-auto p-4 space-y-6 bg-white dark:bg-gray-800" },
            React.createElement("div", null,
                React.createElement("h3", { className: "text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2" },
                    React.createElement(FileText, { className: "w-4 h-4" }),
                    React.createElement("span", null, "Type d'affaire")),
                React.createElement("div", { className: "space-y-2" },
                    Object.entries(filterCounts.types)
                        .sort(function (_a, _b) {
                        var typeA = _a[0], countA = _a[1];
                        var typeB = _b[0], countB = _b[1];
                        // D'abord on compare si les éléments sont cochés
                        var isCheckedA = filters.types.includes(typeA);
                        var isCheckedB = filters.types.includes(typeB);
                        if (isCheckedA !== isCheckedB)
                            return isCheckedB ? 1 : -1;
                        // Ensuite on trie par nombre d'occurrences
                        return countB - countA;
                    })
                        .slice(0, expandedSections.types ? undefined : ITEMS_PER_SECTION)
                        .map(function (_a) {
                        var type = _a[0], count = _a[1];
                        return (React.createElement("label", { key: type, className: "flex items-center justify-between cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-0 rounded-lg transition-colors" },
                            React.createElement("div", { className: "flex items-center gap-3" },
                                React.createElement("div", { className: "relative flex items-center justify-center" },
                                    React.createElement("input", { type: "checkbox", checked: filters.types.includes(type), onChange: function () { return handleTypeToggle(type); }, className: "peer sr-only" }),
                                    React.createElement("div", { className: "h-5 w-5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:border-violet-500 dark:peer-checked:border-violet-400 transition-colors" }),
                                    React.createElement("div", { className: "absolute h-3 w-3 rounded-sm bg-violet-500 dark:bg-violet-400 scale-0 peer-checked:scale-100 transition-transform duration-200 ease-out" })),
                                React.createElement("span", { className: "text-sm text-gray-700 dark:text-gray-300 font-medium" }, getCategoryLabel(type))),
                            React.createElement("span", { className: "text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full" }, count)));
                    }),
                    Object.keys(filterCounts.types).length > ITEMS_PER_SECTION && (React.createElement("button", { onClick: function () { return toggleSection('types'); }, className: "w-full mt-2 flex items-center justify-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2" }, expandedSections.types ? (React.createElement(React.Fragment, null,
                        "Voir moins",
                        React.createElement(ChevronUp, { className: "w-4 h-4" }))) : (React.createElement(React.Fragment, null,
                        "Voir ",
                        Object.keys(filterCounts.types).length - ITEMS_PER_SECTION,
                        " de plus",
                        React.createElement(ChevronDown, { className: "w-4 h-4" }))))))),
            React.createElement("div", null,
                React.createElement("h3", { className: "text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2" },
                    React.createElement(Building2, { className: "w-4 h-4" }),
                    React.createElement("span", null, "Parti politique")),
                React.createElement("div", { className: "space-y-2" },
                    Object.entries(filterCounts.parties)
                        .sort(function (_a, _b) {
                        var partyA = _a[0], countA = _a[1];
                        var partyB = _b[0], countB = _b[1];
                        // D'abord on compare si les éléments sont cochés
                        var isCheckedA = filters.parties.includes(partyA);
                        var isCheckedB = filters.parties.includes(partyB);
                        if (isCheckedA !== isCheckedB)
                            return isCheckedB ? 1 : -1;
                        // Ensuite on trie par nombre d'occurrences
                        return countB - countA;
                    })
                        .slice(0, expandedSections.parties ? undefined : ITEMS_PER_SECTION)
                        .map(function (_a) {
                        var party = _a[0], count = _a[1];
                        return (React.createElement("label", { key: party, className: "flex items-center justify-between cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-0 rounded-lg transition-colors" },
                            React.createElement("div", { className: "flex items-center gap-3" },
                                React.createElement("div", { className: "relative flex items-center justify-center" },
                                    React.createElement("input", { type: "checkbox", checked: filters.parties.includes(party), onChange: function () { return handlePartyToggle(party); }, className: "peer sr-only" }),
                                    React.createElement("div", { className: "h-5 w-5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:border-violet-500 dark:peer-checked:border-violet-400 transition-colors" }),
                                    React.createElement("div", { className: "absolute h-3 w-3 rounded-sm bg-violet-500 dark:bg-violet-400 scale-0 peer-checked:scale-100 transition-transform duration-200 ease-out" })),
                                React.createElement("span", { className: "text-sm text-gray-700 dark:text-gray-300 font-medium" }, party)),
                            React.createElement("span", { className: "text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full" }, count)));
                    }),
                    Object.keys(filterCounts.parties).length > ITEMS_PER_SECTION && (React.createElement("button", { onClick: function () { return toggleSection('parties'); }, className: "w-full mt-2 flex items-center justify-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2" }, expandedSections.parties ? (React.createElement(React.Fragment, null,
                        "Voir moins",
                        React.createElement(ChevronUp, { className: "w-4 h-4" }))) : (React.createElement(React.Fragment, null,
                        "Voir ",
                        Object.keys(filterCounts.parties).length - ITEMS_PER_SECTION,
                        " de plus",
                        React.createElement(ChevronDown, { className: "w-4 h-4" }))))))),
            React.createElement("div", null,
                React.createElement("h3", { className: "text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2" },
                    React.createElement(Users, { className: "w-4 h-4" }),
                    React.createElement("span", null, "Personnalit\u00E9s")),
                React.createElement("div", { className: "space-y-2" },
                    Object.entries(filterCounts.personalities)
                        .sort(function (_a, _b) {
                        var personA = _a[0], countA = _a[1];
                        var personB = _b[0], countB = _b[1];
                        // D'abord on compare si les éléments sont cochés
                        var isCheckedA = filters.personalities.includes(personA);
                        var isCheckedB = filters.personalities.includes(personB);
                        if (isCheckedA !== isCheckedB)
                            return isCheckedB ? 1 : -1;
                        // Ensuite on trie par nombre d'occurrences
                        return countB - countA;
                    })
                        .slice(0, expandedSections.personalities ? undefined : ITEMS_PER_SECTION)
                        .map(function (_a) {
                        var person = _a[0], count = _a[1];
                        return (React.createElement("label", { key: person, className: "flex items-center justify-between cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-0 rounded-lg transition-colors" },
                            React.createElement("div", { className: "flex items-center gap-3" },
                                React.createElement("div", { className: "relative flex items-center justify-center" },
                                    React.createElement("input", { type: "checkbox", checked: filters.personalities.includes(person), onChange: function () { return handlePersonalityToggle(person); }, className: "peer sr-only" }),
                                    React.createElement("div", { className: "h-5 w-5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:border-violet-500 dark:peer-checked:border-violet-400 transition-colors" }),
                                    React.createElement("div", { className: "absolute h-3 w-3 rounded-sm bg-violet-500 dark:bg-violet-400 scale-0 peer-checked:scale-100 transition-transform duration-200 ease-out" })),
                                React.createElement("span", { className: "text-sm text-gray-700 dark:text-gray-300 font-medium" }, person)),
                            React.createElement("span", { className: "text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full" }, count)));
                    }),
                    Object.keys(filterCounts.personalities).length > ITEMS_PER_SECTION && (React.createElement("button", { onClick: function () { return toggleSection('personalities'); }, className: "w-full mt-2 flex items-center justify-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2" }, expandedSections.personalities ? (React.createElement(React.Fragment, null,
                        "Voir moins",
                        React.createElement(ChevronUp, { className: "w-4 h-4" }))) : (React.createElement(React.Fragment, null,
                        "Voir ",
                        Object.keys(filterCounts.personalities).length - ITEMS_PER_SECTION,
                        " de plus",
                        React.createElement(ChevronDown, { className: "w-4 h-4" })))))))),
        hasActiveFilters && (React.createElement("div", { className: "p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" },
            React.createElement("button", { onClick: clearFilters, className: "w-full py-2 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 transition-all duration-200 hover:scale-[1.02] shadow-md" }, "R\u00E9initialiser les filtres")))));
};
export default FilterPanel;
