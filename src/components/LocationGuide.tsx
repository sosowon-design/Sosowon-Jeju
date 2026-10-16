import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Navigation, MapPin, Compass, Car, Bus, Key, ShieldCheck, Sparkles, Clock, Copy, Check } from 'lucide-react';

interface LocationGuideProps {
  onNavigate?: (pageId: string) => void;
}

interface FaqItem {
  question: string;
  answer: string;
}

// 6 Curated FAQs
const MOBILE_FAQ_QUESTIONS: Record<number, string> = {
  0: '온수 노천탕 추가 요금이 있나요?',
  1: '다도실 잎차와 다기 이용 방법',
  2: '바베큐 및 실내 취사 가능 여부',
  3: '주변 편의시설 및 배달 음식 이용',
  4: '주차 공간 및 전기차 충전 안내',
  5: '영유아 및 아이 동반 투숙 안내',
};

const LOCATION_FAQS: FaqItem[] = [
  {
    question: '야외 온수 노천탕은 별도 추가 요금이 있나요?',
    answer: '사계절 내내 24시간 추가 온수 비용 없이 전액 무료로 이용하실 수 있습니다. 자동 온도 제어 시스템으로 언제든 38~40℃의 포근한 온도를 유지하고 있어, 원하시는 시간에 자유롭게 피로를 푸실 수 있습니다.',
  },
  {
    question: '다도실에 제공되는 잎차와 다기는 어떻게 이용하나요?',
    answer: '제주 명인 다원의 최고급 유기농 웰컴 잎차와 전통 수제 도예 다기 세트, 온수 포트가 정갈하게 준비되어 있습니다. 다도 안내 카드가 함께 비치되어 있어 차를 처음 우려보시는 분들도 손쉽게 힐링 다도를 즐기실 수 있습니다.',
  },
  {
    question: '바베큐나 실내 취사가 가능한가요?',
    answer: '소소원의 쾌적한 목조 인테리어와 천연 린넨 베딩 보존을 위해 실내 육류/생선 구이 및 숯불 바베큐는 제한됩니다. 냉장고, 전자레인지, 전기포트, 감성 와인잔 및 고급 식기류가 완비되어 있어 포장 음식이나 와인, 다과를 안락하게 즐기실 수 있습니다.',
  },
  {
    question: '주변 편의시설 및 배달 음식 이용이 가능한가요?',
    answer: '차량 3분 거리(도보 약 10분)에 24시간 편의점이 있으며, 주요 배달 앱을 통해 애월 흑돼지, 딱새우회 등 다양한 로컬 맛집 배달이 가능합니다. 체크인 시 호스트의 애월 추천 맛집 가이드도 함께 보내드립니다.',
  },
  {
    question: '주차 공간 및 전기차 충전은 가능한가요?',
    answer: '소소원 대문 바로 앞 전용 단독 주차 공간에 차량 2대까지 넉넉하게 주차하실 수 있습니다. 인근 3분 거리의 납읍리 공영 주차장에 급속 전기차 충전소가 마련되어 있어 편리하게 충전하실 수 있습니다.',
  },
  {
    question: '영유아나 아이를 동반한 가족 투숙이 가능한가요?',
    answer: '네, 가족 단위 투숙을 환영합니다. 다만 제주 자연 화산석 먹돌담과 야외 노천탕의 수조 턱 등이 조성되어 있으므로, 아이들이 정원이나 노천탕을 이용할 때는 보호자분의 세심한 동행과 안전 케어를 부탁드립니다.',
  },
];

export default function LocationGuide({ onNavigate: _onNavigate }: LocationGuideProps) {
  const address = "제주특별자치도 제주시 애월읍 납읍로2길 18";
  const [copied, setCopied] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-0 text-[#2B2623] bg-[#FFFFFF]" id="location-page-container">
      
      {/* 1. Header & Location Overview - Unified Top Padding & Core Essence Narrative */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-[#F6F4F0] border-t border-[#8E5642]/30 border-b border-[#E8E5DF] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Location Narrative with core essence */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start space-y-5"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block mb-3">
                  LOCATION & DIRECTIONS
                </span>
                
                <h2 className="text-[26px] font-serif font-semibold text-[#2B2623] tracking-wide mb-3">
                  오시는 길 & 주변 안내
                </h2>
                
                <div className="w-12 h-[2px] bg-[#8E5642] mx-auto lg:mx-0" />
              </div>
              
              <p className="text-[#2B2623]/80 text-[14.5px] leading-relaxed font-sans font-normal text-center lg:text-left">
                <span className="md:hidden">
                  소소원으로 찾아오시는 발걸음이 편안하도록<br />교통편과 주차를 안내해 드립니다.
                </span>
                <span className="hidden md:inline">
                  소소원으로 찾아오시는 발걸음이 편안하도록 교통편과 주차를 안내해 드립니다.
                </span>
              </p>
            </motion.div>

            {/* Right Column: SOSOWON ADDRESS on top, Enlarged Map Buttons below */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-6 flex flex-col justify-center gap-3 shrink-0 border-t lg:border-t-0 lg:border-l border-[#E8E5DF] pt-6 lg:pt-0 lg:pl-8 text-[14px] font-sans font-medium text-[#2B2623]"
            >
              {/* SOSOWON ADDRESS Box (Positioned first as requested) */}
              <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E8E5DF] shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-serif font-semibold text-[#8E5642] tracking-wider uppercase">
                    SOSOWON ADDRESS
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <MapPin className="w-4 h-4 text-[#8E5642] shrink-0" />
                    <span className="text-[13.5px] font-medium text-[#2B2623] truncate">
                      {address}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className="px-4 py-2 bg-[#8E5642] hover:bg-[#784735] text-white rounded-xl text-[12px] font-medium transition-all cursor-pointer shrink-0 shadow-2xs hover:shadow-xs active:scale-98 inline-flex items-center justify-center text-center gap-1.5 w-full sm:w-auto"
                  >
                    {copied ? (
                      <>
                        <span>주소 복사 완료</span>
                        <Check className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>주소 복사하기</span>
                        <Copy className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Naver Map Badge - Links to Naver Map Home */}
              <a
                href="https://map.naver.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-[#FFFFFF] px-6 py-3.5 rounded-full border border-[#E8E5DF] shadow-2xs hover:border-[#8E5642] hover:bg-[#FAF8F5] transition-all group cursor-pointer"
                id="btn-naver-map"
              >
                <Navigation className="w-4 h-4 text-[#8E5642] shrink-0" />
                <span className="text-[#2B2623] font-semibold text-[14px] group-hover:text-[#8E5642] transition-colors">
                  네이버 지도 바로가기
                </span>
              </a>

              {/* Kakao Map Badge - Direct search query URL */}
              <a
                href="https://map.kakao.com/link/search/%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B2%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%A0%EC%9B%94%EC%9D%8D%20%EB%82%A9%EC%9D%8D%EB%A1%9C2%EA%B8%B8%2018"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-[#FFFFFF] px-6 py-3.5 rounded-full border border-[#E8E5DF] shadow-2xs hover:border-[#8E5642] hover:bg-[#FAF8F5] transition-all group cursor-pointer"
                id="btn-kakao-map"
              >
                <MapPin className="w-4 h-4 text-[#8E5642] shrink-0" />
                <span className="text-[#2B2623] font-semibold text-[14px] group-hover:text-[#8E5642] transition-colors">
                  카카오맵 바로가기
                </span>
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 1: 교통편 및 추천 이동 경로 (TRANSPORTATION & SCENIC ACCESS ROUTES) */}
      <section className="py-16 md:py-22 bg-[#FFFFFF] border-b border-[#E8E5DF]" id="location-transportation-section">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-3"
          >
            <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block">
              TRANSPORTATION GUIDE
            </span>
            <h3 className="text-[26px] font-serif font-semibold text-[#2B2623]">
              <span className="md:hidden">제주 공항에서 오시는 길</span>
              <span className="hidden md:inline">제주 공항 및 주요 거점에서 오시는 길</span>
            </h3>
            <div className="w-12 h-[2px] bg-[#8E5642] mx-auto my-3" />
            <p className="text-[#2B2623]/75 text-[14px] font-sans max-w-xl mx-auto">
              <span className="md:hidden">
                이용하시는 교통수단에 맞추어<br />수월하게 찾아오실 수 있습니다.
              </span>
              <span className="hidden md:inline">
                렌터카, 대중교통, 택시 등 이용하시는 교통수단에 맞추어 편안하게 찾아오실 수 있습니다.
              </span>
            </p>
          </motion.div>

          {/* 3 Pillars of Access Modes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
            
            {/* Mode 1: 렌터카 / 자차 */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F6F4F0] p-6 rounded-2xl border border-[#E8E5DF] space-y-4 shadow-2xs hover:shadow-md hover:border-[#8E5642]/40 transition-all group"
            >
              <div className="flex items-center gap-3 border-b border-[#E8E5DF] pb-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#E8E5DF] flex items-center justify-center text-[#8E5642] shadow-2xs shrink-0">
                  <Car className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-serif font-bold text-[16.5px] text-[#2B2623] group-hover:text-[#8E5642] transition-colors">
                  렌터카 / 자가용
                </h4>
              </div>
              <ul className="space-y-3 font-sans text-[13px]">
                <li className="space-y-1">
                  <span className="text-[#8E5642] text-[11px] font-semibold block uppercase">소요 시간 & 권장 도로</span>
                  <p className="text-[#2B2623]/85 leading-relaxed">
                    제주공항 기준 평화로(1135번) 또는 일주서로 이용 시 약 35분 소요
                  </p>
                </li>
                <li className="space-y-1 pt-1 border-t border-[#E8E5DF]/60">
                  <span className="text-[#8E5642] text-[11px] font-semibold block uppercase">내비게이션 검색어</span>
                  <p className="text-[#2B2623]/85 leading-relaxed">
                    ‘소소원 제주’ 또는 도로명 ‘납읍로2길 18’ 검색
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Mode 2: 대중교통 버스 */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F6F4F0] p-6 rounded-2xl border border-[#E8E5DF] space-y-4 shadow-2xs hover:shadow-md hover:border-[#8E5642]/40 transition-all group"
            >
              <div className="flex items-center gap-3 border-b border-[#E8E5DF] pb-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#E8E5DF] flex items-center justify-center text-[#8E5642] shadow-2xs shrink-0">
                  <Bus className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-serif font-bold text-[16.5px] text-[#2B2623] group-hover:text-[#8E5642] transition-colors">
                  대중교통 (급행/간선)
                </h4>
              </div>
              <ul className="space-y-3 font-sans text-[13px]">
                <li className="space-y-1">
                  <span className="text-[#8E5642] text-[11px] font-semibold block uppercase">공항 탑승 게이트</span>
                  <p className="text-[#2B2623]/85 leading-relaxed">
                    공항 5번 게이트 앞 102번 급행버스 또는 291번 간선버스 탑승
                  </p>
                </li>
                <li className="space-y-1 pt-1 border-t border-[#E8E5DF]/60">
                  <span className="text-[#8E5642] text-[11px] font-semibold block uppercase">하차 정류장</span>
                  <p className="text-[#2B2623]/85 leading-relaxed">
                    ‘납읍초등학교’ 정류장 하차 후 완만한 돌담길 도보 4분
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Mode 3: 택시 / 콜밴 */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F6F4F0] p-6 rounded-2xl border border-[#E8E5DF] space-y-4 shadow-2xs hover:shadow-md hover:border-[#8E5642]/40 transition-all group"
            >
              <div className="flex items-center gap-3 border-b border-[#E8E5DF] pb-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#E8E5DF] flex items-center justify-center text-[#8E5642] shadow-2xs shrink-0">
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-serif font-bold text-[16.5px] text-[#2B2623] group-hover:text-[#8E5642] transition-colors">
                  택시 / 콜밴 호출
                </h4>
              </div>
              <ul className="space-y-3 font-sans text-[13px]">
                <li className="space-y-1">
                  <span className="text-[#8E5642] text-[11px] font-semibold block uppercase">앱 목적지 설정</span>
                  <p className="text-[#2B2623]/85 leading-relaxed">
                    카카오T / 우버 목적지에 ‘납읍로2길 18’ 입력 시 대문 바로 앞 하차
                  </p>
                </li>
                <li className="space-y-1 pt-1 border-t border-[#E8E5DF]/60">
                  <span className="text-[#8E5642] text-[11px] font-semibold block uppercase">예상 택시 요금</span>
                  <p className="text-[#2B2623]/85 leading-relaxed">
                    제주공항 기준 편도 약 23,000원 ~ 26,000원 (소요 약 35분)
                  </p>
                </li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

      {/* NEW SECTION 2: 전용 주차 및 스마트 비대면 체크인 동선 안내 (PARKING & PRIVATE CHECK-IN ROUTE) */}
      <section className="py-16 md:py-22 bg-[#F6F4F0] border-b border-[#E8E5DF]" id="location-parking-section">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-3"
          >
            <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block">
              PARKING & PRIVATE ACCESS
            </span>
            <h3 className="text-[26px] font-serif font-semibold text-[#2B2623]">
              <span className="md:hidden">전용 주차 및 프라이빗 입실</span>
              <span className="hidden md:inline">전용 단독 주차 & 프라이빗 입실 동선</span>
            </h3>
            <div className="w-12 h-[2px] bg-[#8E5642] mx-auto my-3" />
            <p className="text-[#2B2623]/75 text-[14px] font-sans max-w-xl mx-auto">
              <span className="md:hidden">
                대문 앞 단독 주차부터 객실까지 프라이빗하고<br />안전하게 입실하실 수 있습니다.
              </span>
              <span className="hidden md:inline">
                소소원은 입차부터 객실 입장까지 외부 대면 없이 편안하게 연결되는 전용 동선을 갖추고 있습니다.
              </span>
            </p>
          </motion.div>

          {/* 3 Step Flow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
            
            {/* Step 1: Dedicated Parking */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E5DF] space-y-3.5 shadow-2xs hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8E5642]/10 flex items-center justify-center text-[#8E5642] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[16px] text-[#2B2623]">대문 앞 단독 전용 주차</h4>
                </div>
              </div>
              <p className="text-[13px] text-[#2B2623]/80 font-sans leading-relaxed pt-1">
                소소원 입구 대문 바로 앞에 우리 일행만을 위한 차량 2대 단독 주차 공간이 마련되어 있어 짐을 바로 내리기 편리합니다.
              </p>
              <div className="!mt-5 p-3 rounded-xl bg-[#F5EFE9] border border-[#E8DFD5] text-[12px] text-[#8E5642] font-sans font-medium">
                💡 전기차는 차량 3분 거리 납읍리 공영주차장 급속 충전기를 이용하실 수 있습니다.
              </div>
            </div>

            {/* Step 2: Smart Contactless Key */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E5DF] space-y-3.5 shadow-2xs hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8E5642]/10 flex items-center justify-center text-[#8E5642] shrink-0">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[16px] text-[#2B2623]">비대면 스마트 도어락 입실</h4>
                </div>
              </div>
              <p className="text-[13px] text-[#2B2623]/80 font-sans leading-relaxed pt-1">
                입실 당일 오전 11시에 전송된 안심 임시 비밀번호를 대문 및 현관 도어락에 입력하여 번거로운 체크인 절차 없이 바로 입실합니다.
              </p>
              <div className="!mt-5 p-3 rounded-xl bg-[#F5EFE9] border border-[#E8DFD5] text-[12px] text-[#8E5642] font-sans font-medium">
                🔑 비밀번호 입력 후 터치패드 별(*)표를 누르시면 안온한 실내로 연결됩니다.
              </div>
            </div>

            {/* Step 3: Welcome Pre-setting */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E5DF] space-y-3.5 shadow-2xs hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8E5642]/10 flex items-center justify-center text-[#8E5642] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[16px] text-[#2B2623]">사전 환경 세팅 & 호스트 케어</h4>
                </div>
              </div>
              <p className="text-[13px] text-[#2B2623]/80 font-sans leading-relaxed pt-1">
                입실 시각에 맞추어 쾌적한 온습도 공조와 야외 온수 스파(38~40℃)가 자동으로 준비되며, 카카오톡 채널로 상시 비대면 케어가 지원됩니다.
              </p>
              <div className="!mt-5 p-3 rounded-xl bg-[#F5EFE9] border border-[#E8DFD5] text-[12px] text-[#8E5642] font-sans font-medium">
                🌿 은은한 제주 숲향과 따스한 웰컴 조명이 머무시는 순간을 반갑게 맞이합니다.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS - Clean White Background */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-[#FFFFFF]" id="location-faq-section">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-4"
          >
            <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block">
              <span className="md:hidden">FAQ & GUIDE</span>
              <span className="hidden md:inline">FREQUENTLY ASKED QUESTIONS</span>
            </span>
            <h3 className="text-[26px] font-serif font-semibold text-[#2B2623]">
              <span className="md:hidden">자주 묻는 질문 & 안내</span>
              <span className="hidden md:inline">자주 묻는 질문 & 이용 안내</span>
            </h3>
            <div className="w-12 h-[2px] bg-[#8E5642] mx-auto my-3" />
            <p className="text-[#2B2623]/75 text-[14px] font-sans max-w-xl mx-auto">
              <span className="md:hidden">
                소소원의 이용에 궁금하신 사항을 정리해 드립니다.
              </span>
              <span className="hidden md:inline">
                소소원 방문 및 머무름에 대해 궁금하신 주요 사항을 정리해 드립니다.
              </span>
            </p>
          </motion.div>

          <div className="space-y-3.5">
            {LOCATION_FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F6F4F0] rounded-xl border border-[#E8E5DF] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left font-serif font-bold text-[13.5px] md:text-[15.5px] text-[#2B2623] hover:text-[#8E5642] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5 sm:gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#8E5642]/15 text-[#8E5642] text-[11px] font-sans font-bold flex items-center justify-center shrink-0">
                        Q
                      </span>
                      <span>
                        <span className="md:hidden">{MOBILE_FAQ_QUESTIONS[idx] || faq.question}</span>
                        <span className="hidden md:inline">{faq.question}</span>
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8E5642] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="faq-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden border-t border-[#E8E5DF] origin-top"
                      >
                        <div className="p-4 md:p-5 bg-[#FFFFFF] text-[#2B2623]/80 text-[13.5px] leading-relaxed font-sans font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
