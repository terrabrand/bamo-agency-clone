import React from 'react';
import { FadeIn } from './FadeIn';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
              Curious, gracious, masters of our craft.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-600 font-light mb-8 max-w-md leading-relaxed">
              We value exploration, ingenuity, and collaboration, embracing diverse voices and shared vision to shape design and culture with integrity.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a href="#studio" className="text-xs text-brand-accent uppercase tracking-widest font-bold hover:text-brand-dark transition-colors">
              Explore Our Studio
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 gap-4 h-[600px]">
            <div className="space-y-4 pt-12">
                 <FadeIn delay={0.2} direction="right" className="h-1/2">
                    <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" 
                        alt="Materials" 
                        className="w-full h-full object-cover" 
                    />
                 </FadeIn>
                 <FadeIn delay={0.4} direction="right" className="h-1/2">
                    <img 
                        src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=600&auto=format&fit=crop" 
                        alt="Planning" 
                        className="w-full h-full object-cover" 
                    />
                 </FadeIn>
            </div>
            <div className="space-y-4 pb-12">
                <FadeIn delay={0.3} direction="left" className="h-1/2">
                    <img 
                        src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop" 
                        alt="Interior" 
                        className="w-full h-full object-cover" 
                    />
                 </FadeIn>
                 <FadeIn delay={0.5} direction="left" className="h-1/2">
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" 
                        alt="Office" 
                        className="w-full h-full object-cover" 
                    />
                 </FadeIn>
            </div>
        </div>
      </div>
    </section>
  );
};