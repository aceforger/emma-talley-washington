import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Book', href: '#book' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary-dark/95 backdrop-blur-sm shadow-lg py-3' : 'bg-primary/90 backdrop-blur-sm py-5'
    }`}>
      <div className="container-custom mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-display font-bold text-white">
          Emma Talley Washington
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-white/80 hover:text-white font-medium transition-colors">
              {item.name}
            </a>
          ))}
          {/* <a href="#contact" className="bg-accent hover:bg-accent-light text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
            Get in Touch
          </a> */}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-dark shadow-xl">
          <div className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-white/80 hover:text-white text-lg" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
            {/* <a href="#contact" className="bg-accent hover:bg-accent-light text-white px-6 py-2 rounded-full font-semibold" onClick={() => setIsMenuOpen(false)}>
              Get in Touch
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;