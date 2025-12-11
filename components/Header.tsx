import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', targetId: 'vision' },
    { name: 'Services', targetId: 'services' },
    { name: 'Ethos', targetId: 'ethos' },
  ];

  const handleNavClick = (targetId: string) => {
    setIsMobileMenuOpen(false);

    // Special handling for "home" or top of page if needed, but current links point to sections
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Adjust for header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-blue/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNavClick('top')} className="flex items-center gap-3 group focus:outline-none">
          <div className="h-10 w-10 bg-brand-gold flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
             <span className="font-serif font-bold text-xl text-brand-blue">M</span>
          </div>
          <span className={`font-serif text-2xl font-bold tracking-wide ${isScrolled ? 'text-white' : 'text-white'}`}>
            MASTER<span className="text-brand-gold">PROP</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.targetId)}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-brand-gold focus:outline-none ${
                isScrolled ? 'text-gray-200' : 'text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="px-8 py-3 bg-brand-gold text-brand-blue hover:bg-white hover:text-brand-blue transition-all duration-300 uppercase text-xs font-bold tracking-widest cursor-pointer focus:outline-none shadow-md"
          >
            Inquire
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-blue border-t border-gray-800 py-6 px-6 flex flex-col gap-6 shadow-xl h-screen">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.targetId)}
              className="text-white text-lg font-serif text-left focus:outline-none"
            >
              {link.name}
            </button>
          ))}
          <button
              onClick={() => handleNavClick('contact')}
              className="text-brand-gold text-lg font-serif text-left focus:outline-none"
            >
              Inquire
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;