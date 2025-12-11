import React from 'react';
import { Zap, Thermometer, Wifi } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Background Image - Future Proof Theme */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop" 
            alt="Future Connected World" 
            className="w-full h-full object-cover opacity-70"
          />
          {/* Adjusted gradient: Stronger fade from left to transparent right to reveal image */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-transparent"></div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2 z-0 mix-blend-overlay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
            <RevealOnScroll>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">Future-Proof Living</h2>
                <div className="h-1 w-20 bg-brand-gold mb-6"></div>
                <p className="text-gray-300 text-lg leading-relaxed mb-12">
                  In a rapidly changing world, we build homes that are resilient, efficient, and connected. Sustainability is not an upgrade; it is our standard.
                </p>
              </div>
            </RevealOnScroll>

            <div className="space-y-10">
                <RevealOnScroll delay={200}>
                <div className="flex gap-6 items-start group">
                    <div className="p-3 bg-brand-gold/10 rounded-full text-brand-gold shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap size={28} />
                    </div>
                    <div>
                    <h3 className="font-serif text-2xl mb-2 group-hover:text-brand-gold transition-colors">Energy Independence</h3>
                    <p className="text-gray-400">
                        Mitigating risk through integrated solar solutions, hybrid inverters, and battery backup systems to ensure power continuity.
                    </p>
                    </div>
                </div>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                <div className="flex gap-6 items-start group">
                    <div className="p-3 bg-brand-gold/10 rounded-full text-brand-gold shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Thermometer size={28} />
                    </div>
                    <div>
                    <h3 className="font-serif text-2xl mb-2 group-hover:text-brand-gold transition-colors">Thermal Efficiency</h3>
                    <p className="text-gray-400">
                        High-performance double glazing and superior insulation ensure year-round comfort, acoustic privacy, and reduced climate control demands.
                    </p>
                    </div>
                </div>
                </RevealOnScroll>

                <RevealOnScroll delay={400}>
                <div className="flex gap-6 items-start group">
                    <div className="p-3 bg-brand-gold/10 rounded-full text-brand-gold shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Wifi size={28} />
                    </div>
                    <div>
                    <h3 className="font-serif text-2xl mb-2 group-hover:text-brand-gold transition-colors">Smart Integration</h3>
                    <p className="text-gray-400">
                        Fibre-ready architecture and smart-home compatibility designed for the modern digital nomad or executive.
                    </p>
                    </div>
                </div>
                </RevealOnScroll>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;