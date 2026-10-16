import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Compass, ChevronLeft, ChevronRight, ArrowRight, Instagram, BookOpen, MessageCircle } from 'lucide-react';
import { HERO_SLIDES } from '../data';

interface HeroProps {
  onEnter: () => void;
}

export default function Hero({ onEnter }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll through images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Preload images programmatically on mount
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-stone-950 flex items-center justify-center">
      
      {/* Instant Preloaded Slide Layers */}
      <div className="absolute inset-0 w-full h-full z-0">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-all duration-[1200ms] ease-in-out ${
                isActive ? 'opacity-70 scale-100 pointer-events-auto' : 'opacity-0 scale-100 pointer-events-none'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}
      </div>

      {/* Elegant warm-light vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-stone-950/50 z-10" />
      <div className="absolute inset-0 bg-stone-950/20 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center select-none">
        
        {/* Logo Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-13 h-13 rounded-full border border-white/20 flex items-center justify-center bg-stone-950/40 backdrop-blur-md mb-5"
        >
          <Compass className="w-6 h-6 text-stone-200 stroke-[1.8]" />
        </motion.div>

        {/* Brand Name: SOSOWON (소소원) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-white text-[32px] md:text-[40px] tracking-[0.3em] font-serif font-bold leading-none text-center"
          id="hero-main-logo"
        >
          소소원
        </motion.h1>

        {/* Under logo Korean tagline */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-stone-200 text-[13.5px] md:text-[15px] tracking-[0.25em] md:tracking-[0.35em] mt-4 font-light font-sans block"
        >
          제주 애월 독채 프라이빗 스테이
        </motion.span>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          onClick={onEnter}
          className="mt-8 group bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 hover:border-white/50 text-white font-medium text-[13.5px] tracking-[0.2em] py-3.5 px-9 rounded-full transition-all duration-300 focus:outline-none cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.03] flex items-center gap-3"
          id="hero-enter-btn"
        >
          <span>소소원 둘러보기</span>
          <ArrowRight className="w-4 h-4 text-white/90 group-hover:text-white transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>

      {/* Left Social Links - Hidden on mobile (< md), vertically arranged on desktop */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-6 sm:left-8 md:left-10 z-20 flex-col items-start gap-2"
        id="hero-bottom-left-social"
      >
        <a
          href="https://pf.kakao.com"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#9E5330] backdrop-blur-md border border-white/20 hover:border-[#9E5330] text-stone-200 hover:text-white flex items-center gap-2 transition-all duration-300 text-[11.5px] font-sans tracking-wider shadow-xs cursor-pointer"
          aria-label="KakaoTalk Channel"
          id="hero-kakaotalk-link"
        >
          <MessageCircle className="w-3.5 h-3.5 stroke-[1.8]" />
          <span>KakaoTalk</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#9E5330] backdrop-blur-md border border-white/20 hover:border-[#9E5330] text-stone-200 hover:text-white flex items-center gap-2 transition-all duration-300 text-[11.5px] font-sans tracking-wider shadow-xs cursor-pointer"
          aria-label="Instagram"
          id="hero-instagram-link"
        >
          <Instagram className="w-3.5 h-3.5 stroke-[1.8]" />
          <span>Instagram</span>
        </a>

        <a
          href="https://section.blog.naver.com"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#9E5330] backdrop-blur-md border border-white/20 hover:border-[#9E5330] text-stone-200 hover:text-white flex items-center gap-2 transition-all duration-300 text-[11.5px] font-sans tracking-wider shadow-xs cursor-pointer"
          aria-label="Blog"
          id="hero-blog-link"
        >
          <BookOpen className="w-3.5 h-3.5 stroke-[1.8]" />
          <span>Blog</span>
        </a>
      </motion.div>

      {/* Manual Slider Navigation Controls - Center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6" id="hero-carousel-dots">
        <button
          onClick={handlePrev}
          className="p-1 text-stone-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
          id="hero-slide-prev"
        >
          <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
        </button>
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all rounded-full focus:outline-none cursor-pointer ${
                currentSlide === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
              }`}
              id={`hero-dot-${idx}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-1 text-stone-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
          id="hero-slide-next"
        >
          <ChevronRight className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      {/* Bottom-right text representing Sosowon (Hidden on tablet and mobile, visible on desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-10 right-6 sm:right-8 md:right-10 z-20 hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/60 backdrop-blur-md border border-white/15 text-stone-200 text-[11.5px] font-sans tracking-wider shadow-xs"
        id="hero-bottom-right-text"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642]" />
        <span>제주 애월 납읍리 · 하루 한 팀 프라이빗 독채</span>
      </motion.div>
    </section>
  );
}

