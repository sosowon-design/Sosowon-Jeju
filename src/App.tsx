import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Experience from './components/Experience';
import RoomSelector from './components/RoomSelector';
import BookingWidget from './components/BookingWidget';
import LocationGuide from './components/LocationGuide';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingInquiry from './components/FloatingInquiry';

import { AMENITIES } from './data';

export default function App() {
  // Persist state in localStorage to prevent background jumping on refresh
  const [currentPage, setCurrentPage] = useState<string>(() => {
    return localStorage.getItem('sosowon_current_page') || 'home';
  });

  const [showHero, setShowHero] = useState<boolean>(() => {
    const saved = localStorage.getItem('sosowon_show_hero');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('sosowon_current_page', currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('sosowon_show_hero', JSON.stringify(showHero));
  }, [showHero]);

  // If page changes or menu is clicked, refresh to top or target section
  const handlePageChange = (pageId: string, targetId?: string) => {
    setRefreshKey((prev) => prev + 1);
    setCurrentPage(pageId);
    if (pageId !== 'home') {
      setShowHero(false);
    } else {
      setShowHero(true);
    }
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const handleEnterSpace = () => {
    setShowHero(false);
    setRefreshKey((prev) => prev + 1);
    setCurrentPage('intro'); // Enter goes straight to the 소개 (Intro/About) sub-page as Home has only Hero
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2B2623] font-sans selection:bg-[#8E5642]/20 selection:text-[#2B2623] overflow-x-hidden relative">
      
      {/* 
        Fixed background layer that stays perfectly static across all page transitions 
        to answer: "각 페이지를 새로고침 했을 때 배경이 움직이지 않도록 고정해줘."
      */}
      <div className="fixed inset-0 bg-[#FFFFFF] -z-10" />

      {/* Dynamic Navbar */}
      <Navbar
        currentPage={showHero ? 'home' : currentPage}
        onPageChange={handlePageChange}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <AnimatePresence mode="wait">
        {showHero ? (
          /* Full-screen atmospheric Hero page */
          <motion.div
            key="hero-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Hero onEnter={handleEnterSpace} />
          </motion.div>
        ) : (
          /* Subpages / Main container with fixed global background */
          <motion.div
            key="content-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-[60px] md:pt-[64px] min-h-screen flex flex-col relative bg-[#F6F4F0]"
          >
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                
                {/* 1. MAIN HOME PAGE - (If for some reason currentPage is home and showHero is false, but we keep it safe) */}
                {currentPage === 'home' && (
                  <motion.div
                    key="home-page"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center min-h-[60vh] text-center"
                  >
                    <div className="space-y-4">
                      <p className="text-stone-400 tracking-widest text-[13px] uppercase">SOSOWON JEJU</p>
                      <button
                        onClick={handleEnterSpace}
                        className="bg-stone-900 text-white hover:bg-stone-850 py-3.5 px-8 rounded-sm text-[13px] tracking-widest font-medium"
                      >
                        소소원 공간 들여다보기
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* 2. INTRO SUB-PAGE (소개 - Houses all former home sections + redesigned story and promises) */}
                {currentPage === 'intro' && (
                  <motion.div
                    key={`intro-page-${refreshKey}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Intro onNavigate={handlePageChange} />
                  </motion.div>
                )}

                {/* 3. ROOMS SUB-PAGE (객실 및 공간) */}
                {currentPage === 'rooms' && (
                  <motion.div
                    key={`rooms-page-${refreshKey}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <RoomSelector onSelectRoom={() => handlePageChange('booking')} onNavigate={handlePageChange} />
                  </motion.div>
                )}

                {/* 4. EXPERIENCE SUB-PAGE (경험) */}
                {(currentPage === 'experience' || currentPage === 'gallery') && (
                  <motion.div
                    key={`experience-page-${refreshKey}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Experience onNavigate={handlePageChange} />
                  </motion.div>
                )}

                {/* 5. LOCATION SUB-PAGE (길안내 및 픽업 서비스) */}
                {currentPage === 'location' && (
                  <motion.div
                    key={`location-page-${refreshKey}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <LocationGuide onNavigate={handlePageChange} />
                  </motion.div>
                )}

                {/* 6. BOOKING SUB-PAGE (예약하기 및 규칙 상세) */}
                {currentPage === 'booking' && (
                  <motion.div
                    key={`booking-page-${refreshKey}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <BookingWidget />
                  </motion.div>
                )}

              </AnimatePresence>
            </main>

            {/* Common Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Scroll To Top Button */}
      <ScrollToTop isMobileMenuOpen={isMobileMenuOpen} />

      {/* Floating Inquiry Button & Card */}
      <FloatingInquiry isMobileMenuOpen={isMobileMenuOpen} />
    </div>
  );
}
