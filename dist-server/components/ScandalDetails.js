var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useEffect, useState } from 'react';
import { MapPin, Users, Tag, Link2, Scale, DollarSign, FileText, ExternalLink, Calendar, X, Building2, AlertTriangle, BadgeCheck, Timer, Ban } from 'lucide-react';
import { formatLargeNumber, cleanScandalName, getCategoryColors, getCategoryLabel } from '../utils/scandalUtils';
import { ClickablePerson, ClickableType } from './ClickableElements';
import { ScandalModalSection } from './modals/ScandalModalSection';
import { ScandalTimeline } from './modals/ScandalTimeline';
import PersonalityModal from './modals/PersonalityModal';
var ScandalDetails = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    var scandal = _a.scandal, onClose = _a.onClose;
    var _t = useState(null), selectedPerson = _t[0], setSelectedPerson = _t[1];
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
    // Construction des événements de la timeline
    var timelineEvents = __spreadArray(__spreadArray(__spreadArray([
        { date: scandal.startDate, label: 'Faits', type: 'start' }
    ], (scandal.investigationDate ? [{
            date: scandal.investigationDate,
            label: 'Mise en examen',
            type: 'investigation'
        }] : []), true), (scandal.judgmentDate ? [{
            date: scandal.judgmentDate,
            label: 'Jugement',
            type: 'judgment'
        }] : []), true), (scandal.convictionDate ? [{
            date: scandal.convictionDate,
            label: 'Condamnation',
            type: 'conviction'
        }] : []), true);
    var year = new Date(scandal.startDate).getFullYear();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4", onClick: handleOverlayClick, style: { zIndex: 60 } },
            React.createElement("div", { className: "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden" },
                React.createElement("div", { className: "sticky top-0 z-10 ".concat(getCategoryColors(scandal.type).gradient, " texture-overlay text-white p-4 border-b border-gray-200/50 dark:border-gray-700/50") },
                    React.createElement("div", { className: "flex items-start justify-between gap-4" },
                        React.createElement("div", { className: "flex-1 min-w-0" },
                            React.createElement("div", { className: "flex items-center gap-2 mb-3" }, scandal.region && (React.createElement("span", { className: "flex items-center gap-1.5 ml-5 px-2 py-1 text-sm font-medium bg-white/20 rounded-md" },
                                React.createElement(MapPin, { className: "w-3 h-3" }),
                                scandal.region))),
                            React.createElement("h2", { className: "text-2xl font-bold ml-5 text-white mb-3 mt-0" }, cleanScandalName(scandal.name)),
                            React.createElement("div", { className: "flex flex-wrap items-center ml-5 gap-2" },
                                React.createElement(ClickableType, { type: scandal.type, onFilter: onClose, className: "flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium shadow-sm bg-white/20" },
                                    React.createElement(Tag, { className: "w-3 h-3" }),
                                    getCategoryLabel(scandal.type)))),
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement("button", { onClick: onClose, className: "p-2 rounded-lg hover:bg-white/20 transition-colors", title: "Fermer (\u00C9chap)" },
                                React.createElement(X, { className: "w-8 h-8 text-white" }))))),
                React.createElement("div", { className: "overflow-y-auto max-h-[calc(90vh-12rem)]" },
                    React.createElement("div", { className: "p-6 space-y-6" },
                        React.createElement(ScandalModalSection, { title: "Description", icon: FileText, className: "bg-white dark:bg-gray-800 p-6 rounded-xl border border-2 border-gray-300 dark:border-gray-700/50" },
                            React.createElement("div", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed" }, scandal.description)),
                        (((_b = scandal.moneyAmount) !== null && _b !== void 0 ? _b : 0) > 0 || ((_c = scandal.fine) !== null && _c !== void 0 ? _c : 0) > 0 || ((_d = scandal.prisonYears) !== null && _d !== void 0 ? _d : 0) > 0 || ((_e = scandal.ineligibilityYears) !== null && _e !== void 0 ? _e : 0) > 0 || ((_g = (_f = scandal.sanctions) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : 0) > 0 || scandal.status || scandal.politicalParty) && (React.createElement(ScandalModalSection, { title: "Faits & Sanctions", icon: Scale, className: "bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50" },
                            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                                scandal.status && (React.createElement("div", { className: "p-4 rounded-xl border ".concat(scandal.status === 'convicted' ? 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/30' :
                                        scandal.status === 'acquitted' ? 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800/30' :
                                            'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-800/30') },
                                    React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                                        scandal.status === 'convicted' ? React.createElement(AlertTriangle, { className: "w-4 h-4 text-red-500 dark:text-red-400" }) :
                                            scandal.status === 'acquitted' ? React.createElement(BadgeCheck, { className: "w-4 h-4 text-green-500 dark:text-green-400" }) :
                                                React.createElement(Timer, { className: "w-4 h-4 text-yellow-500 dark:text-yellow-400" }),
                                        React.createElement("span", { className: "text-sm ".concat(scandal.status === 'convicted' ? 'text-red-600 dark:text-red-400' :
                                                scandal.status === 'acquitted' ? 'text-green-600 dark:text-green-400' :
                                                    'text-yellow-600 dark:text-yellow-400') }, "Statut")),
                                    React.createElement("div", { className: "text-xl font-bold ".concat(scandal.status === 'convicted' ? 'text-red-700 dark:text-red-300' :
                                            scandal.status === 'acquitted' ? 'text-green-700 dark:text-green-300' :
                                                'text-yellow-700 dark:text-yellow-300') }, scandal.status === 'convicted' ? 'Condamné' :
                                        scandal.status === 'acquitted' ? 'Acquitté' :
                                            scandal.status === 'ongoing' ? 'En cours' : 'Jugé'))),
                                ((_h = scandal.moneyAmount) !== null && _h !== void 0 ? _h : 0) > 0 && (React.createElement("div", { className: "bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-800/30" },
                                    React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                                        React.createElement(DollarSign, { className: "w-4 h-4 text-red-500 dark:text-red-400" }),
                                        React.createElement("span", { className: "text-sm text-red-600 dark:text-red-400" }, "Montant concern\u00E9")),
                                    React.createElement("div", { className: "text-xl font-bold text-red-700 dark:text-red-300" }, formatLargeNumber((_j = scandal.moneyAmount) !== null && _j !== void 0 ? _j : 0)))),
                                ((_k = scandal.fine) !== null && _k !== void 0 ? _k : 0) > 0 && (React.createElement("div", { className: "bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30" },
                                    React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                                        React.createElement(DollarSign, { className: "w-4 h-4 text-blue-500 dark:text-blue-400" }),
                                        React.createElement("span", { className: "text-sm text-blue-600 dark:text-blue-400" }, "Amende")),
                                    React.createElement("div", { className: "text-xl font-bold text-blue-700 dark:text-blue-300" }, formatLargeNumber((_l = scandal.fine) !== null && _l !== void 0 ? _l : 0)))),
                                ((_m = scandal.prisonYears) !== null && _m !== void 0 ? _m : 0) > 0 && (React.createElement("div", { className: "bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-800/30" },
                                    React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                                        React.createElement(Scale, { className: "w-4 h-4 text-orange-500 dark:text-orange-400" }),
                                        React.createElement("span", { className: "text-sm text-orange-600 dark:text-orange-400" }, "Prison")),
                                    React.createElement("div", { className: "text-xl font-bold text-orange-700 dark:text-orange-300" }, "".concat((_o = scandal.prisonYears) !== null && _o !== void 0 ? _o : 0, " an").concat(((_p = scandal.prisonYears) !== null && _p !== void 0 ? _p : 0) > 1 ? 's' : '')))),
                                ((_q = scandal.ineligibilityYears) !== null && _q !== void 0 ? _q : 0) > 0 && (React.createElement("div", { className: "bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800/30" },
                                    React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                                        React.createElement(Ban, { className: "w-4 h-4 text-purple-500 dark:text-purple-400" }),
                                        React.createElement("span", { className: "text-sm text-purple-600 dark:text-purple-400" }, "In\u00E9ligibilit\u00E9")),
                                    React.createElement("div", { className: "text-xl font-bold text-purple-700 dark:text-purple-300" }, "".concat((_r = scandal.ineligibilityYears) !== null && _r !== void 0 ? _r : 0, " an").concat(((_s = scandal.ineligibilityYears) !== null && _s !== void 0 ? _s : 0) > 1 ? 's' : ''))))))),
                        React.createElement(ScandalModalSection, { title: "Personnes impliqu\u00E9es", icon: Users, className: "bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50" },
                            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, scandal.personalities.map(function (person, index) {
                                var _a;
                                // Chercher si la personne a des sanctions
                                var sanction = (_a = scandal.sanctions) === null || _a === void 0 ? void 0 : _a.find(function (s) { return s.person === person; });
                                return (React.createElement("div", { key: index, className: "flex flex-col gap-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-600/50" },
                                    React.createElement("div", null,
                                        React.createElement("div", { className: "font-medium text-gray-900 dark:text-white" },
                                            React.createElement(ClickablePerson, { name: person, onFilter: onClose }, person)),
                                        scandal.positions[index] && (React.createElement("div", { className: "text-sm text-gray-600 dark:text-gray-400" }, scandal.positions[index]))),
                                    sanction && (React.createElement("div", { className: "mt-2 pt-2 border-t border-gray-200/50 dark:border-gray-600/50" },
                                        React.createElement("div", { className: "text-sm text-gray-600 dark:text-gray-400" }, sanction.penalty),
                                        sanction.fine > 0 && (React.createElement("div", { className: "text-sm font-medium text-blue-600 dark:text-blue-400 mt-1" },
                                            "Amende : ",
                                            formatLargeNumber(sanction.fine),
                                            " \u20AC"))))));
                            }))),
                        (scandal.politicalParty || scandal.institution) && (React.createElement(ScandalModalSection, { title: "Institution concern\u00E9e", icon: Building2, className: "bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50" },
                            React.createElement("div", { className: "space-y-4" },
                                scandal.politicalParty && (React.createElement("div", { className: "bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-600/50" },
                                    React.createElement("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1" }, "Parti politique"),
                                    React.createElement("div", { className: "font-medium text-gray-900 dark:text-white" }, scandal.politicalParty))),
                                scandal.institution && (React.createElement("div", { className: "bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-600/50" },
                                    React.createElement("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1" }, "Institution"),
                                    React.createElement("div", { className: "font-medium text-gray-900 dark:text-white" }, scandal.institution)))))),
                        React.createElement(ScandalModalSection, { title: "Chronologie", icon: Calendar, className: "bg-white dark:bg-gray-800 p-6 pb-0 rounded-xl border border-gray-100 dark:border-gray-700/50" },
                            React.createElement(ScandalTimeline, { events: timelineEvents })),
                        ((scandal.tags && scandal.tags.length > 0) || (scandal.relatedScandals && scandal.relatedScandals.length > 0)) && (React.createElement(ScandalModalSection, { title: "Tags et connexions", icon: Tag, className: "bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50" },
                            scandal.tags && scandal.tags.length > 0 && (React.createElement("div", { className: "mb-4" },
                                React.createElement("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2" }, "Mots-cl\u00E9s"),
                                React.createElement("div", { className: "flex flex-wrap gap-2" }, scandal.tags.map(function (tag, index) { return (React.createElement(ClickableType, { key: index, type: tag, onFilter: onClose, className: "px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" }, tag)); })))),
                            scandal.relatedScandals && scandal.relatedScandals.length > 0 && (React.createElement("div", null,
                                React.createElement("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2" }, "Affaires li\u00E9es"),
                                React.createElement("div", { className: "space-y-2" }, scandal.relatedScandals.map(function (related, index) { return (React.createElement("div", { key: index, className: "flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 transition-colors" },
                                    React.createElement(Link2, { className: "w-4 h-4" }),
                                    related)); })))))),
                        scandal.sources && scandal.sources.length > 0 && (React.createElement(ScandalModalSection, { title: "Sources", icon: FileText, className: "bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700/50" },
                            React.createElement("div", { className: "space-y-2" }, scandal.sources.map(function (source, index) { return (React.createElement("a", { key: index, href: source.url, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 transition-colors" },
                                React.createElement(ExternalLink, { className: "w-4 h-4" }),
                                source.name)); })))))))),
        selectedPerson && (React.createElement(PersonalityModal, { name: selectedPerson, onClose: function () { return setSelectedPerson(null); } }))));
};
export default ScandalDetails;
