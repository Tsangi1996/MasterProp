import React, { useState } from 'react';
import { Mail, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    inquiryType: 'Land Seller',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay for better UX
    setTimeout(() => {
      // Construct mailto link
      const subject = `Inquiry: ${formData.inquiryType} from ${formData.name}`;
      const body = `Name: ${formData.name}\n\nMessage:\n${formData.message}`;
      
      // Open default email client
      window.location.href = `mailto:info@masterprop.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', inquiryType: 'Land Seller', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-charcoal text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Get in Touch</h2>
            <p className="text-gray-400 text-lg">We are always interested in discussing new development opportunities.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/5 p-8 border border-white/10 hover:border-brand-gold transition-colors">
                <h3 className="font-serif text-2xl mb-6 text-brand-gold">Connect Digitally</h3>
                
                <div className="space-y-6">
                  <a href="mailto:info@masterprop.co.za" className="flex items-center gap-4 group">
                    <div className="p-3 bg-brand-blue rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                      <Mail size={20} />
                    </div>
                    <span className="text-lg group-hover:text-brand-gold transition-colors">info@masterprop.co.za</span>
                  </a>
                </div>
              </div>

              <div className="p-6 border-l-2 border-brand-gold bg-white/5">
                <p className="italic text-gray-300">
                  "Architecture should speak of its time and place, but yearn for timelessness."
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              {isSuccess && (
                <div className="absolute inset-0 bg-brand-charcoal/95 z-10 flex flex-col items-center justify-center text-center border border-brand-gold animate-in fade-in duration-300">
                  <div className="bg-brand-gold/20 p-4 rounded-full mb-4">
                    <CheckCircle className="text-brand-gold h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">Message Prepared!</h3>
                  <p className="text-gray-400 px-6">Your email client has been opened with your message. We look forward to hearing from you.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm text-brand-gold hover:text-white underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              )}

              <form className={`space-y-6 transition-opacity duration-300 ${isSuccess ? 'opacity-0' : 'opacity-100'}`} onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder-gray-700"
                    placeholder="Enter your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">Inquiry Type</label>
                  <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                    disabled={isSubmitting}
                  >
                    <option className="bg-brand-charcoal" value="Land Seller">Land Seller</option>
                    <option className="bg-brand-charcoal" value="General Inquiry">General Inquiry</option>
                    <option className="bg-brand-charcoal" value="Contractor / Supplier">Contractor / Supplier</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder-gray-700"
                    placeholder="How can we collaborate?"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-gold text-brand-blue font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Preparing...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;