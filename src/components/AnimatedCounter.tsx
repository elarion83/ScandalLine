import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  className?: string;
  icon?: React.ReactNode;
  label?: string;
  suffix?: string;
  formatValue?: (value: number) => string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className = '',
  icon,
  label,
  suffix,
  formatValue,
  bgColor = 'bg-blue-50 dark:bg-blue-900/20',
  textColor = 'text-blue-700 dark:text-blue-300',
  borderColor = 'border-blue-200 dark:border-blue-800'
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState<'increase' | 'decrease' | null>(null);
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (value !== prevValueRef.current) {
      const isIncrease = value > prevValueRef.current;
      setAnimationType(isIncrease ? 'increase' : 'decrease');
      setIsAnimating(true);
      
      // Animer la valeur
      setDisplayValue(value);
      
      // Réinitialiser l'animation après 600ms
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationType(null);
      }, 600);
      
      prevValueRef.current = value;
    }
  }, [value]);

  const formatDisplayValue = (val: number) => {
    if (formatValue) return formatValue(val);
    return val.toString();
  };

  const getAnimationVariants = () => {
    const baseVariants = {
      initial: { scale: 1 },
      animate: { scale: 1 },
      exit: { scale: 1 }
    };

    if (!isAnimating) return baseVariants;

    if (animationType === 'increase') {
      return {
        initial: { scale: 1 },
        animate: { 
          scale: [1, 1.1, 1.05, 1],
          rotate: [0, -2, 2, -1, 0],
          transition: {
            duration: 0.6,
            times: [0, 0.2, 0.4, 0.6, 0.8]
          }
        },
        exit: { scale: 1 }
      };
    } else {
      return {
        initial: { scale: 1 },
        animate: { 
          scale: [1, 0.95, 1.02, 1],
          rotate: [0, 1, -1, 0.5, 0],
          transition: {
            duration: 0.6,
            times: [0, 0.2, 0.4, 0.6, 0.8]
          }
        },
        exit: { scale: 1 }
      };
    }
  };

  const getBorderAnimation = () => {
    if (!isAnimating) return '';
    
    if (animationType === 'increase') {
      return 'animate-pulse ring-2 ring-green-400 dark:ring-green-500 shadow-lg shadow-green-200/50 dark:shadow-green-900/50';
    } else {
      return 'animate-pulse ring-2 ring-red-400 dark:ring-red-500 shadow-lg shadow-red-200/50 dark:shadow-red-900/50';
    }
  };

  return (
    <motion.div
      className={`flex items-center gap-2 ${bgColor} px-3 py-1.5 rounded-lg border transition-all duration-300 ${getBorderAnimation()} ${className}`}
      variants={getAnimationVariants()}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {icon && (
        <motion.div
          animate={isAnimating ? { 
            scale: animationType === 'increase' ? [1, 1.2, 1] : [1, 0.9, 1],
            rotate: animationType === 'increase' ? [0, 10, -5, 0] : [0, -10, 5, 0]
          } : {}}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
      )}
      
      <div className="flex items-center gap-1">
        <motion.span 
          className={`text-sm font-bold ${textColor}`}
          animate={isAnimating ? { 
            color: animationType === 'increase' ? ['#059669', '#10b981', '#059669'] : ['#dc2626', '#ef4444', '#dc2626']
          } : {}}
          transition={{ duration: 0.6 }}
        >
          {formatDisplayValue(displayValue)}
        </motion.span>
        
        {suffix && (
          <span className={`text-xs ${textColor.replace('font-bold', 'font-medium')}`}>
            {suffix}
          </span>
        )}
      </div>
      
      {label && (
        <span className={`text-xs ${textColor.replace('font-bold', 'font-medium')}`}>
          {label}
        </span>
      )}
    </motion.div>
  );
};

export default AnimatedCounter; 