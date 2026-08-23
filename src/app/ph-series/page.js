import ProductPage from '../components/ProductPage';

const product = {
  series: 'PH', headline: <>저소음고압<br />가변용량형 피스톤 펌프</>, englishTitle: 'Low noise, high pressure variable displacement piston pumps',
  lead: '고압 유압 회로에 대응하는 PH 시리즈입니다.\nPH80, PH100, PH130의 세 가지 용적을 선택할 수 있습니다.', image: '/piston-pump-ph-series.png', imageAlt: 'PH 시리즈 저소음고압 가변용량형 피스톤 펌프', visualCaption: 'High pressure\nPiston pump',
  pressureLabel: '사용압력', pressure: '정격 28 / 최고 30 MPa', volume: '80 - 130 cm³/rev', pages: '11', size: '1.8 MB', overviewTitle: <>고압 환경을 위한<br />안정적인 유압 펌프</>, overview: 'PH 시리즈는 고압 조건에 대응하는 저소음 가변용량형 피스톤 펌프입니다. 적용 장비의 압력·유량·회로 조건을 바탕으로 적합한 모델과 제어 방식을 검토합니다.',
  features: [['01', '고압 대응', '정격 28 MPa, 최고 30 MPa 조건에 대응합니다.'], ['02', '저소음 설계', '장비 환경의 소음 부담을 낮추는 설계입니다.'], ['03', '모델 선택', 'PH80·PH100·PH130의 용적을 선택할 수 있습니다.']], models: [['PH80', '80 cm³/rev'], ['PH100', '100 cm³/rev'], ['PH130', '130 cm³/rev']],
  sideNote: '정격 28 MPa / 최고 30 MPa\n최고 회전수 1,800 min⁻¹', catalog: '/catalogs/ph-series-piston-pumps.pdf', catalogCopy: 'PH80, PH100, PH130의 형식, 사용상 주의사항, 모델별 사양을 11페이지로 확인할 수 있습니다.', relatedHref: '/', relatedLabel: '저소음 P**V 시리즈 보기',
};

export default function PhSeriesPage() { return <ProductPage product={product} />; }
