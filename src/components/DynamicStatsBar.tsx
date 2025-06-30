import React from 'react';
import { TrendingUp, DollarSign, Scale, Award, Calendar } from 'lucide-react';
import { Scandal } from '../types/scandal';
import { formatCurrency, formatLargeNumber } from '../utils/scandalUtils';

interface DynamicStatsBarProps {
  visibleScandals: Scandal[];
  totalScandals: number;
  scrollProgress: number;
  startYear: number;
  endYear: number;
  scrollPosition: number;
  viewportWidth: number;
  timelineWidth: number;
}

const DynamicStatsBar: React.FC<DynamicStatsBarProps> = ({ 
  visibleScandals, 
  totalScandals,
  scrollProgress,
  startYear,
  endYear,
  scrollPosition,
  viewportWidth,
  timelineWidth
}) => {
  // Calculate the current year being viewed based on scroll position
  const calculateCurrentYear = (): number => {
    const centerPosition = scrollPosition + viewportWidth / 2;
    const yearSpan = endYear - startYear;
    const yearProgress = centerPosition / timelineWidth;
    const currentYear = startYear + (yearProgress * yearSpan);
    return Math.round(Math.max(startYear, Math.min(endYear, currentYear)));
  };

  const currentYear = calculateCurrentYear();

  // Calculate comprehensive stats for visible scandals
  const visibleStats = {
    count: visibleScandals.length,
    totalMoney: visibleScandals.reduce((sum, s) => sum + (s.moneyAmount || 0), 0),
    totalPrison: visibleScandals.reduce((sum, s) => sum + (s.prisonYears || 0), 0),
    totalFines: visibleScandals.reduce((sum, s) => sum + (s.fine || 0), 0),
    totalIneligibility: visibleScandals.reduce((sum, s) => sum + (s.ineligibilityYears || 0), 0),
    // Status analysis
    byStatus: visibleScandals.reduce((acc, scandal) => {
      acc[scandal.status] = (acc[scandal.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Current year indicator */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300 min-w-[2.5rem]">
                {currentYear}
            </span>
            </div>
          </div>

          {/* Visible scandals count */}
          <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg">
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {visibleStats.count}
            </span>
            <span className="text-xs text-blue-600 dark:text-blue-400">
              / {totalScandals} affaires
            </span>
          </div>

          {/* Money detourned */}
          <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg">
            <DollarSign className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-bold text-red-700 dark:text-red-300">
              {formatLargeNumber(visibleStats.totalMoney)}
            </span>
            <span className="text-xs text-red-600 dark:text-red-400">concernés</span>
          </div>

          {/* Total fines */}
          {visibleStats.totalFines > 0 && (
            <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-lg">
              <Award className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-bold text-orange-700 dark:text-orange-300">
                {formatLargeNumber(visibleStats.totalFines)}
              </span>
              <span className="text-xs text-orange-600 dark:text-orange-400">d'amendes</span>
            </div>
          )}

          {/* Prison years */}
          <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 rounded-lg">
            <Scale className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-bold text-purple-700 dark:text-purple-300">
              {visibleStats.totalPrison}
            </span>
            <span className="text-xs text-purple-600 dark:text-purple-400">
              an{visibleStats.totalPrison > 1 ? 's' : ''} prison
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicStatsBar;