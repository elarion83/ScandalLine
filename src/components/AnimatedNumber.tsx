import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  formatFn?: (value: number) => string;
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  value, 
  formatFn = (val: number) => val.toString(),
  className = ''
}) => {
  // Utiliser useSpring pour une animation fluide
  const springValue = useSpring(value, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transformer la valeur animée en chaîne formatée
  const displayValue = useTransform(springValue, (val: number) => formatFn(val));

  return (
    <motion.span className={className}>
      {displayValue}
    </motion.span>
  );
}; 