import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollHintProps {
  show?: boolean;
  scrollPosition?: number;
}

const ScrollHint: React.FC<ScrollHintProps> = ({ show = true, scrollPosition = 0 }) => {
  const [shouldRender, setShouldRender] = useState(show);
  const [opacity, setOpacity] = useState(1);

  // Calculer l'opacité basée sur le scroll (1% de moins tous les 5px)
  useEffect(() => {
    const scrollSteps = Math.floor(scrollPosition / 5);
    const newOpacity = Math.max(0, 1 - (scrollSteps * 0.01));
    
    // Log chaque palier de 5px
    if (scrollPosition % 5 === 0 && scrollPosition > 0) {
      console.log(`Scroll atteint ${scrollPosition}px - Opacité: ${newOpacity * 100}%`);
    }
    
    setOpacity(newOpacity);

    if (newOpacity === 0) {
      setShouldRender(false);
    }
  }, [scrollPosition]);

  // Ne plus afficher le composant si l'opacité atteint 0
  if (!shouldRender || opacity === 0) return null;

  return (
    <div 
      className="scrollhint fixed w-screen flex justify-center items-center pointer-events-none"
      style={{
        top: '50%',
        zIndex: 1,
        transform: 'translateY(-50%)',
        opacity: opacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm mx-4 relative overflow-hidden">
        {/* Icône décorative */}
        <motion.div 
          className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center mx-auto"
        >
          <motion.div
            className="text-white text-2xl font-bold"
          >
            →
          </motion.div>
        </motion.div>

        {/* Titre */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mt-4">
          Prêt pour l'aventure ?
        </h3>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
          Faites défiler vers la droite pour commencer votre voyage à travers les années.
        </p>

        {/* Effet de brillance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine pointer-events-none" />
      </div>
    </div>
  );
};

export default ScrollHint; 