import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingConsultation: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if cookie consent has been decided
        const checkCookieConsent = () => {
            const consent = localStorage.getItem('cookie_consent');
            // Show the button only after cookie consent is decided (accepted or declined)
            if (consent) {
                setIsVisible(true);
            }
        };

        // Check immediately
        checkCookieConsent();

        // Also listen for storage changes (in case consent is given in another tab)
        window.addEventListener('storage', checkCookieConsent);

        // Poll every second to detect when consent is given
        const interval = setInterval(checkCookieConsent, 1000);

        return () => {
            window.removeEventListener('storage', checkCookieConsent);
            clearInterval(interval);
        };
    }, []);

    const handleClick = () => {
        // Scroll to footer or open contact
        const footer = document.querySelector('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    id="book-consultation-mobile"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
                    onClick={handleClick}
                    className="fixed bottom-6 right-6 z-40 bg-black text-white px-6 py-4 font-body text-sm uppercase tracking-widest border border-black hover:bg-white hover:text-black transition-colors duration-300 shadow-lg md:hidden"
                    aria-label="Book Consultation"
                >
                    Book Consultation
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default FloatingConsultation;
