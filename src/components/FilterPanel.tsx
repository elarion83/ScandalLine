import React, { useMemo, useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterOptions, Scandal } from '../types/scandal';
import { getMainCategory, getCategoryLabel } from '../utils/scandalUtils';

interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  scandals: Scandal[];
  onClose: () => void;
}

const ITEMS_PER_SECTION = 6;

const FilterPanel: React.FC<FilterPanelProps> = ({ 
  filters, 
  onFiltersChange, 
  scandals, 
  onClose 
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    types: false,
    parties: false,
    personalities: false
  });

  // Calculate counts for each filter option based on current filters
  const filterCounts = useMemo(() => {
    const scandalTypes = Array.from(new Set(scandals.map(s => getMainCategory(s.type))));
    const parties = Array.from(new Set(scandals.filter(s => s.politicalParty).map(s => s.politicalParty!)));
    const personalities = Array.from(new Set(scandals.flatMap(s => s.personalities || [])));
    
    // For each filter option, calculate how many scandals would match if only that filter was applied
    const getCountForFilter = (filterType: string, filterValue: string) => {
      return scandals.filter(scandal => {
        // Apply all current filters except the one we're counting
        const tempFilters = { ...filters };
        
        // Apply the specific filter we're counting
        if (filterType === 'type') {
          tempFilters.types = [filterValue];
        } else if (filterType === 'party') {
          tempFilters.parties = [filterValue];
        } else if (filterType === 'personality') {
          tempFilters.personalities = [filterValue];
        }
        
        // Check if scandal matches the temp filters
        if (tempFilters.types.length > 0 && !tempFilters.types.includes(getMainCategory(scandal.type))) {
          return false;
        }
        
        const scandalYear = new Date(scandal.startDate).getFullYear();
        if (scandalYear < tempFilters.dateRange.start || scandalYear > tempFilters.dateRange.end) {
          return false;
        }
        
        if (tempFilters.parties.length > 0 && scandal.politicalParty) {
          if (!tempFilters.parties.includes(scandal.politicalParty)) {
            return false;
          }
        }

        if (tempFilters.personalities.length > 0) {
          const scandalPersonalities = scandal.personalities || [];
          const hasPersonality = scandalPersonalities.some(p => 
            tempFilters.personalities.some(fp => p.toLowerCase().includes(fp.toLowerCase()))
          );
          if (!hasPersonality) return false;
        }
        
        return true;
      }).length;
    };
    
    return {
      types: scandalTypes.reduce((acc, type) => {
        acc[type] = getCountForFilter('type', type);
        return acc;
      }, {} as Record<string, number>),
      parties: parties.reduce((acc, party) => {
        acc[party] = getCountForFilter('party', party);
        return acc;
      }, {} as Record<string, number>),
      personalities: personalities.reduce((acc, person) => {
        acc[person] = getCountForFilter('personality', person);
        return acc;
      }, {} as Record<string, number>)
    };
  }, [scandals, filters]);

  const handleTypeToggle = (type: string) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type];
    
    onFiltersChange({ ...filters, types: newTypes });
  };

  const handlePartyToggle = (party: string) => {
    const newParties = filters.parties.includes(party)
      ? filters.parties.filter(p => p !== party)
      : [...filters.parties, party];
    
    onFiltersChange({ ...filters, parties: newParties });
  };

  const handlePersonalityToggle = (person: string) => {
    const newPersonalities = filters.personalities.includes(person)
      ? filters.personalities.filter(p => p !== person)
      : [...filters.personalities, person];
    
    onFiltersChange({ ...filters, personalities: newPersonalities });
  };

  const handleDateRangeChange = (field: 'start' | 'end', value: number) => {
    const newDateRange = { ...filters.dateRange, [field]: value };
    onFiltersChange({ ...filters, dateRange: newDateRange });
  };

  const clearFilters = () => {
    onFiltersChange({
      types: [],
      dateRange: { start: 2000, end: 2025 },
      personalities: [],
      parties: []
    });
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      political: 'Politique',
      media: 'Médiatique',
      financial: 'Financier',
      corruption: 'Corruption'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'tween', duration: 0.2 }}
      className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filtres</h2>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-white dark:bg-gray-800">
        {/* Date Range */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Période</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Début</label>
              <input
                type="number"
                value={filters.dateRange.start}
                onChange={(e) => handleDateRangeChange('start', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                min="2000"
                max="2025"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Fin</label>
              <input
                type="number"
                value={filters.dateRange.end}
                onChange={(e) => handleDateRangeChange('end', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                min="2000"
                max="2025"
              />
            </div>
          </div>
        </div>

        {/* Types */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Type d'affaire</h3>
          <div className="space-y-2">
            {Object.entries(filterCounts.types)
              .sort(([typeA, countA], [typeB, countB]) => {
                // D'abord on compare si les éléments sont cochés
                const isCheckedA = filters.types.includes(typeA);
                const isCheckedB = filters.types.includes(typeB);
                if (isCheckedA !== isCheckedB) return isCheckedB ? 1 : -1;
                // Ensuite on trie par nombre d'occurrences
                return countB - countA;
              })
              .slice(0, expandedSections.types ? undefined : ITEMS_PER_SECTION)
              .map(([type, count]) => (
                <label key={type} className="flex items-center justify-between cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-0 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={filters.types.includes(type)}
                        onChange={() => handleTypeToggle(type)}
                        className="peer sr-only"
                      />
                      <div className="h-5 w-5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:border-violet-500 dark:peer-checked:border-violet-400 transition-colors" />
                      <div className="absolute h-3 w-3 rounded-sm bg-violet-500 dark:bg-violet-400 scale-0 peer-checked:scale-100 transition-transform duration-200 ease-out" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {getCategoryLabel(type)}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full">
                    {count}
                  </span>
                </label>
              ))}
            {Object.keys(filterCounts.types).length > ITEMS_PER_SECTION && (
              <button
                onClick={() => toggleSection('types')}
                className="w-full mt-2 flex items-center justify-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              >
                {expandedSections.types ? (
                  <>
                    Voir moins
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Voir {Object.keys(filterCounts.types).length - ITEMS_PER_SECTION} de plus
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Parties */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Parti politique</h3>
          <div className="space-y-2">
            {Object.entries(filterCounts.parties)
              .sort(([partyA, countA], [partyB, countB]) => {
                // D'abord on compare si les éléments sont cochés
                const isCheckedA = filters.parties.includes(partyA);
                const isCheckedB = filters.parties.includes(partyB);
                if (isCheckedA !== isCheckedB) return isCheckedB ? 1 : -1;
                // Ensuite on trie par nombre d'occurrences
                return countB - countA;
              })
              .slice(0, expandedSections.parties ? undefined : ITEMS_PER_SECTION)
              .map(([party, count]) => (
                <label key={party} className="flex items-center justify-between cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-0 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={filters.parties.includes(party)}
                        onChange={() => handlePartyToggle(party)}
                        className="peer sr-only"
                      />
                      <div className="h-5 w-5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:border-violet-500 dark:peer-checked:border-violet-400 transition-colors" />
                      <div className="absolute h-3 w-3 rounded-sm bg-violet-500 dark:bg-violet-400 scale-0 peer-checked:scale-100 transition-transform duration-200 ease-out" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{party}</span>
                  </div>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full">
                    {count}
                  </span>
                </label>
              ))}
            {Object.keys(filterCounts.parties).length > ITEMS_PER_SECTION && (
              <button
                onClick={() => toggleSection('parties')}
                className="w-full mt-2 flex items-center justify-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              >
                {expandedSections.parties ? (
                  <>
                    Voir moins
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Voir {Object.keys(filterCounts.parties).length - ITEMS_PER_SECTION} de plus
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Personalities */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Personnalités</h3>
          <div className="space-y-2">
            {Object.entries(filterCounts.personalities)
              .sort(([personA, countA], [personB, countB]) => {
                // D'abord on compare si les éléments sont cochés
                const isCheckedA = filters.personalities.includes(personA);
                const isCheckedB = filters.personalities.includes(personB);
                if (isCheckedA !== isCheckedB) return isCheckedB ? 1 : -1;
                // Ensuite on trie par nombre d'occurrences
                return countB - countA;
              })
              .slice(0, expandedSections.personalities ? undefined : ITEMS_PER_SECTION)
              .map(([person, count]) => (
                <label key={person} className="flex items-center justify-between cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-0 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={filters.personalities.includes(person)}
                        onChange={() => handlePersonalityToggle(person)}
                        className="peer sr-only"
                      />
                      <div className="h-5 w-5 rounded border-2 border-gray-300 dark:border-gray-600 peer-checked:border-violet-500 dark:peer-checked:border-violet-400 transition-colors" />
                      <div className="absolute h-3 w-3 rounded-sm bg-violet-500 dark:bg-violet-400 scale-0 peer-checked:scale-100 transition-transform duration-200 ease-out" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{person}</span>
                  </div>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full">
                    {count}
                  </span>
                </label>
              ))}
            {Object.keys(filterCounts.personalities).length > ITEMS_PER_SECTION && (
              <button
                onClick={() => toggleSection('personalities')}
                className="w-full mt-2 flex items-center justify-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              >
                {expandedSections.personalities ? (
                  <>
                    Voir moins
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Voir {Object.keys(filterCounts.personalities).length - ITEMS_PER_SECTION} de plus
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Clear Filters Button - Fixed at bottom */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <button
          onClick={clearFilters}
          className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </motion.div>
  );
};

export default FilterPanel;