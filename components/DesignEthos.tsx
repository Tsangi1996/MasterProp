import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const DesignEthos: React.FC = () => {
  return (
    <section id="ethos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-blue mb-4">The MasterProp Aesthetic</h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our developments are characterized by clean lines, sustainable materials, and a seamless integration with the Western Cape's natural beauty.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1: Modern Exterior */}
          <RevealOnScroll delay={100}>
            <div className="relative group overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern Exterior Facade" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-brand-gold font-serif text-2xl italic">Modern Facades</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Image 2: Construction/Structure */}
          <RevealOnScroll delay={150}>
            <div className="relative group overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop" 
                alt="Construction Structure" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-brand-gold font-serif text-2xl italic">Structural Integrity</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Image 3: Interior/Lifestyle */}
          <RevealOnScroll delay={200}>
            <div className="relative group overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop" 
                alt="Premium Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-brand-gold font-serif text-2xl italic">Refined Interiors</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Image 4: Seamless Living */}
          <RevealOnScroll delay={250}>
            <div className="relative group overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" 
                alt="Open Plan Living" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-brand-gold font-serif text-2xl italic">Seamless Living</p>
              </div>
            </div>
          </RevealOnScroll>

           {/* Image 5: Materiality */}
           <RevealOnScroll delay={300}>
            <div className="relative group overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1200&auto=format&fit=crop" 
                alt="Texture and Materiality" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-brand-gold font-serif text-2xl italic">Rich Textures</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Image 6: Natural Light */}
          <RevealOnScroll delay={350}>
            <div className="relative group overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop" 
                alt="Natural Light Home" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-brand-gold font-serif text-2xl italic">Natural Light</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default DesignEthos;