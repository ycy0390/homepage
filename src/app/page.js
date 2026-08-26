import ProductPage from "./components/ProductPage";

const product = {
  series: "P**V",
  headline: (
    <>
      저소음 가변용량형
      <br />
      피스톤 펌프
    </>
  ),
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
    "전기 다이렉트 제어를 시작으로 압력보상제어, 로드센싱 제어 등 다양한 제어 방식을 적용할 수 있습니다. 저소음 피스톤 펌프 구조를 바탕으로 고성능·저소음 운전이 필요한 유압 시스템에 대응합니다.",
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
    {
      key: "manual",
      label: "취급설명서",
      action: "preview",
      available: false,
    },
    { key: "2d", label: "2D CAD", action: "download", available: false },
    { key: "3d", label: "3D CAD", action: "download", available: false },
  ],
  specification: {
    title: "P**V 시리즈 표준 사양",
    columns: [
      { key: "model", label: "형식" },
      { key: "displacement", label: "최대 이론용적\ncm³/rev" },
      { key: "pressure", label: "최고 사용압력\nMPa" },
      { key: "maximumSpeed", label: "최고 회전수\nmin⁻¹" },
      { key: "minimumSpeed", label: "최저 회전수\nmin⁻¹" },
      { key: "weight", label: "무게\nkg" },
    ],
    rows: [
      ["P16V", "16", "21", "1,800", "600", "15"],
      ["P21V", "21", "21", "1,800", "600", "23"],
      ["P31V", "31", "21", "1,800", "600", "23"],
      ["P40V", "40", "21", "1,800", "600", "37"],
      ["P70V", "70", "21", "1,800", "600", "63"],
      ["P100V", "100", "21", "1,800", "600", "91"],
      ["P130V", "130", "21", "1,800", "600", "112"],
    ].map(([model, displacement, pressure, maximumSpeed, minimumSpeed, weight]) => ({
      model,
      displacement,
      pressure,
      maximumSpeed,
      minimumSpeed,
      weight,
    })),
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

export default function Home() {
  return <ProductPage product={product} />;
}
