import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'Team', href: '#team' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Logic for text color:
  // 1. Menu Open: Cream (on dark menu bg)
  // 2. Scrolled: Dark (on cream navbar bg)
  // 3. Top (Hero): White/Cream (on dark hero bg)
  const textColorClass = isOpen 
    ? 'text-brand-cream' 
    : scrolled 
      ? 'text-brand-dark' 
      : 'text-brand-cream';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled && !isOpen ? 'py-4 bg-brand-cream/90 backdrop-blur-sm shadow-sm' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className={`text-2xl font-serif tracking-widest uppercase font-bold z-50 transition-colors duration-300 ${textColorClass}`}>
            BAMO
          </div>
          
          <button 
            onClick={toggleMenu}
            className={`z-50 p-2 transition-colors duration-300 ${textColorClass}`}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#1a1a1a] z-40 flex flex-col justify-center items-center text-brand-cream"
          >
            <nav className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start h-full py-32">
              <div className="hidden md:block w-1/3">
                <p className="text-sm uppercase tracking-widest mb-4 text-gray-400">Contact</p>
                <p className="mb-2">1000 Brannan Street</p>
                <p className="mb-8">San Francisco, CA 94103</p>
                <a href="mailto:info@bamo.com" className="border-b border-white/30 pb-1 hover:border-white transition-colors">info@bamo.com</a>
              </div>

              <ul className="flex flex-col items-center md:items-start space-y-8 w-full md:w-1/3 text-center md:text-left">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <a 
                      href={item.href} 
                      className="text-4xl md:text-6xl font-serif hover:text-gray-400 transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 md:mt-0 w-full md:w-1/3 flex flex-col items-center md:items-end">
                 <div className="flex space-x-6">
                    <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />
                    <Linkedin className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />
                    <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />
                    <Youtube className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />
                 </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};