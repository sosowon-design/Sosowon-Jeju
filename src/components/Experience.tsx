import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Clock, Sparkles, MapPin, Compass, Coffee, Sun, Flame, Waves } from 'lucide-react';
import { EXPERIENCES } from '../data';

import teaImg from '../assets/images/sosowon_tea_stillife_1790527955631.jpg';
import yogaImg from '../assets/images/sosowon_yoga_stillife_1790527972479.jpg';
import bbqImg from '../assets/images/sosowon_garden_bbq_1790526727045.jpg';
import spaImg from '../assets/images/sosowon_heated_spa_1790526738476.jpg';

interface ExperienceProps {
  onNavigate?: (pageId: string) => void;
}

const localHostTips: Record<string, string> = {
  'local-oreum': '오후 5시경 오르면 황금빛 억새와 함께 서쪽 바다로 저무는 환상적인 일몰을 감상하실 수 있습니다.',
  'local-forest': '소소원에서 도보 4분 거리로, 이른 아침 맑은 공기와 새소리를 들으며 조용히 산책하기 좋습니다.',
  'local-citrus': '제주 햇살을 머금은 감귤밭에서 갓 짠 착즙 주스와 감성적인 로컬 디저트를 여유롭게 즐겨보세요.',
  'local-pottery': '제주 흙과 돌의 온기를 담아 나만의 찻잔을 직접 빚어보는 도예 체험으로 소소원 다도와도 잘 어울립니다.',
  'local-coast': '옥빛 바다와 검은 화산석 산책로를 거닐며 시원한 해풍과 여유로운 티타임을 즐겨보세요.',
};

// Travel time, operating hours, and curated info for local attractions
const localDetails: Record<string, { travelTime: string; operatingHours: string; feature: string; naturalName: string }> = {
  'local-oreum': {
    travelTime: '소소원에서 차량 10분',
    operatingHours: '상시 개방 (일몰 1시간 전 추천)',
    feature: '서쪽 바다 노을 조망 & 억새 능선 산책',
    naturalName: '금오름 · 새별오름',
  },
  'local-citrus': {
    travelTime: '소소원에서 도보 5분',
    operatingHours: '10:00 ~ 18:00 (사전 예약 권장)',
    feature: '친환경 감귤 수확 & 수제 감귤청 클래스',
    naturalName: '유기농 감귤 농장',
  },
  'local-pottery': {
    travelTime: '소소원에서 차량 7분',
    operatingHours: '10:30 ~ 17:30 (매주 월요일 휴무)',
    feature: '제주 화산토로 빚는 나만의 다기 원데이 클래스',
    naturalName: '화산토 도예 공방',
  },
  'local-coast': {
    travelTime: '소소원에서 차량 12분',
    operatingHours: '상시 산책 가능 (카페거리 연계)',
    feature: '검은 화산석 바윗길 & 에메랄드빛 해안 산책로',
    naturalName: '한담 해안 산책로',
  },
};

// 4 Stay Healing Rituals with individual Lucide icons and concise invitations
const MOBILE_RITUAL_SUMMARIES: Record<string, string> = {
  'healing-tea': '돌담 창가에서 유기농 잎차를 우려내며 깊은 평온을 누려보세요.',
  'healing-yoga': '정원에서 맑은 싱잉볼 소리와 함께 몸과 마음의 감각을 깨워보세요.',
  'healing-bbq': '연기 걱정 없는 프리미엄 무연 그릴로 야외 저녁 식사를 즐겨보세요.',
  'healing-spa': '38~40℃ 따뜻한 야외 노천탕에서 천연 아로마욕으로 피로를 풀어보세요.',
};

const MOBILE_LOCAL_SUMMARIES: Record<string, string> = {
  'local-oreum': '황금빛 억새 능선과 탁 트인 서쪽 바다 산책로',
  'local-citrus': '유기농 감귤 수확과 달콤한 수제 감귤청 클래스',
  'local-pottery': '제주 화산토로 빚는 나만의 감성 다기 원데이 클래스',
  'local-coast': '화산석 바윗길과 에메랄드빛 바다를 잇는 해안 산책로',
};

const MOBILE_LOCAL_TITLES: Record<string, string> = {
  'local-oreum': '금오름 & 새별오름 산책',
  'local-citrus': '유기농 감귤 수확 체험',
  'local-pottery': '제주 화산토 도예 공방',
  'local-coast': '애월 한담 해안 산책로',
};

export const FOUR_STAY_HEALINGS = [
  {
    id: 'healing-tea',
    icon: Coffee,
    title: '제주 명인다원 웰컴 다도',
    desc: '제주의 맑은 자연에서 자란 유기농 잎차를 정성스레 우려내며 번잡했던 생각을 비워보세요. 돌담 창가에 앉아 은은한 차 향기와 함께 깊은 평온을 누려보시길 권해드립니다.',
    highlights: ['제주 명인다원 유기농 잎차 무료 제공', '전통 수제 도자기 다기 & 발뮤다 티포트', '돌담 정원을 마주하는 아날로그 좌식 다도실'],
    image: teaImg,
  },
  {
    id: 'healing-yoga',
    icon: Sun,
    title: '정원 모닝 요가 & 싱잉볼',
    desc: '아침 햇살이 부드럽게 내리쬐는 돌담 정원에서 맑은 싱잉볼 소리와 함께 몸과 마음을 가볍게 깨워보세요. 상쾌한 숲바람을 깊이 들이마시며 평화로운 하루를 시작해보시길 바랍니다.',
    highlights: ['친환경 프리미엄 코르크 요가 매트 완비', '차분한 울림의 수제 싱잉볼 비치', '피톤치드 가득한 야외 잔디 테라스'],
    image: yogaImg,
  },
  {
    id: 'healing-bbq',
    icon: Flame,
    title: '프라이빗 가든 바베큐',
    desc: '연기나 냄새 걱정 없는 프리미엄 무연 그릴과 식기 세트로 야외 정원에서 오붓한 저녁 식사를 즐기실 수 있습니다. 소중한 사람들과 함께 제주 밤하늘 아래 특별한 미식을 만끽해보세요.',
    highlights: ['안심 무연 프리미엄 야외 전기 그릴', '와인잔 및 감성 플레이팅 식기 풀세트', '은은한 야간 조명과 야외 원목 식탁'],
    image: bbqImg,
  },
  {
    id: 'healing-spa',
    icon: Waves,
    title: '사계절 야외 온수 스파',
    desc: '사계절 내내 추가 비용 없이 38~40℃로 따뜻하게 순환되는 야외 화산석 노천탕입니다. 은은한 천연 아로마 솔트를 풀고 별빛을 바라보며 여행의 피로를 편안히 녹여보세요.',
    highlights: ['24시간 상시 38~40℃ 무료 온수 유지', '천연 허브 아로마 바스 솔트 무료 제공', '도톰한 호텔식 순면 가운 & 타월 완비'],
    image: spaImg,
  },
];

export default function Experience({ onNavigate: _onNavigate }: ExperienceProps) {
  const [activeLocalIdx, setActiveLocalIdx] = useState<number>(0);

  const localExperiences = EXPERIENCES.filter((item) => item.category === 'local');
  const currentLocal = localExperiences[activeLocalIdx] || localExperiences[0];
  const currentDetails = localDetails[currentLocal.id] || {
    travelTime: '소소원 인근',
    operatingHours: '상시 이용 가능',
    feature: currentLocal.description,
    naturalName: currentLocal.title,
  };

  const handlePrevLocal = () => {
    setActiveLocalIdx((prev) => (prev === 0 ? localExperiences.length - 1 : prev - 1));
  };

  const handleNextLocal = () => {
    setActiveLocalIdx((prev) => (prev === localExperiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-0 text-[#2B2623] bg-[#FFFFFF]" id="experience-page-container">
      
      {/* 1. Header Banner - Unified Height Matching LOCATION & DIRECTIONS */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-[#F6F4F0] border-t border-[#8E5642]/30 border-b border-[#E8E5DF] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading and core narrative */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block mb-3">
                <span className="md:hidden">HEALING RITUALS</span>
                <span className="hidden md:inline">RESTFUL EXPERIENCES</span>
              </span>

              <h2 className="text-[26px] font-serif font-semibold text-[#2B2623] tracking-wide leading-tight mb-3">
                <span className="md:hidden">소소원만의 힐링 리추얼</span>
                <span className="hidden md:inline">소소원의 온전한 쉼과 로컬 여정</span>
              </h2>

              <div className="w-12 h-[2px] bg-[#8E5642] mb-4 mx-auto lg:mx-0" />

              <p className="text-[#2B2623]/80 text-[14.5px] leading-relaxed font-sans font-normal text-center lg:text-left">
                <span className="md:hidden">
                  소소원만의 힐링 리추얼과 로컬 여정을 통해<br />온전한 쉼을 경험해 보세요.
                </span>
                <span className="hidden md:inline">
                  소소원 독채에서 누리는 힐링 리추얼과 로컬 여정을 통해 온전한 쉼을 경험해 보세요.
                </span>
              </p>
            </motion.div>

            {/* Right Column: Redesigned Daily Ritual Schedule - Compact 2x2 Grid Matching LOCATION & DIRECTIONS height */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-[#E8E5DF] pt-6 lg:pt-0 lg:pl-8 text-left"
            >
              <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E8E5DF] shadow-2xs space-y-3.5">
                <div className="flex items-center justify-start border-b border-[#E8E5DF] pb-2.5 text-left">
                  <div className="flex items-center justify-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#8E5642]" />
                    <span className="font-serif font-bold text-[14.5px] text-[#2B2623]">
                      소소원을 즐기는 추천 루틴
                    </span>
                  </div>
                </div>
                
                {/* Mobile View: High Readability & Clean Arrangement with concise core notes and subtle hover motion */}
                <div className="md:hidden space-y-2.5 font-sans">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] transition-transform duration-200 hover:-translate-y-1 hover:shadow-xs cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#E8E5DF] text-[#8E5642] font-semibold text-[11px] shrink-0">16:00</span>
                      <strong className="text-[#2B2623] font-medium text-[13px]">체크인 & 웰컴 다도</strong>
                    </div>
                    <span className="text-[#2B2623]/70 text-[11.5px] shrink-0">유기농 잎차</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] transition-transform duration-200 hover:-translate-y-1 hover:shadow-xs cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#E8E5DF] text-[#8E5642] font-semibold text-[11px] shrink-0">18:30</span>
                      <strong className="text-[#2B2623] font-medium text-[13px]">가든 바베큐 다이닝</strong>
                    </div>
                    <span className="text-[#2B2623]/70 text-[11.5px] shrink-0">무연 그릴 저녁</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] transition-transform duration-200 hover:-translate-y-1 hover:shadow-xs cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#E8E5DF] text-[#8E5642] font-semibold text-[11px] shrink-0">20:30</span>
                      <strong className="text-[#2B2623] font-medium text-[13px]">별빛 온수 노천 스파</strong>
                    </div>
                    <span className="text-[#2B2623]/70 text-[11.5px] shrink-0">야외 아로마욕</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] transition-transform duration-200 hover:-translate-y-1 hover:shadow-xs cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#E8E5DF] text-[#8E5642] font-semibold text-[11px] shrink-0">08:00</span>
                      <strong className="text-[#2B2623] font-medium text-[13px]">정원 요가 & 싱잉볼</strong>
                    </div>
                    <span className="text-[#2B2623]/70 text-[11.5px] shrink-0">상쾌한 아침</span>
                  </div>
                </div>

                {/* Desktop View: 2x2 grid with smooth hover motion, unchanged colors */}
                <div className="hidden md:grid grid-cols-2 gap-2.5 font-sans">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] transition-transform duration-200 hover:-translate-y-1 hover:shadow-xs cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-[#FFFFFF] border border-[#E8E5DF] text-[#8E5642] font-semibold text-[10.5px]">16:00</span>
                      <strong className="text-[#2B2623] font-medium text-[12px] truncate">체크인 & 웰컴 다도</strong>
                    </div>
                    <p className="text-[#2B2623]/70 text-[11px] leading-snug truncate">돌담 창가 유기농 잎차</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] transition-transform duration-200 hover:-translate-y-1 hover:shadow-xs cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-[#FFFFFF] border border-[#E8E5DF] text-[#8E5642] font-semibold text-[10.5px]">18:30</span>
                      <strong className="text-[#2B2623] font-medium text-[12px] truncate">가든 바베큐 다이닝</strong>
                    </div>
                    <p className="text-[#2B2623]/70 text-[11px] leading-snug truncate">무연 그릴 야외 저녁</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] transition-transform duration-200 hover:-translate-y-1 hover:shadow-xs cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-[#FFFFFF] border border-[#E8E5DF] text-[#8E5642] font-semibold text-[10.5px]">20:30</span>
                      <strong className="text-[#2B2623] font-medium text-[12px] truncate">별빛 온수 노천 스파</strong>
                    </div>
                    <p className="text-[#2B2623]/70 text-[11px] leading-snug truncate">38~40℃ 천연 아로마욕</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] transition-transform duration-200 hover:-translate-y-1 hover:shadow-xs cursor-pointer">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-[#FFFFFF] border border-[#E8E5DF] text-[#8E5642] font-semibold text-[10.5px]">08:00</span>
                      <strong className="text-[#2B2623] font-medium text-[12px] truncate">정원 요가 & 싱잉볼</strong>
                    </div>
                    <p className="text-[#2B2623]/70 text-[11px] leading-snug truncate">숲바람과 맑은 파동</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SECTION A: 독채 스테이 힐링 체험 (IN-VILLA HEALING RITUALS) */}
      <section className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#E8E5DF]" id="section-stay-rituals">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* Section Header with representative description without keyword listing */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block">
              STAY HEALING RITUALS
            </span>
            <h3 className="text-[26px] font-serif font-semibold text-[#2B2623]">
              <span className="md:hidden">제주 자연 속 온전한 휴식</span>
              <span className="hidden md:inline">소소원에서 누리는 온전한 휴식</span>
            </h3>
            <div className="w-12 h-[2px] bg-[#8E5642] mx-auto my-3" />
            <p className="text-[#2B2623]/80 text-[14.5px] font-sans leading-relaxed">
              <span className="md:hidden">
                제주의 고요한 자연 속에서 온전히 쉼에 집중하며<br />몸과 마음의 감각을 깨워보세요.
              </span>
              <span className="hidden md:inline">제주 자연의 숨결 속에서 오롯이 나에게 집중하며 몸과 마음의 감각을 깨워보세요.</span>
            </p>
          </div>

          {/* 4 Stay Ritual Showcase Cards - 2x2 spacious and rich layout with icons in front of title and without annotations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
            {FOUR_STAY_HEALINGS.map((item, idx) => {
              const RitualIcon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  id={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#F6F4F0] rounded-2xl border border-[#E8E5DF] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  {/* Photo - Clean without overlaid text */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Content with icon before title, annotations removed */}
                  <div className="p-6 md:p-7 flex-grow flex flex-col justify-between space-y-4 text-left">
                    <div className="space-y-2.5">
                      <h4 className="text-[18px] md:text-[19px] font-serif font-bold text-[#2B2623] leading-snug flex items-center gap-2.5">
                        <RitualIcon className="w-5 h-5 text-[#8E5642] shrink-0 stroke-[1.8]" />
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-[#2B2623]/80 text-[13.5px] font-sans leading-relaxed pt-1">
                        <span className="md:hidden break-keep">
                          {MOBILE_RITUAL_SUMMARIES[item.id] || item.desc}
                        </span>
                        <span className="hidden md:inline">
                          {item.desc}
                        </span>
                      </p>
                    </div>

                    {/* Highlights with middle dot style */}
                    <div className="pt-4 border-t border-[#E8E5DF] space-y-2">
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-[12.5px] text-[#2B2623]/85 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0 mt-2" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. SECTION B: 제주 로컬 명소 & 체험 (JEJU LOCAL JOURNEY & ATTRACTIONS) */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-[#F6F4F0]" id="section-local-journey">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* Section Header: Added horizontal line below title and removed line below body */}
          <div className="flex flex-col items-center text-center justify-center gap-2 mb-8 md:mb-10 pb-0">
            <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block">
              <span className="md:hidden">LOCAL JOURNEY</span>
              <span className="hidden md:inline">LOCAL CURATION & ATTRACTIONS</span>
            </span>
            <h3 className="text-[26px] font-serif font-semibold text-[#2B2623]">
              <span className="md:hidden">제주 로컬 명소 & 체험</span>
              <span className="hidden md:inline">제주 로컬 명소 & 체험 여정</span>
            </h3>
            {/* Added horizontal line below title for consistency with other sections */}
            <div className="w-12 h-[2px] bg-[#8E5642] mx-auto my-3" />
            <p className="text-[#2B2623]/75 text-[14px] font-sans max-w-xl mx-auto">
              <span className="md:hidden">
                제주에서의 특별하고 다양한 추억을 만들어보세요.
              </span>
              <span className="hidden md:inline">
                소소원 주변의 엄선된 로컬 명소를 둘러보며 제주에서의 특별하고 다양한 추억을 만들어보세요.
              </span>
            </p>

            {/* Clean Mobile Course Navigation Bar without cluttered sub-labels */}
            <div className="md:hidden w-full mt-4">
              <div className="relative">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none scroll-smooth pr-6">
                  {localExperiences.map((item, idx) => {
                    const isSelected = idx === activeLocalIdx;
                    const cleanName = MOBILE_LOCAL_TITLES[item.id] || (localDetails[item.id] || { naturalName: item.title }).naturalName.replace(/노을\s*/g, '');
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveLocalIdx(idx)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12.5px] font-sans transition-all whitespace-nowrap cursor-pointer border shrink-0 ${
                          isSelected
                            ? 'bg-[#8E5642] text-white border-[#8E5642] font-semibold shadow-xs'
                            : 'bg-[#FFFFFF] text-[#2B2623]/75 border-[#E8E5DF] hover:border-[#8E5642]/40'
                        }`}
                      >
                        <span className="text-[10.5px] opacity-80 font-serif font-bold">0{idx + 1}.</span>
                        <span>{cleanName}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="pointer-events-none absolute right-0 top-0 bottom-1 w-8 bg-gradient-to-l from-[#F6F4F0] to-transparent" />
              </div>

              {/* Thin line bar below buttons to visually indicate horizontal movement */}
              <div className="flex justify-center items-center mt-3 mb-1">
                <div className="w-64 max-w-[280px] h-[2px] bg-[#E8E5DF] rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-[#8E5642] rounded-full transition-all duration-300 ease-out"
                    style={{
                      width: `${100 / localExperiences.length}%`,
                      transform: `translateX(${activeLocalIdx * 100}%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Master Spotlight Card with enlarged image and restored intuitive layout */}
          <div className="bg-[#FFFFFF] rounded-2xl border border-[#E8E5DF] p-6 md:p-8 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLocal.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
              >
                {/* Visual Image Column */}
                <div className="lg:col-span-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 border border-[#E8E5DF] shadow-xs group cursor-pointer"
                  >
                    <img
                      src={currentLocal.image}
                      alt={currentLocal.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>

                {/* Details Column with Icon added in front of title */}
                <div className="lg:col-span-6 space-y-4 text-left">
                  <motion.div 
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5 cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-5 h-5 text-[#8E5642] shrink-0" />
                      <h4 className="text-[18px] md:text-[20px] font-serif font-bold text-[#2B2623] leading-snug">
                        <span className="md:hidden">
                          {MOBILE_LOCAL_TITLES[currentLocal.id] || currentLocal.title.replace(/노을\s*/g, '').trim()}
                        </span>
                        <span className="hidden md:inline">
                          {currentLocal.title}
                        </span>
                      </h4>
                    </div>
                    <p className="text-[#2B2623]/75 text-[13px] md:text-[13.5px] font-sans leading-relaxed pt-1">
                      <span className="md:hidden break-keep">
                        {MOBILE_LOCAL_SUMMARIES[currentLocal.id] || currentLocal.description}
                      </span>
                      <span className="hidden md:inline">
                        {currentLocal.description}
                      </span>
                    </p>
                  </motion.div>

                  {/* Travel Time & Operating Hours Badges Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF]">
                      <Compass className="w-4 h-4 text-[#8E5642] shrink-0" />
                      <div>
                        <span className="text-[10.5px] text-[#8E5642] font-semibold block uppercase">이동 소요 시간</span>
                        <strong className="text-[12.5px] text-[#2B2623] font-medium block">{currentDetails.travelTime}</strong>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E5DF]">
                      <Clock className="w-4 h-4 text-[#8E5642] shrink-0" />
                      <div>
                        <span className="text-[10.5px] text-[#8E5642] font-semibold block uppercase">운영 및 권장 시간</span>
                        <strong className="text-[12.5px] text-[#2B2623] font-medium block">{currentDetails.operatingHours}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Curated Host Recommendation */}
                  <motion.div 
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#F6F4F0] p-4 rounded-xl border border-[#E8E5DF] space-y-1 shadow-2xs hover:border-[#8E5642]/40 transition-colors"
                  >
                    <span className="text-[11px] font-bold text-[#8E5642] font-serif tracking-wide block">
                      호스트 추천 팁
                    </span>
                    <p className="text-[12px] text-[#2B2623]/80 font-sans leading-relaxed">
                      {localHostTips[currentLocal.id] || '소소원에서 머무시는 동안 여유롭게 둘러보실 수 있는 특별한 로컬 스폿입니다.'}
                    </p>
                  </motion.div>

                  {/* Highlights with refined compass icon instead of plain check */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {currentLocal.highlights.map((hl, hIdx) => (
                      <motion.div 
                        key={hIdx}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center gap-2 text-[12px] text-[#2B2623]/85 font-sans p-1 rounded-md hover:bg-stone-50"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8E5642] shrink-0" />
                        <span className="md:hidden">{hl.replace(/노을\s*/g, '')}</span>
                        <span className="hidden md:inline">{hl}</span>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mini Preview Strip below with natural, natural-sounding course button names (Desktop Only) */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3 mt-4">
            {/* Left Prev Arrow Button */}
            <button
              onClick={handlePrevLocal}
              aria-label="이전 명소"
              className="w-10 h-10 rounded-xl border border-[#E8E5DF] bg-[#FFFFFF] hover:bg-[#FAF8F5] hover:border-[#8E5642] text-[#8E5642] flex items-center justify-center transition-all hover:scale-105 cursor-pointer shadow-2xs shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* 4 Mini Course Buttons with natural names */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 flex-1">
              {localExperiences.map((item, idx) => {
                const isSelected = idx === activeLocalIdx;
                const details = localDetails[item.id] || { naturalName: item.title };
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveLocalIdx(idx)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer hover:-translate-y-0.5 ${
                      isSelected
                        ? 'bg-[#FFFFFF] border-[#8E5642] shadow-xs'
                        : 'bg-[#FFFFFF] border-[#E8E5DF] hover:border-stone-400 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-10 h-10 rounded-lg object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <span className="block text-[10.5px] font-medium text-[#8E5642] tracking-wider uppercase">
                        COURSE 0{idx + 1}
                      </span>
                      <span className="block text-[12px] font-serif font-bold text-[#2B2623] truncate">
                        <span className="md:hidden">{details.naturalName.replace(/노을\s*/g, '')}</span>
                        <span className="hidden md:inline">{details.naturalName}</span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Next Arrow Button */}
            <button
              onClick={handleNextLocal}
              aria-label="다음 명소"
              className="w-10 h-10 rounded-xl border border-[#E8E5DF] bg-[#FFFFFF] hover:bg-[#FAF8F5] hover:border-[#8E5642] text-[#8E5642] flex items-center justify-center transition-all hover:scale-105 cursor-pointer shadow-2xs shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
