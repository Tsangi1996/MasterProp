import React, { useEffect, useState } from 'react';
import { ArrowDown, MapPin, Award, Leaf } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=2670&auto=format&fit=crop" 
          alt="Cape Town City Bowl at Golden Hour"
          className="w-full h-[120%] object-cover" 
        />
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-brand-blue/30 to-brand-blue/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white mt-10 md:mt-0 flex-grow flex flex-col justify-center items-center">
        <RevealOnScroll>
          <div className="inline-block border border-white/30 px-4 py-1 mb-6 backdrop-blur-sm bg-white/5">
            <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
              Premier Property Development
            </h2>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 drop-shadow-2xl">
            Shaping the Skyline of <br />
            <span className="italic text-brand-gold">The Western Cape</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-100 font-light mb-10 drop-shadow-md leading-relaxed">
            Specializing in urban renewal and architectural excellence. We transform potential into exceptional living spaces.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={600}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('vision')}
              className="w-full sm:w-auto px-10 py-4 bg-brand-gold text-brand-blue font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-lg focus:outline-none"
            >
              Discover More
            </button>
            <button 
              onClick={() => scrollToSection('ethos')}
              className="w-full sm:w-auto px-10 py-4 border border-white text-white font-bold tracking-widest uppercase hover:bg-white hover:text-brand-blue transition-all duration-300 focus:outline-none backdrop-blur-sm bg-white/5"
            >
              Our Ethos
            </button>
          </div>
        </RevealOnScroll>

        {/* Value Proposition Bar */}
        <RevealOnScroll delay={800}>
          <div className="hidden md:flex gap-12 border-t border-white/20 pt-8 text-sm tracking-widest uppercase text-gray-300 font-medium">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-brand-gold" />
              <span>Prime Locations</span>
            </div>
            <div className="flex items-center gap-3">
              <Award size={16} className="text-brand-gold" />
              <span>Architectural Merit</span>
            </div>
            <div className="flex items-center gap-3">
              <Leaf size={16} className="text-brand-gold" />
              <span>Sustainable Living</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <button 
        onClick={() => scrollToSection('vision')}
        className="absolute bottom-10 w-full flex justify-center animate-bounce text-white/50 z-10 hover:text-brand-gold transition-colors cursor-pointer focus:outline-none"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;