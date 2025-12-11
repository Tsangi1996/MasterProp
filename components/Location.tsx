import React from 'react';
import { Mountain, Sun, Users } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 relative overflow-hidden text-white bg-brand-blue">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2600&auto=format&fit=crop" 
            alt="Western Cape Coastline" 
            className="w-full h-full object-cover opacity-60"
          />
         {/* Gradient Overlay for text readability */}
         <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/50 to-brand-blue/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <RevealOnScroll>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 drop-shadow-md">Why the Western Cape?</h2>
            <p className="text-brand-gold uppercase tracking-widest font-semibold drop-shadow-sm">The Destination of Choice</p>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <RevealOnScroll delay={100}>
            <div className="p-8 border border-white/20 hover:border-brand-gold transition-all duration-500 bg-brand-blue/40 backdrop-blur-md group h-full hover:bg-brand-blue/60 shadow-xl">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-blue transition-all duration-500">
                <Mountain size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white">Unrivalled Landscape</h3>
              <p className="text-gray-100 leading-relaxed font-light">
                From the vibrant city centers to the scenic coastlines, we build in locations that offer breathtaking views and a connection to nature, enhancing the living experience.
              </p>
            </div>
          </RevealOnScroll>

          {/* Card 2 */}
          <RevealOnScroll delay={300}>
            <div className="p-8 border border-white/20 hover:border-brand-gold transition-all duration-500 bg-brand-blue/40 backdrop-blur-md group h-full hover:bg-brand-blue/60 shadow-xl">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-blue transition-all duration-500">
                <Sun size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white">Vibrant Lifestyle</h3>
              <p className="text-gray-100 leading-relaxed font-light">
                The Western Cape creates a perfect balance of outdoor living and cosmopolitan culture. Our developments are situated near key amenities, dining, and lifestyle hubs.
              </p>
            </div>
          </RevealOnScroll>

          {/* Card 3 */}
          <RevealOnScroll delay={500}>
            <div className="p-8 border border-white/20 hover:border-brand-gold transition-all duration-500 bg-brand-blue/40 backdrop-blur-md group h-full hover:bg-brand-blue/60 shadow-xl">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-blue transition-all duration-500">
                <Users size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white">Modern Connectivity</h3>
              <p className="text-gray-100 leading-relaxed font-light">
                We select locations with excellent access to transport routes and business districts, ensuring that residents are part of a connected, thriving modern community.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Location;