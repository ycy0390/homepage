// V2 홈·목록·상세 화면이 공유하는 피스톤 펌프 시리즈 데이터입니다.
export const v2Products = [
  {
    series: "P**V",
    name: "저소음 가변용량형 피스톤 펌프",
    englishName: "Low noise variable displacement piston pumps",
    pressure: "21 MPa",
    volume: "16 - 130 cm³/rev",
    pages: "20",
    size: "3.3 MB",
    image: "/piston-pump-pv-series.png",
    catalog: "/catalogs/pv-series-piston-pumps.pdf",
    href: "/v2/products/pv-series",
    description:
      "다양한 제어 방식과 폭넓은 용적을 지원하는 저소음 가변용량형 피스톤 펌프입니다.",
    models: [
      ["P16V", "16 cm³/rev"],
      ["P21V", "21 cm³/rev"],
      ["P31V", "31 cm³/rev"],
      ["P40V", "40 cm³/rev"],
      ["P70V", "70 cm³/rev"],
      ["P100V", "100 cm³/rev"],
      ["P130V", "130 cm³/rev"],
    ],
    features: [
      ["01", "저소음 운전"],
      ["02", "다양한 제어"],
      ["03", "폭넓은 용적"],
    ],
  },
  {
    series: "PH",
    name: "저소음고압 가변용량형 피스톤 펌프",
    englishName: "Low noise, high pressure variable displacement piston pumps",
    pressure: "정격 28 / 최고 30 MPa",
    volume: "80 - 130 cm³/rev",
    pages: "11",
    size: "1.8 MB",
    image: "/piston-pump-ph-series.png",
    catalog: "/catalogs/ph-series-piston-pumps.pdf",
    href: "/v2/products/ph-series",
    description:
      "고압 유압 회로에 대응하도록 설계된 저소음고압 가변용량형 피스톤 펌프입니다.",
    models: [
      ["PH80", "80 cm³/rev"],
      ["PH100", "100 cm³/rev"],
      ["PH130", "130 cm³/rev"],
    ],
    features: [
      ["01", "고압 대응"],
      ["02", "저소음 설계"],
      ["03", "3개 용적"],
    ],
  },
];

// 현재 경로를 받아 활성 메뉴를 표시하는 V2 공용 헤더입니다.
export function V2Header({ active }) {
  return (
    <header className="grid h-[86px] grid-cols-[1fr_auto_1fr] items-center border-b border-[#d7dfe3] bg-white px-[clamp(24px,5vw,80px)] max-[760px]:h-[68px] max-[760px]:grid-cols-[1fr_auto] max-[760px]:px-5">
      <a href="/v2" aria-label="한국도키멕 새 시안 홈">
        <img
          className="block w-[150px] max-[760px]:w-[132px]"
          src="/tokimec_logo.png"
          alt="한국도키멕 TOKIMEC"
        />
      </a>
      <nav
        className="flex h-[86px] items-stretch gap-[34px] text-sm font-extrabold text-[#56636d] max-[760px]:hidden"
        aria-label="주요 메뉴"
      >
        <a
          className={`grid place-items-center border-b-[3px] ${active === "home" ? "border-[#f05b32] text-[#121d27]" : "border-transparent hover:border-[#f05b32] hover:text-[#121d27]"}`}
          href="/v2"
        >
          홈
        </a>
        <a
          className={`grid place-items-center border-b-[3px] ${active === "products" ? "border-[#f05b32] text-[#121d27]" : "border-transparent hover:border-[#f05b32] hover:text-[#121d27]"}`}
          href="/v2/products"
        >
          제품소개
        </a>
        <a
          className="grid place-items-center border-b-[3px] border-transparent hover:border-[#f05b32] hover:text-[#121d27]"
          href="/v2#support"
        >
          기술지원
        </a>
        <a
          className="grid place-items-center border-b-[3px] border-transparent hover:border-[#f05b32] hover:text-[#121d27]"
          href="/v2#company"
        >
          회사소개
        </a>
      </nav>
      <a
        className="inline-flex justify-self-end items-center gap-[15px] border border-[#121d27] px-4 py-3 text-[13px] font-extrabold max-[760px]:px-[10px] max-[760px]:py-[9px] max-[760px]:text-[11px]"
        href="mailto:tokimec@tokimec.co.kr?subject=%5B%ED%95%9C%EA%B5%AD%EB%8F%84%ED%82%A4%EB%A9%95%5D%20%EA%B8%B0%EC%88%A0%20%EB%AC%B8%EC%9D%98"
      >
        기술 문의 <span className="text-[#f05b32]">↗</span>
      </a>
    </header>
  );
}

// V2 화면에서 공통 회사 정보를 보여 주는 푸터입니다.
export function V2Footer() {
  return (
    <footer className="grid min-h-[170px] grid-cols-[1fr_1.5fr_1fr] items-center gap-6 bg-white px-[max(24px,calc((100vw-1180px)/2))] py-[39px] text-xs text-[#60707c] max-[760px]:grid-cols-1 max-[760px]:gap-[13px] max-[760px]:px-6 max-[760px]:py-8">
      <img
        className="w-[136px]"
        src="/tokimec_logo.png"
        alt="한국도키멕 TOKIMEC"
      />
      <p className="m-0 leading-[1.55]">
        유압 및 제어 제품의 제품정보와 기술지원을 제공합니다.
      </p>
      <p className="m-0 text-right leading-[1.55] max-[760px]:text-left">
        © TOKIMEC KOREA POWER CONTROL CO., LTD.
      </p>
    </footer>
  );
}

// 목록·홈의 반복 카드에 제품 데이터 하나를 렌더링합니다.
export function V2ProductCard({ product }) {
  return (
    <a
      className="grid min-h-[480px] grid-rows-[auto_1fr_auto_auto] overflow-hidden border border-[#d7dfe3] bg-white transition hover:-translate-y-1 hover:border-[#121d27] max-[760px]:min-h-[430px]"
      href={product.href}
    >
      <div className="flex justify-between border-b border-[#d7dfe3] px-[22px] py-[19px] text-[11px] font-extrabold tracking-[.1em] text-[#60707c]">
        <span>PISTON PUMP</span>
        <strong className="text-[17px] tracking-normal text-[#f05b32]">
          {product.series}
        </strong>
      </div>
      <div className="grid min-h-[230px] place-items-center bg-[linear-gradient(135deg,#f3f5f5,#dde5e7)] p-7 max-[760px]:min-h-[190px]">
        <img
          className="max-h-[230px] w-[min(85%,370px)] object-contain mix-blend-multiply"
          src={product.image}
          alt={`${product.series} 시리즈 피스톤 펌프`}
        />
      </div>
      <div className="px-6 pb-[14px] pt-[25px]">
        <h2 className="m-0 break-keep text-[clamp(23px,2.25vw,33px)] leading-[1.2] tracking-[-.065em] max-[760px]:text-[27px]">
          {product.name}
        </h2>
        <p className="mb-0 mt-[10px] text-xs leading-[1.45] tracking-normal text-[#60707c]">
          {product.englishName}
        </p>
      </div>
      <div className="grid grid-cols-[1fr_auto] items-end gap-x-3 gap-y-[5px] bg-[#121d27] px-6 py-[18px] text-white">
        <span className="text-[10px] font-extrabold tracking-[.08em] text-[#9fb0b9]">
          MAX PRESSURE
        </span>
        <strong className="text-[17px]">{product.pressure}</strong>
        <b className="col-start-2 row-span-2 row-start-1 text-xs text-[#a7def5]">
          제품 상세보기 →
        </b>
      </div>
    </a>
  );
}

// 선택한 제품 데이터를 받아 제품 개요·모델·카탈로그 영역을 구성합니다.
export function V2ProductDetail({ product }) {
  return (
    <div className="min-h-screen bg-[#f3f5f5] font-[Arial,'Noto_Sans_KR',sans-serif] tracking-[-.035em] text-[#121d27]">
      <V2Header active="products" />
      <main>
        <section className="relative grid min-h-[720px] grid-cols-2 grid-rows-[auto_1fr_auto] overflow-hidden border-b border-[#d7dfe3] bg-white px-[max(24px,calc((100vw-1180px)/2))] pb-0 pt-10 max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:px-5 max-[760px]:pt-[27px]">
          <div className="col-span-full text-xs text-[#77858f]">
            홈 <span className="mx-[9px] text-[#f05b32]">/</span> 제품소개{" "}
            <span className="mx-[9px] text-[#f05b32]">/</span> 유압기기{" "}
            <span className="mx-[9px] text-[#f05b32]">/</span> 피스톤 펌프
          </div>
          <div className="absolute right-[max(24px,calc((100vw-1180px)/2))] top-[105px] text-[clamp(140px,23vw,330px)] font-black leading-[.72] tracking-[-.12em] text-[#e2e7e9] max-[760px]:right-[18px] max-[760px]:top-[91px] max-[760px]:text-[148px]">
            {product.series}
            <small className="text-[11px] tracking-[.12em] align-top">
              {" "}
              SERIES
            </small>
          </div>
          <div className="relative z-[2] self-center py-[80px] pb-[72px] max-[760px]:pb-7 max-[760px]:pt-[78px]">
            <p className="m-0 text-[11px] font-extrabold tracking-[.14em] text-[#0068b8]">
              HYDRAULIC EQUIPMENT / PISTON PUMP
            </p>
            <h1 className="mb-3 mt-6 max-w-[560px] break-keep text-[clamp(39px,4.8vw,70px)] leading-[1.14] tracking-[-.085em] max-[760px]:text-[40px]">
              {product.name}
            </h1>
            <span className="text-[15px] tracking-normal text-[#64737d]">
              {product.englishName}
            </span>
            <p className="mt-8 max-w-[440px] break-keep text-base leading-[1.75] text-[#586872]">
              {product.description}
            </p>
          </div>
          <div className="relative z-[1] mt-[35px] grid min-h-[420px] self-center place-items-center bg-[linear-gradient(135deg,#edf1f2,#dbe3e6)] p-6 before:absolute before:inset-0 before:bg-[linear-gradient(rgba(18,29,39,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(18,29,39,.06)_1px,transparent_1px)] before:bg-[length:32px_32px] max-[760px]:m-0 max-[760px]:min-h-[270px]">
            <img
              className="relative z-[1] max-h-[390px] w-[min(87%,550px)] object-contain mix-blend-multiply max-[760px]:max-h-[235px]"
              src={product.image}
              alt={`${product.series} 시리즈 피스톤 펌프`}
            />
          </div>
          <dl className="col-span-full m-0 grid grid-cols-3 border-t border-[#d7dfe3] max-[760px]:mt-6 max-[760px]:grid-cols-1">
            {[
              ["MAX PRESSURE", product.pressure],
              ["DISPLACEMENT", product.volume],
              ["CATALOGUE", `${product.pages} pages`],
            ].map(([label, value]) => (
              <div
                className="min-h-[105px] border-b border-r border-[#d7dfe3] px-7 py-6 first:pl-0 last:border-r-0 max-[760px]:flex max-[760px]:min-h-[75px] max-[760px]:items-center max-[760px]:justify-between max-[760px]:gap-[10px] max-[760px]:border-r-0 max-[760px]:p-4"
                key={label}
              >
                <dt className="text-[10px] font-extrabold tracking-[.1em] text-[#60707c]">
                  {label}
                </dt>
                <dd className="mb-0 mt-[10px] text-[clamp(15px,1.55vw,21px)] font-extrabold tracking-[-.04em] max-[760px]:m-0 max-[760px]:text-right">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="bg-[#f3f5f5] px-[max(24px,calc((100vw-1180px)/2))] py-[125px] max-[760px]:px-6 max-[760px]:py-[78px]">
          <p className="m-0 text-[11px] font-extrabold tracking-[.14em] text-[#0068b8]">
            PRODUCT OVERVIEW
          </p>
          <h2 className="mb-16 mt-[22px] max-w-[760px] text-[clamp(31px,4vw,56px)] leading-[1.2] tracking-[-.075em] max-[760px]:mb-[42px] max-[760px]:text-[32px]">
            제품 사양을 먼저 확인하고,
            <br />
            카탈로그에서 선정 정보를 이어서 검토하세요.
          </h2>
          <div className="grid grid-cols-3 border-t border-[#d7dfe3] max-[760px]:grid-cols-1">
            {product.features.map(([number, label]) => (
              <div
                className="grid grid-cols-[50px_1fr] gap-3 border-r border-[#d7dfe3] py-[23px] pr-[18px] pl-5 first:pl-0 max-[760px]:border-b max-[760px]:border-r-0 max-[760px]:px-0 max-[760px]:py-[18px]"
                key={number}
              >
                <span className="text-xs font-extrabold text-[#f05b32]">
                  {number}
                </span>
                <strong className="text-lg">{label}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1180px] grid-cols-[.68fr_1.32fr] gap-[clamp(35px,7vw,115px)] py-[125px] max-[760px]:grid-cols-1 max-[760px]:gap-9 max-[760px]:px-5 max-[760px]:py-[78px]">
          <div>
            <p className="m-0 text-[11px] font-extrabold tracking-[.14em] text-[#0068b8]">
              MODEL LINE-UP
            </p>
            <h2 className="mb-7 mt-[15px] text-[clamp(35px,4vw,55px)] tracking-[-.08em] max-[760px]:text-[42px]">
              모델 및 용적
            </h2>
            <span className="block break-keep text-sm leading-[1.65] text-[#60707c]">
              제품 선정은 운전 조건과 회로 사양을 기준으로 기술 검토가
              필요합니다.
            </span>
          </div>
          <div className="border-t-[3px] border-[#121d27]">
            <div className="grid min-h-[53px] grid-cols-[1fr_1.35fr_.85fr] items-center gap-[15px] bg-[#eef2f3] px-[18px] text-[10px] font-extrabold tracking-[.08em] text-[#667780] max-[760px]:hidden">
              <span>MODEL</span>
              <span>THEORETICAL DISPLACEMENT</span>
              <span>INQUIRY</span>
            </div>
            {product.models.map(([model, volume]) => (
              <div
                className="grid min-h-[68px] grid-cols-[1fr_1.35fr_.85fr] items-center gap-[15px] border-b border-[#d7dfe3] px-[18px] max-[760px]:min-h-[72px] max-[760px]:grid-cols-[1fr_auto]"
                key={model}
              >
                <strong className="text-lg tracking-[.03em]">{model}</strong>
                <span className="text-sm text-[#52636e] max-[760px]:row-start-2">
                  {volume}
                </span>
                <a
                  className="text-right text-xs font-extrabold text-[#0068b8]"
                  href={`mailto:tokimec@tokimec.co.kr?subject=${encodeURIComponent(`[${product.series} 시리즈] ${model} 기술 문의`)}`}
                >
                  기술 문의 ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="grid min-h-[655px] grid-cols-[.83fr_1.17fr] bg-[#121d27] text-white max-[760px]:grid-cols-1">
          <div className="flex flex-col justify-center p-[clamp(58px,8vw,115px)] max-[760px]:px-6 max-[760px]:py-[70px]">
            <p className="m-0 text-[11px] font-extrabold tracking-[.14em] text-[#9edff5]">
              CATALOGUE / KOREAN
            </p>
            <h2 className="mb-5 mt-[21px] text-[clamp(40px,4.2vw,58px)] leading-[1.12] tracking-[-.09em]">
              {product.series} 시리즈
              <br />
              카탈로그
            </h2>
            <span className="text-[13px] text-[#8ca0ac]">
              {product.pages} pages · {product.size}
            </span>
            <a
              className="mt-11 inline-flex w-fit border-b border-[#b9cbd3] py-[15px] text-sm font-extrabold"
              href={product.catalog}
              target="_blank"
              rel="noreferrer"
            >
              새 창에서 보기 ↗
            </a>
            <a
              className="mt-[17px] w-fit text-[13px] font-extrabold text-[#a7def5]"
              href={product.catalog}
              download
            >
              PDF 다운로드 ↓
            </a>
          </div>
          <div className="min-h-[655px] bg-[#cad8dd] p-[34px] max-[760px]:min-h-[360px] max-[760px]:p-[18px]">
            <iframe
              className="h-full min-h-[585px] w-full border-0 bg-white shadow-[0_17px_38px_rgba(0,0,0,.22)] max-[760px]:min-h-[324px]"
              title={`${product.series} 시리즈 카탈로그`}
              src={`${product.catalog}#page=1`}
            />
          </div>
        </section>
      </main>
      <V2Footer />
    </div>
  );
}
