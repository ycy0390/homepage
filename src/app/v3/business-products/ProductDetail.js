import { V3Footer, V3Header } from "../components";
import { BusinessSide, SubHero } from "./BusinessShell";

// V3 피스톤 펌프 상세 화면입니다. PH와 P**V의 공통 레이아웃 안에 시리즈별 기술 섹션을 선택해 넣습니다.
// 표에 쓰이는 모델·형식 코드 데이터는 화면 컴포넌트에서 가까운 위치에 두어 원본 카탈로그 대조를 쉽게 합니다.
const pvModels = [
  ["P16V", "16", "15"],
  ["P21V", "21", "23"],
  ["P31V", "31", "23"],
  ["P40V", "40", "37"],
  ["P70V", "70", "63"],
  ["P100V", "100", "91"],
  ["P130V", "130", "112"],
];

const phModels = [
  ["PH80", "80", "51"],
  ["PH100", "100", "70"],
  ["PH130", "130", "95"],
];

const phModelCodeGroups = [
  [["1", "PH100"]],
  [
    ["2", "M"],
    ["3", "S"],
    ["4", "(*)"],
  ],
  [
    ["5", "(F)"],
    ["6", "Y"],
    ["7", "R"],
  ],
  [["8", "20"]],
  [["9", "CH"]],
  [["10", "(D)"]],
  [["11", "10"]],
  [["12", "(S38)"]],
];

const phCodeItems = [
  [
    "1",
    "펌프 시리즈",
    "PH 시리즈 사판식 가변용량형 피스톤 펌프",
    "PH80 · PH100 · PH130",
  ],
  ["2", "포트 사양", "M : 표준", ""],
  [
    "3·4",
    "더블 펌프화 코드",
    "S : 싱글 펌프",
    "더블 펌프화는 기술 문의가 필요합니다.",
  ],
  ["5", "펌프 취부방식", "무기호 : 플랜지 취부형", "F : FOOT 취부형"],
  [
    "6",
    "축단형상",
    "X : SAE 사각키 부착 샤프트",
    "Y : SAE 사각키 부착 롱샤프트",
  ],
  [
    "7",
    "축 회전방향",
    "R : 우회전(시계방향)",
    "L : 좌회전(반시계방향) · 축측에서 볼 때",
  ],
  ["8", "펌프 본체 디자인 번호", "제품 설계 버전을 나타내는 번호", ""],
  [
    "9",
    "펌프 제어방식",
    "CH 압력보상 · CGH 원격압력보상 · CVH 로드센싱",
    "TL/TH 토오크 리미트 · EDHS 전기 다이렉트 제어",
  ],
  ["10", "최대 이론용적 조정기능", "무기호 : 없음", "D : 있음"],
  ["11", "펌프 제어밸브 디자인 번호", "제어밸브 설계 버전을 나타내는 번호", ""],
  ["12", "관리기호", "S38 : TL / TH형에 적용", "무기호 : 그 외"],
];

// 두 사양표에서 반복되는 테이블 스타일을 상수로 관리합니다.
const tableClass =
  "w-full min-w-[680px] border-collapse text-center text-[13px] text-[#344750]";
const thClass =
  "border border-[#cfdade] bg-[#eef6f8] px-3 py-3 font-extrabold leading-[1.35] text-[#33505e]";
const tdClass = "border border-[#d7e0e3] px-3 py-[11px] font-semibold";

// 제품·단면도·유압 심벌에 동일한 이미지 프레임을 적용합니다.
function TechnicalFigure({ src, alt, label, className = "" }) {
  return (
    <figure
      className={`m-0 flex min-h-[260px] min-w-0 flex-col border border-[#e0e7e9] bg-[#f7fafb] ${className}`}
    >
      <div className="grid flex-1 place-items-center p-[clamp(20px,3vw,34px)]">
        <img
          className="max-h-[300px] w-full object-contain mix-blend-multiply"
          src={src}
          alt={alt}
        />
      </div>
      <figcaption className="border-t border-[#e0e7e9] bg-white px-5 py-3 text-[11px] font-extrabold tracking-[.08em] text-[#6f7e85]">
        {label}
      </figcaption>
    </figure>
  );
}

// 기술 섹션의 영문 구분자, 제목, 설명을 동일한 형식으로 출력합니다.
function SectionTitle({ eyebrow, title, description }) {
  return (
    <header className="mb-8 grid grid-cols-[220px_1fr] gap-8 max-[760px]:grid-cols-1 max-[760px]:gap-3">
      <p className="m-0 text-[10px] font-extrabold tracking-[.14em] text-[#129fbe]">
        {eyebrow}
      </p>
      <div>
        <h3 className="m-0 text-[clamp(27px,3.2vw,40px)] leading-[1.18] tracking-[-.07em]">
          {title}
        </h3>
        {description && (
          <p className="mb-0 mt-4 max-w-[620px] break-keep text-sm leading-[1.75] text-[#6e7c83]">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}

// P**V에만 필요한 구조 설명과 일반 사양표를 렌더링합니다.
function PvTechnicalDetails() {
  return (
    <section className="col-span-full mt-20 min-w-0 border-t border-[#cbd6da] pt-16 max-[760px]:mt-14 max-[760px]:pt-11">
      <SectionTitle
        eyebrow="STRUCTURE & SPECIFICATIONS"
        title="P**V 시리즈 구조와 주요 사양"
        description="카탈로그의 설명과 사양표를 웹 화면에서 바로 확인할 수 있도록 구성했습니다. 제품 사진과 단면도는 원본 기술 자료를 사용했습니다."
      />
      <div className="grid grid-cols-12 gap-5">
        <TechnicalFigure
          className="col-span-4 max-[760px]:col-span-12"
          src="/product-details/pv-product.png"
          alt="P**V 시리즈 피스톤 펌프 제품"
          label="P**V SERIES / PRODUCT"
        />
        <TechnicalFigure
          className="col-span-8 max-[760px]:col-span-12"
          src="/product-details/pv-section.png"
          alt="P**V 시리즈 피스톤 펌프 단면도"
          label="INTERNAL STRUCTURE / SECTION VIEW"
        />
        <div className="col-span-8 flex flex-col justify-center bg-[#123a52] px-[clamp(28px,5vw,65px)] py-[clamp(36px,5vw,58px)] text-white max-[760px]:col-span-12">
          <p className="m-0 text-[10px] font-extrabold tracking-[.14em] text-[#7fd5e7]">
            PRODUCT OVERVIEW
          </p>
          <h4 className="mb-4 mt-3 text-[25px] tracking-[-.055em]">
            정밀 제어와 저소음을 함께 고려한 설계
          </h4>
          <p className="m-0 break-keep text-[15px] leading-[1.9] text-[#d3e3e9]">
            전기 다이렉트 제어를 시작으로 압력보상 제어, 로드센싱 제어 등
            응답성과 안정성이 뛰어난 다양한 기능을 갖춘 피스톤 펌프입니다.
            저소음·고성능·고신뢰성을 바탕으로 복잡한 시스템과 더블 펌프 구성에
            대응하며, 장비의 에너지 절감과 고속화 요구에도 적용할 수 있습니다.
          </p>
        </div>
        <TechnicalFigure
          className="col-span-4 max-[760px]:col-span-12"
          src="/product-details/pv-symbol.png"
          alt="P**V 시리즈 유압 심벌"
          label="HYDRAULIC SYMBOL"
        />
      </div>
      <PvSpecification />
    </section>
  );
}

// 모델별 값과 공통 값을 rowSpan으로 묶어 P**V 사양을 표기합니다.
function PvSpecification() {
  return (
    <section className="mt-16 min-w-0">
      <SpecHeader />
      <div className="grid grid-cols-[1.2fr_.8fr] gap-7 max-[900px]:grid-cols-1">
        <div className="overflow-x-auto">
          <table className={tableClass}>
            <caption className="sr-only">P**V 시리즈 표준 사양</caption>
            <thead>
              <tr>
                <th className={thClass} scope="col">
                  형식
                </th>
                <th className={thClass} scope="col">
                  최대 이론용적
                  <br />
                  <small>cm³/rev</small>
                </th>
                <th className={thClass} scope="col">
                  최고 사용압력
                  <br />
                  <small>MPa</small>
                </th>
                <th className={thClass} scope="col">
                  최고 회전수
                  <br />
                  <small>min⁻¹</small>
                </th>
                <th className={thClass} scope="col">
                  최저 회전수
                  <br />
                  <small>min⁻¹</small>
                </th>
                <th className={thClass} scope="col">
                  무게
                  <br />
                  <small>kg</small>
                </th>
              </tr>
            </thead>
            <tbody>
              {pvModels.map(([model, displacement, weight], index) => (
                <tr key={model}>
                  <th
                    className={`${tdClass} bg-white text-[#1163a2]`}
                    scope="row"
                  >
                    {model}
                  </th>
                  <td className={tdClass}>{displacement}</td>
                  {index === 0 && (
                    <>
                      <td className={tdClass} rowSpan={pvModels.length}>
                        21
                      </td>
                      <td className={tdClass} rowSpan={pvModels.length}>
                        1,800
                      </td>
                      <td className={tdClass} rowSpan={pvModels.length}>
                        600
                      </td>
                    </>
                  )}
                  <td className={tdClass}>{weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="mb-0 mt-4 grid gap-2 pl-5 text-xs leading-[1.65] text-[#6d7b82]">
            <li>무게는 C형(압력보상제어) 밸브의 수치입니다.</li>
            <li>
              물·글리콜계 작동유를 사용하는 경우에는 적용 사양을 별도로 문의해
              주십시오.
            </li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <h5 className="mb-4 mt-0 text-sm tracking-[-.03em] text-[#40545f]">
            내장형 정용량형 펌프의 사양
          </h5>
          <table className={`${tableClass} min-w-[430px]`}>
            <caption className="sr-only">
              P**V 내장형 정용량형 펌프 사양
            </caption>
            <thead>
              <tr>
                <th className={thClass} scope="col">
                  용량기호
                </th>
                <th className={thClass} scope="col">
                  이론용적
                  <br />
                  <small>cm³/rev</small>
                </th>
                <th className={thClass} scope="col">
                  최고 사용압력
                  <br />
                  <small>MPa</small>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2", "6.3"],
                ["3", "9.4"],
                ["4", "12.5"],
                ["5", "15.6"],
              ].map(([code, displacement], index) => (
                <tr key={code}>
                  <th
                    className={`${tdClass} bg-white text-[#1163a2]`}
                    scope="row"
                  >
                    {code}
                  </th>
                  <td className={tdClass}>{displacement}</td>
                  {index === 0 && (
                    <td className={tdClass} rowSpan="4">
                      16
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// PH·P**V 사양표에서 재사용하는 제목과 단위 안내입니다.
function SpecHeader() {
  return (
    <div className="mb-6 flex items-end justify-between gap-5 border-b-[3px] border-[#129fbe] pb-4 max-[760px]:items-start max-[760px]:flex-col">
      <div>
        <p className="m-0 text-[10px] font-extrabold tracking-[.14em] text-[#129fbe]">
          STANDARD SPECIFICATION
        </p>
        <h4 className="mb-0 mt-2 text-[28px] tracking-[-.06em]">사양</h4>
      </div>
      <span className="text-xs text-[#718087]">
        단위: cm³/rev · MPa · min⁻¹ · kg
      </span>
    </div>
  );
}

// PH에만 필요한 고압 사양·형식 코드 안내를 포함한 기술 섹션입니다.
function PhTechnicalDetails() {
  return (
    <section className="col-span-full mt-20 min-w-0 border-t border-[#cbd6da] pt-16 max-[760px]:mt-14 max-[760px]:pt-11">
      <SectionTitle
        eyebrow="STRUCTURE, MODEL CODE & SPECIFICATIONS"
        title="PH 시리즈 형식과 주요 사양"
        description="제품 구조, 형식 기호의 의미와 모델별 사양을 카탈로그를 열지 않고도 확인할 수 있습니다."
      />
      <div className="grid grid-cols-12 gap-5">
        <TechnicalFigure
          className="col-span-4 max-[760px]:col-span-12"
          src="/product-details/ph-product.png"
          alt="PH 시리즈 피스톤 펌프 제품"
          label="PH SERIES / PRODUCT"
        />
        <TechnicalFigure
          className="col-span-8 max-[760px]:col-span-12"
          src="/product-details/ph-section.png"
          alt="PH 시리즈 피스톤 펌프 단면도"
          label="INTERNAL STRUCTURE / SECTION VIEW"
        />
        <div className="col-span-8 flex flex-col justify-center bg-[#123a52] px-[clamp(28px,5vw,65px)] py-[clamp(36px,5vw,58px)] text-white max-[760px]:col-span-12">
          <p className="m-0 text-[10px] font-extrabold tracking-[.14em] text-[#7fd5e7]">
            HIGH PRESSURE SERIES
          </p>
          <h4 className="mb-4 mt-3 text-[25px] tracking-[-.055em]">
            저소음과 고압 운전을 위한 PH 시리즈
          </h4>
          <p className="m-0 break-keep text-[15px] leading-[1.9] text-[#d3e3e9]">
            PH80·PH100·PH130으로 구성되며 정격 28 MPa, 간헐 30 MPa의 고압 회로에
            대응합니다. 압력보상, 원격압력보상, 로드센싱, 토오크 리미트와 전기
            다이렉트 제어 등 적용 조건에 맞춘 제어 방식을 선택할 수 있습니다.
          </p>
        </div>
        <TechnicalFigure
          className="col-span-4 max-[760px]:col-span-12"
          src="/product-details/ph-symbol.png"
          alt="PH 시리즈 유압 심벌"
          label="HYDRAULIC SYMBOL"
        />
      </div>
      <PhModelCode />
      <PhSpecification />
    </section>
  );
}

// PH100 예시의 번호와 선택 항목 설명을 대응시켜 형식 읽는 법을 제공합니다.
function PhModelCode() {
  return (
    <section className="mt-16 min-w-0">
      <div className="bg-[#129fbe] px-5 py-3 text-sm font-extrabold tracking-[.08em] text-white">
        형식 / MODEL CODE
      </div>
      <div className="min-w-0 border-x border-b border-[#d9e2e5] bg-[#f8fbfc] px-[clamp(20px,4vw,42px)] py-8">
        <div
          className="flex flex-wrap items-start gap-y-4 font-mono text-[clamp(19px,2.6vw,31px)] tracking-[.015em] text-[#1d3039] max-[760px]:text-[18px]"
          aria-label="PH100-MS(*)-(F)YR-20-CH-(D)-10-(S38) 형식 기호 번호 안내"
        >
          {phModelCodeGroups.map((group, groupIndex) => (
            <span className="inline-flex shrink-0 items-start" key={groupIndex}>
              {group.map(([number, code]) => (
                <span
                  className="inline-flex flex-col items-center"
                  key={number}
                >
                  <span className="leading-none">{code}</span>
                  <b className="mt-2 grid h-5 min-w-5 place-items-center bg-[#123a52] px-1 font-sans text-[10px] leading-none text-white">
                    {number}
                  </b>
                </span>
              ))}
              {groupIndex < phModelCodeGroups.length - 1 && (
                <span className="px-1 leading-none" aria-hidden="true">
                  -
                </span>
              )}
            </span>
          ))}
        </div>
        <p className="mb-0 mt-4 text-xs text-[#74838a]">
          위 번호는 아래 선택 항목과 대응합니다. 실제 형식 선정은 운전 조건에
          따라 기술 검토가 필요합니다.
        </p>
      </div>
      <div className="grid grid-cols-2 border-x border-[#d9e2e5] max-[760px]:grid-cols-1">
        {phCodeItems.map(([number, title, primary, secondary]) => (
          <article
            className="grid min-h-[126px] grid-cols-[44px_1fr] gap-4 border-b border-[#d9e2e5] p-5 odd:border-r max-[760px]:odd:border-r-0"
            key={number}
          >
            <span className="grid h-8 min-w-8 place-items-center self-start bg-[#123a52] px-1 text-[11px] font-extrabold text-white">
              {number}
            </span>
            <div>
              <h5 className="m-0 text-sm text-[#2c424d]">{title}</h5>
              <p className="mb-0 mt-2 text-[13px] font-semibold leading-[1.65] text-[#52656f]">
                {primary}
              </p>
              {secondary && (
                <p className="mb-0 mt-1 text-xs leading-[1.6] text-[#7b888e]">
                  {secondary}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// 데스크톱 표와 모바일 카드에 동일한 PH 모델 데이터를 반복 사용합니다.
function PhSpecification() {
  return (
    <section className="mt-16 min-w-0">
      <SpecHeader />
      <div className="min-w-0 max-w-full overflow-x-auto max-[760px]:hidden">
        <table className={tableClass}>
          <caption className="sr-only">PH 시리즈 표준 사양</caption>
          <thead>
            <tr>
              <th className={thClass} scope="col">
                형식
              </th>
              <th className={thClass} scope="col">
                최대 이론용적
                <br />
                <small>cm³/rev</small>
              </th>
              <th className={thClass} scope="col">
                사용압력
                <br />
                <small>MPa</small>
              </th>
              <th className={thClass} scope="col">
                최고 회전수
                <br />
                <small>min⁻¹</small>
              </th>
              <th className={thClass} scope="col">
                최저 회전수
                <br />
                <small>min⁻¹</small>
              </th>
              <th className={thClass} scope="col">
                무게
                <br />
                <small>kg</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {phModels.map(([model, displacement, weight], index) => (
              <tr key={model}>
                <th
                  className={`${tdClass} bg-white text-[#1163a2]`}
                  scope="row"
                >
                  {model}
                </th>
                <td className={tdClass}>{displacement}</td>
                {index === 0 && (
                  <>
                    <td className={tdClass} rowSpan={phModels.length}>
                      정격 28
                      <br />
                      간헐 30
                    </td>
                    <td className={tdClass} rowSpan={phModels.length}>
                      1,800
                    </td>
                    <td className={tdClass} rowSpan={phModels.length}>
                      600
                    </td>
                  </>
                )}
                <td className={tdClass}>{weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="hidden gap-3 max-[760px]:grid"
        aria-label="PH 시리즈 모바일 사양"
      >
        {phModels.map(([model, displacement, weight]) => (
          <article
            className="overflow-hidden border border-[#d7e0e3] bg-white"
            key={model}
          >
            <header className="flex items-center justify-between bg-[#eef6f8] px-4 py-3">
              <strong className="text-[15px] text-[#1163a2]">{model}</strong>
              <span className="text-xs font-bold text-[#536a75]">
                {displacement} cm³/rev
              </span>
            </header>
            <dl className="m-0 grid grid-cols-2 text-xs">
              {[
                ["사용압력", "정격 28 / 간헐 30 MPa"],
                ["최고 회전수", "1,800 min⁻¹"],
                ["최저 회전수", "600 min⁻¹"],
                ["무게", `${weight} kg`],
              ].map(([label, value]) => (
                <div
                  className="border-t border-[#e1e7e9] p-3 even:border-l"
                  key={label}
                >
                  <dt className="mb-1 text-[11px] text-[#7a8990]">{label}</dt>
                  <dd className="m-0 break-keep font-bold leading-[1.45] text-[#344750]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <ul className="mb-0 mt-5 grid gap-2 pl-5 text-xs leading-[1.65] text-[#6d7b82]">
        <li>
          간헐압력은 운전 사이클의 10% 이하, 최대 6초간 적용 가능한 압력입니다.
          정격 사용압력을 넘는 조건은 별도 검토가 필요합니다.
        </li>
        <li>
          전기 다이렉트 제어 EDHS형의 정격압력은 21 MPa이며 안전밸브 설정으로
          규정됩니다.
        </li>
        <li>
          무게는 대형 압력보상제어 밸브 적용 시의 수치입니다. 물·글리콜계
          작동유는 별도 문의해 주십시오.
        </li>
      </ul>
    </section>
  );
}

// 슬러그로 시리즈 전용 기술 섹션을 분기합니다. 새 시리즈 추가 시 이 지점을 확장합니다.
function ProductTechnicalDetails({ pump }) {
  return pump.slug === "pv-series" ? (
    <PvTechnicalDetails />
  ) : (
    <PhTechnicalDetails />
  );
}

// 상단 개요·기술 상세·카탈로그를 조합하는 V3 제품 상세의 공용 진입점입니다.
export default function ProductDetail({ pump }) {
  return (
    <div className="min-h-screen bg-white font-[Arial,'Noto_Sans_KR',sans-serif] tracking-[-.035em] text-[#262d32]">
      <V3Header active="business" />
      <main>
        <SubHero trail="유압기기 › 피스톤 펌프" />
        <section className="mx-auto grid max-w-[1180px] grid-cols-[220px_1fr] gap-[clamp(45px,8vw,125px)] pb-[130px] pt-[86px] max-[760px]:grid-cols-1 max-[760px]:gap-[45px] max-[760px]:px-5 max-[760px]:pb-20 max-[760px]:pt-0">
          <BusinessSide />
          <article className="relative grid min-w-0 w-full grid-cols-[1.04fr_.96fr] border-t border-[#9eabb2] pt-[70px] max-[760px]:grid-cols-1 max-[760px]:pt-[57px]">
            <div className="absolute left-0 top-[23px] text-[13px] font-extrabold tracking-[.08em] text-[#b8c4ca]">
              PRODUCT DETAIL
            </div>
            <div className="pr-[55px] max-[760px]:p-0">
              <a
                className="mb-6 mt-[-10px] inline-block text-xs font-bold text-[#7b8a92]"
                href="/v3/business-products#piston-pump"
              >
                ← 피스톤 펌프 목록
              </a>
              <p className="m-0 text-[11px] font-extrabold tracking-[.14em] text-[#1163a2]">
                {pump.series} SERIES
              </p>
              <h2 className="mb-[11px] mt-[17px] break-keep text-[clamp(29px,3.1vw,43px)] leading-[1.18] tracking-[-.08em] max-[760px]:text-[34px]">
                {pump.name}
              </h2>
              <span className="text-[13px] tracking-normal text-[#718089]">
                {pump.english}
              </span>
              <p className="my-7 break-keep text-[15px] leading-[1.75] text-[#576872]">
                {pump.description}
              </p>
              <dl className="m-0 border-t border-[#e5e7e8]">
                {[
                  ["사용압력", pump.pressure],
                  ["최대 이론용적", pump.volume],
                  ["모델", pump.models],
                ].map(([label, value]) => (
                  <div
                    className="grid grid-cols-[125px_1fr] gap-3 border-b border-[#e5e7e8] py-[13px]"
                    key={label}
                  >
                    <dt className="text-xs text-[#829099]">{label}</dt>
                    <dd className="m-0 text-[13px] font-bold leading-[1.45] text-[#41535e]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                className="mt-[29px] inline-flex gap-[47px] border-b border-[#2f3e46] py-[14px] text-[13px] font-extrabold"
                href={`mailto:tokimec@tokimec.co.kr?subject=${encodeURIComponent(`[${pump.series} 시리즈] 기술 문의`)}`}
              >
                기술 문의하기 <b className="text-[#1163a2]">→</b>
              </a>
            </div>
            <div className="grid min-h-[352px] place-items-center bg-[linear-gradient(130deg,#eff4f5,#dbe6e9)] p-[35px] max-[760px]:mt-[35px] max-[760px]:min-h-[260px] max-[760px]:p-[25px]">
              <img
                className="max-h-[290px] w-[min(100%,415px)] object-contain mix-blend-multiply max-[760px]:max-h-[220px]"
                src={pump.image}
                alt={`${pump.series} 시리즈 제품`}
              />
            </div>
            <ProductTechnicalDetails pump={pump} />
            <div className="col-span-full mt-[75px] grid min-h-[525px] grid-cols-[.77fr_1.23fr] overflow-hidden bg-[#1d3447] text-white max-[760px]:hidden">
              <div className="flex flex-col justify-center p-[clamp(38px,5vw,74px)]">
                <p className="m-0 text-[10px] font-extrabold tracking-[.13em] text-[#91d3f1]">
                  CATALOGUE / KOREAN
                </p>
                <h3 className="mb-[15px] mt-[17px] text-[clamp(29px,3.3vw,43px)] leading-[1.15] tracking-[-.085em]">
                  {pump.series} 시리즈
                  <br />
                  카탈로그
                </h3>
                <span className="text-xs text-[#97adba]">{pump.pages}</span>
                <a
                  className="mt-7 w-fit border-b border-[#c5d9e2] pb-[10px] text-[13px] font-extrabold"
                  href={pump.catalog}
                  target="_blank"
                  rel="noreferrer"
                >
                  새 창에서 보기 ↗
                </a>
                <a
                  className="mt-[15px] w-fit text-[13px] font-extrabold text-[#9cd9f4]"
                  href={pump.catalog}
                  download
                >
                  PDF 다운로드 ↓
                </a>
              </div>
              <iframe
                className="h-full min-h-[525px] w-full border-0 bg-[#cadde4] p-[27px]"
                title={`${pump.series} 시리즈 카탈로그`}
                src={`${pump.catalog}#page=1`}
              />
            </div>
            <div className="hidden min-h-[260px] flex-col items-start gap-[15px] bg-[#1d3447] px-[25px] py-[37px] text-white max-[760px]:mt-[50px] max-[760px]:flex">
              <p className="m-0 text-[10px] font-extrabold tracking-[.13em] text-[#91d3f1]">
                CATALOGUE / KOREAN
              </p>
              <strong className="text-[25px] tracking-[-.06em]">
                {pump.series} 시리즈 카탈로그
              </strong>
              <span className="text-xs text-[#a7c1ce]">{pump.pages}</span>
              <a
                className="mt-[5px] w-full bg-[#1674aa] p-[13px] text-center text-[13px] font-extrabold"
                href={pump.catalog}
                target="_blank"
                rel="noreferrer"
              >
                PDF 새 창 열기 ↗
              </a>
              <a
                className="mt-[-5px] w-full p-[13px] text-center text-[13px] font-extrabold text-[#a6ddf4]"
                href={pump.catalog}
                download
              >
                PDF 다운로드 ↓
              </a>
            </div>
          </article>
        </section>
      </main>
      <V3Footer />
    </div>
  );
}
