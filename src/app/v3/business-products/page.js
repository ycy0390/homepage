import { V3Footer, V3Header } from '../components';
import { BusinessSide, SubHero } from './BusinessShell';
import { pistonPumps } from './data';

export default function BusinessProducts() {
  return <div className="min-h-screen bg-white font-[Arial,'Noto_Sans_KR',sans-serif] tracking-[-.035em] text-[#262d32]">
    <V3Header active="business" />
    <main>
      <SubHero trail="유압기기" />
      <section className="mx-auto grid max-w-[1180px] grid-cols-[220px_1fr] gap-[clamp(45px,8vw,125px)] pb-[130px] pt-[86px] max-[760px]:grid-cols-1 max-[760px]:gap-[45px] max-[760px]:px-5 max-[760px]:pb-20 max-[760px]:pt-0">
        <BusinessSide />
        <div id="hydraulic">
          <p className="m-0 text-[11px] font-extrabold tracking-[.14em] text-[#1163a2]">HYDRAULIC EQUIPMENT</p><h2 className="mb-0 mt-[15px] text-[clamp(40px,4.4vw,60px)] tracking-[-.085em] max-[760px]:text-[46px]">유압기기</h2><p className="mb-[42px] mt-[23px] max-w-[600px] break-keep text-base leading-[1.7] text-[#6c797f] max-[760px]:text-[15px]">제품군을 먼저 선택한 뒤, 필요한 시리즈의 모델·사양·전용 카탈로그를 확인하세요.</p>
          <div className="grid grid-cols-4 border border-[#e5e7e8] max-[760px]:grid-cols-2">{['펌프', '밸브', '실린더', '유압 유니트'].map((item, index) => <span className={`grid min-h-[66px] place-items-center border-r border-[#e5e7e8] text-[13px] text-[#6d7a81] last:border-r-0 max-[760px]:min-h-[54px] max-[760px]:border-b ${index === 0 ? 'bg-[#f3f8fa] font-extrabold text-[#1163a2]' : ''}`} key={item}>{item}</span>)}</div>
          <section className="pb-[100px] pt-[110px] max-[760px]:py-[75px]" id="piston-pump"><div className="mb-[33px] grid grid-cols-[1fr_auto] items-end"><p className="col-span-full m-0 text-[11px] font-extrabold tracking-[.14em] text-[#1163a2]">PRODUCT CATEGORY</p><h2 className="mb-0 mt-3 text-[clamp(33px,3.6vw,49px)] tracking-[-.08em] max-[760px]:text-[39px]">피스톤 펌프</h2><span className="pb-2 text-[13px] text-[#829097]">Piston pumps</span></div>
            <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">{pistonPumps.map(pump => <a className="grid min-h-[350px] grid-rows-[auto_1fr_auto_auto] border border-[#dce5e9] bg-white px-[22px] py-[21px] transition hover:-translate-y-[3px] hover:shadow-[0_14px_28px_rgba(30,68,91,.12)] max-[760px]:min-h-[320px]" href={`/v3/business-products/${pump.slug}`} key={pump.slug}><span className="text-[11px] font-extrabold tracking-[.11em] text-[#1163a2]">{pump.series} SERIES</span><img className="h-[183px] w-[min(100%,300px)] place-self-center object-contain mix-blend-multiply" src={pump.image} alt={`${pump.series} 시리즈 피스톤 펌프`} /><strong className="break-keep text-[21px] tracking-[-.06em]">{pump.name}</strong><b className="mt-4 border-t border-[#e5e7e8] pt-[14px] text-xs text-[#39789e]">제품 상세보기 →</b></a>)}</div>
          </section>
        </div>
      </section>
    </main><V3Footer />
  </div>;
}
