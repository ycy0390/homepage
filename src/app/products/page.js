const products = [
  {
    series: "P**V",
    title: "저소음 가변용량형 피스톤 펌프",
    description:
      "다양한 제어 방식과 16 - 130 cm³/rev 용적을 지원하는 P**V 시리즈",
    href: "/",
    image: "/piston-pump-pv-series.png",
    pressure: "21 MPa",
  },
  {
    series: "PH",
    title: "저소음고압 가변용량형 피스톤 펌프",
    description: "고압 유압 회로에 대응하는 PH80 · PH100 · PH130 시리즈",
    href: "/ph-series",
    image: "/piston-pump-ph-series.png",
    pressure: "최고 30 MPa",
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-[#f7f9fa] text-[#15253a]">
      <header className="sticky top-0 z-20 flex h-[82px] items-center justify-between border-b border-[#edf0f2] bg-white px-[clamp(24px,6vw,100px)] max-[760px]:h-[70px] max-[760px]:px-5">
        <a href="/products">
          <img
            className="w-[154px] max-[760px]:w-[133px]"
            src="/tokimec_logo.png"
            alt="한국도키멕 TOKIMEC"
          />
        </a>
        <nav className="flex gap-[34px] text-sm font-bold text-[#52616f] max-[760px]:hidden">
          <a href="/products">제품소개</a>
          <a href="#piston-pumps">피스톤 펌프</a>
        </nav>
        <a
          className="bg-[#15253a] px-4 py-[11px] text-[13px] font-bold text-white max-[760px]:hidden"
          href="mailto:tokimec@tokimec.co.kr?subject=%5B%ED%95%9C%EA%B5%AD%EB%8F%84%ED%82%A4%EB%A9%95%5D%20%EA%B8%B0%EC%88%A0%20%EB%AC%B8%EC%9D%98"
        >
          기술 문의
        </a>
      </header>
      <section className="bg-[#0d304e] px-[max(24px,calc((100vw-1176px)/2))] py-[86px] text-white max-[760px]:px-6 max-[760px]:py-[70px]">
        <p className="mb-4 text-[11px] font-extrabold tracking-[.14em] text-[#82d7f2]">
          PRODUCT INTRODUCTION
        </p>
        <h1 className="m-0 text-[clamp(48px,6vw,78px)] tracking-[-.08em]">
          제품소개
        </h1>
        <span className="mt-8 block text-xs text-[#a8bfcb]">
          유압기기 <b className="mx-2 text-[#50b6df]">›</b> 펌프{" "}
          <b className="mx-2 text-[#50b6df]">›</b> 피스톤 펌프
        </span>
      </section>
      <section
        className="mx-auto grid max-w-[1176px] grid-cols-[250px_1fr] gap-[clamp(42px,8vw,120px)] px-0 py-[100px] max-[760px]:grid-cols-1 max-[760px]:gap-10 max-[760px]:px-5 max-[760px]:py-[65px]"
        id="piston-pumps"
      >
        <aside>
          <p className="m-0 text-[10px] font-extrabold tracking-[.14em] text-[#147fac]">
            HYDRAULICS
          </p>
          <strong className="mt-5 block text-[44px] tracking-[-.08em] text-[#125a82]">
            01
          </strong>
          <h2 className="mb-6 mt-0 text-3xl tracking-[-.07em]">피스톤 펌프</h2>
          <span className="break-keep text-sm leading-[1.65] text-[#70818b]">
            제품 시리즈를 선택하면 모델·사양과 전용 카탈로그를 확인할 수
            있습니다.
          </span>
        </aside>
        <div className="grid grid-cols-2 gap-[18px] max-[760px]:grid-cols-1">
          {products.map((product) => (
            <a
              className="grid grid-rows-[auto_1fr_auto] overflow-hidden border border-[#d5e2e7] bg-white transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(24,66,89,.12)]"
              href={product.href}
              key={product.series}
            >
              <div className="flex justify-between border-b border-[#e1ebee] px-5 py-[17px] text-[10px] font-extrabold tracking-[.12em] text-[#6b7b85]">
                <span>PISTON PUMP</span>
                <strong className="text-[17px] tracking-normal text-[#1686b7]">
                  {product.series}
                </strong>
              </div>
              <img
                className="h-[210px] w-full bg-[#edf6f8] p-[22px] object-contain mix-blend-multiply max-[760px]:h-[200px]"
                src={product.image}
                alt={`${product.series} 시리즈 피스톤 펌프`}
              />
              <section className="p-[21px]">
                <p className="m-0 break-keep text-[22px] font-extrabold tracking-[-.055em] text-[#173550]">
                  {product.title}
                </p>
                <span className="mt-[9px] block min-h-[41px] break-keep text-xs leading-[1.55] text-[#64757f]">
                  {product.description}
                </span>
                <b className="mt-[19px] flex justify-between border-t border-[#e0e9ec] pt-4 text-xs text-[#5b7180]">
                  최고 사용압력 {product.pressure}{" "}
                  <i className="not-italic text-[#1479a8]">제품 보기 →</i>
                </b>
              </section>
            </a>
          ))}
        </div>
      </section>
      <footer className="flex min-h-[150px] items-center justify-between gap-6 border-t border-[#e1e8eb] bg-white px-[max(32px,calc((100vw-1176px)/2))] py-[38px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:px-6 max-[760px]:py-7">
        <img
          className="w-[135px]"
          src="/tokimec_logo.png"
          alt="한국도키멕 TOKIMEC"
        />
        <p className="m-0 text-xs text-[#71808a]">
          제품 시리즈를 선택해 상세 사양과 카탈로그를 확인하세요.
        </p>
        <a className="text-xs font-extrabold text-[#526a7a]" href="#top">
          맨 위로 ↑
        </a>
      </footer>
    </main>
  );
}
