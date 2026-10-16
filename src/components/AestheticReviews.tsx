import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS } from '../data';

export default function AestheticReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const activeReview = REVIEWS[activeIndex];

  return (
    <section className="py-24 bg-[#FFFFFF] text-stone-850 border-b border-[#E8E5DF] overflow-hidden" id="aesthetic-reviews-section">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-stone-400 tracking-[0.25em] text-[13px] uppercase block mb-3 font-semibold">
            GUEST MEMORIES
          </span>
          <h3 className="text-[24px] md:text-[28px] font-sans font-semibold text-stone-900 tracking-wide">
            소소원에 머문 분들의 기억
          </h3>
          <div className="w-8 h-[1px] bg-stone-300 mx-auto mt-6" />
        </div>

        {/* Testimonial Slider Wrapper */}
        <div className="relative bg-white border border-stone-200/80 p-8 md:p-14 rounded-sm shadow-xs flex flex-col items-center">
          
          {/* Subtle Quote Mark decorative background */}
          <div className="absolute top-6 left-8 text-stone-100 pointer-events-none">
            <Quote className="w-16 h-16 fill-current opacity-60" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full text-center space-y-6 relative z-10"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: activeReview.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-stone-800 text-stone-800 stroke-0" />
                ))}
              </div>

              {/* Review Content */}
              <blockquote className="text-[14px] md:text-[15.5px] text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
                "{activeReview.content}"
              </blockquote>

              {/* Author & Context info */}
              <div className="space-y-1">
                <span className="text-stone-900 font-semibold text-[14px] block">
                  {activeReview.author}
                </span>
                <span className="text-stone-400 text-[12px] font-mono tracking-wider block">
                  {activeReview.date} • {activeReview.roomName}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center gap-6 mt-10 relative z-10">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-stone-200 hover:border-stone-800 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all focus:outline-none ${
                    activeIndex === idx ? 'w-5 bg-stone-800' : 'w-1.5 bg-stone-200 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-stone-200 hover:border-stone-800 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
