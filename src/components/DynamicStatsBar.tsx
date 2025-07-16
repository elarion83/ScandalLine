import React, { useRef } from 'react';
import { TrendingUp, DollarSign, Scale, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { Scandal } from '../types/scandal';
import { formatCurrency, formatLargeNumber } from '../utils/scandalUtils';
import { generateYearMarkers, findNearestYearMarker } from '../utils/timelineLayout';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

interface DynamicStatsBarProps {
  visibleScandals: Scandal[];
  totalScandals: number;
  scrollProgress: number;
  startYear: number;
  endYear: number;
  scrollPosition: number;
  viewportWidth: number;
  timelineWidth: number;
  onScrollChange?: (newPosition: number) => void;
  onDragClick?: () => void;
  isVisible?: boolean;
}

const DynamicStatsBar: React.FC<DynamicStatsBarProps> = ({ 
  visibleScandals, 
  totalScandals,
  scrollProgress,
  startYear,
  endYear,
  scrollPosition,
  viewportWidth,
  timelineWidth,
  onScrollChange,
  onDragClick,
  isVisible = true
}) => {
  const isDraggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate the current year being viewed based on scroll position
  const calculateCurrentYear = (): number => {
    // Générer les markers d'années
    const yearMarkers = generateYearMarkers(startYear, endYear, timelineWidth, 1);
    
    // Utiliser la même fonction que dans la timeline
    return findNearestYearMarker(scrollPosition, viewportWidth, yearMarkers);
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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current || !onScrollChange) return;
    
    // Notifier le parent que l'utilisateur a cliqué
    onDragClick?.();
    
    isDraggingRef.current = true;
    containerRef.current.classList.add('dragging');
    
    const rect = containerRef.current.getBoundingClientRect();
    const clickPositionRatio = (e.clientX - rect.left) / rect.width;
    const newScrollPosition = (clickPositionRatio * timelineWidth) - (viewportWidth / 2);
    onScrollChange(Math.max(0, Math.min(timelineWidth - viewportWidth, newScrollPosition)));

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isDraggingRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const positionRatio = (e.clientX - rect.left) / rect.width;
      const newScrollPosition = (positionRatio * timelineWidth) - (viewportWidth / 2);
      onScrollChange(Math.max(0, Math.min(timelineWidth - viewportWidth, newScrollPosition)));
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      if (containerRef.current) {
        containerRef.current.classList.remove('dragging');
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current || !onScrollChange) return;
    
    // Empêcher le scroll par défaut
    e.preventDefault();
    
    // Notifier le parent que l'utilisateur a touché
    onDragClick?.();
    
    isDraggingRef.current = true;
    containerRef.current.classList.add('dragging');
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const clickPositionRatio = (touch.clientX - rect.left) / rect.width;
    const newScrollPosition = (clickPositionRatio * timelineWidth) - (viewportWidth / 2);
    onScrollChange(Math.max(0, Math.min(timelineWidth - viewportWidth, newScrollPosition)));

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !isDraggingRef.current) return;
      
      // Empêcher le scroll par défaut
      e.preventDefault();
      
      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const positionRatio = (touch.clientX - rect.left) / rect.width;
      const newScrollPosition = (positionRatio * timelineWidth) - (viewportWidth / 2);
      onScrollChange(Math.max(0, Math.min(timelineWidth - viewportWidth, newScrollPosition)));
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      if (containerRef.current) {
        containerRef.current.classList.remove('dragging');
      }
      document.removeEventListener('touchmove', handleTouchMove, { passive: false });
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
  };

  // Si le composant n'est pas visible, ne rien afficher
  if (!isVisible) {
    return null;
  }

  // Vérifier si au moins un compteur mobile a une valeur > 0
  const hasMobileStats = visibleStats.count > 0 || 
                        visibleStats.totalMoney > 0 || 
                        visibleStats.totalFines > 0 || 
                        visibleStats.totalPrison > 0;

  return (
    <>
      {/* Mobile Stats - Position fixe en haut à gauche */}
      {hasMobileStats && (
        <div className="fixed bottom-[80px] opacity-80 left-[5px] z-40 md:hidden">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-3 space-y-2">
          {/* Visible scandals count */}
          {visibleStats.count > 0 && (
            <AnimatedCounter
              value={visibleStats.count}
              icon={<TrendingUp className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />}
              suffix={`/${totalScandals}`}
              bgColor="bg-blue-50 dark:bg-blue-900/20"
              textColor="text-blue-700 dark:text-blue-300"
              className="text-xs"
            />
          )}

          {/* Money detourned */}
          {visibleStats.totalMoney > 0 && (
            <AnimatedCounter
              value={visibleStats.totalMoney}
              icon={<DollarSign className="w-3 h-3 text-red-600 dark:text-red-400 flex-shrink-0" />}
              formatValue={formatLargeNumber}
              bgColor="bg-red-50 dark:bg-red-900/20"
              textColor="text-red-700 dark:text-red-300"
              className="text-xs"
            />
          )}

          {/* Total fines */}
          {visibleStats.totalFines > 0 && (
            <AnimatedCounter
              value={visibleStats.totalFines}
              icon={<Award className="w-3 h-3 text-orange-600 dark:text-orange-400 flex-shrink-0" />}
              formatValue={formatLargeNumber}
              bgColor="bg-orange-50 dark:bg-orange-900/20"
              textColor="text-orange-700 dark:text-orange-300"
              className="text-xs"
            />
          )}

          {/* Prison years */}
          {visibleStats.totalPrison > 0 && (
            <AnimatedCounter
              value={visibleStats.totalPrison}
              icon={<Scale className="w-3 h-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />}
              suffix={` an${visibleStats.totalPrison > 1 ? 's' : ''}`}
              bgColor="bg-purple-50 dark:bg-purple-900/20"
              textColor="text-purple-700 dark:text-purple-300"
              className="text-xs"
            />
          )}
        </div>
      </div>
      )}

      {/* Stats Bar - Affichage avec barre de progression (mobile + desktop) */}
      <div 
        ref={containerRef}
        className="relative w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm cursor-grab active:cursor-grabbing [&.dragging_.transition-all]:transition-none touch-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          overflowX: 'hidden',
          minHeight: '40px'
        }}
      >
        
        {/* Progress bar background */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 dark:from-blue-600 dark:via-blue-500 dark:to-blue-600 opacity-20 dark:opacity-30 transition-all duration-300 ease-out"
          style={{ 
            width: `${scrollProgress * 100}%`,
            transitionProperty: isDraggingRef.current ? 'none' : 'all'
          }}
        />
        
        {/* Progress bar shine effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 dark:opacity-10 transition-all duration-300 ease-out animate-pulse"
          style={{ 
            width: `${scrollProgress * 100}%`,
            transitionProperty: isDraggingRef.current ? 'none' : 'all'
          }}
        />

        {/* Current year at progress bar end */}
        <div 
          className="absolute top-0 bottom-0 flex items-center transition-all duration-300 ease-out"
          style={{ 
            left: `${Math.max(3, Math.min(97, scrollProgress * 100))}%`,
            transform: 'translateX(-50%)',
            transitionProperty: isDraggingRef.current ? 'none' : 'all'
          }}
        >
          <div className="flex texture-overlay items-center gap-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white px-2 py-1 mt-1 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform">
            <ArrowLeft className="w-4 h-4 animate-pulse" />
            {currentYear}
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>
        
        {/* Stats content - Masqué sur mobile, visible sur desktop */}
        <div className="relative flex items-center justify-between px-4 py-2 hidden md:flex">
          <div className={`flex items-center gap-4 transition-all duration-300 ${scrollProgress < 0.5 ? 'ml-auto' : ''}`}>
            {/* Visible scandals count */}
            {visibleStats.count > 0 && (
              <AnimatedCounter
                value={visibleStats.count}
                icon={<TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                suffix={`/ ${totalScandals} affaires`}
                bgColor="bg-blue-50 dark:bg-blue-900/20"
                textColor="text-blue-700 dark:text-blue-300"
              />
            )}

            {/* Money detourned */}
            {visibleStats.totalMoney > 0 && (
              <AnimatedCounter
                value={visibleStats.totalMoney}
                icon={<DollarSign className="w-4 h-4 text-red-600 dark:text-red-400" />}
                formatValue={formatLargeNumber}
                label="concernés"
                bgColor="bg-red-50 dark:bg-red-900/20"
                textColor="text-red-700 dark:text-red-300"
              />
            )}

            {/* Total fines */}
            {visibleStats.totalFines > 0 && (
              <AnimatedCounter
                value={visibleStats.totalFines}
                icon={<Award className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                formatValue={formatLargeNumber}
                label="d'amendes"
                bgColor="bg-orange-50 dark:bg-orange-900/20"
                textColor="text-orange-700 dark:text-orange-300"
              />
            )}

            {/* Prison years */}
            {visibleStats.totalPrison > 0 && (
              <AnimatedCounter
                value={visibleStats.totalPrison}
                icon={<Scale className="w-4 h-4 text-purple-600 dark:text-purple-400" />}
                suffix={` an${visibleStats.totalPrison > 1 ? 's' : ''} prison`}
                bgColor="bg-purple-50 dark:bg-purple-900/20"
                textColor="text-purple-700 dark:text-purple-300"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicStatsBar;