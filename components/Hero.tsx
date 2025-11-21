import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2600&auto=format&fit=crop"
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Background Slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.0, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={HERO_IMAGES[currentIndex]} 
            alt={`Hero Slide ${currentIndex + 1}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center pb-20 z-10">
        <FadeIn delay={0.2}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-none max-w-4xl drop-shadow-lg">
            Impactful <br />
            <span className="italic font-light">connections</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.6}>
          <button className="mt-12 text-xs text-white uppercase tracking-widest border-b border-white/50 pb-1 hover:border-white transition-all w-fit">
            Get Started
          </button>
        </FadeIn>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-0 w-full z-20 flex justify-center gap-4">
        {HERO_IMAGES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-[2px] transition-all duration-500 ${
              idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-4 hover:w-6 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};