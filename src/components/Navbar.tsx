import { useState, useEffect } from 'react';
import { Menu, X, Compass, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (pageId: string) => void;
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

export default function Navbar({
  currentPage,
  onPageChange,
  isMobileMenuOpen: externalMobileMenuOpen,
  setIsMobileMenuOpen: externalSetMobileMenuOpen,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);

  const isMobileMenuOpen = externalMobileMenuOpen !== undefined ? externalMobileMenuOpen : internalMobileMenuOpen;
  const setIsMobileMenuOpen = externalSetMobileMenuOpen !== undefined ? externalSetMobileMenuOpen : setInternalMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '소개', id: 'intro', en: 'ABOUT', desc: '쉼과 치유의 공간 철학' },
    { label: '객실', id: 'rooms', en: 'STAY', desc: '독채 프라이빗 스테이 및 비품' },
    { label: '경험', id: 'experience', en: 'EXPERIENCE', desc: '다도와 온수풀, 힐링 루틴' },
    { label: '길안내', id: 'location', en: 'LOCATION', desc: '제주 애월 오시는 길 안내' },
  ];

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    onPageChange('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // On sub-pages (intro, rooms, experience, location, booking) or when mobile menu is open, navbar matches #F6F4F0 seamlessly
  const isSubPage = currentPage !== 'home';
  const showSolidNav = isScrolled || isSubPage;
  const isEffectiveSolid = showSolidNav || isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'bg-[#F6F4F0] border-b border-[#8E5642]/35 py-3.5'
            : showSolidNav
            ? 'bg-[#F6F4F0] md:bg-[#F6F4F0]/95 md:backdrop-blur-md border-b border-[#8E5642]/35 py-3.5 shadow-2xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo with high contrast readable text */}
          <button
            onClick={handleLogoClick}
            className={`flex items-center gap-2.5 transition-all focus:outline-none group cursor-pointer ${
              isEffectiveSolid ? 'text-[#2B2623]' : 'text-white drop-shadow-md'
            }`}
            id="nav-logo-btn"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isEffectiveSolid ? 'bg-[#8E5642]/10 border border-[#8E5642]/30' : 'bg-white/15 backdrop-blur-xs border border-white/30'
            }`}>
              <Compass className={`w-4.5 h-4.5 stroke-[1.8] ${isEffectiveSolid ? 'text-[#8E5642]' : 'text-white'}`} id="nav-logo-icon" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold tracking-[0.25em] uppercase text-[15px] md:text-[16px] leading-tight">
                SOSOWON
              </span>
              <span className={`text-[9.5px] tracking-[0.3em] uppercase font-light ${
                isEffectiveSolid ? 'text-[#2B2623]/70' : 'text-white/80'
              }`}>
                JEJU STAY
              </span>
            </div>
          </button>

          {/* Desktop Navigation - Natural Menu Bar with #F6F4F0 harmony */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8" id="nav-desktop">
            <nav
              className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-300 ${
                showSolidNav
                  ? 'bg-[#FFFFFF] border border-[#E8E5DF] shadow-2xs'
                  : 'bg-black/35 backdrop-blur-md border border-white/20'
              }`}
            >
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    }}
                    className={`relative px-4 py-1.5 text-[13.5px] tracking-[0.08em] font-medium transition-all duration-300 focus:outline-none rounded-full cursor-pointer select-none ${
                      isActive
                        ? showSolidNav
                          ? 'text-[#8E5642] font-bold'
                          : 'text-white font-bold'
                        : showSolidNav
                          ? 'text-[#2B2623]/80 hover:text-[#2B2623] hover:bg-[#F6F4F0]'
                          : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    {/* Active Aesthetic Capsule Background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className={`absolute inset-0 rounded-full shadow-xs ${
                          showSolidNav
                            ? 'bg-[#F6F4F0] border border-[#E8E5DF]'
                            : 'bg-white/25 backdrop-blur-md border border-white/40'
                        }`}
                      />
                    )}

                    <span className="relative z-10 font-sans">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Separate CTA Button for Reservation */}
            {(() => {
              const isBookingPage = currentPage === 'booking';
              return (
                <button
                  onClick={() => {
                    onPageChange('booking');
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  }}
                  className={`font-medium text-[13px] tracking-[0.12em] px-5 py-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer flex items-center gap-2 ${
                    showSolidNav
                      ? isBookingPage
                        ? 'bg-[#8E5642] text-white ring-4 ring-[#8E5642]/25 shadow-md font-bold scale-[1.02] border border-[#8E5642]'
                        : 'bg-[#8E5642] hover:bg-[#784735] text-white border border-[#8E5642]/80 shadow-md hover:scale-[1.02]'
                      : isBookingPage
                        ? 'bg-[#8E5642]/80 text-white backdrop-blur-md border-2 border-white ring-2 ring-white/40 font-bold shadow-md'
                        : 'bg-white/15 hover:bg-[#8E5642] text-white backdrop-blur-md border border-white/30 shadow-sm hover:scale-[1.02]'
                  }`}
                  id="nav-cta-booking"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>예약하기</span>
                </button>
              );
            })()}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isEffectiveSolid 
                  ? 'text-[#2B2623] hover:bg-stone-200/50' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer - Original Design Restored */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#F6F4F0]/95 backdrop-blur-xl md:hidden pt-24 px-6 pb-10 flex flex-col justify-between"
            id="mobile-menu-drawer"
          >
            <div className="space-y-4 pt-2">
              <div className="flex flex-col space-y-2.5">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onPageChange(item.id);
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                      }}
                      className={`flex items-center justify-between p-4 rounded-xl text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#FFFFFF] text-[#8E5642] font-bold border border-[#E8E5DF] shadow-xs'
                          : 'text-[#2B2623] hover:bg-[#FFFFFF]/60 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 text-left">
                        <span className="text-[16px] font-sans font-medium">{item.label}</span>
                        <span className="text-[10.5px] font-serif font-bold tracking-[0.2em] text-[#8E5642] uppercase">
                          {item.en}
                        </span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#8E5642] translate-x-0.5' : 'text-[#8E5642]/60'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E5DF]">
              <button
                onClick={() => {
                  onPageChange('booking');
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                }}
                className="w-full bg-[#8E5642] hover:bg-[#784735] text-white py-4 rounded-xl text-center text-[15px] font-medium tracking-wide shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-colors group"
              >
                <span>소소원 예약 바로가기</span>
                <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
