import React from 'react';
import { ArrowLeft, Users, Building, Scale, FileText } from 'lucide-react';
import { getContextualTitle, getContextualDescription } from '../utils/contextualFilters';
import ShareTimeline from './ShareTimeline';
var ContextualHeader = function (_a) {
    var contextualFilter = _a.contextualFilter, filteredCount = _a.filteredCount, totalMoney = _a.totalMoney, filteredScandals = _a.filteredScandals, onBack = _a.onBack;
    var getIcon = function () {
        switch (contextualFilter.type) {
            case 'personality':
                return React.createElement(Users, { className: "w-6 h-6" });
            case 'party':
                return React.createElement(Building, { className: "w-6 h-6" });
            case 'status':
                return React.createElement(Scale, { className: "w-6 h-6" });
            case 'scandalType':
                return React.createElement(FileText, { className: "w-6 h-6" });
            default:
                return React.createElement(FileText, { className: "w-6 h-6" });
        }
    };
    var getColorClasses = function () {
        switch (contextualFilter.type) {
            case 'personality':
                return 'bg-slate-600 text-white';
            case 'party':
                return 'bg-slate-700 text-white';
            case 'status':
                return 'bg-slate-500 text-white';
            case 'scandalType':
                return 'bg-slate-800 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    };
    return (React.createElement("div", { className: "texture-overlay bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 border-b border-gray-700" },
        React.createElement("div", { className: "flex items-center justify-between" },
            React.createElement("div", { className: "flex items-center gap-4" },
                React.createElement("button", { onClick: onBack, className: "flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group" },
                    React.createElement(ArrowLeft, { className: "w-4 h-4 group-hover:-translate-x-0.5 transition-transform" }),
                    React.createElement("span", { className: "text-sm font-medium" }, "Retour")),
                React.createElement("div", { className: "w-px h-8 bg-white/20" }),
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("div", { className: "p-2 rounded-lg ".concat(getColorClasses()) }, getIcon()),
                    React.createElement("div", null,
                        React.createElement("h1", { className: "text-xl font-bold" }, getContextualTitle(contextualFilter)),
                        React.createElement("p", { className: "text-sm text-gray-300" },
                            getContextualDescription(contextualFilter, filteredCount),
                            " \u2022 ",
                            totalMoney.toLocaleString('fr-FR'),
                            "\u20AC concern\u00E9s")))),
            React.createElement(ShareTimeline, { scandals: filteredScandals, contextualFilter: contextualFilter }))));
};
export default ContextualHeader;
