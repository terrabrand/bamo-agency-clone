import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '',
  fullWidth = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getInitialDirection = () => {
    switch (direction) {
      case 'up': return { y: 60, opacity: 0 };
      case 'down': return { y: -60, opacity: 0 };
      case 'left': return { x: 60, opacity: 0 };
      case 'right': return { x: -60, opacity: 0 };
      case 'none': return { opacity: 0 };
      default: return { y: 60, opacity: 0 };
    }
  };

  const getTargetDirection = () => {
    switch (direction) {
      case 'up': case 'down': return { y: 0, opacity: 1 };
      case 'left': case 'right': return { x: 0, opacity: 1 };
      case 'none': return { opacity: 1 };
      default: return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialDirection()}
      animate={isInView ? getTargetDirection() : getInitialDirection()}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: delay }}
      className={className}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      {children}
    </motion.div>
  );
};