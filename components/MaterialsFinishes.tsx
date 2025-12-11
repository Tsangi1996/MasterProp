import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const MaterialsFinishes: React.FC = () => {
  const materials = [
    {
      title: 'Natural Stone',
      description: 'Imported marble and honed granite surfaces that age gracefully, selected for unique veining and durability.',
      image: 'https://images.unsplash.com/photo-1598994386639-c5548680c2f3?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Solid Timber',
      description: 'Sustainably sourced oak and walnut flooring providing warmth, acoustic balance, and organic character.',
      image: 'https://images.unsplash.com/photo-1549405085-7033580554c3?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Brushed Metals',
      description: 'Premium brass and gunmetal fixtures adding a touch of industrial elegance and tactile sophistication.',
      image: 'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Artisan Glass',
      description: 'Fluted and textured glass elements that play with light and privacy, creating dynamic interior atmospheres.',
      image: 'https://images.unsplash.com/photo-1506720188909-519890cb5496?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-brand-charcoal text-white relative">
        <div className="container mx-auto px-6">
            <RevealOnScroll>
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">Materials & Finishes</h2>
                    <div className="h-1 w-20 bg-brand-gold mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        We obsess over every detail. Our palette is curated for longevity, tactile beauty, and timeless appeal.
                    </p>
                </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {materials.map((item, index) => (
                    <RevealOnScroll key={index} delay={index * 100}>
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden h-80 mb-6 border border-white/10 group-hover:border-brand-gold transition-colors duration-300">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <h3 className="font-serif text-2xl text-brand-gold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4 group-hover:border-brand-gold/50 transition-colors">
                                {item.description}
                            </p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    </section>
  );
};

export default MaterialsFinishes;