import React from 'react';
import { useTimeline } from '../contexts/TimelineContext';
import { createContextualFilter } from '../utils/contextualFilters';
import { getCategoryLabel } from '../utils/scandalUtils';
import { nameToSlug } from '../utils/shareUtils';
export var ClickablePerson = function (_a) {
    var name = _a.name, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, onFilter = _a.onFilter;
    var dispatch = useTimeline().dispatch;
    var handleClick = function (e) {
        e.stopPropagation();
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        // Mettre à jour l'URL avec le slug
        var slug = nameToSlug(name);
        var newUrl = "/timeline/".concat(slug);
        window.history.pushState({}, '', newUrl);
        // Simulate loading time
        setTimeout(function () {
            dispatch({
                type: 'SET_CONTEXTUAL_FILTER',
                payload: createContextualFilter('personality', name, name)
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
        }, 300);
        onFilter === null || onFilter === void 0 ? void 0 : onFilter();
    };
    return (React.createElement("button", { onClick: handleClick, className: "".concat(className, " hover:underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-pointer"), title: "Voir toutes les affaires impliquant ".concat(name) }, children));
};
export var ClickableParty = function (_a) {
    var party = _a.party, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, onFilter = _a.onFilter;
    var dispatch = useTimeline().dispatch;
    var handleClick = function (e) {
        e.stopPropagation();
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        // Simulate loading time
        setTimeout(function () {
            dispatch({
                type: 'SET_CONTEXTUAL_FILTER',
                payload: createContextualFilter('party', party, party)
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
        }, 300);
        onFilter === null || onFilter === void 0 ? void 0 : onFilter();
    };
    return (React.createElement("button", { onClick: handleClick, className: "".concat(className, " hover:underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-pointer"), title: "Voir toutes les affaires du ".concat(party) }, children));
};
export var ClickableStatus = function (_a) {
    var status = _a.status, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, onFilter = _a.onFilter;
    var dispatch = useTimeline().dispatch;
    var getStatusLabel = function (stat) {
        var labels = {
            'convicted': 'Condamnées',
            'acquitted': 'Acquittées',
            'ongoing': 'En cours',
            'judged': 'Jugées'
        };
        return labels[stat] || stat;
    };
    var handleClick = function (e) {
        e.stopPropagation();
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        // Simulate loading time
        setTimeout(function () {
            dispatch({
                type: 'SET_CONTEXTUAL_FILTER',
                payload: createContextualFilter('status', status, getStatusLabel(status))
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
        }, 300);
        onFilter === null || onFilter === void 0 ? void 0 : onFilter();
    };
    return (React.createElement("button", { onClick: handleClick, className: "".concat(className, " hover:ring-2 hover:ring-offset-1 transition-all cursor-pointer"), title: "Voir toutes les affaires ".concat(getStatusLabel(status).toLowerCase()) }, children));
};
export var ClickableType = function (_a) {
    var type = _a.type, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, onFilter = _a.onFilter;
    var dispatch = useTimeline().dispatch;
    var handleClick = function (e) {
        e.stopPropagation();
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        // Simulate loading time
        setTimeout(function () {
            dispatch({
                type: 'SET_CONTEXTUAL_FILTER',
                payload: createContextualFilter('scandalType', type, getCategoryLabel(type))
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
        }, 300);
        onFilter === null || onFilter === void 0 ? void 0 : onFilter();
    };
    return (React.createElement("button", { onClick: handleClick, className: "".concat(className, " hover:underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-pointer"), title: "Voir tous les scandales de type ".concat(getCategoryLabel(type).toLowerCase()) }, children));
};
