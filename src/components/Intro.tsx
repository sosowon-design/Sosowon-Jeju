import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Sun, Flame, Waves, Shield } from 'lucide-react';
import aboutMainImg from '../assets/images/nanobanana_about_main_1783604791029.jpg';
import extImg from '../assets/images/sosowon_ext_1783443147706.jpg';
import teaImg from '../assets/images/sosowon_tea_stillife_1790527955631.jpg';
import yogaImg from '../assets/images/sosowon_yoga_stillife_1790527972479.jpg';
import bbqImg from '../assets/images/sosowon_garden_bbq_1790526727045.jpg';
import spaImg from '../assets/images/sosowon_heated_spa_1790526738476.jpg';

interface IntroProps {
  onNavigate?: (pageId: string, targetId?: string) => void;
}

export default function Intro({ onNavigate }: IntroProps) {
  return (
    <div className="space-y-0 text-[#2B2623] relative bg-[#FFFFFF]" id="intro-container">
      
      {/* SECTION 1: ABOUT SOSOWON JEJU - Warm Stone Linen Background */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-[#F6F4F0] border-t border-[#8E5642]/30 border-b border-[#E8E5DF] relative overflow-hidden" id="intro-hero-section">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3.5 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
              >
                {/* English annotation matching letter-spacing of other sections */}
                <span className="text-[#8E5642] tracking-[0.28em] text-[12px] font-serif font-bold uppercase block text-center lg:text-left">
                  ABOUT SOSOWON JEJU
                </span>

                {/* Title font size set to 26px as requested */}
                <h2 className="text-[26px] font-serif font-semibold text-[#2B2623] tracking-tight leading-snug text-center lg:text-left">
                  <span className="md:hidden">
                    자연을 품은 돌담 스테이
                  </span>
                  <span className="hidden md:inline">돌담 너머 고요와 온전한 쉼, 소소원</span>
                </h2>

                <div className="w-12 h-[2px] bg-[#8E5642] my-3.5 mx-auto lg:mx-0" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="space-y-4 text-[#2B2623]/85 text-[14.5px] md:text-[15px] font-sans font-normal w-full"
              >
                {/* Paragraphs with refined narrative copy - Center aligned on mobile, lower paragraph deleted on mobile */}
                <div className="space-y-4 text-[#2B2623]/80 leading-[1.62] break-keep text-center md:text-left">
                  <p className="cursor-default">
                    <span className="md:hidden">
                      소소원은 맑은 바람과 고즈넉한 제주 먹돌담이<br />
                      감싸 안은 애월 납읍리의 프라이빗 독채 안식처입니다.<br />
                      오직 하루 한 팀만을 위해 열린 정원과 아늑한 공간에서, 일상의 번잡함을 내려놓고 온전한<br />
                      평온에 머물러 보세요.
                    </span>
                    <span className="hidden md:inline">
                      소소원은 맑은 바람과 고즈넉한 제주 먹돌담이 감싸 안은 애월 납읍리의 프라이빗 독채 안식처입니다. 오직 하루 한 팀만을 위해 열린 정원과 아늑한 공간에서, 일상의 번잡함을 내려놓고 온전한 평온에 머물러 보세요.
                    </span>
                  </p>
                  <p className="cursor-default pt-1.5 hidden md:block">
                    사계절 따스한 야외 온수 노천 스파와 명인의 유기농 잎차 다도, 노을빛 아래 즐기는 돌담 바베큐까지, 지친 몸과 마음에 진정한 쉼표를 선물해 보세요.
                  </p>
                </div>

                {/* 3 Core Badges - CENTER ALIGNED on mobile, LEFT ALIGNED on desktop */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-4 pb-1 mt-2">
                  <motion.span 
                    whileHover={{ y: -2, scale: 1.02 }} 
                    transition={{ duration: 0.2 }}
                    className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#DDD7CD] text-[#5A4D41] text-[12px] font-sans font-medium shadow-2xs cursor-default"
                  >
                    하루 1팀 독채 프라이빗
                  </motion.span>
                  <motion.span 
                    whileHover={{ y: -2, scale: 1.02 }} 
                    transition={{ duration: 0.2 }}
                    className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#DDD7CD] text-[#5A4D41] text-[12px] font-sans font-medium shadow-2xs cursor-default"
                  >
                    명인다원 웰컴 잎차 다도
                  </motion.span>
                  <motion.span 
                    whileHover={{ y: -2, scale: 1.02 }} 
                    transition={{ duration: 0.2 }}
                    className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#DDD7CD] text-[#5A4D41] text-[12px] font-sans font-medium shadow-2xs cursor-default"
                  >
                    노을빛 돌담 정원 바베큐
                  </motion.span>
                </div>
              </motion.div>
            </div>

            {/* Right Photo Framing (Desktop and Mobile - reverted to original grid flow) */}
            <div className="lg:col-span-6 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-2xl relative aspect-[16/11] bg-stone-100 border border-[#E8E5DF] shadow-md group"
              >
                <img
                  src={aboutMainImg}
                  alt="소소원 돌담과 독채 전경"
                  className="w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Mobile Elements: Clean bottom gradient overlay (top elements removed per request) */}
                <div className="md:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1D1917]/85 via-[#1D1917]/35 to-transparent pointer-events-none" />
                <div className="md:hidden absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between gap-2 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1D1917]/75 backdrop-blur-md border border-white/20 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E0C3A0] shrink-0" />
                    <span className="text-[11.5px] font-sans font-medium text-stone-100 tracking-tight">
                      제주 돌담 속 아늑한 안식처
                    </span>
                  </div>
                  <span className="text-[10px] font-sans px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-stone-200 shrink-0">
                    소소원
                  </span>
                </div>

                {/* PC Only Badge (100% Unchanged) */}
                <div className="hidden md:flex absolute bottom-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#1D1917]/75 backdrop-blur-xs border border-white/20 text-[12px] font-sans font-medium text-white shadow-sm items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E0C3A0]" />
                  <span>자연을 품은 고즈넉한 돌담 스테이</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ARCHITECTURAL PHILOSOPHY - Editorial Gallery with Cards Below Image */}
      <section className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#E8E5DF] relative overflow-hidden" id="intro-philosophy-section">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* 1. Centered Architectural Statement Header (Natural, core essence, avoiding '집') */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12 space-y-3.5"
          >
            <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block">
              ARCHITECTURAL PHILOSOPHY
            </span>
            <h3 className="text-[26px] font-serif font-semibold text-[#2B2623] tracking-wide">
              <span className="md:hidden">
                자연과 어우러져 편안하게<br />머무는 공간
              </span>
              <span className="hidden md:inline">
                자연과 어우러져 편안하게 머무는 공간
              </span>
            </h3>
            <div className="w-12 h-[2px] bg-[#8E5642] mx-auto my-3" />
            <p className="text-[#2B2623]/80 text-[14.5px] font-sans leading-relaxed">
              <span className="md:hidden">
                제주의 돌담과 자연 속에서 일상을 내려놓고<br />온전한 휴식을 누려보세요.
              </span>
              <span className="hidden md:inline">
                제주의 돌담과 자연 속에서 일상을 내려놓고 온전한 휴식을 누려보세요.
              </span>
            </p>
          </motion.div>

          {/* 2. Wide Architectural Showcase Banner (Enlarged on mobile) */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E8E5DF] shadow-md group mb-8 md:mb-12">
            <div className="aspect-[16/10] md:aspect-[21/9] sm:aspect-[24/9] w-full bg-stone-200 overflow-hidden relative">
              <img
                src={extImg}
                alt="소소원 건축 및 돌담 전경"
                className="w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Only: Repositioned button in bottom-right corner of image with point color text */}
            {onNavigate && (
              <div className="hidden md:block absolute bottom-6 right-6 z-10">
                <button
                  onClick={() => {
                    onNavigate('rooms');
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#F6F3EE] hover:bg-[#8E5642] text-[#8E5642] hover:text-white text-[13.5px] font-sans font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer border border-[#DDD7CD] hover:border-[#8E5642] group/btn"
                >
                  <span>소소원 공간 자세히 둘러보기</span>
                  <ArrowRight className="w-4 h-4 text-[#8E5642] group-hover/btn:text-white transition-colors" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Only: Simple Core Architectural List (핵심만 간단하게 나열) */}
          <div className="md:hidden space-y-2.5">
            {/* Pillar 1 */}
            <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8E5DF] flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#8E5642]/10 text-[#8E5642] flex items-center justify-center font-serif text-[11px] font-bold shrink-0">
                  01
                </span>
                <div className="text-left">
                  <h4 className="text-[14.5px] font-serif font-bold text-[#2B2623] leading-snug">돌담 정원 & 바베큐</h4>
                  <p className="text-[12px] text-[#2B2623]/70 font-sans">노을빛 아래 프라이빗 바베큐</p>
                </div>
              </div>
              <Flame className="w-4 h-4 text-[#8E5642]/80 shrink-0" />
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8E5DF] flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#8E5642]/10 text-[#8E5642] flex items-center justify-center font-serif text-[11px] font-bold shrink-0">
                  02
                </span>
                <div className="text-left">
                  <h4 className="text-[14.5px] font-serif font-bold text-[#2B2623] leading-snug">사계절 온수 노천 스파</h4>
                  <p className="text-[12px] text-[#2B2623]/70 font-sans">별빛 아래 따뜻한 야외 스파</p>
                </div>
              </div>
              <Waves className="w-4 h-4 text-[#8E5642]/80 shrink-0" />
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8E5DF] flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#8E5642]/10 text-[#8E5642] flex items-center justify-center font-serif text-[11px] font-bold shrink-0">
                  03
                </span>
                <div className="text-left">
                  <h4 className="text-[14.5px] font-serif font-bold text-[#2B2623] leading-snug">정갈한 다도 & 시네마</h4>
                  <p className="text-[12px] text-[#2B2623]/70 font-sans">명인 잎차와 대형 빔프로젝터</p>
                </div>
              </div>
              <Sparkles className="w-4 h-4 text-[#8E5642]/80 shrink-0" />
            </div>
          </div>

          {/* Desktop Only: Tripartite Architectural Pillar Grid (100% Unchanged) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Pillar 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-[#FAF8F5] p-5 sm:p-7 rounded-2xl border border-[#E8E5DF] flex flex-col justify-between hover:border-[#8E5642]/50 hover:shadow-md transition-all group"
            >
              <div className="space-y-2.5 sm:space-y-3 text-left">
                <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-2.5">
                  <span className="text-[11.5px] font-serif font-semibold tracking-wider text-[#8E5642] uppercase">
                    PRIVATE GARDEN
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642]/60 group-hover:bg-[#8E5642] transition-colors" />
                </div>
                <h4 className="text-[17px] sm:text-[18px] font-serif font-bold text-[#2B2623] tracking-tight leading-snug break-keep">
                  돌담 정원 & 감성 바베큐
                </h4>
                <p className="text-[13px] sm:text-[13.5px] text-[#2B2623]/75 font-sans leading-relaxed break-keep">
                  제주의 싱그러운 아침 커피와 저녁 노을빛 아래 프라이빗 바베큐.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FAF8F5] p-5 sm:p-7 rounded-2xl border border-[#E8E5DF] flex flex-col justify-between hover:border-[#8E5642]/50 hover:shadow-md transition-all group"
            >
              <div className="space-y-2.5 sm:space-y-3 text-left">
                <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-2.5">
                  <span className="text-[11.5px] font-serif font-semibold tracking-wider text-[#8E5642] uppercase">
                    OUTDOOR SPA
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642]/60 group-hover:bg-[#8E5642] transition-colors" />
                </div>
                <h4 className="text-[17px] sm:text-[18px] font-serif font-bold text-[#2B2623] tracking-tight leading-snug break-keep">
                  별빛 아래 사계절 온수 노천탕
                </h4>
                <p className="text-[13px] sm:text-[13.5px] text-[#2B2623]/75 font-sans leading-relaxed break-keep">
                  제주 밤하늘의 쏟아지는 별빛 아래 누리는 사계절 따뜻한 야외 온수 스파.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#FAF8F5] p-5 sm:p-7 rounded-2xl border border-[#E8E5DF] flex flex-col justify-between hover:border-[#8E5642]/50 hover:shadow-md transition-all group"
            >
              <div className="space-y-2.5 sm:space-y-3 text-left">
                <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-2.5">
                  <span className="text-[11.5px] font-serif font-semibold tracking-wider text-[#8E5642] uppercase">
                    TEA & CINEMA
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642]/60 group-hover:bg-[#8E5642] transition-colors" />
                </div>
                <h4 className="text-[17px] sm:text-[18px] font-serif font-bold text-[#2B2623] tracking-tight leading-snug break-keep">
                  정갈한 다도와 아늑한 감성 시네마
                </h4>
                <p className="text-[13px] sm:text-[13.5px] text-[#2B2623]/75 font-sans leading-relaxed break-keep">
                  돌담을 바라보며 음미하는 명인다원 잎차와 대형 스크린 빔프로젝터 영화 한 편.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Mobile Only: Button repositioned below the cards */}
          {onNavigate && (
            <div className="md:hidden mt-8 flex justify-center">
              <button
                onClick={() => {
                  onNavigate('rooms');
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#F6F3EE] hover:bg-[#8E5642] text-[#8E5642] hover:text-white text-[13.5px] font-sans font-medium transition-all duration-300 shadow-xs border border-[#DDD7CD] hover:border-[#8E5642] group/btn cursor-pointer"
              >
                <span>소소원 공간 자세히 둘러보기</span>
                <ArrowRight className="w-4 h-4 text-[#8E5642] group-hover/btn:text-white transition-colors" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 3: OUR HERITAGE & EXPERIENCE - Enhanced Editorial Showcase */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-[#F6F4F0] border-t border-[#E8E5DF]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* Header row with Title and Subtitle - Clean without button or numbers, inviting ending */}
          <div className="mb-10 text-center sm:text-left space-y-2">
            <span className="text-[#8E5642] tracking-[0.28em] text-[12px] font-semibold uppercase block font-serif">
              OUR HERITAGE & EXPERIENCE
            </span>
            <h3 className="text-[26px] font-serif font-semibold text-[#2B2623]">
              <span className="md:hidden">소소원의 대표 힐링 체험</span>
              <span className="hidden md:inline">소소원에서 마주하는 온전한 쉼</span>
            </h3>
            <p className="text-[#2B2623]/75 text-[14px] font-sans">
              <span className="md:hidden">
                제주의 풍경 속에서 일상을 비우고<br />몸과 마음의 온전한 쉼을 경험해 보세요.
              </span>
              <span className="hidden md:inline">
                제주의 고요한 풍경 속에서 일상을 비우고 몸과 마음의 온전한 쉼을 경험해 보세요.
              </span>
            </p>
          </div>

          {/* 4 Cards arranged horizontally with redesigned, centered action buttons with adjacent arrow */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Experience 1: 다도 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="group cursor-pointer bg-[#FAF8F5] rounded-2xl border border-[#E5E0D8] hover:border-[#8E5642]/50 shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              onClick={() => onNavigate?.('experience')}
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-stone-200 relative">
                <img
                  src={teaImg}
                  alt="명인 유기농 잎차 다도"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                <div className="text-left space-y-1">
                  <h4 className="font-['Gowun_Batang',serif] font-bold text-[14px] sm:text-[15.5px] text-[#2B2623] group-hover:text-[#8E5642] transition-colors flex items-center gap-1.5 leading-snug">
                    <Sparkles className="w-3.5 h-3.5 text-[#8E5642] shrink-0 stroke-[2]" />
                    <span>웰컴 다도 명상</span>
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] text-[#2B2623]/65 font-sans leading-relaxed break-keep pt-0.5">
                    <span className="md:hidden">유기농 잎차 다도</span>
                    <span className="hidden md:inline">제주 명인 유기농 잎차 티타임</span>
                  </p>
                </div>
                <div className="pt-2.5 sm:pt-3 mt-2.5 sm:mt-3 border-t border-[#E8E5DF]">
                  <div className="w-full py-1.5 sm:py-2 px-2 sm:px-2.5 rounded-xl bg-[#F6F3EE] group-hover:bg-[#8E5642] border border-[#E2DBD1] group-hover:border-[#8E5642] text-[#784735] group-hover:text-white text-[11.5px] sm:text-[12px] font-sans font-medium flex items-center justify-center gap-1 transition-all duration-300 shadow-2xs">
                    <span className="md:hidden">자세히보기</span>
                    <span className="hidden md:inline">다도 체험 자세히보기</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience 2: 요가 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="group cursor-pointer bg-[#FAF8F5] rounded-2xl border border-[#E5E0D8] hover:border-[#8E5642]/50 shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              onClick={() => onNavigate?.('experience')}
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-stone-200 relative">
                <img
                  src={yogaImg}
                  alt="모닝 정원 요가 & 싱잉볼"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                <div className="text-left space-y-1">
                  <h4 className="font-['Gowun_Batang',serif] font-bold text-[14px] sm:text-[15.5px] text-[#2B2623] group-hover:text-[#8E5642] transition-colors flex items-center gap-1.5 leading-snug">
                    <Sun className="w-3.5 h-3.5 text-[#8E5642] shrink-0 stroke-[2]" />
                    <span>아침 정원 요가</span>
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] text-[#2B2623]/65 font-sans leading-relaxed break-keep pt-0.5">
                    <span className="md:hidden">싱잉볼과 돌담 명상</span>
                    <span className="hidden md:inline">싱잉볼 소리와 돌담 아침 명상</span>
                  </p>
                </div>
                <div className="pt-2.5 sm:pt-3 mt-2.5 sm:mt-3 border-t border-[#E8E5DF]">
                  <div className="w-full py-1.5 sm:py-2 px-2 sm:px-2.5 rounded-xl bg-[#F6F3EE] group-hover:bg-[#8E5642] border border-[#E2DBD1] group-hover:border-[#8E5642] text-[#784735] group-hover:text-white text-[11.5px] sm:text-[12px] font-sans font-medium flex items-center justify-center gap-1 transition-all duration-300 shadow-2xs">
                    <span className="md:hidden">자세히보기</span>
                    <span className="hidden md:inline">요가 체험 자세히보기</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience 3: 바베큐 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="group cursor-pointer bg-[#FAF8F5] rounded-2xl border border-[#E5E0D8] hover:border-[#8E5642]/50 shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              onClick={() => onNavigate?.('experience')}
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-stone-200 relative">
                <img
                  src={bbqImg}
                  alt="가든 야외 바베큐"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                <div className="text-left space-y-1">
                  <h4 className="font-['Gowun_Batang',serif] font-bold text-[14px] sm:text-[15.5px] text-[#2B2623] group-hover:text-[#8E5642] transition-colors flex items-center gap-1.5 leading-snug">
                    <Flame className="w-3.5 h-3.5 text-[#8E5642] shrink-0 stroke-[2]" />
                    <span>가든 야외 바베큐</span>
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] text-[#2B2623]/65 font-sans leading-relaxed break-keep pt-0.5">
                    <span className="md:hidden">프라이빗 가든 디너</span>
                    <span className="hidden md:inline">저녁 노을빛 아래 프라이빗 디너</span>
                  </p>
                </div>
                <div className="pt-2.5 sm:pt-3 mt-2.5 sm:mt-3 border-t border-[#E8E5DF]">
                  <div className="w-full py-1.5 sm:py-2 px-2 sm:px-2.5 rounded-xl bg-[#F6F3EE] group-hover:bg-[#8E5642] border border-[#E2DBD1] group-hover:border-[#8E5642] text-[#784735] group-hover:text-white text-[11.5px] sm:text-[12px] font-sans font-medium flex items-center justify-center gap-1 transition-all duration-300 shadow-2xs">
                    <span className="md:hidden">자세히보기</span>
                    <span className="hidden md:inline">야외 바베큐 자세히보기</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience 4: 스파 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="group cursor-pointer bg-[#FAF8F5] rounded-2xl border border-[#E5E0D8] hover:border-[#8E5642]/50 shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              onClick={() => onNavigate?.('experience')}
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-stone-200 relative">
                <img
                  src={spaImg}
                  alt="야외 온수 노천 스파"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                <div className="text-left space-y-1">
                  <h4 className="font-['Gowun_Batang',serif] font-bold text-[14px] sm:text-[15.5px] text-[#2B2623] group-hover:text-[#8E5642] transition-colors flex items-center gap-1.5 leading-snug">
                    <Waves className="w-3.5 h-3.5 text-[#8E5642] shrink-0 stroke-[2]" />
                    <span className="md:hidden">야외 노천 스파</span>
                    <span className="hidden md:inline">야외 온수 노천 스파</span>
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] text-[#2B2623]/65 font-sans leading-relaxed break-keep pt-0.5">
                    <span className="md:hidden">사계절 따스한 힐링</span>
                    <span className="hidden md:inline">사계절 38~40℃ 따스한 힐링</span>
                  </p>
                </div>
                <div className="pt-2.5 sm:pt-3 mt-2.5 sm:mt-3 border-t border-[#E8E5DF]">
                  <div className="w-full py-1.5 sm:py-2 px-2 sm:px-2.5 rounded-xl bg-[#F6F3EE] group-hover:bg-[#8E5642] border border-[#E2DBD1] group-hover:border-[#8E5642] text-[#784735] group-hover:text-white text-[11.5px] sm:text-[12px] font-sans font-medium flex items-center justify-center gap-1 transition-all duration-300 shadow-2xs">
                    <span className="md:hidden">자세히보기</span>
                    <span className="hidden md:inline">야외 스파 자세히보기</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
