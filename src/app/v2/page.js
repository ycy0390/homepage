import { V2Footer, V2Header, V2ProductCard, v2Products } from "./components";

// V2 메인 시안: 대표 제품 카드와 회사·지원 진입 정보를 함께 제공합니다.
export default function V2Home() {
  return (
    <div className="min-h-screen bg-[#f3f5f5] font-[Arial,'Noto_Sans_KR',sans-serif] tracking-[-.035em] text-[#121d27]">
      <V2Header active="home" />
      <main>
        <section className="relative grid min-h-[690px] grid-cols-[1.05fr_.95fr] overflow-hidden bg-[#121d27] text-white max-[760px]:min-h-[650px] max-[760px]:grid-cols-1">
          <div className="absolute left-[clamp(24px,5vw,80px)] top-8 z-[3] text-xs font-extrabold tracking-[.1em] text-[#94a9b7]">
            01 / 04
          </div>
          <div className="relative z-[2] px-[clamp(24px,7vw,110px)] pb-[90px] pt-[clamp(95px,12vw,175px)] max-[760px]:px-6 max-[760px]:pb-[42px] max-[760px]:pt-[120px]">
            <p className="mb-8 text-[11px] font-extrabold tracking-[.14em] text-[#95a8b4]">
              HYDRAULICS · ELECTRIC CONTROL · TECHNICAL SUPPORT
            </p>
            <h1 className="m-0 text-[clamp(42px,5.1vw,76px)] leading-[1.12] tracking-[-.08em] max-[760px]:text-[44px]">
              기술을 이해하기 쉽게,
              <br />
              <em className="not-italic text-[#a7def5]">
                제품을 선택하기 정확하게.
              </em>
            </h1>
            <a
              className="mt-12 inline-flex gap-[46px] border-y border-[#9cb5c3] px-5 py-[18px] text-sm font-extrabold"
              href="/v2/products"
            >
              제품소개 보기 <span className="text-[#f05b32]">→</span>
            </a>
          </div>
          <div
            className="relative grid place-items-center overflow-hidden bg-[#dbe2e4] text-[#172630] max-[760px]:min-h-[260px]"
            aria-hidden="true"
          >
            <span className="absolute aspect-square w-[min(50vw,690px)] translate-x-[15%] translate-y-[-12%] rounded-full border-[clamp(48px,7vw,105px)] border-[#0068b8] max-[760px]:w-[330px] max-[760px]:border-[52px]" />
            <span className="absolute inset-0 bg-[linear-gradient(rgba(18,29,39,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(18,29,39,.08)_1px,transparent_1px)] bg-[length:38px_38px] [mask-image:linear-gradient(90deg,transparent,#000_50%)]" />
            <strong className="relative z-[2] text-[clamp(43px,5.8vw,88px)] leading-[.9] tracking-[-.09em] max-[760px]:text-[52px]">
              HYDRAULIC
              <br />
              CONTROL
            </strong>
          </div>
          <p className="absolute bottom-9 left-[clamp(24px,5vw,80px)] z-[3] m-0 text-[10px] leading-[1.55] tracking-[.12em] text-[#637783] max-[760px]:bottom-[286px] max-[760px]:left-6">
            KOREA TOKIMEC
            <br />
            PRODUCT INFORMATION
          </p>
        </section>

        <section
          className="grid grid-cols-[.35fr_1fr] gap-5 border-b border-[#d7dfe3] bg-white px-[max(24px,calc((100vw-1180px)/2))] py-[124px] max-[760px]:grid-cols-1 max-[760px]:px-6 max-[760px]:py-[78px]"
          id="company"
        >
          <p className="m-0 text-[11px] font-extrabold tracking-[.13em] text-[#0068b8]">
            02 / COMPANY
          </p>
          <h2 className="col-start-2 m-0 text-[clamp(30px,3.6vw,52px)] leading-[1.25] tracking-[-.07em] max-[760px]:col-auto max-[760px]:mt-[22px] max-[760px]:text-[31px]">
            한국도키멕은 고객의 장비 조건에 맞는
            <br />
            유압·제어 제품 정보와 기술지원을 제공합니다.
          </h2>
          <p className="col-start-2 mt-[26px] max-w-[630px] break-keep text-base leading-[1.75] text-[#60707c] max-[760px]:col-auto">
            카탈로그를 찾고, 제품군을 비교하고, 필요한 기술 검토로 이어지는
            홈페이지를 목표로 한 새 디자인 시안입니다.
          </p>
        </section>

        <section className="px-[max(24px,calc((100vw-1180px)/2))] py-[110px] max-[760px]:px-5 max-[760px]:py-[78px]">
          <div className="mb-[38px] flex items-end justify-between gap-6 max-[760px]:mb-[26px]">
            <div>
              <p className="m-0 text-[11px] font-extrabold tracking-[.13em] text-[#0068b8]">
                03 / FEATURED PRODUCTS
              </p>
              <h2 className="mb-0 mt-[9px] text-[clamp(38px,4.5vw,62px)] leading-none tracking-[-.08em] max-[760px]:text-[43px]">
                제품소개
              </h2>
            </div>
            <a
              className="border-b border-[#121d27] pb-[7px] text-[13px] font-extrabold max-[760px]:text-[11px]"
              href="/v2/products"
            >
              전체 제품보기 →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-[18px] max-[760px]:grid-cols-1">
            {v2Products.map((product) => (
              <V2ProductCard key={product.series} product={product} />
            ))}
          </div>
        </section>

        <section
          className="grid min-h-[415px] content-center bg-[#0068b8] px-[max(24px,calc((100vw-1180px)/2))] py-[90px] text-white max-[760px]:min-h-[360px] max-[760px]:px-6 max-[760px]:py-[74px]"
          id="support"
        >
          <p className="m-0 text-[11px] font-extrabold tracking-[.13em] text-[#b9e3f1]">
            04 / TECHNICAL SUPPORT
          </p>
          <h2 className="mb-[30px] mt-5 text-[clamp(32px,4vw,58px)] leading-[1.18] tracking-[-.07em] max-[760px]:text-[34px]">
            제품 선정에 필요한 조건을
            <br />
            기술 담당자에게 전달하세요.
          </h2>
          <a
            className="inline-flex w-fit gap-11 border-b border-white/60 py-[15px] text-sm font-extrabold"
            href="mailto:tokimec@tokimec.co.kr?subject=%5B%ED%95%9C%EA%B5%AD%EB%8F%84%ED%82%A4%EB%A9%95%5D%20%EA%B8%B0%EC%88%A0%20%EB%AC%B8%EC%9D%98"
          >
            기술 문의하기 <span className="text-[#a7def5]">↗</span>
          </a>
        </section>
      </main>
      <V2Footer />
    </div>
  );
}
