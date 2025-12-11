import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Big Faded Text Decoration */}
      <div className="absolute top-0 right-0 font-serif text-[15rem] leading-none text-brand-gold/5 pointer-events-none select-none translate-x-1/3 -translate-y-1/4">
        Vision
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <RevealOnScroll>
              <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-gold/30 hidden md:block"></div>
                
                {/* 
                  Prompt 2: "Vision" Image
                */}
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                  alt="Architectural Detail" 
                  className="w-full h-[500px] object-cover relative z-10 shadow-2xl"
                />
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <RevealOnScroll delay={200}>
              <div className="inline-block border-b-2 border-brand-gold pb-2">
                <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-blue leading-tight">
                We Don't Just Build.<br />
                <span className="italic text-gray-500">We Create Legacies.</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <p className="text-gray-600 text-lg leading-relaxed">
                At MasterProp, we are driven by a passion for architectural significance and urban regeneration. We specialize in identifying unique sites within Cape Town's most desirable neighborhoods.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={500}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach combines respectful planning with modern design to transform underutilized spaces into premium homes. We focus on quality materials, sustainable practices, and enhancing the urban fabric of the Western Cape.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <RevealOnScroll delay={600}>
                <div>
                  <h4 className="font-serif text-2xl text-brand-blue mb-2">Strategic Location</h4>
                  <p className="text-sm text-gray-500">Selecting sites that offer the best of the Cape Town lifestyle.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={700}>
                <div>
                  <h4 className="font-serif text-2xl text-brand-blue mb-2">Urban Design</h4>
                  <p className="text-sm text-gray-500">Creating buildings that respect and enhance their environment.</p>
                </div>
              </RevealOnScroll>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Vision;