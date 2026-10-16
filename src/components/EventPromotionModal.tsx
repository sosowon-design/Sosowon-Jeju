import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Tag, Calendar, Gift, Waves, ArrowRight, ShieldCheck } from 'lucide-react';
import modalBgImg from '../assets/images/nanobanana_about_main_1783604791029.jpg';

interface EventPromotionModalProps {
  onNavigate?: (pageId: string) => void;
}

export default function EventPromotionModal({ onNavigate }: EventPromotionModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user chose "Do not show today"
    const hideExpiry = localStorage.getItem('sosowon_hide_event_modal_expiry');
    if (!hideExpiry || Date.now() > parseInt(hideExpiry, 10)) {
      // Show popup after smooth 500ms delay on Intro page
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDoNotShowToday = () => {
    // Set expiry to midnight today
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    localStorage.setItem('sosowon_hide_event_modal_expiry', tomorrow.getTime().toString());
    setIsOpen(false);
  };

  const handleGoBooking = () => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate('booking');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" id="event-modal-wrapper">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#1E1A18]/65 backdrop-blur-xs"
          />

          {/* Natural & Aesthetic Modal Box with Full Image Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden z-10 my-auto border border-[#DFD7CA] text-[#2B2623]"
            id="event-promotion-dialog"
          >
            {/* Full Background Image with Warm Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={modalBgImg}
                alt="소소원 머무름 전경"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#FAF6F0]/92 backdrop-blur-md" />
            </div>

            {/* Modal Content inside Relative z-10 */}
            <div className="relative z-10 p-6 sm:p-7 space-y-4">
              
              {/* Top Header Row */}
              <div className="flex items-center justify-between pb-1 border-b border-[#DFD7CA]/70">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E5330]/10 text-[#9E5330] text-[11px] font-serif font-bold tracking-widest uppercase border border-[#9E5330]/25 shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#9E5330]" />
                  <span>SPECIAL PROMOTION</span>
                </span>
                
                <button
                  onClick={handleClose}
                  className="w-7 h-7 rounded-full bg-[#2B2623]/10 hover:bg-[#2B2623]/20 text-[#2B2623] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="닫기"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-serif font-bold text-[20px] md:text-[22px] text-[#2B2623] tracking-wide">
                  소소원 2026 시즌 스테이 혜택
                </h3>
                <p className="text-[12.5px] text-[#2B2623]/75 font-sans mt-0.5">
                  단 한 팀만을 위한 프라이빗 독채에서 특별한 쉼을 경험해 보세요.
                </p>
              </div>
              
              {/* Event Benefits */}
              <div className="space-y-2.5">
                
                {/* 1. 얼리버드 예약 할인 */}
                <div className="bg-[#FAF6F0]/85 backdrop-blur-xs border border-[#DFD7CA] rounded-xl p-3.5 flex items-center gap-3.5 transition-all shadow-xs">
                  <div className="w-9 h-9 rounded-full bg-[#9E5330]/12 border border-[#9E5330]/25 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-[#9E5330]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif font-bold text-[13.5px] text-[#2B2623]">얼리버드 사전 예약 할인</h4>
                      <span className="px-2 py-0.5 rounded bg-[#9E5330]/12 text-[#9E5330] text-[11px] font-semibold tracking-wide shrink-0">
                        최대 10%
                      </span>
                    </div>
                    <p className="text-[12px] text-[#2B2623]/75 font-sans truncate mt-0.5">
                      30일 전 예약 시 5% · 60일 전 예약 시 10% 즉시 할인
                    </p>
                  </div>
                </div>

                {/* 2. 2박 이상 연박 혜택 */}
                <div className="bg-[#FAF6F0]/85 backdrop-blur-xs border border-[#DFD7CA] rounded-xl p-3.5 flex items-center gap-3.5 transition-all shadow-xs">
                  <div className="w-9 h-9 rounded-full bg-[#9E5330]/12 border border-[#9E5330]/25 flex items-center justify-center shrink-0">
                    <Gift className="w-4 h-4 text-[#9E5330]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif font-bold text-[13.5px] text-[#2B2623]">2박 이상 연박 힐링 혜택</h4>
                      <span className="px-2 py-0.5 rounded bg-[#9E5330]/12 text-[#9E5330] text-[11px] font-semibold tracking-wide shrink-0">
                        박당 2만원 할인
                      </span>
                    </div>
                    <p className="text-[12px] text-[#2B2623]/75 font-sans truncate mt-0.5">
                      박당 20,000원 할인 + 제주 웰컴 잎차 & 다과 증정
                    </p>
                  </div>
                </div>

                {/* 3. 사계절 무료 온수 스파 */}
                <div className="bg-[#FAF6F0]/85 backdrop-blur-xs border border-[#DFD7CA] rounded-xl p-3.5 flex items-center gap-3.5 transition-all shadow-xs">
                  <div className="w-9 h-9 rounded-full bg-[#9E5330]/12 border border-[#9E5330]/25 flex items-center justify-center shrink-0">
                    <Waves className="w-4 h-4 text-[#9E5330]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif font-bold text-[13.5px] text-[#2B2623]">사계절 야외 온수 노천탕 무료</h4>
                      <span className="px-2 py-0.5 rounded bg-[#9E5330]/12 text-[#9E5330] text-[11px] font-semibold tracking-wide shrink-0">
                        온수비 0원
                      </span>
                    </div>
                    <p className="text-[12px] text-[#2B2623]/75 font-sans truncate mt-0.5">
                      24시간 38~40℃ 자동 유지 프라이빗 돌담 노천 스파
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={handleGoBooking}
                className="w-full bg-[#9E5330] hover:bg-[#7D3E20] text-white py-3.5 px-6 rounded-full text-[13.5px] font-sans font-semibold tracking-wider transition-all shadow-md hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 mt-2"
                id="btn-modal-go-booking"
              >
                <span>혜택 적용하고 예약하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Footer Control: "오늘 하루 보지 않기" & "닫기" */}
              <div className="flex items-center justify-between pt-2 text-[12px] text-[#2B2623]/60 font-sans border-t border-[#DFD7CA]/60">
                <button
                  onClick={handleDoNotShowToday}
                  className="hover:text-[#2B2623] underline transition-colors cursor-pointer"
                >
                  오늘 하루 보지 않기
                </button>
                <button
                  onClick={handleClose}
                  className="hover:text-[#2B2623] transition-colors cursor-pointer font-medium"
                >
                  닫기
                </button>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
