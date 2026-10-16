import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Sparkles, Heart, Calendar, Waves, Coffee, ShieldCheck, Quote, Check } from 'lucide-react';
import { GALLERY } from '../data';

interface GalleryGridProps {
  onNavigate?: (pageId: string) => void;
}

export default function GalleryGrid({ onNavigate }: GalleryGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (globalIndex: number) => {
    setSelectedImageIndex(globalIndex);
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    const newIndex = (selectedImageIndex - 1 + GALLERY.length) % GALLERY.length;
    setSelectedImageIndex(newIndex);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    const newIndex = (selectedImageIndex + 1) % GALLERY.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F4EFE6] text-[#2B2623] overflow-hidden relative">
      
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#DFD7CA]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8">
        
        {/* Title Block */}
        <div className="text-center mb-16" id="gallery-header">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#8C5A3C] tracking-[0.25em] text-[12.5px] font-serif uppercase block mb-3 font-semibold"
          >
            SENSORY GALLERY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[24px] md:text-[32px] tracking-[0.05em] font-serif font-bold text-[#2B2623]"
          >
            자연과 함께 채워지는 소소원의 모든 순간
          </motion.h2>
          <div className="w-10 h-[2px] bg-[#8C5A3C]/60 mx-auto mt-4" />
        </div>

        {/* Image Grid */}
        <div className="min-h-[450px]" id="gallery-grid-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            id="gallery-grid"
          >
            <AnimatePresence mode="popLayout">
              {GALLERY.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => handleImageClick(index)}
                  className="relative group aspect-square rounded-sm overflow-hidden bg-stone-100 border border-[#DFD7CA] cursor-pointer shadow-xs hover:shadow-md transition-all"
                  id={`gallery-card-${item.id}`}
                >
                  {/* Photo */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#2B2623]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-white/90">
                      <ArrowRight className="w-5 h-5 stroke-[1.5] text-[#D8B494]" />
                      <span className="text-[13px] tracking-widest font-sans font-medium uppercase">
                        자세히 보기
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* NEW ENHANCED SECTION 1: SENSORY EXPERIENCES AT SOSOWON    */}
        {/* ======================================================== */}
        <div className="mt-24 pt-16 border-t border-[#DFD7CA]">
          <div className="text-center mb-12">
            <span className="text-[#8C5A3C] tracking-[0.25em] text-[11.5px] font-serif uppercase block mb-2 font-semibold">
              CURATED EXPERIENCES
            </span>
            <h3 className="text-[21px] md:text-[24px] font-serif font-bold text-[#2B2623]">
              이미지 너머로 피부에 닿는 소소원의 감각들
            </h3>
            <p className="text-[#2B2623]/75 text-[13.5px] font-normal font-sans mt-2">
              사진 속 모든 인상은 소소원에 머무시는 동안 당신의 오감으로 실재합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Experience Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FAF6F0] border border-[#DFD7CA] p-8 rounded-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] border border-[#DFD7CA] flex items-center justify-center">
                <Waves className="w-5 h-5 text-[#8C5A3C]" />
              </div>
              <h4 className="text-[16px] font-serif font-bold text-[#2B2623]">24시간 온수 노천 스파</h4>
              <p className="text-[13px] text-[#2B2623]/75 font-normal font-sans leading-relaxed">
                거친 현무암 돌담에 둘러싸인 야외 노천탕. 사계절 언제나 따스한 온수와 맑은 별빛 아래 지친 몸과 마음을 푹 녹여냅니다.
              </p>
              <div className="pt-2 text-[12px] text-[#8C5A3C] font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>추가 요금 없이 전액 무료 이용</span>
              </div>
            </motion.div>

            {/* Experience Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#FAF6F0] border border-[#DFD7CA] p-8 rounded-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] border border-[#DFD7CA] flex items-center justify-center">
                <Coffee className="w-5 h-5 text-[#8C5A3C]" />
              </div>
              <h4 className="text-[16px] font-serif font-bold text-[#2B2623]">제주 유기농 다도 리추얼</h4>
              <p className="text-[13px] text-[#2B2623]/75 font-normal font-sans leading-relaxed">
                제주 명인 다원에서 정성껏 기른 잎차와 명인의 수제 도자기 다구 세트로 스스로 차를 우리며 깊은 명상을 즐깁니다.
              </p>
              <div className="pt-2 text-[12px] text-[#8C5A3C] font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>웰컴 잎차 & 다도구 완비</span>
              </div>
            </motion.div>

            {/* Experience Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#FAF6F0] border border-[#DFD7CA] p-8 rounded-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] border border-[#DFD7CA] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#8C5A3C]" />
              </div>
              <h4 className="text-[16px] font-serif font-bold text-[#2B2623]">100% 프렌치 린넨 베딩</h4>
              <p className="text-[13px] text-[#2B2623]/75 font-normal font-sans leading-relaxed">
                살결에 가볍게 감기는 유기농 천연 리넨 침구와 고해상도 빔 프로젝터가 정갈한 돌담 뷰와 어우러져 깊은 숙면을 선물합니다.
              </p>
              <div className="pt-2 text-[12px] text-[#8C5A3C] font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>구스다운 최고급 베딩 적용</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* NEW ENHANCED SECTION 2: GUEST MEMORIES & REVIEWS           */}
        {/* ======================================================== */}
        <div className="mt-20 py-16 bg-[#EDE6DA] border border-[#DFD7CA] rounded-sm px-8 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Quote className="w-8 h-8 text-[#8C5A3C] mx-auto opacity-80" />
            
            <div className="space-y-4">
              <p className="text-[16px] md:text-[18px] font-serif font-normal text-[#2B2623] leading-relaxed italic">
                &ldquo;사진으로 보던 것보다 실제 공간이 훨씬 깊고 조용했습니다. 밤에 야외 노천탕에서 별을 보며 따뜻한 차를 마셨던 순간은 살면서 겪은 가장 아름다운 쉼이었습니다.&rdquo;
              </p>
              <span className="text-[12.5px] font-medium text-[#2B2623]/70 block font-sans">
                — 2026년 1월 독채 전체 이용 투숙객 리뷰
              </span>
            </div>

            <div className="pt-4 border-t border-[#DFD7CA] flex flex-wrap items-center justify-center gap-8 text-[12.5px] text-[#2B2623]/80 font-sans">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8C5A3C]" />
                하루 단 한 팀 독채
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#8C5A3C]" />
                재방문 희망율 99%
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#8C5A3C]" />
                평점 4.98 / 5.0
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM SUBPAGE TRANSITION BANNER                          */}
        {/* ======================================================== */}
        <div className="mt-16 pt-12 border-t border-[#DFD7CA]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#FAF6F0] border border-[#DFD7CA] rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs"
          >
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[#8C5A3C] text-[11px] font-serif font-semibold tracking-[0.25em] uppercase block">NEXT JOURNEY</span>
              <h4 className="text-[18px] md:text-[21px] font-serif font-bold text-[#2B2623] tracking-wide">
                오롯이 나만을 위해 준비된 고요한 정원, 지금 예약을 진행하세요
              </h4>
              <p className="text-[#2B2623]/70 text-[13px] font-sans font-normal">
                실시간 예약 요금 및 정갈한 이용 지침을 확인하고 원하는 날짜를 선점하실 수 있습니다.
              </p>
            </div>
            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="shrink-0 bg-[#8C5A3C] hover:bg-[#6F4229] text-white py-3.5 px-7 rounded-full text-[12.5px] tracking-[0.15em] font-medium transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer flex items-center gap-2.5"
              >
                <span>실시간 예약 및 가이드 보기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 bg-stone-950/98 flex items-center justify-center p-4 md:p-10"
            id="gallery-lightbox"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors p-2 focus:outline-none z-50 cursor-pointer"
              id="lightbox-close"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>

            {/* Left Nav */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-stone-400 hover:text-white transition-colors p-3 rounded-full bg-stone-900/30 backdrop-blur-sm hover:bg-stone-900/50 focus:outline-none cursor-pointer"
              id="lightbox-prev"
            >
              <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
            </button>

            {/* Right Nav */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-stone-400 hover:text-white transition-colors p-3 rounded-full bg-stone-900/30 backdrop-blur-sm hover:bg-stone-900/50 focus:outline-none cursor-pointer"
              id="lightbox-next"
            >
              <ChevronRight className="w-6 h-6 stroke-[1.5]" />
            </button>

            {/* Content Container */}
            <div
              className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center gap-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={GALLERY[selectedImageIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={GALLERY[selectedImageIndex].src}
                alt={GALLERY[selectedImageIndex].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-sm select-none"
                referrerPolicy="no-referrer"
              />
              <div className="text-center">
                <p className="text-stone-200 text-[14.5px] font-sans font-light tracking-wide leading-relaxed">
                  {GALLERY[selectedImageIndex].caption}
                </p>
                <span className="text-stone-500 text-[12px] font-serif uppercase tracking-widest block mt-1">
                  {selectedImageIndex + 1} / {GALLERY.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
