import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first
      setIsMobileMenuOpen(false);

      // Small delay to let menu close animation complete
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } else {
      console.error(`Section with id "${sectionId}" not found`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-paper border-b border-black"
    >
      <div className="flex flex-row justify-between items-center px-6 py-4 md:h-20">
        {/* Brand Name - Always visible, left-aligned */}
        <div className="text-left">
          <h1
            className="font-display font-bold tracking-tight leading-none uppercase"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
          >
            Dr. Sameer Siddiqui
          </h1>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:block">
          <ul className="flex justify-end gap-8 items-center text-xs font-body uppercase tracking-widest font-medium">
            <li
              onClick={() => scrollToSection('about')}
              className="cursor-pointer hover:underline underline-offset-4 decoration-1"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection('experience')}
              className="cursor-pointer hover:underline underline-offset-4 decoration-1"
            >
              Experience
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dr-sameer-siddiqui-688a202/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline underline-offset-4 decoration-1"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                id="book-consultation-header"
                href="https://app.cal.eu/sameersiddiqui/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu - Only visible on mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer relative z-50"
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`block w-6 h-[2px] bg-black mb-[5px] transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-black mb-[5px] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-paper border-t border-black overflow-hidden"
          >
            <nav className="px-6 py-8">
              <ul className="flex flex-col gap-6 text-sm font-body uppercase tracking-widest font-medium">
                <li
                  onClick={() => scrollToSection('about')}
                  className="cursor-pointer hover:underline underline-offset-4 decoration-1 py-2"
                >
                  About
                </li>
                <li
                  onClick={() => scrollToSection('experience')}
                  className="cursor-pointer hover:underline underline-offset-4 decoration-1 py-2"
                >
                  Experience
                </li>
                <li className="py-2">
                  <a
                    href="https://www.linkedin.com/in/dr-sameer-siddiqui-688a202/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:underline underline-offset-4 decoration-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="pt-4">
                  <a
                    href="https://app.cal.eu/sameersiddiqui/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Consultation
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;