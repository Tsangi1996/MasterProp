import React, { useState } from 'react';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const privacyPolicy = "At MasterProp, your privacy is paramount. We are committed to protecting your personal data and ensuring transparency in how we handle your information. This Privacy Policy outlines our practices regarding data collection, usage, and protection. We do not sell or lease your personal information to third parties. Any data collected is used solely for the purpose of enhancing your experience and providing our services. By using our website, you consent to the terms described herein.";
  
  const termsOfEngagement = "These Terms of Engagement govern the use of the MasterProp website and our professional services. By accessing this platform, you agree to abide by these terms. All content provided is for informational purposes and does not constitute binding financial or legal advice. MasterProp reserves the right to amend these terms at any time without prior notice. Continued use of the site signifies your acceptance of any changes.";

  return (
    <>
      <footer className="bg-black text-white py-12 border-t border-white/10 relative z-40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-brand-gold flex items-center justify-center shadow-lg">
                  <span className="font-serif font-bold text-xl text-brand-blue">M</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide block">
                  MASTER<span className="text-brand-gold">PROP</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
              Strategic Property Development & Urban Renewal. Unlocking potential across the Western Cape.
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-brand-gold transition-colors duration-300">
              <div className="space-y-1 text-gray-400 font-light">
                <p className="font-medium text-white mb-2">MasterProp</p>
                <p>Western Cape</p>
                <p>Cape Town, 8001</p>
              </div>
            </div>
          </div>

        </div>
        
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} MasterProp Developments (Pty) Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button 
              onClick={() => handleOpenModal('Privacy Policy', privacyPolicy)} 
              className="hover:text-white transition-colors focus:outline-none uppercase tracking-widest"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleOpenModal('Terms of Engagement', termsOfEngagement)} 
              className="hover:text-white transition-colors focus:outline-none uppercase tracking-widest"
            >
              Terms of Engagement
            </button>
          </div>
        </div>
      </footer>

      {/* Modal Portal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" 
            onClick={handleCloseModal}
          ></div>
          
          {/* Content */}
          <div className="relative bg-brand-cream text-brand-charcoal w-full max-w-md p-8 shadow-2xl border-t-4 border-brand-gold transform transition-all animate-[fadeIn_0.3s_ease-out]">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-blue transition-colors focus:outline-none"
            >
              <X size={24} />
            </button>
            
            <h3 className="font-serif text-2xl text-brand-blue mb-6 pr-8 border-b border-brand-gold/20 pb-4">{modalTitle}</h3>
            
            <div className="prose prose-sm text-gray-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>{modalContent}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
              <button 
                onClick={handleCloseModal}
                className="px-6 py-3 bg-brand-blue text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-blue transition-colors shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;