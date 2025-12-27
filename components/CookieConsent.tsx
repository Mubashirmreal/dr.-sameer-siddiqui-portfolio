import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent: React.FC = () => {
    const [showBanner, setShowBanner] = useState(false);

    // Function to load Google Analytics
    const loadAnalytics = () => {
        // Create and append the GA script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-2P8Z1CH44H';
        document.head.appendChild(script1);

        // Initialize GA
        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2P8Z1CH44H');
    `;
        document.head.appendChild(script2);
    };

    useEffect(() => {
        // Check localStorage for cookie consent
        const consent = localStorage.getItem('cookie_consent');

        if (consent === 'accepted') {
            // User has already accepted, load analytics immediately
            loadAnalytics();
        } else if (!consent) {
            // No consent decision yet, show the banner
            setShowBanner(true);
        }
        // If consent === 'declined', do nothing (don't show banner, don't load analytics)
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setShowBanner(false);
        loadAnalytics();
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white border-t border-white"
                >
                    <div className="max-w-7xl mx-auto p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            {/* Cookie Message */}
                            <div className="flex-1">
                                <h3 className="font-display text-lg md:text-xl uppercase mb-2">
                                    Cookie Notice
                                </h3>
                                <p className="font-body text-sm md:text-base leading-relaxed opacity-90">
                                    We use cookies to analyze site traffic and improve your experience.
                                    By accepting, you consent to our use of cookies for analytics purposes.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 min-w-fit">
                                <button
                                    onClick={handleDecline}
                                    className="font-body text-sm uppercase tracking-widest px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="font-body text-sm uppercase tracking-widest px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
