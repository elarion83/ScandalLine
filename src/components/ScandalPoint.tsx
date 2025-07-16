import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scandal } from '../types/scandal';
import { getMainCategory, cleanScandalName, formatCurrency, getCategoryLabel } from '../utils/scandalUtils';
import { useTimeline } from '../contexts/TimelineContext';

interface ScandalPointProps {
  scandal: Scandal;
  onClick: () => void;
  isSelected: boolean;
  position: { x: number; y: number };
  className?: string;
  style?: React.CSSProperties;
}

const ScandalPoint: React.FC<ScandalPointProps> = ({ 
  scandal, 
  onClick, 
  isSelected, 
  position,
  className,
  style
}) => {
  const { state } = useTimeline();
  const [isHovered, setIsHovered] = useState(false);

  // Get color based on scandal type
  const getPointColor = () => {
    const mainCategory = getMainCategory(scandal.type);
    
    switch (mainCategory) {
      case 'corruption':
        return {
          selected: 'bg-indigo-500 shadow-lg shadow-indigo-200/50',
          hover: 'bg-indigo-400 shadow-md shadow-indigo-200/30',
          default: 'bg-indigo-300 dark:bg-indigo-600'
        };
      case 'fraude-financiere':
        return {
          selected: 'bg-fuchsia-500 shadow-lg shadow-fuchsia-200/50',
          hover: 'bg-fuchsia-400 shadow-md shadow-fuchsia-200/30',
          default: 'bg-fuchsia-300 dark:bg-fuchsia-600'
        };
      case 'manipulation-marche':
        return {
          selected: 'bg-orange-500 shadow-lg shadow-orange-200/50',
          hover: 'bg-orange-400 shadow-md shadow-orange-200/30',
          default: 'bg-orange-300 dark:bg-orange-600'
        };
      case 'tech':
        return {
          selected: 'bg-purple-500 shadow-lg shadow-purple-200/50',
          hover: 'bg-purple-400 shadow-md shadow-purple-200/30',
          default: 'bg-purple-300 dark:bg-purple-600'
        };
      case 'crise':
        return {
          selected: 'bg-rose-500 shadow-lg shadow-rose-200/50',
          hover: 'bg-rose-400 shadow-md shadow-rose-200/30',
          default: 'bg-rose-300 dark:bg-rose-600'
        };
      case 'gestion-frauduleuse':
        return {
          selected: 'bg-emerald-500 shadow-lg shadow-emerald-200/50',
          hover: 'bg-emerald-400 shadow-md shadow-emerald-200/30',
          default: 'bg-emerald-300 dark:bg-emerald-600'
        };
      case 'financement-illegal':
        return {
          selected: 'bg-blue-500 shadow-lg shadow-blue-200/50',
          hover: 'bg-blue-400 shadow-md shadow-blue-200/30',
          default: 'bg-blue-300 dark:bg-blue-600'
        };
      case 'crime':
        return {
          selected: 'bg-red-700 shadow-lg shadow-red-200/50',
          hover: 'bg-red-600 shadow-md shadow-red-200/30',
          default: 'bg-red-500 dark:bg-red-700'
        };
      default:
        return {
          selected: 'bg-gray-500 shadow-lg shadow-gray-200/50',
          hover: 'bg-gray-400 shadow-md shadow-gray-200/30',
          default: 'bg-gray-300 dark:bg-gray-600'
        };
    }
  };

  const colorScheme = getPointColor();
  const getState = () => {
    if (isSelected) return 'selected';
    if (isHovered) return 'hover';
    return 'default';
  };

  const currentColor = colorScheme[getState() as keyof typeof colorScheme];
  const pointSize = isSelected ? 'w-8 h-8' : isHovered ? 'w-7 h-7' : 'w-6 h-6';

  return (
    <div className="relative">
      <motion.div
        className={`absolute rounded-full cursor-pointer transition-all duration-200 ${currentColor} ${pointSize} shadow-lg ${className || ''}`}
        style={{
          left: position.x - 10,
          top: position.y,
          zIndex: isSelected ? 50 : isHovered ? 40 : 30,
          transformOrigin: 'center',
          transform: 'translate(-50%, -50%)', // Center the point on its position
          ...style
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 pointer-events-none"
          style={{
            left: position.x + 20, // Position à droite du point
            top: position.y - 80, // Au-dessus du point
            transform: 'translateY(-50%)' // Centre verticalement
          }}
        >
          <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg shadow-lg border border-gray-700/50 max-w-xs">
            <div className="font-medium mb-1">{cleanScandalName(scandal.name)}</div>
            <div className="text-gray-300 text-xs mb-2">
              {new Date(scandal.startDate).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
            
            {/* Personnes concernées */}
            {scandal.personalities && scandal.personalities.length > 0 && (
              <div className="mb-2">
                <div className="text-gray-400 text-xs font-medium mb-1">Personnes :</div>
                <div className="text-gray-300 text-xs">
                  {scandal.personalities.slice(0, 3).join(', ')}
                  {scandal.personalities.length > 3 && '...'}
                </div>
              </div>
            )}
            
            {/* Sanctions */}
            {(scandal.moneyAmount || scandal.fine || scandal.prisonYears || scandal.ineligibilityYears) && (
              <div>
                <div className="text-gray-400 text-xs font-medium mb-1">Sanctions :</div>
                <div className="text-gray-300 text-xs space-y-1">
                  {scandal.moneyAmount && (
                    <div>💰 {formatCurrency(scandal.moneyAmount)}</div>
                  )}
                  {scandal.fine && (
                    <div>💸 Amende : {formatCurrency(scandal.fine)}</div>
                  )}
                  {scandal.prisonYears && (
                    <div>🔒 Prison : {scandal.prisonYears} an{scandal.prisonYears > 1 ? 's' : ''}</div>
                  )}
                  {scandal.ineligibilityYears && (
                    <div>🚫 Inéligibilité : {scandal.ineligibilityYears} an{scandal.ineligibilityYears > 1 ? 's' : ''}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ScandalPoint; 