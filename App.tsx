import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { PrivateResidences, HotelsResorts, BrandedResidences } from './components/ProjectSection';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-cream min-h-screen w-full overflow-x-hidden selection:bg-brand-accent/30">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <div id="work">
          <PrivateResidences />
          <HotelsResorts />
          <BrandedResidences />
        </div>
        <div id="studio">
          <AboutSection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;