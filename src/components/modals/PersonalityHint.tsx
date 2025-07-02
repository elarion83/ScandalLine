import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Scale } from 'lucide-react';
import { ContextualFilter } from '../../types/scandal';
import { calculateStats, formatLargeNumber } from '../../utils/scandalUtils';
import { perso_Photos } from '../../data/perso_photos';
import { nameToSlug } from '../../utils/shareUtils';
import allScandals from '../../data';
import { filterTimelineBy } from '../../utils/contextualFilters';

interface PersonalityHintProps {
  contextualFilter: ContextualFilter | null;
  show?: boolean;
  scrollPosition?: number;
}

const PersonalityHint: React.FC<PersonalityHintProps> = ({ 
  contextualFilter, 
  show = true, 
  scrollPosition = 0 
}) => {
  const [shouldRender, setShouldRender] = useState(show);
  const [opacity, setOpacity] = useState(1);

  // Calculer l'opacité basée sur le scroll (1% de moins tous les 5px)
  useEffect(() => {
    const scrollSteps = Math.floor(scrollPosition / 5);
    const newOpacity = Math.max(0, 1 - (scrollSteps * 0.01));
    
    setOpacity(newOpacity);

    if (newOpacity === 0) {
      setShouldRender(false);
    }
  }, [scrollPosition]);

  // Ne pas afficher si pas de filtre contextuel ou si c'est pas une personnalité
  if (!contextualFilter || contextualFilter.type !== 'personality') return null;

  // Ne plus afficher le composant si l'opacité atteint 0
  if (!shouldRender || opacity === 0) return null;

  // Récupérer la photo de la personne
  const getPersonPhoto = () => {
    const slug = nameToSlug(contextualFilter.value.toString());
    const photoData = perso_Photos[0]?.[slug];
    return photoData?.url || null;
  };

  const personPhoto = getPersonPhoto();

  // Calculer les statistiques
  const personalityFilter = contextualFilter;
  const filteredScandals = filterTimelineBy(allScandals, personalityFilter);
  const stats = calculateStats(filteredScandals);

  return (
    <div 
      className="personalityhint fixed w-screen flex justify-center items-center pointer-events-none"
      style={{
        top: '55%',
        zIndex: 20,
        transform: 'translateY(-50%)',
        opacity: opacity,
        transition: 'opacité 0.3s ease-out'
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-md mx-4 relative overflow-hidden">
        {/* Photo et nom de la personne */}
        <div className="flex items-center gap-4 mb-4">
          {personPhoto ? (
            <img 
              src={personPhoto} 
              alt={contextualFilter.value.toString()}
              className="w-16 h-16 rounded object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-16 h-16 rounded bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <Users className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {contextualFilter.value}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Timeline personnalisée
            </p>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Total</span>
            </div>
            <div className="text-lg font-bold text-blue-700 dark:text-blue-300">
              {stats.total}
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-400">affaires</div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-3 h-3 text-red-600 dark:text-red-400" />
              <span className="text-xs text-red-600 dark:text-red-400 font-medium">Concernés</span>
            </div>
            <div className="text-sm font-bold text-red-700 dark:text-red-300">
              {formatLargeNumber(stats.totalMoney)}
            </div>
            <div className="text-xs text-red-600 dark:text-red-400">au total</div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Scale className="w-3 h-3 text-purple-600 dark:text-purple-400" />
              <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Prison</span>
            </div>
            <div className="text-lg font-bold text-purple-700 dark:text-purple-300">
              {stats.totalPrisonYears}
            </div>
            <div className="text-xs text-purple-600 dark:text-purple-400">années</div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-3 h-3 text-green-600 dark:text-green-400" />
              <span className="text-xs text-green-600 dark:text-green-400 font-medium">Amendes</span>
            </div>
            <div className="text-sm font-bold text-green-700 dark:text-green-300">
              {formatLargeNumber(stats.totalFines)}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400">cumulées</div>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
          Défilez et découvrez sa timeline !
        </p>

        {/* Effet de brillance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine pointer-events-none" />
      </div>
    </div>
  );
};

export default PersonalityHint; 