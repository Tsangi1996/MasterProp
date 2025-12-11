import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Where do you operate?",
      answer: "We focus exclusively on the Western Cape, specifically targeting high-growth corridors and established residential nodes. We believe the province offers the perfect blend of lifestyle, economic stability, and future potential."
    },
    {
      question: "What type of properties do you develop?",
      answer: "MasterProp specializes in boutique residential developments. From modern apartment complexes to restored heritage homes, our focus is always on high-end finishes and thoughtful design."
    },
    {
      question: "What is your approach to design?",
      answer: "We believe in architecture that respects its context. We work with leading local architects to design buildings that are modern yet timeless, enhancing the streetscape rather than dominating it."
    }
  ];

  return (
    <section className="py-24 bg-brand-cream border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-brand-blue mb-4">About Our Process</h2>
            <p className="text-gray-500">Common questions regarding our development philosophy.</p>
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="border border-gray-300 bg-white hover:border-brand-gold transition-colors duration-300">
                <button
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-serif text-lg ${openIndex === index ? 'text-brand-gold' : 'text-brand-charcoal'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="text-brand-gold shrink-0" size={20} />
                  ) : (
                    <Plus className="text-gray-400 shrink-0" size={20} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;