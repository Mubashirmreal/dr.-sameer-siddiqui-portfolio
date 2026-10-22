import { useEffect } from 'react';

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

// Adds the `revealed` class to every `.reveal-text` element once it scrolls into view.
export function useRevealOnScroll(): void {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, OBSERVER_OPTIONS);

    document.querySelectorAll('.reveal-text').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
