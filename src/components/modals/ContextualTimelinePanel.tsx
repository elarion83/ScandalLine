import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Building2, TrendingUp, Star, Search, FileText, DollarSign, Award, Lock } from 'lucide-react';
import { Scandal } from '../../types/scandal';
import { perso_Photos } from '../../data/perso_photos';

interface ContextualTimelinePanelProps {
  isOpen: boolean;
  onClose: () => void;
  scandals: Scandal[];
  onSelectTimeline: (type: 'personality' | 'party', value: string, label: string) => void;
}

interface TimelineOption {
  type: 'personality' | 'party';
  value: string;
  label: string;
  count: number;
  icon: React.ReactNode;
  stats: {
    scandals: number;
    moneyAmount: number;
    fines: number;
    prisonYears: number;
  };
}

const ContextualTimelinePanel: React.FC<ContextualTimelinePanelProps> = ({
  isOpen,
  onClose,
  scandals,
  onSelectTimeline
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'personalities' | 'parties'>('all');
  const [visibleItems, setVisibleItems] = useState(10);
  const itemsPerLoad = 10;

  // Helper function to calculate detailed stats for a list of scandals
  const calculateDetailedStats = (scandals: Scandal[]) => {
    let moneyAmount = 0;
    let fines = 0;
    let prisonYears = 0;

    scandals.forEach(scandal => {
      moneyAmount += scandal.moneyAmount || 0;
      fines += scandal.fine || 0;
      prisonYears += scandal.prisonYears || 0;
    });

    return {
      scandals: scandals.length,
      moneyAmount,
      fines,
      prisonYears
    };
  };

  // Helper function to get photo URL for a personality
  const getPhotoUrl = (personalityName: string) => {
    // Check if personalityName is valid
    if (!personalityName || typeof personalityName !== 'string') {
      return null;
    }

    // Convert name to slug format
    const slug = personalityName.toLowerCase()
      .replace(/[éèêë]/g, 'e')
      .replace(/[àâä]/g, 'a')
      .replace(/[îï]/g, 'i')
      .replace(/[ôö]/g, 'o')
      .replace(/[ûüù]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const photoData = (perso_Photos[0] as any)?.[slug];
    return photoData?.url || null;
  };

  // Extract all unique personalities and parties from scandals with detailed stats
  const timelineOptions = React.useMemo(() => {
    const personalities = new Map<string, { count: number; scandals: Scandal[] }>();
    const parties = new Map<string, { count: number; scandals: Scandal[] }>();

    scandals.forEach(scandal => {
      // Count personalities - handle both old and new format
      if (scandal.personalities) {
        scandal.personalities.forEach(p => {
          // Handle both object format (old) and string format (new)
          const personalityName = typeof p === 'string' ? p : p.personality;
          if (personalityName) {
            const existing = personalities.get(personalityName);
            if (existing) {
              existing.count += 1;
              existing.scandals.push(scandal);
            } else {
              personalities.set(personalityName, { count: 1, scandals: [scandal] });
            }
          }
        });
      }

      // Count parties - handle both old format (parties array) and new format (politicalParty string)
      if (scandal.parties) {
        // Old format: array of parties
        scandal.parties.forEach(party => {
          const partyName = typeof party === 'string' ? party : party.party;
          if (partyName) {
            const existing = parties.get(partyName);
            if (existing) {
              existing.count += 1;
              existing.scandals.push(scandal);
            } else {
              parties.set(partyName, { count: 1, scandals: [scandal] });
            }
          }
        });
      } else if (scandal.politicalParty) {
        // New format: single politicalParty string
        const partyName = scandal.politicalParty;
        if (partyName) {
          const existing = parties.get(partyName);
          if (existing) {
            existing.count += 1;
            existing.scandals.push(scandal);
          } else {
            parties.set(partyName, { count: 1, scandals: [scandal] });
          }
        }
      }
    });

    const options: TimelineOption[] = [];

    // Add personalities with detailed stats
    personalities.forEach((data, personality) => {
      const stats = calculateDetailedStats(data.scandals);
      options.push({
        type: 'personality',
        value: personality,
        label: personality,
        count: data.count,
        icon: <Users className="w-4 h-4" />,
        stats
      });
    });

    // Add parties with detailed stats
    parties.forEach((data, party) => {
      const stats = calculateDetailedStats(data.scandals);
      options.push({
        type: 'party',
        value: party,
        label: party,
        count: data.count,
        icon: <Building2 className="w-4 h-4" />,
        stats
      });
    });

    // Sort by count (descending) then by label
    return options.sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return a.label.localeCompare(b.label);
    });
  }, [scandals]);

  // Filter options based on search and category
  const filteredOptions = React.useMemo(() => {
    let filtered = timelineOptions;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(option => {
        if (selectedCategory === 'personalities') return option.type === 'personality';
        if (selectedCategory === 'parties') return option.type === 'party';
        return true;
      });
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(option => 
        option.label.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [timelineOptions, searchTerm, selectedCategory]);

  // Infinite scroll logic
  const visibleOptions = filteredOptions.slice(0, visibleItems);
  const hasMoreItems = visibleItems < filteredOptions.length;

  // Reset visible items when filters change
  React.useEffect(() => {
    setVisibleItems(10);
  }, [searchTerm, selectedCategory]);

  // Load more items function
  const loadMoreItems = () => {
    setVisibleItems(prev => Math.min(prev + itemsPerLoad, filteredOptions.length));
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleSelectOption = (option: TimelineOption) => {
    onSelectTimeline(option.type, option.value, option.label);
    onClose();
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'personalities': return <Users className="w-4 h-4" />;
      case 'parties': return <Building2 className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'personalities': return 'Personnalités';
      case 'parties': return 'Partis politiques';
      default: return 'Toutes les timelines';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 h-screen overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Timelines contextualisées
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Explorez par personnalité ou parti politique
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                title="Fermer les timelines contextualisées"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search and filters */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une personnalité ou un parti..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>

              {/* Category filters */}
              <div className="flex gap-2">
                {[
                  { id: 'all', label: 'Toutes' },
                  { id: 'personalities', label: 'Personnalités' },
                  { id: 'parties', label: 'Partis' }
                ].map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-violet-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {getCategoryIcon(category.id)}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[60vh]">
              {filteredOptions.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Aucun résultat trouvé
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Essayez de modifier vos critères de recherche
                  </p>
                </div>
              ) : (
                <div className="p-4 space-y-2">
                  {visibleOptions.map((option, index) => (
                    <motion.button
                      key={`${option.type}-${option.value}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSelectOption(option)}
                      className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left group"
                    >
                                             <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                           {option.type === 'personality' ? (
                             // Photo pour les personnalités
                             <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-violet-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-violet-500/30 group-hover:to-pink-500/30 transition-colors">
                               {(() => {
                                 const photoUrl = getPhotoUrl(option.label);
                                 return photoUrl ? (
                                   <img 
                                     src={photoUrl} 
                                     alt={option.label}
                                     className="w-full h-full object-cover"
                                     onError={(e) => {
                                       e.currentTarget.style.display = 'none';
                                       e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                     }}
                                   />
                                 ) : null;
                               })()}
                               <div className={`w-full h-full flex items-center justify-center ${getPhotoUrl(option.label) ? 'hidden' : ''}`}>
                                 {option.icon}
                               </div>
                             </div>
                           ) : (
                             // Icône pour les partis
                             <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-violet-500/30 group-hover:to-pink-500/30 transition-colors">
                               {option.icon}
                             </div>
                           )}
                                                     <div>
                             <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                               {option.label}
                             </h3>
                             <div className="flex items-center gap-3 mt-1">
                               {/* Affaires */}
                               <div className="flex items-center gap-1">
                                 <FileText className="w-3 h-3 text-blue-500" />
                                 <span className="text-xs text-gray-600 dark:text-gray-400">
                                   {option.stats.scandals}
                                 </span>
                               </div>
                               
                               {/* Argent détourné */}
                               {option.stats.moneyAmount > 0 && (
                                 <div className="flex items-center gap-1">
                                   <DollarSign className="w-3 h-3 text-red-500" />
                                   <span className="text-xs text-gray-600 dark:text-gray-400">
                                     {option.stats.moneyAmount.toLocaleString()}
                                   </span>
                                 </div>
                               )}
                               
                               {/* Amendes */}
                               {option.stats.fines > 0 && (
                                 <div className="flex items-center gap-1">
                                   <Award className="w-3 h-3 text-orange-500" />
                                   <span className="text-xs text-gray-600 dark:text-gray-400">
                                     {option.stats.fines.toLocaleString()}
                                   </span>
                                 </div>
                               )}
                               
                               {/* Prison */}
                               {option.stats.prisonYears > 0 && (
                                 <div className="flex items-center gap-1">
                                   <Lock className="w-3 h-3 text-purple-500" />
                                   <span className="text-xs text-gray-600 dark:text-gray-400">
                                     {option.stats.prisonYears} an{option.stats.prisonYears > 1 ? 's' : ''}
                                   </span>
                                 </div>
                               )}
                             </div>
                           </div>
                        </div>
                                              </div>
                      </motion.button>
                    ))}
                  
                  {/* Load more button */}
                  {hasMoreItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pt-4"
                    >
                      <button
                        onClick={loadMoreItems}
                        className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl text-gray-700 dark:text-gray-300 font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Charger {Math.min(itemsPerLoad, filteredOptions.length - visibleItems)} de plus
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

export default ContextualTimelinePanel; 