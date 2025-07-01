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
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${getColorClasses()}`}>
              {getIcon()}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {getContextualTitle(contextualFilter)}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {getContextualDescription(contextualFilter, filteredCount, totalMoney)}
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