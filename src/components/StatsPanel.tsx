import React from 'react';
import { X, TrendingUp, Users, DollarSign, Scale, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatCurrency, formatLargeNumber, getCategoryLabel, getMainCategory } from '../utils/scandalUtils';

interface StatsData {
  total: number;
  totalMoney: number;
  totalPrisonYears: number;
  totalFines: number;
  byDecade: Record<number, number>;
  byType: Record<string, number>;
  byParty: Record<string, number>;
}

interface StatsPanelProps {
  stats: StatsData;
  scandals: any[];
  onClose: () => void;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ stats, scandals, onClose }) => {
  // Regrouper les statistiques par catégorie principale
  const statsByMainCategory = Object.entries(stats.byType).reduce((acc, [type, count]) => {
    const mainCategory = getMainCategory(type);
    acc[mainCategory] = (acc[mainCategory] || 0) + count;
    return acc;
  }, {} as Record<string, number>);

  const maxByType = Math.max(...Object.values(statsByMainCategory));
  const maxByParty = Math.max(...Object.values(stats.byParty));
  const maxByDecade = Math.max(...Object.values(stats.byDecade));

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.2 }}
      className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col h-full"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Statistiques</h2>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Key Metrics */}
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
              <span className="text-xs text-red-600 dark:text-red-400 font-medium">Détourné</span>
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

        {/* By Type */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Par catégorie
          </h3>
          <div className="space-y-3">
            {Object.entries(statsByMainCategory)
              .sort(([,a], [,b]) => b - a)
              .map(([category, count]) => (
              <div key={category}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {getCategoryLabel(category)}
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {count}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${(count / maxByType) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* By Party */}
        {Object.keys(stats.byParty).length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Par parti politique
            </h3>
            <div className="space-y-3">
              {Object.entries(stats.byParty)
                .sort(([,a], [,b]) => b - a)
                .map(([party, count]) => (
                <div key={party}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700 dark:text-gray-300">{party}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {count}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 transition-all duration-300"
                      style={{ width: `${(count / maxByParty) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* By Decade */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Par décennie
          </h3>
          <div className="space-y-3">
            {Object.entries(stats.byDecade)
              .sort(([a], [b]) => parseInt(a) - parseInt(b))
              .map(([decade, count]) => (
                <div key={decade}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {decade}s
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {count}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all duration-300"
                      style={{ width: `${(count / maxByDecade) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsPanel;