import { Compass, Instagram, MessageCircle, BookOpen, Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1D1917] text-[#C7BEB7] pt-16 md:pt-20 pb-12 md:pb-14 border-t border-[#2E2723] font-sans font-light relative" id="site-footer">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Top Segment: Symmetrically aligned to left and right margins */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#2E2723] pb-10 items-start">
          
          {/* Brand & Logo (Mobile centered, Desktop left) */}
          <div className="md:col-span-4 space-y-3 flex flex-col items-center md:items-start text-center md:text-left" id="footer-brand">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#E6DED8] tracking-widest text-[17px] font-serif font-bold uppercase">
              <Compass className="w-5 h-5 text-[#C7BEB7] stroke-[1.5]" />
              <span>SOSOWON JEJU</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-[#27211D] border border-[#3A322C] text-[12px] text-[#A89F98]">
              <Clock className="w-3.5 h-3.5 text-[#A89F98]" />
              <span>체크인 16:00 / 체크아웃 11:00</span>
            </div>
          </div>

          {/* Contact & Location (Mobile centered, Desktop left) */}
          <div className="md:col-span-5 space-y-2 text-[13px] text-[#A89F98] text-center md:text-left flex flex-col items-center md:items-start" id="footer-address">
            <span className="text-[#D6CECA] font-bold tracking-wider text-[11px] block uppercase font-serif text-center md:text-left">
              LOCATION & CONTACT
            </span>
            <div className="space-y-1.5 font-sans leading-relaxed text-[#A89F98] flex flex-col items-center md:items-start">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A89F98] shrink-0" />
                <span className="text-[#A89F98]">제주특별자치도 제주시 애월읍 납읍로2길 18</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A89F98] shrink-0" />
                <span className="text-[#A89F98]">010-3829-4501 (문의 09:00 ~ 21:00)</span>
              </p>
              <p className="flex items-start md:items-center justify-center md:justify-start gap-1.5 md:gap-2 text-center md:text-left">
                <Mail className="w-3.5 h-3.5 text-[#A89F98] shrink-0 mt-[3px] md:mt-0" />
                <span className="text-[#A89F98]">
                  <span className="md:hidden flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-[14px] leading-snug">contact@sosowon.co.kr</span>
                    <span className="text-[12px] text-[#A89F98]/80 mt-2.5">사업자등록번호: 120-00-12345</span>
                  </span>
                  <span className="hidden md:inline">
                    contact@sosowon.co.kr | 사업자등록번호: 120-00-12345
                  </span>
                </span>
              </p>
            </div>
          </div>

          {/* Social Channels (Mobile centered, Desktop right) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right" id="footer-social">
            <div className="flex flex-col items-center md:items-end space-y-2.5">
              <span className="text-[#D6CECA] font-bold tracking-wider text-[11px] block uppercase font-serif text-center md:text-right">
                CONNECT WITH US
              </span>
              <div className="flex gap-3 items-center justify-center md:justify-end">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 border border-[#3A322C] bg-[#27211D] text-[#C7BEB7] rounded-full flex items-center justify-center hover:bg-[#8E5642] hover:text-white hover:border-[#8E5642] transition-all shadow-xs cursor-pointer"
                  aria-label="Instagram"
                  id="footer-ig-btn"
                >
                  <Instagram className="w-4 h-4 stroke-[1.5]" />
                </a>

                {/* KakaoTalk */}
                <a
                  href="https://pf.kakao.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 border border-[#3A322C] bg-[#27211D] text-[#C7BEB7] rounded-full flex items-center justify-center hover:bg-[#8E5642] hover:text-white hover:border-[#8E5642] transition-all shadow-xs cursor-pointer"
                  aria-label="KakaoTalk Channel"
                  id="footer-kakao-btn"
                >
                  <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                </a>

                {/* Naver Blog */}
                <a
                  href="https://blog.naver.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 border border-[#3A322C] bg-[#27211D] text-[#C7BEB7] rounded-full flex items-center justify-center hover:bg-[#8E5642] hover:text-white hover:border-[#8E5642] transition-all shadow-xs cursor-pointer"
                  aria-label="Naver Blog"
                  id="footer-blog-btn"
                >
                  <BookOpen className="w-4 h-4 stroke-[1.5]" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright only, extra subtext removed, center-aligned on mobile */}
        <div className="pt-6 text-[12px] text-[#A89F98] text-center md:text-left">
          <p>© {new Date().getFullYear()} SOSOWON JEJU STAY. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
