import React, { useRef } from 'react';
import { TrendingUp, DollarSign, Scale, Award, Calendar } from 'lucide-react';
import { formatLargeNumber } from '../utils/scandalUtils';
const DynamicStatsBar = ({ visibleScandals, totalScandals, scrollProgress, startYear, endYear, scrollPosition, viewportWidth, timelineWidth, onScrollChange }) => {
    const isDraggingRef = useRef(false);
    const containerRef = useRef(null);
    // Calculate the current year being viewed based on scroll position
    const calculateCurrentYear = () => {
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
        }, {})
    };
    const handleMouseDown = (e) => {
        if (!containerRef.current || !onScrollChange)
            return;
        isDraggingRef.current = true;
        containerRef.current.classList.add('dragging');
        const rect = containerRef.current.getBoundingClientRect();
        const clickPositionRatio = (e.clientX - rect.left) / rect.width;
        const newScrollPosition = (clickPositionRatio * timelineWidth) - (viewportWidth / 2);
        onScrollChange(Math.max(0, Math.min(timelineWidth - viewportWidth, newScrollPosition)));
        const handleMouseMove = (e) => {
            if (!containerRef.current || !isDraggingRef.current)
                return;
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
    return (<div ref={containerRef} className="relative w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm cursor-grab active:cursor-grabbing [&.dragging_.transition-all]:transition-none" onMouseDown={handleMouseDown} style={{
            overflowX: 'hidden'
        }}>
      
      {/* Progress bar background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 dark:from-blue-600 dark:via-blue-500 dark:to-blue-600 opacity-20 dark:opacity-30 transition-all duration-300 ease-out" style={{
            width: `${scrollProgress * 100}%`,
            transitionProperty: isDraggingRef.current ? 'none' : 'all'
        }}/>
      
      {/* Progress bar shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 dark:opacity-10 transition-all duration-300 ease-out animate-pulse" style={{
            width: `${scrollProgress * 100}%`,
            transitionProperty: isDraggingRef.current ? 'none' : 'all'
        }}/>

      {/* Current year at progress bar end */}
      <div className="absolute top-0 bottom-0 flex items-center transition-all duration-300 ease-out" style={{
            left: `${scrollProgress * 100}%`,
            transform: 'translateX(-50%)',
            transitionProperty: isDraggingRef.current ? 'none' : 'all'
        }}>
        <div className="flex texture-overlay items-center gap-1 bg-blue-500/50 dark:bg-blue-600 text-white px-2 py-1 mt-1 rounded-full text-sm font-medium shadow-md">
          <Calendar className="w-4 h-4"/>
          {currentYear}
        </div>
      </div>
      
      {/* Stats content */}
      <div className="relative flex items-center justify-between px-4 py-2">
        <div className={`flex items-center gap-4 transition-all duration-300 ${scrollProgress < 0.5 ? 'ml-auto' : ''}`}>
          {/* Visible scandals count */}
          <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg">
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400"/>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {visibleStats.count}
            </span>
            <span className="text-xs text-blue-600 dark:text-blue-400">
              / {totalScandals} affaires
            </span>
          </div>

          {/* Money detourned */}
          <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg">
            <DollarSign className="w-4 h-4 text-red-600 dark:text-red-400"/>
            <span className="text-sm font-bold text-red-700 dark:text-red-300">
              {formatLargeNumber(visibleStats.totalMoney)}
            </span>
            <span className="text-xs text-red-600 dark:text-red-400">concernés</span>
          </div>

          {/* Total fines */}
          {visibleStats.totalFines > 0 && (<div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-lg">
              <Award className="w-4 h-4 text-orange-600 dark:text-orange-400"/>
              <span className="text-sm font-bold text-orange-700 dark:text-orange-300">
                {formatLargeNumber(visibleStats.totalFines)}
              </span>
              <span className="text-xs text-orange-600 dark:text-orange-400">d'amendes</span>
            </div>)}

          {/* Prison years */}
          <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 rounded-lg">
            <Scale className="w-4 h-4 text-purple-600 dark:text-purple-400"/>
            <span className="text-sm font-bold text-purple-700 dark:text-purple-300">
              {visibleStats.totalPrison}
            </span>
            <span className="text-xs text-purple-600 dark:text-purple-400">
              an{visibleStats.totalPrison > 1 ? 's' : ''} prison
            </span>
          </div>
        </div>
      </div>
    </div>);
};
export default DynamicStatsBar;
