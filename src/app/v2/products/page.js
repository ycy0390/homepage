import { V2Footer, V2Header, V2ProductCard, v2Products } from '../components';

export default function V2Products() {
  return (
    <div className="min-h-screen bg-[#f3f5f5] font-[Arial,'Noto_Sans_KR',sans-serif] tracking-[-.035em] text-[#121d27]">
      <V2Header active="products" />
      <main>
        <section className="bg-[#121d27] px-[max(24px,calc((100vw-1180px)/2))] py-[78px] text-white max-[760px]:px-6 max-[760px]:py-16">
          <p className="mb-5 text-[11px] font-extrabold tracking-[.14em] text-[#a7def5]">PRODUCT INTRODUCTION</p>
          <h1 className="m-0 text-[clamp(48px,6vw,80px)] tracking-[-.09em] max-[760px]:text-[58px]">제품소개</h1>
          <span className="mt-[38px] block text-xs text-[#91a6b5]">홈 <b className="mx-[9px] text-[#f05b32]">/</b> 제품소개 <b className="mx-[9px] text-[#f05b32]">/</b> 유압기기</span>
        </section>
        <section className="mx-auto grid max-w-[1180px] grid-cols-[250px_1fr] gap-[clamp(38px,7vw,110px)] py-[78px] pb-[126px] max-[760px]:grid-cols-1 max-[760px]:gap-10 max-[760px]:px-5 max-[760px]:pb-20 max-[760px]:pt-0">
          <aside className="border-t-[3px] border-[#121d27] py-[25px] max-[760px]:grid max-[760px]:grid-cols-[auto_1fr] max-[760px]:gap-x-[15px] max-[760px]:pt-[38px]"><p className="m-0 text-[10px] font-extrabold tracking-[.12em] text-[#0068b8] max-[760px]:col-span-full">PRODUCT CATEGORY</p><strong className="mt-[18px] block text-5xl tracking-[-.08em] text-[#f05b32] max-[760px]:col-span-full max-[760px]:text-[40px]">01</strong><h2 className="mb-8 mt-1 text-[28px] tracking-[-.06em] max-[760px]:col-span-full max-[760px]:mb-5">유압기기</h2><a className="block border-t border-[#d7dfe3] py-[14px] text-[13px] font-extrabold text-[#0068b8]" href="#piston-pumps">A. 피스톤 펌프</a><span className="block border-t border-[#d7dfe3] py-[14px] text-[13px] text-[#8a979f]">B. 베인 펌프</span><span className="block border-t border-[#d7dfe3] py-[14px] text-[13px] text-[#8a979f]">C. 제어 밸브</span></aside>
          <div id="piston-pumps">
            <div className="mb-[35px] grid grid-cols-[1fr_auto] items-end max-[760px]:mb-[25px]"><p className="col-span-full m-0 text-[11px] font-extrabold tracking-[.13em] text-[#0068b8]">A. PISTON PUMPS</p><h2 className="mb-0 mt-[9px] text-[clamp(38px,4.5vw,62px)] leading-none tracking-[-.08em] max-[760px]:text-[44px]">피스톤 펌프</h2><span className="pb-2 text-[11px] font-extrabold tracking-[.1em] text-[#60707c]">2 SERIES</span></div>
            <div className="grid grid-cols-2 gap-[18px] max-[760px]:grid-cols-1">{v2Products.map((product) => <V2ProductCard key={product.series} product={product} />)}</div>
          </div>
        </section>
      </main>
      <V2Footer />
    </div>
  );
}
