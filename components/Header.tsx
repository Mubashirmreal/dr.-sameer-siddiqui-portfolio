import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
                href="https://calendly.com/YOUR_LINK_HERE"
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
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
          aria-label="Menu"
        >
          <span className="block w-6 h-[2px] bg-black mb-[5px]"></span>
          <span className="block w-6 h-[2px] bg-black mb-[5px]"></span>
          <span className="block w-6 h-[2px] bg-black"></span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;