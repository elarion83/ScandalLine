import React from 'react';
import { useTimeline } from '../contexts/TimelineContext';
import { createContextualFilter } from '../utils/contextualFilters';
import { getCategoryLabel } from '../utils/scandalUtils';
import { nameToSlug } from '../utils/shareUtils';

interface ClickablePersonProps {
  name: string;
  className?: string;
  children: React.ReactNode;
  onFilter?: () => void;
}

export const ClickablePerson: React.FC<ClickablePersonProps> = ({ 
  name, 
  className = '', 
  children,
  onFilter 
}) => {
  const { dispatch } = useTimeline();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'SET_TRANSITIONING', payload: true });
    
    // Mettre à jour l'URL avec le slug
    const slug = nameToSlug(name);
    const newUrl = `/timeline/${slug}`;
    window.history.pushState({}, '', newUrl);
    
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

  return (
    <button
      onClick={handleClick}
      className={`${className} hover:underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-pointer`}
      title={`Voir toutes les affaires impliquant ${name}`}
    >
      {children}
    </button>
  );
};

interface ClickablePartyProps {
  party: string;
  className?: string;
  children: React.ReactNode;
  onFilter?: () => void;
}

export const ClickableParty: React.FC<ClickablePartyProps> = ({ 
  party, 
  className = '', 
  children,
  onFilter 
}) => {
  const { dispatch } = useTimeline();

  const handleClick = (e: React.MouseEvent) => {
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

  return (
    <button
      onClick={handleClick}
      className={`${className} hover:underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-pointer`}
      title={`Voir toutes les affaires du ${party}`}
    >
      {children}
    </button>
  );
};

interface ClickableStatusProps {
  status: string;
  className?: string;
  children: React.ReactNode;
  onFilter?: () => void;
}

export const ClickableStatus: React.FC<ClickableStatusProps> = ({ 
  status, 
  className = '', 
  children,
  onFilter 
}) => {
  const { dispatch } = useTimeline();

  const getStatusLabel = (stat: string): string => {
    const labels = {
      'convicted': 'Condamnées',
      'acquitted': 'Acquittées',
      'ongoing': 'En cours',
      'judged': 'Jugées'
    };
    return labels[stat as keyof typeof labels] || stat;
  };

  const handleClick = (e: React.MouseEvent) => {
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

  return (
    <button
      onClick={handleClick}
      className={`${className} hover:ring-2 hover:ring-offset-1 transition-all cursor-pointer`}
      title={`Voir toutes les affaires ${getStatusLabel(status).toLowerCase()}`}
    >
      {children}
    </button>
  );
};

interface ClickableTypeProps {
  type: string;
  className?: string;
  children: React.ReactNode;
  onFilter?: () => void;
}

export const ClickableType: React.FC<ClickableTypeProps> = ({ 
  type, 
  className = '', 
  children,
  onFilter 
}) => {
  const { dispatch } = useTimeline();

  const handleClick = (e: React.MouseEvent) => {
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

  return (
    <button
      onClick={handleClick}
      className={`${className} hover:underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-pointer`}
      title={`Voir tous les scandales de type ${getCategoryLabel(type).toLowerCase()}`}
    >
      {children}
    </button>
  );
};