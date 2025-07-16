import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scandal } from '../types/scandal';
import { getMainCategory, cleanScandalName, formatCurrency, getCategoryLabel, getCategoryIconName } from '../utils/scandalUtils';
import { useTimeline } from '../contexts/TimelineContext';
import { 
  ExternalLink, 
  Shield, 
  DollarSign, 
  TrendingUp, 
  Cpu, 
  AlertTriangle, 
  Building2, 
  Vote, 
  Skull, 
  Scale 
} from 'lucide-react';

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
  const [isMobileTooltipOpen, setIsMobileTooltipOpen] = useState(false);
  
  // Detect if we're on mobile
  const isMobile = state.viewportWidth < 768;
  const isPointsMode = state.displayMode === 'points';
  
  // Handle click based on device and mode
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    
    if (isMobile && isPointsMode) {
      // On mobile in points mode: toggle tooltip instead of opening modal
      setIsMobileTooltipOpen(!isMobileTooltipOpen);
    } else {
      // On desktop or in cards mode: open modal directly
      onClick();
    }
  };
  
  // Close mobile tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileTooltipOpen && isMobile && isPointsMode) {
        // Close tooltip if clicking outside
        setIsMobileTooltipOpen(false);
      }
    };
    
    if (isMobileTooltipOpen) {
      // Use a small delay to prevent immediate closure
      const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isMobileTooltipOpen, isMobile, isPointsMode]);

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
          selected: 'bg-amber-500 shadow-lg shadow-amber-200/50',
          hover: 'bg-amber-400 shadow-md shadow-amber-200/30',
          default: 'bg-amber-300 dark:bg-amber-600'
        };
      case 'tech':
        return {
          selected: 'bg-cyan-500 shadow-lg shadow-cyan-200/50',
          hover: 'bg-cyan-400 shadow-md shadow-cyan-200/30',
          default: 'bg-cyan-300 dark:bg-cyan-600'
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
  const pointSize = isSelected ? 'w-12 h-12' : isHovered ? 'w-10 h-10' : 'w-8 h-8';
  const iconSize = isSelected ? 'w-6 h-6' : isHovered ? 'w-5 h-5' : 'w-4 h-4';

  // Fonction pour obtenir l'icône basée sur le nom
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className={iconSize} />;
      case 'DollarSign':
        return <DollarSign className={iconSize} />;
      case 'TrendingUp':
        return <TrendingUp className={iconSize} />;
      case 'Cpu':
        return <Cpu className={iconSize} />;
      case 'AlertTriangle':
        return <AlertTriangle className={iconSize} />;
      case 'Building2':
        return <Building2 className={iconSize} />;
      case 'Vote':
        return <Vote className={iconSize} />;
      case 'Skull':
        return <Skull className={iconSize} />;
      case 'Scale':
        return <Scale className={iconSize} />;
      default:
        return <Shield className={iconSize} />;
    }
  };

  return (
    <div className="relative">
      <motion.div
        className={`absolute rounded-full cursor-pointer transition-all duration-200 ${currentColor} ${pointSize} shadow-lg flex items-center justify-center ${className || ''}`}
        style={{
          left: position.x - 10,
          top: position.y,
          zIndex: isSelected ? 50 : isHovered ? 40 : 30,
          transformOrigin: 'center',
          transform: 'translate(-50%, -50%)', // Center the point on its position
          ...style
        }}
        onClick={handleClick}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-white">
          {getIconComponent(getCategoryIconName(scandal.type))}
        </div>
      </motion.div>
      
      {/* Desktop Tooltip (hover only) */}
      {isHovered && !isMobile && (
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
                  {scandal.personalities.slice(0, 3).map(p => typeof p === 'string' ? p : p.personality).join(', ')}
                  {scandal.personalities.length > 3 && '...'}
                </div>
              </div>
            )}
            
            {/* Sanctions */}
            {(scandal.moneyAmount || scandal.fine || scandal.prisonYears || scandal.ineligibilityYears) && (
              <div>
                <div className="text-gray-300 text-xs space-y-1">
                  {scandal.moneyAmount && (
                    <div>💰 Montant : {formatCurrency(scandal.moneyAmount)}</div>
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
      
      {/* Mobile Tooltip (click to open) */}
      {isMobileTooltipOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50"
          style={{
            left: position.x + 20, // Position à droite du point
            top: position.y - 80, // Au-dessus du point
            transform: 'translateY(-50%)' // Centre verticalement
          }}
        >
          <div className="bg-gray-900/95 backdrop-blur-sm text-white text-xs px-4 py-3 rounded-lg shadow-xl border border-gray-700/50 max-w-xs">
            <div className="font-medium mb-2 text-sm">{cleanScandalName(scandal.name)}</div>
            <div className="text-gray-300 text-xs mb-3">
              {new Date(scandal.startDate).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
            
            {/* Personnes concernées */}
            {scandal.personalities && scandal.personalities.length > 0 && (
              <div className="mb-3">
                <div className="text-gray-400 text-xs font-medium mb-1">Personnes :</div>
                <div className="text-gray-300 text-xs">
                  {scandal.personalities.slice(0, 3).map(p => typeof p === 'string' ? p : p.personality).join(', ')}
                  {scandal.personalities.length > 3 && '...'}
                </div>
              </div>
            )}
            
            {/* Sanctions */}
            {(scandal.moneyAmount || scandal.fine || scandal.prisonYears || scandal.ineligibilityYears) && (
              <div className="mb-3">
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
            
            {/* Bouton pour ouvrir la modal */}
            <div className="flex justify-center pt-2 border-t border-gray-700/50">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileTooltipOpen(false);
                  onClick();
                }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs font-medium transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Voir les détails
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ScandalPoint; 