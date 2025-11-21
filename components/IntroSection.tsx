import React from 'react';
import { FadeIn } from './FadeIn';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-cream">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight">
            Designing interiors that inspire and endure.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mb-8">
            Each BAMO project balances artistry and composition with a spark of delight, creating spaces that are evocative, stylish, and distinctive, from private residences to destinations worldwide. Our goal is to craft environments that function seamlessly while fostering meaningful connections with the people who experience them.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <a href="#about" className="text-xs text-brand-accent uppercase tracking-widest font-bold hover:text-brand-dark transition-colors">
            Get To Know Us
          </a>
        </FadeIn>
      </div>
    </section>
  );
};