import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOOKING_URL, LINKEDIN_URL } from '../constants';

const SECTION_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];

const linkClass = "cursor-pointer hover:underline underline-offset-4 decoration-1";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Section to scroll to once the mobile menu has finished collapsing. The open menu
  // is part of the sticky header's height, so scrolling earlier overshoots the target.
  const pendingSectionRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return; // fall back to the native #hash jump

    event.preventDefault();
    if (isMobileMenuOpen) {
      pendingSectionRef.current = element;
      setIsMobileMenuOpen(false);
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMenuExitComplete = () => {
    pendingSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    pendingSectionRef.current = null;
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const renderLinks = (itemClass: string, isMobile: boolean) => (
    <>
      {SECTION_LINKS.map(({ id, label }) => (
        <li key={id} className={itemClass}>
          <a href={`#${id}`} onClick={(e) => scrollToSection(e, id)} className={linkClass}>
            {label}
          </a>
        </li>
      ))}
      <li className={itemClass}>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          onClick={isMobile ? closeMenu : undefined}
        >
          LinkedIn
        </a>
      </li>
      <li className={isMobile ? 'pt-4' : undefined}>
        <a
          id={isMobile ? undefined : 'book-consultation-header'}
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-primary text-xs${isMobile ? ' block text-center' : ''}`}
          onClick={isMobile ? closeMenu : undefined}
        >
          Book Consultation
        </a>
      </li>
    </>
  );

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
            {renderLinks('', false)}
          </ul>
        </nav>

        {/* Mobile Hamburger Menu - Only visible on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen((open) => !open)}
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
      <AnimatePresence onExitComplete={handleMenuExitComplete}>
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
                {renderLinks('py-2', true)}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
