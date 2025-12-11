import React from 'react';
import { MapPin, PencilRuler, Hammer } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white bg-grid-pattern relative">
      {/* Subtle radial light in center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white to-transparent opacity-80 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-12">
             <RevealOnScroll>
               <div>
                  <h2 className="font-serif text-4xl md:text-5xl text-brand-blue mb-6">Our Expertise</h2>
                  <div className="h-1 w-20 bg-brand-gold"></div>
               </div>
             </RevealOnScroll>

             <RevealOnScroll delay={200}>
               <div className="flex gap-6 group">
                  <div className="mt-1">
                    <div className="p-3 bg-brand-blue text-white group-hover:bg-brand-gold transition-colors duration-500">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-brand-charcoal mb-2">Land Acquisition</h3>
                    <p className="text-gray-600">Sourcing prime off-market locations. We look for the hidden potential in established neighborhoods to create something unique.</p>
                  </div>
               </div>
             </RevealOnScroll>

             <RevealOnScroll delay={400}>
               <div className="flex gap-6 group">
                  <div className="mt-1">
                    <div className="p-3 bg-brand-blue text-white group-hover:bg-brand-gold transition-colors duration-500">
                      <PencilRuler size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-brand-charcoal mb-2">Development Planning</h3>
                    <p className="text-gray-600">Navigating complex zoning regulations and managing the architectural vision from concept to council approval.</p>
                  </div>
               </div>
             </RevealOnScroll>

             <RevealOnScroll delay={600}>
               <div className="flex gap-6 group">
                  <div className="mt-1">
                    <div className="p-3 bg-brand-blue text-white group-hover:bg-brand-gold transition-colors duration-500">
                      <Hammer size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-brand-charcoal mb-2">Project Delivery</h3>
                    <p className="text-gray-600">Managing the construction process with rigour and precision. We partner with top-tier contractors to ensure exceptional build quality.</p>
                  </div>
               </div>
             </RevealOnScroll>

          </div>

          <div className="lg:w-1/2 w-full">
            <RevealOnScroll delay={300}>
              {/* 
                Prompt 3: "On Site" Vibe
              */}
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-blue/10 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" 
                  alt="Development Planning Blueprint" 
                  className="w-full h-[600px] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;