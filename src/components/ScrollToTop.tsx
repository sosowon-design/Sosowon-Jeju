import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  isMobileMenuOpen?: boolean;
}

export default function ScrollToTop({ isMobileMenuOpen = false }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const shouldShow = isVisible && !isMobileMenuOpen;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
          className="fixed bottom-6 right-6 z-40 bg-[#FAF8F5]/95 hover:bg-[#8E5642] text-[#5A4D41] hover:text-white w-10 h-10 rounded-full shadow-md hover:shadow-lg backdrop-blur-md border border-[#E2DDD5] hover:border-[#8E5642] transition-all duration-300 hover:scale-105 focus:outline-none cursor-pointer flex items-center justify-center group"
          id="btn-scroll-to-top"
        >
          <ArrowUp className="w-4.5 h-4.5 stroke-[1.8] transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
