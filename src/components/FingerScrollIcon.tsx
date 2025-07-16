import React from 'react';
import { motion } from 'framer-motion';
import { Pointer } from 'lucide-react';

interface FingerScrollIconProps {
  className?: string;
  size?: number;
}

const FingerScrollIcon: React.FC<FingerScrollIconProps> = ({ 
  className = "", 
  size = 20
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Icône de doigt avec animation fadeInRight -> fadeOutLeft */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, x: 80 }}
        animate={{ 
          opacity: [0, 1, 0, 0],
          x: [80, 0, -80, 80]
        }}
        transition={{
          duration: 4.5,
          times: [0, 0.4, 0.9, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5
        }}
      >
        <Pointer size={size * 0.8} />
      </motion.div>
    </div>
  );
};

export default FingerScrollIcon; 