const pistonColumns = [
  { key: "model", label: "형식" },
  { key: "displacement", label: "최대 이론용적\ncm³/rev" },
  { key: "pressure", label: "최고 사용압력\nMPa" },
  { key: "maximumSpeed", label: "최고 회전수\nmin⁻¹" },
  { key: "minimumSpeed", label: "최저 회전수\nmin⁻¹" },
  { key: "weight", label: "무게\nkg" },
];

const toRows = (rows) =>
  rows.map(
    ([model, displacement, pressure, maximumSpeed, minimumSpeed, weight]) => ({
      model,
      displacement,
      pressure,
      maximumSpeed,
      minimumSpeed,
      weight,
    }),
  );

const pvSeries = {
  slug: "pv-series",
  title: "저소음 가변용량형 피스톤 펌프",
  series: "P**V",
  category: "PISTON PUMP",
  koreanCategory: "피스톤 펌프",
  headline: "저소음 가변용량형\n피스톤 펌프",
  englishTitle: "Low noise variable displacement piston pumps",
  lead: "P**V 시리즈의 제품별 기술 자료와 기본 사양을 빠르게 확인할 수 있습니다.",
  image: "/piston-pump-pv-series.png",
  imageAlt: "P**V 시리즈 저소음 가변용량형 피스톤 펌프",
  visualCaption: "Variable displacement\nPiston pump",
  technicalProductImage: "/product-details/pv-product.png",
  structureImage: "/product-details/pv-section.png",
  symbolImage: "/product-details/pv-symbol.png",
  technicalTitle: "정밀 제어와 저소음을 함께 고려한 설계",
  technicalDescription:
    "전기다이렉트제어를 시작으로, 압력보상제어, 로드센싱 제어 등 응답성, 안정성이 탁월한 다양한 기능을 갖추고 저소음, 고성능, 고신뢰성을 실현한 새로운 시리즈의 피스톤 펌프입니다. 보다 복잡한 시스템에 대응하는 더블 펌프화도 손쉽게 행할 수 있어 주요 기기의 성에네르기화 고속화, 저소음화 등의 다양한 요구에 응할 수 있습니다.",
  highlights: [
    { label: "최고 사용압력", value: "21 MPa" },
    { label: "최고 회전수", value: "1,800 min⁻¹" },
    { label: "최대 이론용적", value: "16 – 130 cm³/rev" },
  ],
  resources: [
    {
      key: "catalog",
      label: "카탈로그",
      file: "/catalogs/pv-series-piston-pumps.pdf",
      action: "preview",
      available: true,
    },
    { key: "outline", label: "외관도", action: "preview", available: false },
    {
      key: "structure",
      label: "구조도",
      file: "/product-details/pv-section.png",
      action: "preview",
      available: true,
    },
    { key: "manual", label: "취급설명서", action: "preview", available: false },
    { key: "2d", label: "2D CAD", action: "download", available: false },
    { key: "3d", label: "3D CAD", action: "download", available: false },
  ],
  specification: {
    title: "P**V 시리즈 표준 사양",
    columns: pistonColumns,
    rows: toRows([
      ["P16V", "16", "21", "1,800", "600", "15"],
      ["P21V", "21", "21", "1,800", "600", "23"],
      ["P31V", "31", "21", "1,800", "600", "23"],
      ["P40V", "40", "21", "1,800", "600", "37"],
      ["P70V", "70", "21", "1,800", "600", "63"],
      ["P100V", "100", "21", "1,800", "600", "91"],
      ["P130V", "130", "21", "1,800", "600", "112"],
    ]),
    notes: [
      "무게는 C형(압력보상제어) 밸브 적용 시의 수치입니다.",
      "물·글리콜계 작동유 적용은 별도 검토가 필요합니다.",
    ],
  },
  supplementalSpecification: {
    title: "내장형 정용량형 펌프 사양",
    columns: [
      { key: "model", label: "용량기호" },
      { key: "displacement", label: "이론용적\ncm³/rev" },
      { key: "pressure", label: "최고 사용압력\nMPa" },
    ],
    rows: [
      ["2", "6.3", "16"],
      ["3", "9.4", "16"],
      ["4", "12.5", "16"],
      ["5", "15.6", "16"],
    ].map(([model, displacement, pressure]) => ({
      model,
      displacement,
      pressure,
    })),
  },
};

const phSeries = {
  slug: "ph-series",
  title: "저소음고압 가변용량형 피스톤 펌프",
  series: "PH",
  category: "PISTON PUMP",
  koreanCategory: "피스톤 펌프",
  headline: "저소음고압\n가변용량형 피스톤 펌프",
  englishTitle: "Low noise, high pressure variable displacement piston pumps",
  lead: "PH 시리즈의 제품별 기술 자료와 기본 사양을 빠르게 확인할 수 있습니다.",
  image: "/product-details/ph-product.png",
  imageAlt: "PH 시리즈 저소음고압 가변용량형 피스톤 펌프",
  heroImageClass: "object-contain",
  visualCaption: "High pressure\nPiston pump",
  technicalProductImage: "/product-details/ph-product.png",
  structureImage: "/product-details/ph-section.png",
  symbolImage: "/product-details/ph-symbol.png",
  technicalTitle: "저소음과 고압 운전을 위한 PH 시리즈",
  technicalDescription:
    "저소음의 피스톤 펌프로 높은 평가를 받고 있는 PV시리즈를 28MPa 사양으로 저소음, 콤팩트화 하였습니다.",
  highlights: [
    { label: "사용압력", value: "정격 28 / 최고 30 MPa" },
    { label: "최고 회전수", value: "1,800 min⁻¹" },
    { label: "최대 이론용적", value: "80 – 130 cm³/rev" },
  ],
  resources: [
    {
      key: "catalog",
      label: "카탈로그",
      file: "/catalogs/ph-series-piston-pumps.pdf",
      action: "preview",
      available: true,
    },
    { key: "outline", label: "외관도", action: "preview", available: false },
    {
      key: "structure",
      label: "구조도",
      file: "/product-details/ph-section.png",
      action: "preview",
      available: true,
    },
    { key: "manual", label: "취급설명서", action: "preview", available: false },
    { key: "2d", label: "2D CAD", action: "download", available: false },
    { key: "3d", label: "3D CAD", action: "download", available: false },
  ],
  specification: {
    title: "PH 시리즈 표준 사양",
    columns: pistonColumns.map((column) =>
      column.key === "pressure" ? { ...column, label: "사용압력\nMPa" } : column,
    ),
    rows: toRows([
      ["PH80", "80", "정격 28 / 간헐 30", "1,800", "600", "51"],
      ["PH100", "100", "정격 28 / 간헐 30", "1,800", "600", "70"],
      ["PH130", "130", "정격 28 / 간헐 30", "1,800", "600", "95"],
    ]),
    notes: [
      "무게는 CH형(압력보상제어)의 경우의 수치입니다.",
      "간헐압력은 운전 사이클의 10% 이하, 최대 6초간 적용 가능한 압력입니다.",
      "전기 다이렉트 제어 EDHS형의 정격압력은 21 MPa입니다.",
      "물·글리콜계 작동유 적용은 별도 검토가 필요합니다.",
    ],
  },
  modelCode: {
    example: "PH100-MS(*)(F)YR-20-CH-(D)-10-(S38)",
    groups: [
      [["1", "PH100"]],
      [
        ["2", "M"],
        ["3", "S"],
        ["4", "(*)"],
        ["5", "(F)"],
        ["6", "Y"],
        ["7", "R"],
      ],
      [["8", "20"]],
      [["9", "CH"]],
      [["10", "(D)"]],
      [["11", "10"]],
      [["12", "(S38)"]],
    ],
    items: [
      ["1", "펌프 시리즈", "PH 시리즈 사판식 가변용량형 피스톤 펌프", "PH80 · PH100 · PH130"],
      ["2", "포트 사양", "M : 표준"],
      ["3·4", "더블 펌프화 코드", "S : 싱글 펌프", "더블 펌프화는 기술 문의가 필요합니다."],
      ["5", "펌프 취부방식", "무기호 : 플랜지 취부형", "F : FOOT 취부형"],
      ["6", "축단형상", "X : SAE 사각키 부착 샤프트", "Y : SAE 사각키 부착 롱샤프트"],
      ["7", "축 회전방향", "R : 우회전(시계방향)", "L : 좌회전(반시계방향) · 축측에서 볼 때"],
      ["8", "펌프 본체 디자인 번호", "제품 설계 버전을 나타내는 번호"],
      ["9", "펌프 제어방식", "CH : 압력보상제어\nCGH : 원격압력보상제어\nCVH : 로드센싱제어", "TL : 토오크 리미트 제어(저토오크)\nTH : 토오크 리미트 제어(고토오크)\nEDHS : 전기 다이렉트 제어(이론용적 조정기능)"],
      ["10", "최대 이론용적 조정기능", "무기호 : 없음", "D : 있음"],
      ["11", "펌프 제어밸브 디자인 번호", "제어밸브 설계 버전을 나타내는 번호"],
      ["12", "관리기호", "S38 : TL / TH형에 적용", "무기호 : 그 외"],
    ],
  },
};

export const pistonSeriesProducts = [pvSeries, phSeries];
