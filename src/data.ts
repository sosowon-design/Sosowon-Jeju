import { Room, Amenity, GalleryItem, Review } from './types';

import extImg from './assets/images/sosowon_ext_1783443147706.jpg';
import extImg2 from './assets/images/nanobanana_jeju_ext_1783442021043.jpg';
import extImg3 from './assets/images/nanobanana_hero_1783440776331.jpg';

import bedroomImg from './assets/images/sosowon_bed_1783443158688.jpg';
import bedroomImg2 from './assets/images/nanobanana_jeju_bed_1783442035069.jpg';
import bedroomImg3 from './assets/images/nanobanana_bedroom_1783440795011.jpg';

import bathImg from './assets/images/sosowon_spa_1783443173490.jpg';
import bathImg2 from './assets/images/nanobanana_spa_misty_1783604880750.jpg';
import bathImg3 from './assets/images/nanobanana_spa_detail_1783604894281.jpg';

import galImg9 from './assets/images/nanobanana_tea_room_1783604817972.jpg';
import galImg10 from './assets/images/nanobanana_garden_path_1783604831128.jpg';
import galImg11 from './assets/images/nanobanana_bed_detail_1783604844974.jpg';
import galImg12 from './assets/images/nanobanana_shelf_detail_1783604860745.jpg';

import teaImg from './assets/images/sosowon_tea_1783443187762.jpg';
import teaImg2 from './assets/images/nanobanana_jeju_liv_1783442081100.jpg';
import teaImg3 from './assets/images/nanobanana_living_1783440826794.jpg';

import gardenImg from './assets/images/sosowon_garden_1783443199826.jpg';
import gardenImg2 from './assets/images/nanobanana_jeju_wall_1783442094341.jpg';
import gardenImg3 from './assets/images/nanobanana_hero_1783440776331.jpg';

// Newly generated nanobanana aesthetic images
import newHeroTeaImg from './assets/images/nanobanana_tea_corner_1783607591133.jpg';
import newHeroGardenImg from './assets/images/nanobanana_stone_garden_1783607602689.jpg';
import newSpaceTeaImg from './assets/images/nanobanana_tea_lp_1783607615642.jpg';
import machilusVerandaImg from './assets/images/machilus_veranda_view_1783707727725.jpg';
import pureTeaImg from './assets/images/natural_tea_room_1783707697464.jpg';
import machilusGardenImg from './assets/images/machilus_stone_garden_1783707713256.jpg';
import sosowonStoneGarden1 from './assets/images/sosowon_stone_garden_1_1783714505656.jpg';
import sosowonStoneGarden2 from './assets/images/sosowon_stone_garden_2_1783714520303.jpg';

import sosowonHero5V2 from './assets/images/sosowon_hero_5_v2_1785689907980.jpg';
import sosowonPrivacyImg from './assets/images/sosowon_privacy_img_1785689925817.jpg';
import sosowonHeritageImg from './assets/images/sosowon_heritage_img_1785689986278.jpg';
import sosowonAnalogImg from './assets/images/sosowon_analog_img_1785690030210.jpg';

import expOreumImg from './assets/images/sosowon_exp_oreum_1785690083449.jpg';
import expCitrusImg from './assets/images/sosowon_exp_citrus_1785690180161.jpg';
import expPotteryImg from './assets/images/sosowon_exp_pottery_1785690211478.jpg';
import expCoastImg from './assets/images/sosowon_exp_coast_1785690223144.jpg';

// Newly generated nanobanana space images for SELECT SPACE (no people, no text)
import sosowonBedNew1 from './assets/images/sosowon_bed_new1_1790616274516.jpg';
import sosowonBedNew2 from './assets/images/sosowon_bed_new2_1790616286360.jpg';
import sosowonSpaNew1 from './assets/images/sosowon_spa_new1_1790616300565.jpg';
import sosowonSpaNew2 from './assets/images/sosowon_spa_new2_1790616314476.jpg';
import sosowonTeaNew1 from './assets/images/sosowon_tea_new1_1790616326934.jpg';
import sosowonTeaNew2 from './assets/images/sosowon_tea_new2_1790616338275.jpg';
import sosowonGardenNew1 from './assets/images/sosowon_garden_new1_1790616348995.jpg';
import sosowonGardenNew2 from './assets/images/sosowon_garden_new2_1790616364200.jpg';

// User-specified high-res assets & newly generated authentic Jeju garden photos without hanok
import aboutMainImg from './assets/images/nanobanana_about_main_1783604791029.jpg';
import heatedSpaImg from './assets/images/sosowon_heated_spa_1790526738476.jpg';
import sosowonGardenJeju1 from './assets/images/sosowon_garden_jeju1_1790704905724.jpg';
import sosowonGardenJeju2 from './assets/images/sosowon_garden_jeju2_1790704920036.jpg';

export const STAY_INFO = {
  name: 'SOSOWON JEJU',
  nameKo: '소소원 제주',
  tagline: '제주 애월 독채 프라이빗 스테이',
  location: '제주 애월읍 납읍리 고즈넉한 돌담 숲속',
  description: '전통적인 제주 검은 화산석 돌담과 따스한 고재 목조 인테리어가 어우러진 단 한 팀만을 위한 독채 펜션입니다.',
};

export const HERO_SLIDES = [
  { src: extImg, alt: '소소원 외관 전경' },
  { src: bedroomImg, alt: '소소원 정갈한 침실' },
  { src: bathImg, alt: '프라이빗 야외 온수 노천탕' },
  { src: newHeroTeaImg, alt: '아날로그 다도실' },
  { src: sosowonHero5V2, alt: '소소원 독채 사적 정원 조망' },
];

export const INTRO_COMMITMENTS = [
  {
    id: 'c1',
    title: '완벽한 사적 독립',
    description: '높게 쌓아 올려진 거친 검은 화산석 돌담이 외부 시선과 소음을 차단하여 완벽히 안전한 사적 휴식을 누리실 수 있습니다.',
    image: sosowonPrivacyImg,
  },
  {
    id: 'c2',
    title: '로컬 헤리티지의 존중',
    description: '제주의 옛 집터에 자리 잡았던 돌담과 자연 식생, 고목을 훼손하지 않고 공간의 조화로운 오솔길로 보존하였습니다.',
    image: sosowonHeritageImg,
  },
  {
    id: 'c3',
    title: '아날로그 오감 회복',
    description: '복잡한 디지털 기기의 피로감을 잊고 차를 내리는 소리, 바람에 서걱거리는 나뭇잎 소리에 귀 기울이는 여유를 약속합니다.',
    image: sosowonAnalogImg,
  },
];

export interface ExperienceItem {
  id: string;
  category: 'stay' | 'local';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  locationNote?: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'stay-spa',
    category: 'stay',
    categoryLabel: '독채 스테이 힐링',
    title: '제주 화산석 프라이빗 온수 노천 스파',
    subtitle: '',
    description: '돌담에 둘러싸인 야외 노천탕에서 사계절 온수 스파로 피로를 녹여냅니다.',
    image: bathImg,
    highlights: ['24시간 온수 노천탕 무료 가동', '친환경 입욕 에센셜 허브 소금 제공', '이솝 바스 라인 어메니티 완비'],
    locationNote: '소소원 프라이빗 야외 정원',
  },
  {
    id: 'stay-tea',
    category: 'stay',
    categoryLabel: '독채 스테이 힐링',
    title: '제주 유기농 잎차 다도 세션',
    subtitle: '',
    description: '제주 명인 다원의 유기농 잎차와 수제 도예 다기로 깊은 사색을 즐깁니다.',
    image: pureTeaImg,
    highlights: ['제주 유기농 웰컴 잎차 무료', '전통 수제 도자기 다도 세트', '잔잔한 사운드 큐레이션'],
    locationNote: '소소원 전용 다도방',
  },
  {
    id: 'stay-fireplace',
    category: 'stay',
    categoryLabel: '독채 스테이 힐링',
    title: '돌담 정원 밤하늘 별빛 산책 & 빔 시네마',
    subtitle: '',
    description: '돌담 야간 산책로를 거닐고 100인치 빔 프로젝터로 아늑한 시네마를 즐깁니다.',
    image: sosowonStoneGarden1,
    highlights: ['야간 프라이빗 돌담 정원 조명', '100인치 고해상도 빔 프로젝터', '100% 프렌치 린넨 베딩'],
    locationNote: '소소원 침실 & 돌담 정원',
  },
  {
    id: 'local-oreum',
    category: 'local',
    categoryLabel: '주변 제주 여행 코스',
    title: '납읍리 금오름 & 새별오름 노을 산책',
    subtitle: '',
    description: '황금빛 억새 물결과 서쪽 바다로 저무는 환상적인 일몰을 감상합니다.',
    image: expOreumImg,
    highlights: [
      '황금빛 억새 능선 산책로',
      '제주 서쪽 해안 노을 관람 포인트',
      '소소원 게스트 전용 가이드 맵 제공',
      '사계절 탁 트인 제주 자연 파노라마'
    ],
    locationNote: '제주 제주시 한림읍 / 애월읍 인근',
  },
  {
    id: 'local-citrus',
    category: 'local',
    categoryLabel: '주변 제주 여행 코스',
    title: '제주 친환경 유기농 감귤 농장 체험',
    subtitle: '',
    description: '마을 유기농 농가에서 싱그러운 감귤을 수확하고 수제 귤청을 담급니다.',
    image: expCitrusImg,
    highlights: [
      '친환경 무농약 감귤 수확 체험',
      '수제 감귤청 제작 공방 클래스',
      '소소원 게스트 전용 제휴 혜택',
      '감귤밭 포토존 & 로컬 디저트'
    ],
    locationNote: '소소원 도보 5분 납읍리 로컬 농원',
  },
  {
    id: 'local-pottery',
    category: 'local',
    categoryLabel: '주변 제주 여행 코스',
    title: '제주 흙을 빚는 도예 장인 아뜰리에',
    subtitle: '',
    description: '제주 화산토를 빚어 나만의 다도 찻잔과 도자기를 만드는 원데이 클래스입니다.',
    image: expPotteryImg,
    highlights: [
      '제주 화산토 도예 원데이 클래스',
      '나만의 수제 찻잔 및 오브제 제작',
      '완성품 안전 무료 택배 배송',
      '소소원 다도와 어우러지는 다기 빚기'
    ],
    locationNote: '제주 애월읍 봉성리 장인 공방',
  },
  {
    id: 'local-coast',
    category: 'local',
    categoryLabel: '주변 제주 여행 코스',
    title: '애월 한담 해안 산책로 & 돌담 오솔길',
    subtitle: '',
    description: '옥빛 바다와 검은 화산석 바윗길을 거닐며 상쾌한 해풍을 맞이합니다.',
    image: expCoastImg,
    highlights: [
      '에메랄드빛 해안 화산석 산책로',
      '감성 애월 로컬 카페거리 연계',
      '푸른 바다와 석양이 깃든 노을길',
      '한적한 해안선 드라이브 코스'
    ],
    locationNote: '제주 애월읍 한담해변',
  },
];

export const ROOMS: Room[] = [
  {
    id: 'sosowon-villa',
    name: '소소원 독채 전체 대여 (All Spaces Exclusive)',
    subtitle: '하루 오직 단 한 팀만을 위한 프라이빗 독채 풀빌라',
    description: '침실, 야외 온수 노천탕, 다도방, 그리고 고요한 현무암 정원까지 하루 오직 단 한 팀만을 위한 프라이빗 독채 스테이입니다.',
    capacity: '기준 2인 (최대 6인)',
    size: '대지 400㎡ / 실내 80㎡',
    price: 450000,
    images: [extImg, bedroomImg, bathImg, teaImg, gardenImg, extImg2, bedroomImg2, bathImg2, teaImg2, gardenImg2],
    features: [
      '하루 단 한 팀 단독 전체 대여',
      '제주 돌담 야외 온수 스파 노천탕 (무료)',
      '우드 톤 다도 공간 & 웰컴 유기농 차 세트',
      '아늑하고 잔잔한 친환경 사운드 시스템',
      '최고급 리넨 킹 사이즈 헤리티지 베드',
      '친환경 프리미엄 이솝 어메니티 완비'
    ],
  }
];

export interface VillaSpace {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  images: string[];
  highlights: string[];
}

export const VILLA_SPACES: VillaSpace[] = [
  {
    id: 'space-bed',
    name: '아늑한 침실 (Linen Bedroom)',
    subtitle: '',
    description: '전면 통유리창 너머로 정갈한 제주 돌담 정원이 한눈에 들어오는 침실입니다. 100% 프렌치 천연 린넨 패브릭 침구가 편안한 깊은 숙면을 안겨줍니다.',
    images: [bedroomImg, sosowonBedNew1, sosowonBedNew2, bedroomImg2, bedroomImg3],
    highlights: [
      '통유리창 너머 시원하게 펼쳐지는 나만의 돌담 정원 프라이빗 뷰',
      '100% 프렌치 천연 린넨 패브릭 & 최고급 구스다운 킹 사이즈 베딩',
      '고해상도 빔 프로젝터 & 시네마틱 서라운드 무선 오디오',
      '완벽한 깊은 숙면을 돕는 개별 지능형 온습도 제어 시스템'
    ]
  },
  {
    id: 'space-spa',
    name: '야외 온수 노천탕 (Stone Spa)',
    subtitle: '',
    description: '높은 화산석 돌담이 시선을 완벽히 차단해 주는 오롯이 사적인 스파 공간입니다. 추가 비용 없이 24시간 언제나 따스한 온수 노천탕을 자유롭게 이용하실 수 있습니다.',
    images: [heatedSpaImg, sosowonSpaNew1, sosowonSpaNew2, bathImg2, bathImg],
    highlights: [
      '추가 부담 없이 24시간 자율 가동되는 사계절 프라이빗 온수 스파',
      '장인이 제주 현무암을 정성껏 다듬어 제작한 수제 커스텀 석재 욕조',
      '친환경 프리미엄 바스로브 및 이솝 입욕 에센셜 허브 소금 제공',
      '스파 이용 후 실내 바스룸으로 유기적으로 곧바로 연결되는 동선'
    ]
  },
  {
    id: 'space-tea',
    name: '아날로그 다도실 (Tea Room)',
    subtitle: '',
    description: '제주 명인다원의 유기농 잎차와 전통 수제 도예 다기가 마련된 차분한 다도실입니다. 돌담 정원을 바라보며 정갈하게 차를 우려 마실 수 있습니다.',
    images: [teaImg, sosowonTeaNew1, sosowonTeaNew2, newSpaceTeaImg, pureTeaImg],
    highlights: [
      '제주 명인다원 최고급 유기농 잎차 무료 제공',
      '장인이 빚은 전통 수제 도자기 다기 & 발뮤다 티포트',
      '돌담 정원을 마주하는 아날로그 좌식 다도 공간',
      'LP 턴테이블 사운드 큐레이션으로 채워지는 사색'
    ]
  },
  {
    id: 'space-garden',
    name: '돌담 정원 (Stone Garden)',
    subtitle: '',
    description: '까만 화산석 돌담벽이 비바람과 외부 시선을 안온하게 감싸주는 사적인 정원입니다. 계절 야생화 사이를 가볍게 거닐며 제주 바람을 만끽하세요.',
    images: [aboutMainImg, sosowonGardenJeju1, sosowonGardenJeju2, sosowonGardenNew1, sosowonStoneGarden2],
    highlights: [
      '타인의 시선과 소음을 완벽히 차단해 주는 견고한 화산석 돌담벽',
      '제주 고유의 식생과 계절 야생화가 어우러진 프라이빗 오솔길',
      '숲바람을 맞으며 따뜻한 차를 즐기는 야외 원목 티 테라스',
      '은은한 달빛 아래 은은하게 피어나는 정원 야간 경관 조명'
    ]
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'spa',
    name: '제주 돌담 노천탕',
    description: '제주의 까만 화산석 돌담 아래 흐르는 온수 스파',
    iconName: 'Bath',
    image: bathImg,
  },
  {
    id: 'tea',
    name: '유기농 웰컴 다도',
    description: '제주 야생 잎차와 정갈한 흙빛 도예 다기',
    iconName: 'Coffee',
    image: teaImg,
  },
  {
    id: 'music',
    name: '자연 소리 큐레이션',
    description: '제주의 바람과 고요함을 닮은 은은한 음향 큐레이션',
    iconName: 'Music',
    image: bedroomImg,
  },
  {
    id: 'garden',
    name: '현무암 정원',
    description: '돌담과 고사리, 후박나무가 우거진 고요한 산책 정원',
    iconName: 'Trees',
    image: gardenImg,
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    src: extImg,
    alt: '소소원 외관 전경',
    category: 'exterior',
    caption: '전통 돌담과 현대적 건축이 만나 아름다운 소소원 외경',
  },
  {
    id: 'g2',
    src: bedroomImg,
    alt: '소소원 안온한 리넨 침실',
    category: 'interior',
    caption: '아침 햇살이 따사롭게 내려앉는 리넨 침실',
  },
  {
    id: 'g3',
    src: bathImg,
    alt: '후박나무 숲 속의 돌담 노천탕',
    category: 'detail',
    caption: '바람소리와 함께 호흡하는 프라이빗 야외 온수 노천탕',
  },
  {
    id: 'g4',
    src: pureTeaImg,
    alt: '정갈한 다도실',
    category: 'interior',
    caption: '정갈한 차를 나누며 깊은 사색을 즐기는 다도실',
  },
  {
    id: 'g5',
    src: gardenImg,
    alt: '소소원 돌담 정원 이끼',
    category: 'nature',
    caption: '자연 이끼와 후박나무 정원이 어우러진 고요한 숲속 정원',
  },
  {
    id: 'g6',
    src: extImg2,
    alt: '정갈한 석조 디테일',
    category: 'nature',
    caption: '햇살에 아름답게 비치는 고즈넉한 빌라 구조',
  },
  {
    id: 'g7',
    src: teaImg2,
    alt: '도자기 다기 디테일',
    category: 'detail',
    caption: '한 모금 따뜻한 온기에 마음을 비워보는 소소한 다구',
  },
  {
    id: 'g8',
    src: bedroomImg2,
    alt: '리넨 텍스처 클로즈업',
    category: 'detail',
    caption: '천연 유기농 리넨 패브릭의 내추럴하고 뽀송한 텍스처',
  },
  {
    id: 'g9',
    src: galImg9,
    alt: '도자기 다기 정물',
    category: 'detail',
    caption: '정갈한 도자기 다구와 비움의 차실 한 구석',
  },
  {
    id: 'g10',
    src: galImg10,
    alt: '현무암 정원 오솔길',
    category: 'nature',
    caption: '제주 먹돌담과 이끼, 푸른 후박나무 숲을 거니는 길',
  },
  {
    id: 'g11',
    src: galImg11,
    alt: '정갈하게 빛나는 아침 침실',
    category: 'interior',
    caption: '리넨 침구 위로 내려앉는 아침 후박나무 잎사귀 그림자',
  },
  {
    id: 'g12',
    src: galImg12,
    alt: '따뜻한 감성 선반 정물',
    category: 'detail',
    caption: '은은하게 켜진 한지 전등과 여백이 살아 숨 쉬는 공간',
  },
  {
    id: 'g13',
    src: newHeroTeaImg,
    alt: '고재 인테리어 다도 코너',
    category: 'interior',
    caption: '따뜻하고 부드러운 고재 가구와 햇살 어린 다도 코너',
  },
  {
    id: 'g14',
    src: machilusVerandaImg,
    alt: '후박나무와 베란다 전경',
    category: 'exterior',
    caption: '후박나무 돌담과 조화를 이루는 고즈넉한 베란다',
  },
  {
    id: 'g15',
    src: pureTeaImg,
    alt: '정물 다도 공간',
    category: 'detail',
    caption: '은은한 차 향이 감도는 고요하고 정갈한 다도 테이블',
  },
  {
    id: 'g16',
    src: machilusGardenImg,
    alt: '후박나무 돌담 정원',
    category: 'nature',
    caption: '후박나무의 싱그러운 푸르름과 검은 돌담이 조화를 이루는 비움의 야외 정원',
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: '김*우',
    date: '2026.05.12',
    content: '바람 소리와 후박나무 숲길의 속삭임만이 들리는 완벽하게 차단된 독채 공간이었습니다. 노천탕에서 별을 보며 보낸 밤은 평생 잊지 못할 것입니다. 복잡한 일상을 리셋하기에 완벽한 안식처입니다.',
    rating: 5,
    roomName: '소소원 독채 전체 대여'
  },
  {
    id: 'r2',
    author: '이*민',
    date: '2026.04.28',
    content: '정갈한 다도실에서 은은한 자연의 바람 소리를 들으며 직접 차를 우려 마시니 마음의 모든 소음이 씻겨 내려가는 듯했습니다. 공간 구석구석 정성이 닿지 않은 곳이 없더군요.',
    rating: 5,
    roomName: '소소원 독채 전체 대여'
  },
  {
    id: 'r3',
    author: '박*진',
    date: '2026.04.05',
    content: '제주의 거친 현무암 돌담이 정원을 감싸고 있어서 타인의 시선에서 완벽하게 독립되어 온전한 안식을 누렸습니다. 이솝 어메니티와 킹사이즈 침대의 포근함도 최고였습니다.',
    rating: 5,
    roomName: '소소원 독채 전체 대여'
  }
];


