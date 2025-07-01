import React from 'react';
import { ArrowLeft, Users, Building, Scale, FileText } from 'lucide-react';
import { ContextualFilter } from '../types/scandal';
import { getContextualTitle, getContextualDescription } from '../utils/contextualFilters';
import ShareTimeline from './ShareTimeline';
import { useTimeline } from '../contexts/TimelineContext';

interface ContextualHeaderProps {
  contextualFilter: ContextualFilter;
  filteredCount: number;
  totalMoney: number;
  filteredScandals: any[];
  onBack: () => void;
  shouldUseAdaptiveLayout: boolean;
  startYear: number;
  endYear: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ContextualHeader: React.FC<ContextualHeaderProps> = ({
  contextualFilter,
  filteredCount,
  totalMoney,
  filteredScandals,
  onBack,
  shouldUseAdaptiveLayout,
  startYear,
  endYear,
  containerRef
}) => {
  const { state } = useTimeline();

  const getIcon = () => {
    switch (contextualFilter.type) {
      case 'personality':
        return <Users className="w-6 h-6" />;
      case 'party':
        return <Building className="w-6 h-6" />;
      case 'status':
        return <Scale className="w-6 h-6" />;
      case 'scandalType':
        return <FileText className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  const getColorClasses = () => {
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

  return (
    <div className="texture-overlay bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 border-b border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium">Retour</span>
          </button>

          <div className="w-px h-8 bg-white/20" />

          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${getColorClasses()}`}>
              {getIcon()}
            </div>
            <div>
              <h1 className="text-xl font-bold">
                {getContextualTitle(contextualFilter)}
              </h1>
              <p className="text-sm text-gray-300">
                {getContextualDescription(contextualFilter, filteredCount)} • {totalMoney.toLocaleString('fr-FR')}€ concernés
              </p>
            </div>
          </div>
        </div>

        <ShareTimeline scandals={filteredScandals} contextualFilter={contextualFilter} />
      </div>
    </div>
  );
};

export default ContextualHeader;