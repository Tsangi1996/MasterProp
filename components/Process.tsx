import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Process: React.FC = () => {
  const steps = [
    { 
      number: '01', 
      title: 'Opportunity', 
      desc: 'We utilize proprietary market data to identify high-yield pockets within the Western Cape\'s growth corridors.' 
    },
    { 
      number: '02', 
      title: 'Acquisition', 
      desc: 'Securing prime assets through our extensive off-market network, ensuring value is captured at the source.' 
    },
    { 
      number: '03', 
      title: 'Curation', 
      desc: 'Collaborating with visionary architects to design spaces that maximize zoning potential while enhancing the streetscape.' 
    },
    { 
      number: '04', 
      title: 'Realization', 
      desc: 'Hands-on project management and partnership with top-tier contractors to ensure precision in every detail.' 
    }
  ];

  return (
    <section className="py-24 bg-brand-charcoal text-white border-b border-white/5 relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
           src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
           alt="Architectural Structure Background" 
           className="w-full h-full object-cover opacity-40"
         />
        {/* Heavy overlay to ensure text readability */}
        <div className="absolute inset-0 bg-brand-charcoal/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/60 to-brand-charcoal/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">The Methodology</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Our development cycle is defined by rigour, precision, and an unwavering commitment to unlocking value.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
                <RevealOnScroll key={idx} delay={idx * 150}>
                    <div className="relative p-8 border-l border-white/20 hover:border-brand-gold transition-all duration-500 group h-full hover:bg-white/5 backdrop-blur-sm">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-charcoal border border-white/20 group-hover:border-brand-gold group-hover:bg-brand-gold transition-colors duration-500"></div>
                        <span className="text-5xl font-serif text-white/10 block mb-6 group-hover:text-brand-gold/20 transition-colors">{step.number}</span>
                        <h3 className="text-xl font-serif text-white mb-4 group-hover:text-brand-gold transition-colors">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                </RevealOnScroll>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;