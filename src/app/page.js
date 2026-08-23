import ProductPage from './components/ProductPage';

const product = {
  series: 'P**V', headline: <>저소음 가변용량형<br />피스톤 펌프</>, englishTitle: 'Low noise variable displacement piston pumps',
  lead: '전기 다이렉트 제어, 압력보상 제어, 로드센싱 제어 등\n다양한 제어 방식을 지원하는 P**V 시리즈입니다.', image: '/piston-pump-pv-series.png', imageAlt: 'P**V 시리즈 저소음 가변용량형 피스톤 펌프', visualCaption: 'Variable displacement\nPiston pump',
  pressureLabel: '최고 사용압력', pressure: '21 MPa', volume: '16 - 130 cm³/rev', pages: '20', size: '3.3 MB', overviewTitle: <>낮은 소음과 정밀한<br />제어를 위한 유압 펌프</>,
  overview: 'P**V 시리즈는 고성능·고신뢰성을 갖춘 가변용량형 피스톤 펌프입니다. 복합적인 유압 시스템에 대응할 수 있도록 다양한 제어 기능을 구성할 수 있습니다.',
  features: [['01', '저소음 설계', '저소음 운전이 필요한 장비 환경에 적합합니다.'], ['02', '다양한 제어', '전기 다이렉트·압력보상·로드센싱 제어를 지원합니다.'], ['03', '폭넓은 용적', '16부터 130 cm³/rev까지 모델을 선택할 수 있습니다.']],
  models: [['P16V', '16 cm³/rev'], ['P21V', '21 cm³/rev'], ['P31V', '31 cm³/rev'], ['P40V', '40 cm³/rev'], ['P70V', '70 cm³/rev'], ['P100V', '100 cm³/rev'], ['P130V', '130 cm³/rev']],
  sideNote: '최대 사용압력 21 MPa\n최고 회전수 1,800 min⁻¹', catalog: '/catalogs/pv-series-piston-pumps.pdf', catalogCopy: 'P**V 시리즈의 제품 선정표, 사용상 주의사항, 모델 형식 및 상세 사양만 20페이지로 정리했습니다.', relatedHref: '/ph-series', relatedLabel: '저소음고압 PH 시리즈 보기',
};

export default function Home() { return <ProductPage product={product} />; }
