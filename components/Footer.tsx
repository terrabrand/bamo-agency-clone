import React from 'react';
import { FadeIn } from './FadeIn';
import { Instagram, Linkedin, Youtube, Facebook, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer>
      {/* CTA Section */}
      <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
           <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop" 
            alt="Office Studio" 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
           <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Start Your Project</h2>
            <p className="text-xl font-light mb-8">Together, we'll create something extraordinary.</p>
            <button className="flex items-center gap-2 mx-auto border border-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                Contact Us <ArrowRight size={14} />
            </button>
           </FadeIn>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-brand-cream pt-24 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
            <FadeIn delay={0.1} className="w-full md:w-1/3">
               <h3 className="text-3xl font-serif mb-6 leading-tight">A collective of <br/> interior designers.</h3>
               <p className="text-xs text-gray-500 mt-4">© 2025 BAMO, Inc. | Privacy Policy</p>
               <p className="text-xs text-gray-500">Site by SDCO Partners</p>
            </FadeIn>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full md:w-2/3 text-xs tracking-wide uppercase text-gray-600">
               <FadeIn delay={0.2}>
                  <strong className="block text-brand-dark mb-4">San Francisco</strong>
                  <p>1000 Brannan Street</p>
                  <p>Suite 300</p>
                  <p>San Francisco, CA 94103</p>
               </FadeIn>
               
               <FadeIn delay={0.3}>
                  <strong className="block text-brand-dark mb-4">Providence</strong>
                  <p>1 Park Row</p>
                  <p>Suite 401</p>
                  <p>Providence, RI 02903</p>
               </FadeIn>

               <FadeIn delay={0.4}>
                  <strong className="block text-brand-dark mb-4">Miami</strong>
                  <p>3350 Virginia Street</p>
                  <p>2nd Floor</p>
                  <p>Miami, FL 33133</p>
               </FadeIn>

               <FadeIn delay={0.5}>
                  <strong className="block text-brand-dark mb-4">Connect</strong>
                  <p className="mb-2">info@bamo.com</p>
                  <p className="mb-2">Careers</p>
                  <div className="flex gap-3 mt-4 text-brand-dark">
                    <Instagram size={16} className="cursor-pointer hover:text-brand-accent" />
                    <Linkedin size={16} className="cursor-pointer hover:text-brand-accent" />
                    <Youtube size={16} className="cursor-pointer hover:text-brand-accent" />
                    <Facebook size={16} className="cursor-pointer hover:text-brand-accent" />
                  </div>
               </FadeIn>
            </div>
          </div>
          
           {/* Newsletter */}
           <div className="border-t border-gray-300 pt-8 mb-20">
             <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                 <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">Newsletter</span>
                 <div className="w-full md:w-1/2 relative">
                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-brand-dark transition-colors text-sm" />
                    <ArrowRight size={14} className="absolute right-0 top-3 text-gray-500" />
                 </div>
             </div>
           </div>

        </div>
        {/* Huge Footer Text */}
        <div className="w-full overflow-hidden leading-none select-none">
             <span className="block text-[15vw] md:text-[22vw] font-serif text-brand-dark text-center tracking-tighter opacity-90 -mb-[4vw]">
                BAMO
             </span>
        </div>
      </div>
    </footer>
  );
};