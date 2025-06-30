import React from 'react';
import { useTimeline } from '../contexts/TimelineContext';
import { createContextualFilter } from '../utils/contextualFilters';

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
    dispatch({ 
      type: 'SET_CONTEXTUAL_FILTER', 
      payload: createContextualFilter('personality', name, name)
    });
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
    dispatch({ 
      type: 'SET_CONTEXTUAL_FILTER', 
      payload: createContextualFilter('party', party, party)
    });
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
    dispatch({ 
      type: 'SET_CONTEXTUAL_FILTER', 
      payload: createContextualFilter('status', status, getStatusLabel(status))
    });
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

  const getTypeLabel = (t: string): string => {
    const labels = {
      'political': 'Politiques',
      'financial': 'Financiers',
      'corruption': 'Corruption',
      'media': 'Médiatiques'
    };
    return labels[t as keyof typeof labels] || t;
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ 
      type: 'SET_CONTEXTUAL_FILTER', 
      payload: createContextualFilter('scandalType', type, getTypeLabel(type))
    });
    onFilter?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} hover:underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-pointer`}
      title={`Voir tous les scandales ${getTypeLabel(type).toLowerCase()}`}
    >
      {children}
    </button>
  );
};