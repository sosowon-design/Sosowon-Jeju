import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, ArrowUpRight, ArrowRight, HelpCircle, ChevronDown, Clock, Users } from 'lucide-react';
import extImg from '../assets/images/sosowon_ext_1783443147706.jpg';

interface AccordionItem {
  id: string;
  title: string;
  icon: any;
  content: string | ReactNode;
}

export default function BookingWidget() {
  // All accordion items are collapsed by default as requested: "RESERVATION GUIDE 섹션의 각 내용이 접혀있도록해줘"
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  // Curated Accordion guide list representing the moved "이용 안내" content
  const guideAccordions: AccordionItem[] = [
    {
      id: 'check-in-out',
      title: '입/퇴실 안내 및 비대면 체크인',
      icon: Clock,
      content: (
        <div className="space-y-2.5 text-[#2B2623]/80 text-[13.5px] leading-relaxed font-sans">
          {/* Check-in / Check-out badges in natural, calm stone tone */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#FAF8F5] text-[#5A4D41] border border-[#DDD7CD] px-3.5 py-1.5 rounded-lg text-[12px] font-semibold tracking-wide shadow-2xs">
              체크인 16:00
            </span>
            <span className="bg-[#FAF8F5] text-[#5A4D41] border border-[#DDD7CD] px-3.5 py-1.5 rounded-lg text-[12px] font-semibold tracking-wide shadow-2xs">
              체크아웃 11:00
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="shrink-0 leading-relaxed">•</span>
            <p className="leading-relaxed flex-1">
              소소원 제주는 예약하신 한 팀만을 위해 <strong className="text-[#2B2623] font-normal md:font-semibold">무인 비대면 시스템</strong>으로 진행됩니다.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="shrink-0 leading-relaxed">•</span>
            <p className="leading-relaxed flex-1">
              입실 당일 오전 11시 경, 예약 시 입력하신 번호로 객실 비밀번호 및 입실 세부 가이드를 상세 전송해 드립니다.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'guest-policy',
      title: '투숙 인원 및 외부인 출입 제한 수칙',
      icon: Users,
      content: (
        <div className="space-y-2 text-[#2B2623]/80 text-[13.5px] leading-relaxed font-sans">
          <div className="flex items-start gap-2">
            <span className="shrink-0 leading-relaxed">•</span>
            <p className="leading-relaxed flex-1">
              투숙 인원은 <strong className="text-[#2B2623] font-normal md:font-semibold">기준 2인 / 최대 6인</strong>까지 동반 투숙 가능합니다.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="shrink-0 leading-relaxed">•</span>
            <p className="leading-relaxed flex-1">
              예약 인원 외에 <strong className="text-[#2B2623] font-normal md:font-semibold">외부인의 단순 방문이나 시설 동반 이용, 식사 등은 일절 허용되지 않습니다.</strong>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="shrink-0 leading-relaxed">•</span>
            <p className="leading-relaxed flex-1">
              영유아 동반 시 정원 고저 차와 돌담 수조 안전을 위해 보호자의 각별한 밀착 케어가 반드시 필요합니다.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'spa-guidelines',
      title: '돌담 야외 온수 노천탕 이용 가이드',
      icon: HelpCircle,
      content: (
        <div className="space-y-2 text-[#2B2623]/80 text-[13.5px] leading-relaxed font-sans">
          <div className="flex items-start gap-2">
            <span className="shrink-0 leading-relaxed">•</span>
            <p className="leading-relaxed flex-1">
              야외 화산석 노천탕은 <strong className="text-[#2B2623] font-normal md:font-semibold">사계절 내내 추가 사용 비용이 전액 무료</strong>입니다.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="shrink-0 leading-relaxed">•</span>
            <p className="leading-relaxed flex-1">
              쾌적하고 위생적인 수질 관리를 위해 <strong className="text-[#2B2623] font-normal md:font-semibold">제공되는 천연 허브 소금 외 개인 입욕제(버블바, 오일 등)의 사용을 금합니다.</strong>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="shrink-0 leading-relaxed">•</span>
            <p className="leading-relaxed flex-1">
              수영복 또는 비치웨어 착용을 권장하며, 겨울철에는 이용 후 체온 유지를 위해 바스로브를 착용해 주세요.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'cancel-policy',
      title: '예약 취소 및 환불 기준 규정',
      icon: Info,
      content: (
        <div className="space-y-3 text-[#2B2623]/80 text-[13px] leading-relaxed font-sans">
          <p>
            신중한 여행 일정을 위해 아래 취소 수수료 규정을 반드시 숙지해 주시기 바랍니다.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[12px]">
            <div className="bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E8E5DF]">
              <span className="text-[#2B2623]/60 block text-[10.5px] font-semibold">8일 전까지</span>
              <strong className="text-[#8E5642] font-bold">전액 환불</strong>
            </div>
            <div className="bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E8E5DF]">
              <span className="text-[#2B2623]/60 block text-[10.5px] font-semibold">7일 전</span>
              <strong className="text-[#2B2623] font-bold">80% 환불</strong>
            </div>
            <div className="bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E8E5DF]">
              <span className="text-[#2B2623]/60 block text-[10.5px] font-semibold">5일 전</span>
              <strong className="text-[#2B2623]/80 font-bold">50% 환불</strong>
            </div>
            <div className="bg-[#FFFFFF] p-2.5 rounded-lg border border-[#E8E5DF]">
              <span className="text-[#2B2623]/60 block text-[10.5px] font-semibold">3일 전~당일</span>
              <strong className="text-red-600 font-bold">환불 불가</strong>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="booking" className="pt-16 pb-20 md:pt-20 md:pb-24 bg-[#F6F4F0] border-t border-[#8E5642]/30 text-[#2B2623] relative">
      
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header Segment */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-14"
          id="booking-header"
        >
          <span className="text-[#8E5642] text-[12px] font-serif font-bold tracking-[0.28em] uppercase block mb-3">
            RESERVATION GUIDE
          </span>
          <h2 className="text-[26px] font-serif font-semibold text-[#2B2623] tracking-wide mb-3">
            <span className="md:hidden">이용 안내 및 예약</span>
            <span className="hidden md:inline">소소원 이용 안내 및 예약하기</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#8E5642] mx-auto mb-3.5" />
          <p className="text-[14px] text-[#2B2623]/75 font-sans max-w-xl mx-auto">
            <span className="md:hidden">
              예약 완료 전 안내된 이용 수칙을<br />반드시 확인해 주시기 바랍니다.
            </span>
            <span className="hidden md:inline">
              예약 완료 전 안내된 이용 수칙을 반드시 확인해 주시기 바랍니다.
            </span>
          </p>
        </motion.div>

        {/* Two-Column Grid: Sticky card follows accordion content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start" id="booking-grid">
          
          {/* LEFT COLUMN: Visual Stay Information Card with Professional Detailed Specs (order-2 on mobile, lg:order-1 on PC) */}
          <div className="order-2 lg:order-1 lg:col-span-5 lg:sticky lg:top-28 space-y-6 transition-all duration-300" id="booking-card-panel">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FFFFFF] border border-[#E8E5DF] p-6 md:p-7 rounded-2xl shadow-xs space-y-5"
            >
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-100 border border-[#E8E5DF] relative">
                <img
                  src={extImg}
                  alt="Sosowon Jeju Scenic View"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Comprehensive Stay Specifications & Hospitality Guarantees */}
              <div className="space-y-3 font-sans text-[13px] text-[#2B2623]/80 leading-relaxed border-t border-[#E8E5DF] pt-4">
                <div className="flex justify-between items-center whitespace-nowrap">
                  <span className="font-bold text-[#2B2623]">대여 유형</span>
                  <span className="text-right text-[#2B2623] font-medium">프라이빗 독채 숙소</span>
                </div>
                <div className="flex justify-between items-center border-t border-[#E8E5DF]/60 pt-2.5 whitespace-nowrap">
                  <span className="font-bold text-[#2B2623]">투숙 인원</span>
                  <span className="text-right text-[#2B2623] font-medium">기준 2인 / 최대 6인</span>
                </div>
                <div className="flex justify-between items-center border-t border-[#E8E5DF]/60 pt-2.5 whitespace-nowrap">
                  <span className="font-bold text-[#2B2623]">입/퇴실 시간</span>
                  <span className="text-right text-[#2B2623] font-medium">체크인 16:00 / 체크아웃 11:00</span>
                </div>
                <div className="flex justify-between items-center border-t border-[#E8E5DF]/60 pt-2.5 whitespace-nowrap">
                  <span className="font-bold text-[#2B2623]">입실 방식</span>
                  <span className="text-right text-[#2B2623] font-medium">100% 비대면 스마트도어락</span>
                </div>
              </div>

              {/* Naver Map External Reservation Link */}
              <div className="space-y-3 pt-4 border-t border-[#E8E5DF]">
                <div className="pt-2">
                  <a
                    href="https://booking.naver.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#8E5642] hover:bg-[#784735] text-white py-4 px-6 rounded-full text-[14px] tracking-[0.08em] font-sans font-semibold transition-all shadow-md cursor-pointer hover:scale-[1.02] group"
                    id="naver-booking-link"
                  >
                    <span>네이버 예약 바로가기</span>
                    <span className="md:hidden inline-flex">
                      <ArrowRight className="w-4.5 h-4.5 text-white stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1.5" />
                    </span>
                    <span className="hidden md:inline-flex">
                      <ArrowUpRight className="w-4.5 h-4.5 text-white stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </div>
                <p className="text-[12px] text-center text-[#2B2623]/70 leading-relaxed font-sans font-normal">
                  <span className="md:hidden">
                    예약 확정은 해당 내용을 모두 확인하고<br />동의하신 것으로 간주됩니다.
                  </span>
                  <span className="hidden md:inline">
                    예약 확정은 해당 내용을 모두 확인하고 동의하신 것으로 간주됩니다.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Collapsible Accordions (order-1 on mobile, lg:order-2 on PC) */}
          <div className="order-1 lg:order-2 lg:col-span-7 space-y-5" id="booking-info-panel">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="hidden md:flex items-center gap-2 pb-3.5 border-b border-[#E8E5DF] mb-6">
                <Info className="w-5 h-5 text-[#8E5642] stroke-[1.5]" />
                <span className="text-[17px] font-serif font-bold tracking-wide text-[#2B2623]">이용 수칙 안내</span>
              </div>

              {/* Custom animated accordion loop with overflow-hidden and downward expansion */}
              <div className="space-y-3">
                {guideAccordions.map((item) => {
                  const IconComponent = item.icon;
                  const isOpen = openAccordionId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl overflow-hidden transition-shadow shadow-2xs"
                      id={`guide-accordion-${item.id}`}
                    >
                      {/* Accordion Trigger */}
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none transition-colors hover:bg-stone-50 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 text-[#2B2623]">
                          <IconComponent className="w-5 h-5 text-[#8E5642] shrink-0 stroke-[1.5]" />
                          <span className="text-[14.5px] md:text-[15px] font-serif font-semibold tracking-wide">
                            {item.title}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-[#2B2623]/60 transition-transform duration-300 shrink-0 ${
                            isOpen ? 'rotate-180 text-[#8E5642]' : 'rotate-0'
                          }`}
                        />
                      </button>

                      {/* Accordion Content with downward expansion */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="overflow-hidden border-t border-[#E8E5DF] origin-top"
                          >
                            <div className="p-4 md:p-5 bg-[#FAFAF9]">
                              {item.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
