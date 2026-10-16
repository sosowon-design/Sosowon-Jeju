import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, ChevronLeft, ChevronRight, Clock, Shield, Sparkles, Bath, Coffee, Film, ArrowRight, Check } from 'lucide-react';
import { VILLA_SPACES } from '../data';

interface RoomSelectorProps {
  onSelectRoom: () => void;
  onNavigate?: (pageId: string) => void;
}

export default function RoomSelector({ onSelectRoom, onNavigate: _onNavigate }: RoomSelectorProps) {
  // Current active space index (0 to 3) for horizontal flipping
  const [activeSpaceIdx, setActiveSpaceIdx] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [selectedImgIdx, setSelectedImgIdx] = useState<number>(0);

  const currentSpace = VILLA_SPACES[activeSpaceIdx];

  const handlePrevSpace = () => {
    setSlideDirection(-1);
    setSelectedImgIdx(0);
    setActiveSpaceIdx((prev) => (prev > 0 ? prev - 1 : VILLA_SPACES.length - 1));
  };

  const handleNextSpace = () => {
    setSlideDirection(1);
    setSelectedImgIdx(0);
    setActiveSpaceIdx((prev) => (prev < VILLA_SPACES.length - 1 ? prev + 1 : 0));
  };

  const handleSelectSpace = (idx: number) => {
    setSlideDirection(idx > activeSpaceIdx ? 1 : -1);
    setSelectedImgIdx(0);
    setActiveSpaceIdx(idx);
  };

  // Concise core summary for each space
  const SPACE_CORE_INFO: Record<string, {
    category: string;
    tag: string;
    coreSummary: string;
    coreSpecs: { label: string; desc: string }[];
    ritualTip: string;
  }> = {
    'space-bed': {
      category: 'SPACE 01 · MASTER BEDROOM',
      tag: '린넨 침실 & 시네마',
      coreSummary: '전면 통유리창으로 제주 돌담 정원을 마주하며 누리는 깊고 포근한 수면의 공간',
      coreSpecs: [
        { label: '침구', desc: '프렌치 천연 린넨 커버 & 최고급 구스다운 킹 베딩' },
        { label: '미디어', desc: '빔프로젝터 (넷플릭스/유튜브) & 마샬 블루투스 오디오' },
        { label: '환경', desc: '정원 조망 통유리창 & 개별 지능형 온습도 쾌적 공조 시스템' },
      ],
      ritualTip: '은은한 간접 조명 아래 마샬 스피커로 차분한 선율을 들으며 온전한 휴식을 누려보세요.',
    },
    'space-spa': {
      category: 'SPACE 02 · PRIVATE STONE SPA',
      tag: '야외 온수 노천탕',
      coreSummary: '높은 화산석 돌담이 시선을 완벽히 감싸주는 단독 사계절 온수 스파',
      coreSpecs: [
        { label: '온수풀', desc: '24시간 자율 온수 순환 노천탕 (38~40℃)' },
        { label: '수조', desc: '제주 장인이 현무암을 정성껏 다듬어 완성한 수제 석재 욕조' },
        { label: '어메니티', desc: '천연 에센셜 허브 바스 솔트 & 도톰한 호텔식 순면 바스로브' },
      ],
      ritualTip: '정원의 달빛과 별빛을 바라보며 따스한 온수 속에서 여행의 피로를 녹여보세요.',
    },
    'space-tea': {
      category: 'SPACE 03 · TEA ROOM',
      tag: '아날로그 다도실',
      coreSummary: '돌담 정원을 바라보며 정성껏 차를 우리고 마음을 비우는 고요한 다도 공간',
      coreSpecs: [
        { label: '웰컴 티', desc: '제주 명인다원 최고급 유기농 잎차 & 발뮤다 티포트' },
        { label: '다기', desc: '제주 도예 장인이 손수 빚은 전통 수제 도자기 다도 세트' },
        { label: '사운드', desc: 'LP 턴테이블 & 마음을 차분히 가라앉히는 감성 사운드' },
      ],
      ritualTip: '돌담 창가를 마주하고 따스한 잎차를 천천히 음미하며 번잡한 생각을 비워보세요.',
    },
    'space-garden': {
      category: 'SPACE 04 · JEJU STONE GARDEN',
      tag: '돌담 정원',
      coreSummary: '2m 높이 화산석 돌담 안에서 제주의 바람과 맑은 공기를 오롯이 누리는 사적인 정원',
      coreSpecs: [
        { label: '돌담', desc: '외부 시선과 소음을 완벽히 차단하는 2m 제주 화산석 돌담' },
        { label: '정원 길', desc: '고유의 푸른 식생과 계절 야생화가 피어나는 산책 오솔길' },
        { label: '테라스', desc: '숲바람을 마주하는 야외 우드 티 테라스 & 야간 감성 조명' },
      ],
      ritualTip: '아침 새소리와 함께 돌담길을 가볍게 거닐며 제주의 맑은 숲공기를 들이마셔보세요.',
    },
  };

  // Mobile concise core summaries for card box under image - shortened so it fits without dividing awkwardly
  const MOBILE_SPACE_CORE_SUMMARIES: Record<string, string> = {
    'space-bed': '돌담 정원을 마주한 포근한 수면 공간',
    'space-spa': '화산석 돌담 안 사계절 온수 노천 스파',
    'space-tea': '돌담을 마주하며 즐기는 다도 공간',
    'space-garden': '돌담 안에서 제주의 바람을 누리는 정원',
  };

  const activeSpaceData = SPACE_CORE_INFO[currentSpace.id] || {
    category: `SPACE 0${activeSpaceIdx + 1}`,
    tag: currentSpace.name,
    coreSummary: currentSpace.description,
    coreSpecs: currentSpace.highlights.slice(0, 3).map((h, i) => ({ label: `핵심 ${i + 1}`, desc: h })),
    ritualTip: '소소원만의 안락한 휴식을 경험해 보세요.',
  };

  return (
    <div id="rooms" className="text-[#2B2623] relative bg-[#FFFFFF]">
      
      {/* 1. Header Segment - Warm Stone/Linen Background */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-[#F6F4F0] border-t border-[#8E5642]/30 border-b border-[#E8E5DF] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6" id="rooms-header">
            <div className="space-y-4 max-w-2xl text-center md:text-left flex flex-col items-center md:items-start">
              <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block mb-3">
                SPATIAL COMFORT & AMENITIES
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[26px] tracking-[0.02em] font-serif font-semibold text-[#2B2623]"
              >
                <span className="md:hidden">소소원의 공간 안내</span>
                <span className="hidden md:inline">소소원의 프라이빗 공간 안내</span>
              </motion.h2>
              <div className="w-12 h-[2px] bg-[#8E5642] my-3 mx-auto md:mx-0" />
              <p className="text-[#2B2623]/80 text-[14px] md:text-[14.5px] font-sans font-normal leading-relaxed text-center md:text-left">
                <span className="md:hidden">
                  하루 한 팀만을 위해 준비한 소소원의 공간에서<br />제주의 자연을 온전히 누려보세요
                </span>
                <span className="hidden md:inline">
                  오직 하루 한 팀만을 위해 준비한 소소원의 공간에서 제주의 자연을 온전히 누려보세요
                </span>
              </p>
            </div>

            {/* Quick Overview Badges - Capacity color matches check-in text color (#2B2623) */}
            <div className="flex flex-wrap md:flex-col justify-center md:justify-start gap-2 shrink-0 border-t md:border-t-0 md:border-l border-[#E8E5DF] pt-4 md:pt-0 md:pl-6 text-[12px] font-sans font-medium text-[#2B2623]">
              <div className="flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E8E5DF] shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#8E5642]" />
                <span className="text-[#2B2623] font-semibold">체크인 16:00 / 체크아웃 11:00</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E8E5DF] shadow-2xs">
                <Users className="w-3.5 h-3.5 text-[#8E5642]" />
                <span className="text-[#2B2623] font-semibold">기준 2인 (최대 6인 투숙)</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E8E5DF] shadow-2xs">
                <Shield className="w-3.5 h-3.5 text-[#8E5642]" />
                <span className="text-[#2B2623] font-semibold">비대면 스마트 무인 체크인</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UNIFIED SPACES SECTION: Clean White Background */}
      <section className="py-14 md:py-20 bg-[#FFFFFF] border-b border-[#E8E5DF]" id="spaces-carousel-section">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* SELECT SPACE BUTTONS ABOVE THE IMAGE GALLERY WITH MOBILE SCROLL AFFORDANCE */}
          <div className="mb-8 pb-4 border-b border-[#E8E5DF] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center justify-between w-full sm:w-auto">
              <span className="text-[12px] font-serif font-bold text-[#8E5642] tracking-wider uppercase">
                SELECT SPACE
              </span>
              <span className="text-[11px] text-[#8E5642]/80 font-sans sm:hidden flex items-center gap-1">
                옆으로 넘겨보기 <ChevronRight className="w-3.5 h-3.5 inline animate-pulse" />
              </span>
            </div>
            
            <div className="relative w-full sm:w-auto">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto justify-start sm:justify-end pr-8 sm:pr-0 scroll-smooth">
                {VILLA_SPACES.map((space, idx) => {
                  const isSelected = idx === activeSpaceIdx;
                  return (
                    <button
                      key={space.id}
                      onClick={() => handleSelectSpace(idx)}
                      className={`px-4 py-2 rounded-full text-[13px] font-sans transition-all whitespace-nowrap cursor-pointer border shrink-0 ${
                        isSelected
                          ? 'bg-[#8E5642] text-white border-[#8E5642] font-semibold shadow-xs'
                          : 'bg-[#F6F4F0] text-[#2B2623]/75 border-[#E8E5DF] hover:text-[#2B2623] hover:border-[#8E5642]/40'
                      }`}
                    >
                      0{idx + 1}. {SPACE_CORE_INFO[space.id]?.tag || space.name.split(' ')[0]}
                    </button>
                  );
                })}
              </div>
              {/* Mobile Right Gradient Indicator showing there are more buttons */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-1 w-10 bg-gradient-to-l from-white via-white/80 to-transparent sm:hidden flex items-center justify-end pr-1 text-[#8E5642]" />
            </div>
          </div>

          {/* Active Space Content with Horizontal Slide Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSpace.id}
              initial={{ opacity: 0, x: slideDirection * 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -slideDirection * 25 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch"
            >
              
              {/* Left Column: Balanced Harmonious Image Layout (Tight spacing between main and thumbnails) */}
              <div className="lg:col-span-7 flex flex-col justify-start gap-2.5 sm:gap-3" id={`space-images-${currentSpace.id}`}>
                
                {/* Main Featured Image without overlay text */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10.5] bg-stone-100 border border-[#E8E5DF] shadow-xs group">
                  <img
                    src={currentSpace.images[selectedImgIdx] || currentSpace.images[0]}
                    alt={`${currentSpace.name} 대표 사진`}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Sub Image Thumbnails (all space photos) */}
                {currentSpace.images.length > 1 && (
                  <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
                    {currentSpace.images.map((img, subIdx) => {
                      const isCurrentActive = selectedImgIdx === subIdx;
                      return (
                        <button
                          key={subIdx}
                          type="button"
                          onClick={() => setSelectedImgIdx(subIdx)}
                          className={`relative rounded-xl overflow-hidden aspect-[16/10] bg-stone-100 border transition-all cursor-pointer text-left ${
                            isCurrentActive 
                              ? 'border-[#8E5642] ring-2 ring-[#8E5642]/40 shadow-xs' 
                              : 'border-[#E8E5DF] hover:border-stone-400 opacity-75 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${currentSpace.name} 컷 ${subIdx + 1}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}

              </div>

              {/* Right Column: Space Spec Card in Warm Stone */}
              <div 
                className="lg:col-span-5 bg-[#F6F4F0] p-6 md:p-8 rounded-2xl border border-[#E8E5DF] flex flex-col justify-between shadow-2xs text-left"
                id={`space-details-${currentSpace.id}`}
              >
                <div className="space-y-4">
                  {/* Category & Title with extra spacing below English annotation */}
                  <div>
                    <span className="text-[#8E5642] text-[11px] font-serif font-bold tracking-[0.25em] uppercase block mb-3">
                      {activeSpaceData.category}
                    </span>
                    <h3 className="text-[22px] md:text-[25px] font-serif font-bold text-[#2B2623] tracking-wide">
                      <span className="md:hidden">{currentSpace.id === 'space-bed' ? '아늑한 침실 공간' : currentSpace.name.replace(/\s*\([^)]*\)/g, '')}</span>
                      <span className="hidden md:inline">{currentSpace.name}</span>
                    </h3>
                  </div>

                  {/* Core Summary Paragraph - concise core essence on mobile without dividing awkwardly, untouched on PC */}
                  <p className="text-[13px] md:text-[13.5px] leading-relaxed text-[#2B2623]/85 font-sans font-normal border-b border-[#E8E5DF] pb-4">
                    <span className="md:hidden break-keep">{MOBILE_SPACE_CORE_SUMMARIES[currentSpace.id] || activeSpaceData.coreSummary}</span>
                    <span className="hidden md:inline">{activeSpaceData.coreSummary}</span>
                  </p>

                  {/* 3 Core Bullet Specs with simple minimalist icon design */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[11.5px] font-serif font-bold text-[#8E5642] uppercase tracking-wider block">
                      CORE SPECIFICATIONS
                    </span>
                    <ul className="space-y-2">
                      {activeSpaceData.coreSpecs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-[12.5px] md:text-[13px] font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                          <span className="text-[#2B2623]/85 leading-relaxed font-normal">
                            {spec.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ritual Tip Note Box */}
                <div className="my-5 p-3.5 bg-[#FFFFFF] rounded-xl border border-[#E8E5DF] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#8E5642] text-[11px] font-serif font-bold tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>RITUAL NOTE</span>
                  </div>
                  <p className="text-[12.5px] text-[#2B2623]/80 font-sans leading-relaxed">
                    {activeSpaceData.ritualTip}
                  </p>
                </div>

                {/* Navigation / Action */}
                <div className="pt-2 border-t border-[#E8E5DF] flex items-center justify-between gap-3">
                  <button
                    onClick={onSelectRoom}
                    className="w-full bg-[#8E5642] hover:bg-[#784735] text-white py-3.5 px-5 rounded-full text-[13.5px] font-sans font-medium transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span className="md:hidden">소소원 예약 바로가기</span>
                    <span className="hidden md:inline">예약 안내 바로가기</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* 3. CURATED OBJECTS & AMENITIES - Simple dash/hyphen design element before each text */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-[#F6F4F0] border-t border-[#E8E5DF]" id="curated-amenities-section">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          
          <div className="text-center space-y-4 mb-14">
            <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block">
              CURATED OBJECTS & AMENITIES
            </span>
            <h3 className="text-[26px] font-serif font-semibold text-[#2B2623]">
              <span className="md:hidden">비품 & 어메니티 안내</span>
              <span className="hidden md:inline">소소원의 정갈한 비품 & 어메니티 핵심 안내</span>
            </h3>
            <div className="w-12 h-[2px] bg-[#8E5642] mx-auto my-3" />
            <p className="text-[#2B2623]/75 text-[14px] font-sans max-w-xl mx-auto">
              <span className="md:hidden">
                머무시는 동안 손끝에 닿는 모든 것에<br />편안함과 정성을 담았습니다.
              </span>
              <span className="hidden md:inline">
                머무시는 동안 손끝에 닿는 모든 것에 편안함과 정성을 담았습니다.
              </span>
            </p>
          </div>

          {/* 3 Spacious Category Pillars with Interactive Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
            
            {/* Pillar 1: BATH & SPA */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E5DF] space-y-4 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-3.5">
                <div>
                  <span className="text-[#8E5642] font-serif font-bold text-[11px] tracking-widest block uppercase">CATEGORY 01</span>
                  <h4 className="font-serif font-bold text-[16px] text-[#2B2623] mt-0.5 group-hover:text-[#8E5642] transition-colors">스파 & 바스 케어</h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#8E5642]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bath className="w-4.5 h-4.5 text-[#8E5642]" />
                </div>
              </div>
              <ul className="space-y-3.5 text-[13px] font-sans">
                <li className="flex items-start gap-2.5 group/item hover:translate-x-1 transition-transform">
                  {/* Clean minimal middle dot bullet */}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                  <div>
                    <strong className="text-[#2B2623] font-medium block">천연 아로마 바스 솔트</strong>
                    <span className="text-[#2B2623]/70 text-[12px]">노천탕 전용 천연 허브 에센셜 입욕제</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 group/item hover:translate-x-1 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                  <div>
                    <strong className="text-[#2B2623] font-medium block">호텔급 순면 바스로브</strong>
                    <span className="text-[#2B2623]/70 text-[12px]">포근하고 흡수력 좋은 도톰한 가운</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 group/item hover:translate-x-1 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                  <div>
                    <strong className="text-[#2B2623] font-medium block">친환경 오가닉 어메니티</strong>
                    <span className="text-[#2B2623]/70 text-[12px]">샴푸, 컨디셔너, 바디워시 상시 완비</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Pillar 2: TEA & TASTE */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E5DF] space-y-4 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-3.5">
                <div>
                  <span className="text-[#8E5642] font-serif font-bold text-[11px] tracking-widest block uppercase">CATEGORY 02</span>
                  <h4 className="font-serif font-bold text-[16px] text-[#2B2623] mt-0.5 group-hover:text-[#8E5642] transition-colors">다도 & 커피 티타임</h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#8E5642]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Coffee className="w-4.5 h-4.5 text-[#8E5642]" />
                </div>
              </div>
              <ul className="space-y-3.5 text-[13px] font-sans">
                <li className="flex items-start gap-2.5 group/item hover:translate-x-1 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                  <div>
                    <strong className="text-[#2B2623] font-medium block">제주 명인 유기농 잎차</strong>
                    <span className="text-[#2B2623]/70 text-[12px]">정갈하게 우려 마시는 웰컴 프리미엄 잎차</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 group/item hover:translate-x-1 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                  <div>
                    <strong className="text-[#2B2623] font-medium block">수제 도예 장인 다기 세트</strong>
                    <span className="text-[#2B2623]/70 text-[12px]">흙의 온기가 전해지는 전통 도자기 다구</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 group/item hover:translate-x-1 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                  <div>
                    <strong className="text-[#2B2623] font-medium block">발뮤다 포트 & 드립백</strong>
                    <span className="text-[#2B2623]/70 text-[12px]">풍미 깊은 스페셜티 원두 드립백 커피</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Pillar 3: MEDIA & LIVING */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E5DF] space-y-4 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-3.5">
                <div>
                  <span className="text-[#8E5642] font-serif font-bold text-[11px] tracking-widest block uppercase">CATEGORY 03</span>
                  <h4 className="font-serif font-bold text-[16px] text-[#2B2623] mt-0.5 group-hover:text-[#8E5642] transition-colors">미디어 & 프리미엄 리빙</h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#8E5642]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Film className="w-4.5 h-4.5 text-[#8E5642]" />
                </div>
              </div>
              <ul className="space-y-3.5 text-[13px] font-sans">
                <li className="flex items-start gap-2.5 group/item hover:translate-x-1 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                  <div>
                    <strong className="text-[#2B2623] font-medium block">100인치 대형 빔프로젝터</strong>
                    <span className="text-[#2B2623]/70 text-[12px]">넷플릭스 · 유튜브 프리미엄 시네마 환경</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 group/item hover:translate-x-1 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                  <div>
                    <strong className="text-[#2B2623] font-medium block">마샬 블루투스 오디오</strong>
                    <span className="text-[#2B2623]/70 text-[12px]">공간을 풍성하게 채우는 고음질 사운드</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 group/item hover:translate-x-1 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                  <div>
                    <strong className="text-[#2B2623] font-medium block">다이슨 슈퍼소닉 드라이어</strong>
                    <span className="text-[#2B2623]/70 text-[12px]">빠르고 모발 손상 없는 프리미엄 드라이기</span>
                  </div>
                </li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
