import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateYearMarkers, findNearestYearMarker } from '../utils/timelineLayout';

interface CurrentYearDisplayProps {
  startYear: number;
  endYear: number;
  timelineWidth: number;
  scrollPosition: number;
  viewportWidth: number;
}

const CurrentYearDisplay: React.FC<CurrentYearDisplayProps> = ({
  startYear,
  endYear,
  timelineWidth,
  scrollPosition,
  viewportWidth
}) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  
  // Générer les marqueurs d'années
  const yearMarkers = generateYearMarkers(startYear, endYear, timelineWidth, 1);
  
  // Calculer la position centrale de la vue
  const currentScrollCenter = scrollPosition + viewportWidth / 2;
  
  // Mettre à jour la visibilité en fonction de la position
  useEffect(() => {
    if (yearMarkers.length >= 2 && currentScrollCenter > yearMarkers[1].x) {
      setHasBeenVisible(true);
    }
  }, [currentScrollCenter, yearMarkers]);

  // Si on n'a pas dépassé le second marqueur et qu'on n'a jamais été visible, on ne rend rien
  if (yearMarkers.length < 2 && !hasBeenVisible) {
    return null;
  }

  return (
    <div 
      className="absolute pointer-events-none select-none"
      style={{
        left: scrollPosition,
        width: viewportWidth,
        transition: 'left 150ms ease',
        top: '-55px'  // Déplace l'année vers le haut
      }}
    >
      <AnimatePresence>
        {hasBeenVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center w-full"
          >
            <span className="text-[9rem] font-bold bg-gradient-to-r from-violet-200 to-pink-200 dark:from-violet-900 dark:to-pink-900 bg-clip-text text-transparent">
              {findNearestYearMarker(scrollPosition, viewportWidth, yearMarkers)}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurrentYearDisplay; 