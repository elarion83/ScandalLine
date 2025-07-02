import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, DollarSign, Scale, Users } from 'lucide-react';
import { useTimeline } from '../../contexts/TimelineContext';
import { createContextualFilter, filterTimelineBy } from '../../utils/contextualFilters';
import { nameToSlug } from '../../utils/shareUtils';
import { calculateStats, formatLargeNumber } from '../../utils/scandalUtils';
import { Scandal } from '../../types/scandal';

interface PersonalityModalProps {
  name: string;
  onClose: () => void;
  scandals: Scandal[];
}

const PersonalityModal: React.FC<PersonalityModalProps> = ({ name, onClose, scandals }) => {
  const { dispatch } = useTimeline();

  // Filtrer les scandales pour cette personne
  const personalityFilter = createContextualFilter('personality', name, name);
  const filteredScandals = filterTimelineBy(scandals, personalityFilter);
  const stats = calculateStats(filteredScandals);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleTimelineClick = () => {
    dispatch({ type: 'SET_TRANSITIONING', payload: true });
    
    // Mettre à jour l'URL avec le slug
    const slug = nameToSlug(name);
    const newUrl = `/timeline/${slug}`;
    window.history.pushState({}, '', newUrl);
    
    // Appliquer le filtre contextuel
    setTimeout(() => {
      dispatch({ 
        type: 'SET_CONTEXTUAL_FILTER', 
        payload: personalityFilter
      });
      dispatch({ type: 'SET_TRANSITIONING', payload: false });
    }, 300);
    
    onClose();
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleOverlayClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-lg w-full overflow-hidden"
        >
          {/* Header avec bouton de fermeture */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {name}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Contenu */}
          <div className="p-6 space-y-6">
            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Total</span>
                </div>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {stats.total}
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400">affaires</div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span className="text-xs text-red-600 dark:text-red-400 font-medium">Concernés</span>
                </div>
                <div className="text-lg font-bold text-red-700 dark:text-red-300">
                  {formatLargeNumber(stats.totalMoney)}
                </div>
                <div className="text-xs text-red-600 dark:text-red-400">au total</div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Prison</span>
                </div>
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  {stats.totalPrisonYears}
                </div>
                <div className="text-xs text-purple-600 dark:text-purple-400">années</div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Amendes</span>
                </div>
                <div className="text-lg font-bold text-green-700 dark:text-green-300">
                  {formatLargeNumber(stats.totalFines)}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">cumulées</div>
              </div>
            </div>

            {/* Bouton Timeline */}
            <div className="flex justify-center">
              <button
                onClick={handleTimelineClick}
                className="px-6 py-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 ease-out"
              >
                Accéder à la timeline
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PersonalityModal; 