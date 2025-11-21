import React from 'react';
import { FadeIn } from './FadeIn';

export const PrivateResidences: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <FadeIn className="mb-12">
          <h3 className="text-3xl font-serif text-brand-dark">Private Residences</h3>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Left Image */}
          <div className="lg:col-span-5 h-[600px] lg:h-[800px] relative">
             <FadeIn fullWidth className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern house exterior" 
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>

          {/* Right Side Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
             {/* Top Image */}
             <div className="h-[400px] w-full">
                <FadeIn delay={0.2} fullWidth className="h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop" 
                    alt="Luxury Living Room" 
                    className="w-full h-full object-cover"
                  />
                </FadeIn>
             </div>
             
             {/* Bottom Image - Offset */}
             <div className="h-[350px] w-full lg:w-3/4 lg:self-end mt-auto">
                <FadeIn delay={0.4} fullWidth className="h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1200&auto=format&fit=crop" 
                    alt="Elegant Dining" 
                    className="w-full h-full object-cover"
                  />
                </FadeIn>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HotelsResorts: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <FadeIn className="mb-12">
          <h3 className="text-3xl font-serif text-brand-dark">Hotels & Resorts</h3>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="h-[400px] lg:h-[500px]">
             <FadeIn fullWidth className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop" 
                alt="Hotel view" 
                className="w-full h-full object-cover"
              />
             </FadeIn>
          </div>
          <div className="h-[400px] lg:h-[500px] lg:mt-20">
             <FadeIn delay={0.2} fullWidth className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1590490360182-f33d5e6a38a5?q=80&w=1200&auto=format&fit=crop" 
                alt="Hotel Interior" 
                className="w-full h-full object-cover"
              />
             </FadeIn>
          </div>
        </div>
        
        <div className="flex justify-center">
           <div className="w-full lg:w-2/3 h-[400px]">
              <FadeIn delay={0.3} fullWidth className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop" 
                  alt="Resort Lobby" 
                  className="w-full h-full object-cover"
                />
              </FadeIn>
           </div>
        </div>
      </div>
    </section>
  );
};

export const BrandedResidences: React.FC = () => {
    return (
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-12">
            <h3 className="text-3xl font-serif text-brand-dark">Branded Residences</h3>
          </FadeIn>
  
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
             {/* Left Column - Tall */}
             <div className="lg:col-span-4 h-[500px] lg:h-[700px]">
                <FadeIn fullWidth className="h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop" 
                    alt="Bedroom detail" 
                    className="w-full h-full object-cover"
                  />
                </FadeIn>
             </div>

             {/* Center Column - Two stacked */}
             <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="h-[300px] lg:h-[400px]">
                    <FadeIn delay={0.2} fullWidth className="h-full">
                        <img 
                            src="https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=1000&auto=format&fit=crop" 
                            alt="Living Area" 
                            className="w-full h-full object-cover"
                        />
                    </FadeIn>
                </div>
                <div className="h-[200px] lg:h-[275px]">
                    <FadeIn delay={0.3} fullWidth className="h-full">
                        <img 
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
                            alt="Pool view" 
                            className="w-full h-full object-cover"
                        />
                    </FadeIn>
                </div>
             </div>

             {/* Right Column - Narrow Tall */}
             <div className="lg:col-span-3 h-[400px] lg:h-[500px] lg:mt-12">
                <FadeIn delay={0.4} fullWidth className="h-full">
                    <img 
                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop" 
                        alt="Detail" 
                        className="w-full h-full object-cover"
                    />
                </FadeIn>
             </div>
          </div>
        </div>
      </section>
    );
  };