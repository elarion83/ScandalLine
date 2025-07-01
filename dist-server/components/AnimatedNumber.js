import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
export const AnimatedNumber = ({ value, formatFn = (val) => val.toString(), className = '' }) => {
    // Utiliser useSpring pour une animation fluide
    const springValue = useSpring(value, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    // Transformer la valeur animée en chaîne formatée
    const displayValue = useTransform(springValue, (val) => formatFn(val));
    return (<motion.span className={className}>
      {displayValue}
    </motion.span>);
};
