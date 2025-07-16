import React, { useMemo, useState } from 'react';
import { X, ChevronDown, ChevronUp, FileText, Building2, Users, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FilterOptions, Scandal, ContextualFilter } from '../types/scandal';
import { getMainCategory, getCategoryLabel } from '../utils/scandalUtils';
import PersonalityModal from './modals/PersonalityModal';

interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  scandals: Scandal[];
  onClose: () => void;
  contextualFilter?: ContextualFilter | null;
}

const ITEMS_PER_SECTION = 6;

const FilterPanel: React.FC<FilterPanelProps> = ({ 
  filters, 
  onFiltersChange, 
  scandals, 
  onClose,
  contextualFilter
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    types: false,
    parties: false,
    personalities: false
  });
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  // Calculate counts for each filter option based on current filters
  const filterCounts = useMemo(() => {
    const scandalTypes = Array.from(new Set(scandals.map(s => {
      const mainCategory = getMainCategory(s.type);
      return mainCategory || 'non-categorise';
    })));
    const parties = Array.from(new Set(scandals.filter(s => s.politicalParty).map(s => s.politicalParty!)));
    
    // Exclure la personnalité actuellement sélectionnée dans le filtre contextuel
    let personalities = Array.from(new Set(scandals.flatMap(s => s.personalities || []).map(p => typeof p === 'string' ? p : p.personality)));
    if (contextualFilter && contextualFilter.type === 'personality') {
      personalities = personalities.filter(person => person !== contextualFilter.value.toString());
    }
    
    // For each filter option, calculate how many scandals would match if only that filter was applied
    const getCountForFilter = (filterType: string, filterValue: string) => {
      return scandals.filter(scandal => {
        // Créer un nouveau filtre qui ne contient que le filtre qu'on veut compter
        const tempFilters = {
          types: filterType === 'type' ? [filterValue] : [],
          parties: filterType === 'party' ? [filterValue] : [],
          personalities: filterType === 'personality' ? [filterValue] : [],
          dateRange: filters.dateRange
        };
        
        // Utiliser la même logique que filterScandals
        if (tempFilters.types.length > 0) {
          const mainCategory = getMainCategory(scandal.type);
          if (!mainCategory || !tempFilters.types.includes(mainCategory)) {
            return false;
          }
        }
        
        const scandalYear = new Date(scandal.startDate).getFullYear();
        if (scandalYear < tempFilters.dateRange.start || scandalYear > tempFilters.dateRange.end) {
          return false;
        }
        
        if (tempFilters.parties.length > 0) {
          if (!scandal.politicalParty || !tempFilters.parties.includes(scandal.politicalParty)) {
            return false;
          }
        }

        if (tempFilters.personalities.length > 0) {
          const scandalPersonalities = scandal.personalities || [];
          const hasPersonality = scandalPersonalities.some(p => {
            const personalityName = typeof p === 'string' ? p : p.personality;
            return tempFilters.personalities.some(fp => personalityName.toLowerCase().includes(fp.toLowerCase()));
          });
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

  // Vérifie si des filtres sont actifs
  const hasActiveFilters = useMemo(() => {
    return filters.types.length > 0 || 
           filters.parties.length > 0 || 
           filters.personalities.length > 0;
  }, [filters]);

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

  const clearFilters = () => {
    onFiltersChange({
      types: [],
      dateRange: { start: 2000, end: 2025 },
      personalities: [],
      parties: []
    });
  };

 

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handlePersonalityClick = (person: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedPerson(person);
  };

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'tween', duration: 0.2 }}
      style={{ zIndex: 50 }}
      className="w-80 md:w-80 w-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full absolute top-0 left-0 shadow-2xl"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-900 dark:text-white" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filtres</h2>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          title="Fermer les filtres"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-white dark:bg-gray-800">
        {/* Date Range - Temporarily disabled
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Période</span>
          </h3>
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
        */}

        {/* Types */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Type d'affaire</span>
          </h3>
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
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            <span>Parti politique</span>
          </h3>
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
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Personnalités</span>
          </h3>
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
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handlePersonalityClick(person, e)}
                      className="p-1 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full">
                      {count}
                    </span>
                  </div>
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

      {/* Reset Filters Button */}
      {hasActiveFilters && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <button
            onClick={clearFilters}
            className="w-full py-2 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 transition-all duration-200 hover:scale-[1.02] shadow-md"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* PersonalityModal */}
      {selectedPerson && (
        <PersonalityModal
          name={selectedPerson}
          onClose={() => setSelectedPerson(null)}
          scandals={scandals}
        />
      )}
    </motion.div>
  );
};

export default FilterPanel;