import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <>
      <motion.footer
        className="py-12 px-6 md:px-12 bg-paper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="font-body text-xs uppercase tracking-widest opacity-60">
              © {new Date().getFullYear()} Dr. Sameer Siddiqui. All rights reserved.
            </p>
          </div>
          <div className="md:text-right">
            <a
              href="https://www.linkedin.com/in/dr-sameer-siddiqui-688a202/"
              className="font-body text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:bg-black hover:text-white transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </motion.footer>

      {/* Mobile Sticky Footer CTA - Only visible on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-black">
        <a
          href="https://calendly.com/YOUR_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#121212] text-[#f5f5f5] font-body font-bold uppercase tracking-widest text-center py-4 px-6 hover:bg-[#f5f5f5] hover:text-[#121212] transition-colors duration-300 active:scale-[0.98]"
        >
          Book a Consultation
        </a>
      </div>
    </>
  );
};

export default Footer;