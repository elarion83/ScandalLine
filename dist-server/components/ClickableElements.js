import React from 'react';
import { useTimeline } from '../contexts/TimelineContext';
import { createContextualFilter } from '../utils/contextualFilters';
import { getCategoryLabel } from '../utils/scandalUtils';
export const ClickablePerson = ({ name, className = '', children, onFilter }) => {
    const { dispatch } = useTimeline();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        // Simulate loading time
        setTimeout(() => {
            dispatch({
                type: 'SET_CONTEXTUAL_FILTER',
                payload: createContextualFilter('personality', name, name)
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
        }, 300);
        onFilter?.();
    };
    return (<button onClick={handleClick} className={`${className} hover:underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-pointer`} title={`Voir toutes les affaires impliquant ${name}`}>
      {children}
    </button>);
};
export const ClickableParty = ({ party, className = '', children, onFilter }) => {
    const { dispatch } = useTimeline();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        // Simulate loading time
        setTimeout(() => {
            dispatch({
                type: 'SET_CONTEXTUAL_FILTER',
                payload: createContextualFilter('party', party, party)
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
        }, 300);
        onFilter?.();
    };
    return (<button onClick={handleClick} className={`${className} hover:underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-pointer`} title={`Voir toutes les affaires du ${party}`}>
      {children}
    </button>);
};
export const ClickableStatus = ({ status, className = '', children, onFilter }) => {
    const { dispatch } = useTimeline();
    const getStatusLabel = (stat) => {
        const labels = {
            'convicted': 'Condamnées',
            'acquitted': 'Acquittées',
            'ongoing': 'En cours',
            'judged': 'Jugées'
        };
        return labels[stat] || stat;
    };
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        // Simulate loading time
        setTimeout(() => {
            dispatch({
                type: 'SET_CONTEXTUAL_FILTER',
                payload: createContextualFilter('status', status, getStatusLabel(status))
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
        }, 300);
        onFilter?.();
    };
    return (<button onClick={handleClick} className={`${className} hover:ring-2 hover:ring-offset-1 transition-all cursor-pointer`} title={`Voir toutes les affaires ${getStatusLabel(status).toLowerCase()}`}>
      {children}
    </button>);
};
export const ClickableType = ({ type, className = '', children, onFilter }) => {
    const { dispatch } = useTimeline();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        // Simulate loading time
        setTimeout(() => {
            dispatch({
                type: 'SET_CONTEXTUAL_FILTER',
                payload: createContextualFilter('scandalType', type, getCategoryLabel(type))
            });
            dispatch({ type: 'SET_TRANSITIONING', payload: false });
        }, 300);
        onFilter?.();
    };
    return (<button onClick={handleClick} className={`${className} hover:underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-pointer`} title={`Voir tous les scandales de type ${getCategoryLabel(type).toLowerCase()}`}>
      {children}
    </button>);
};
