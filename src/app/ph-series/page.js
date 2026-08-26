import ProductPage from "../components/ProductPage";

const product = {
  series: "PH",
  headline: (
    <>
      저소음고압
      <br />
      가변용량형 피스톤 펌프
    </>
  ),
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
    title: "PH 시리즈 표준 사양",
    columns: [
      { key: "model", label: "형식" },
      { key: "displacement", label: "최대 이론용적\ncm³/rev" },
      { key: "pressure", label: "사용압력\nMPa" },
      { key: "maximumSpeed", label: "최고 회전수\nmin⁻¹" },
      { key: "minimumSpeed", label: "최저 회전수\nmin⁻¹" },
      { key: "weight", label: "무게\nkg" },
    ],
    rows: [
      ["PH80", "80", "정격 28 / 간헐 30", "1,800", "600", "51"],
      ["PH100", "100", "정격 28 / 간헐 30", "1,800", "600", "70"],
      ["PH130", "130", "정격 28 / 간헐 30", "1,800", "600", "95"],
    ].map(([model, displacement, pressure, maximumSpeed, minimumSpeed, weight]) => ({
      model,
      displacement,
      pressure,
      maximumSpeed,
      minimumSpeed,
      weight,
    })),
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

export default function PhSeriesPage() {
  return <ProductPage product={product} />;
}
