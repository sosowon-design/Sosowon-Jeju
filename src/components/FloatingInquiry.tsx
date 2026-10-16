import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Phone, Mail, Clock, ArrowRight, Check } from 'lucide-react';

interface FloatingInquiryProps {
  isMobileMenuOpen?: boolean;
}

export default function FloatingInquiry({ isMobileMenuOpen = false }: FloatingInquiryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsOpen(false);
    }
  }, [isMobileMenuOpen]);

  const handlePhoneClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('010-3829-4501');
    }
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'tel:01038294501';
    }
  };

  const handleEmailClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('sosowon.jeju@gmail.com');
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const shouldShow = isVisible && !isMobileMenuOpen;

  return (
    <AnimatePresence>
      {shouldShow && (
        <>
          {/* Floating Button - Reverted to previous circular terracotta button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[74px] right-6 z-40 flex flex-col items-end"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="소소원 문의하기"
              title="소소원 문의"
              className="w-11 h-11 rounded-full bg-[#8E5642] hover:bg-[#784735] text-white shadow-lg flex items-center justify-center transition-all focus:outline-none cursor-pointer border border-[#8E5642]/20"
              id="btn-floating-inquiry"
            >
              {isOpen ? (
                <X className="w-5 h-5 stroke-[2]" />
              ) : (
                <MessageCircle className="w-5 h-5 stroke-[1.8]" />
              )}
            </motion.button>
          </motion.div>

          {/* Inquiry Popover Modal with newly redesigned card boxes and button styling */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed bottom-[130px] right-6 z-50 w-[310px] sm:w-[330px] bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E8E5DF] p-5 text-[#2B2623] font-sans"
                id="floating-inquiry-card"
              >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-3 mb-3.5">
              <div>
                <span className="text-[10px] font-serif font-bold tracking-widest text-[#8E5642] block uppercase">
                  CONTACT
                </span>
                <h4 className="font-serif font-bold text-[15.5px] text-[#2B2623] mt-0.5">
                  소소원 상담 및 문의
                </h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-[#FAF8F5] hover:bg-[#E8E5DF] text-[#2B2623] flex items-center justify-center transition-colors cursor-pointer border border-[#E8E5DF]"
                aria-label="닫기"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Redesigned Contact Option Cards - Fully clickable cardboxes, stationary arrows */}
            <div className="space-y-2.5">
              {/* Phone call card with direct copy & call feedback without site navigation */}
              <button
                type="button"
                onClick={handlePhoneClick}
                aria-label="전화 상담 번호 복사 및 연결"
                className="w-full p-3.5 rounded-xl bg-[#FBF9F6] hover:bg-[#F5EFE9] border border-[#ECE8E1] hover:border-[#8E5642]/40 transition-all flex items-center justify-between gap-3 shadow-2xs group cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#E8E5DF] flex items-center justify-center text-[#8E5642] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="min-w-0 text-left">
                    <span className="text-[13px] font-bold text-[#2B2623] block truncate">전화 상담</span>
                    <span className="text-[11.5px] text-[#2B2623]/70 font-mono block truncate">
                      {phoneCopied ? (
                        <span className="text-[#8E5642] font-semibold flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#8E5642]" /> 번호 복사 완료
                        </span>
                      ) : (
                        '010-3829-4501'
                      )}
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] group-hover:bg-[#8E5642] border border-[#DDD7CD] group-hover:border-[#8E5642] text-[#8E5642] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs shrink-0">
                  {phoneCopied ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.2]" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                  )}
                </div>
              </button>

              {/* Email inquiry card with direct clipboard copy */}
              <button
                type="button"
                onClick={handleEmailClick}
                aria-label="이메일 주소 복사"
                className="w-full p-3.5 rounded-xl bg-[#FBF9F6] hover:bg-[#F5EFE9] border border-[#ECE8E1] hover:border-[#8E5642]/40 transition-all flex items-center justify-between gap-3 shadow-2xs group cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#E8E5DF] flex items-center justify-center text-[#8E5642] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="min-w-0 text-left">
                    <span className="text-[13px] font-bold text-[#2B2623] block truncate">이메일 문의</span>
                    <span className="text-[11.5px] text-[#2B2623]/70 font-sans block truncate">
                      {emailCopied ? (
                        <span className="text-[#8E5642] font-semibold flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#8E5642]" /> 주소 복사 완료
                        </span>
                      ) : (
                        'sosowon.jeju@gmail.com'
                      )}
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] group-hover:bg-[#8E5642] border border-[#DDD7CD] group-hover:border-[#8E5642] text-[#8E5642] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs shrink-0">
                  {emailCopied ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.2]" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                  )}
                </div>
              </button>

              {/* Kakao inquiry card - Links to Kakao Channel Home */}
              <a
                href="https://pf.kakao.com"
                target="_blank"
                rel="noreferrer"
                aria-label="카카오톡 채널 홈 바로가기"
                className="p-3.5 rounded-xl bg-[#FBF9F6] hover:bg-[#F5EFE9] border border-[#ECE8E1] hover:border-[#8E5642]/40 transition-all flex items-center justify-between gap-3 shadow-2xs group cursor-pointer block"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#E8E5DF] flex items-center justify-center text-[#8E5642] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="min-w-0 text-left">
                    <span className="text-[13px] font-bold text-[#2B2623] block truncate">카카오톡 채널</span>
                    <span className="text-[11.5px] text-[#2B2623]/70 block truncate">소소원 공식 채널 홈</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] group-hover:bg-[#8E5642] border border-[#DDD7CD] group-hover:border-[#8E5642] text-[#8E5642] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </div>
              </a>
            </div>

            {/* Operating hours note */}
            <div className="mt-3.5 pt-3 border-t border-[#E8E5DF] flex items-center gap-2 text-[11.5px] text-[#2B2623]/70">
              <Clock className="w-3.5 h-3.5 text-[#8E5642] shrink-0" />
              <span>상담 시간: 매일 09:00 ~ 21:00</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )}
</AnimatePresence>
);
}
