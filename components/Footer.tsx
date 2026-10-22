import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOOKING_URL, CONTACT_EMAIL, LINKEDIN_URL } from '../constants';
import { CONSENT_CHANGE_EVENT, readConsent } from '../utils/consent';

const Footer: React.FC = () => {
  const [showConsultButton, setShowConsultButton] = useState(false);

  useEffect(() => {
    // Show the sticky CTA only once the cookie banner is out of the way (accepted or declined)
    if (readConsent()) {
      setShowConsultButton(true);
      return;
    }

    const handleConsentChange = () => setShowConsultButton(true);
    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
  }, []);

  return (
    <>
      <motion.footer
        className={`pt-12 px-6 md:px-12 bg-paper ${showConsultButton ? 'pb-28 md:pb-12' : 'pb-12'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Email */}
          <div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-body text-lg font-medium tracking-wide hover:opacity-60 transition-opacity inline-block"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Center: Copyright */}
          <div className="md:text-center">
            <p className="font-body text-[10px] uppercase tracking-widest opacity-50">
              © {new Date().getFullYear()} Dr. Sameer Siddiqui. All rights reserved.
            </p>
          </div>

          {/* Right: LinkedIn */}
          <div className="md:text-right">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-lg font-bold uppercase tracking-widest border-b border-black hover:bg-black hover:text-white transition-colors inline-block"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </motion.footer>

      {/* Mobile Sticky Footer CTA - Only visible on mobile after cookie consent */}
      <AnimatePresence>
        {showConsultButton && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-black"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#121212] text-[#f5f5f5] font-body font-bold uppercase tracking-widest text-center py-4 px-6 hover:bg-[#f5f5f5] hover:text-[#121212] transition-colors duration-300 active:scale-[0.98]"
            >
              Book a Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;