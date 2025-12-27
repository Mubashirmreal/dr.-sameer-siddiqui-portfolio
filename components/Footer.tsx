import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [showConsultButton, setShowConsultButton] = useState(false);

  useEffect(() => {
    // Check if cookie consent has been decided
    const checkCookieConsent = () => {
      const consent = localStorage.getItem('cookie_consent');
      // Show the button only after cookie consent is decided (accepted or declined)
      if (consent) {
        setShowConsultButton(true);
      }
    };

    // Check immediately
    checkCookieConsent();

    // Poll every second to detect when consent is given
    const interval = setInterval(checkCookieConsent, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <motion.footer
        className="py-12 px-6 md:px-12 bg-paper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Email */}
          <div>
            <a
              href="mailto:hi@drsameersiddiqui.com"
              className="font-body text-lg font-medium tracking-wide hover:opacity-60 transition-opacity inline-block"
            >
              hi@drsameersiddiqui.com
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
              href="https://www.linkedin.com/in/dr-sameer-siddiqui-688a202/"
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
              href="https://calendly.com/YOUR_LINK_HERE"
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