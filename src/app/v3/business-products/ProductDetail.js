import { V3Footer, V3Header } from '../components';
import { BusinessSide, SubHero } from './BusinessShell';

export default function ProductDetail({ pump }) {
  return <div className="min-h-screen bg-white font-[Arial,'Noto_Sans_KR',sans-serif] tracking-[-.035em] text-[#262d32]">
    <V3Header active="business" /><main><SubHero trail="유압기기 › 피스톤 펌프" />
      <section className="mx-auto grid max-w-[1180px] grid-cols-[220px_1fr] gap-[clamp(45px,8vw,125px)] pb-[130px] pt-[86px] max-[760px]:grid-cols-1 max-[760px]:gap-[45px] max-[760px]:px-5 max-[760px]:pb-20 max-[760px]:pt-0">
        <BusinessSide />
        <article className="relative grid w-full grid-cols-[1.04fr_.96fr] border-t border-[#9eabb2] pt-[70px] max-[760px]:grid-cols-1 max-[760px]:pt-[57px]">
          <div className="absolute left-0 top-[23px] text-[13px] font-extrabold tracking-[.08em] text-[#b8c4ca]">PRODUCT DETAIL</div>
          <div className="pr-[55px] max-[760px]:p-0"><a className="mb-6 mt-[-10px] inline-block text-xs font-bold text-[#7b8a92]" href="/v3/business-products#piston-pump">← 피스톤 펌프 목록</a><p className="m-0 text-[11px] font-extrabold tracking-[.14em] text-[#1163a2]">{pump.series} SERIES</p><h2 className="mb-[11px] mt-[17px] break-keep text-[clamp(29px,3.1vw,43px)] leading-[1.18] tracking-[-.08em] max-[760px]:text-[34px]">{pump.name}</h2><span className="text-[13px] tracking-normal text-[#718089]">{pump.english}</span><p className="my-7 break-keep text-[15px] leading-[1.75] text-[#576872]">{pump.description}</p>
            <dl className="m-0 border-t border-[#e5e7e8]">{[['사용압력', pump.pressure], ['최대 이론용적', pump.volume], ['모델', pump.models]].map(([label, value]) => <div className="grid grid-cols-[125px_1fr] gap-3 border-b border-[#e5e7e8] py-[13px]" key={label}><dt className="text-xs text-[#829099]">{label}</dt><dd className="m-0 text-[13px] font-bold leading-[1.45] text-[#41535e]">{value}</dd></div>)}</dl>
            <a className="mt-[29px] inline-flex gap-[47px] border-b border-[#2f3e46] py-[14px] text-[13px] font-extrabold" href={`mailto:tokimec@tokimec.co.kr?subject=${encodeURIComponent(`[${pump.series} 시리즈] 기술 문의`)}`}>기술 문의하기 <b className="text-[#1163a2]">→</b></a>
          </div>
          <div className="grid min-h-[352px] place-items-center bg-[linear-gradient(130deg,#eff4f5,#dbe6e9)] p-[35px] max-[760px]:mt-[35px] max-[760px]:min-h-[260px] max-[760px]:p-[25px]"><img className="max-h-[290px] w-[min(100%,415px)] object-contain mix-blend-multiply max-[760px]:max-h-[220px]" src={pump.image} alt={`${pump.series} 시리즈 제품`} /></div>
          <div className="col-span-full mt-[75px] grid min-h-[525px] grid-cols-[.77fr_1.23fr] overflow-hidden bg-[#1d3447] text-white max-[760px]:hidden"><div className="flex flex-col justify-center p-[clamp(38px,5vw,74px)]"><p className="m-0 text-[10px] font-extrabold tracking-[.13em] text-[#91d3f1]">CATALOGUE / KOREAN</p><h3 className="mb-[15px] mt-[17px] text-[clamp(29px,3.3vw,43px)] leading-[1.15] tracking-[-.085em]">{pump.series} 시리즈<br />카탈로그</h3><span className="text-xs text-[#97adba]">{pump.pages}</span><a className="mt-7 w-fit border-b border-[#c5d9e2] pb-[10px] text-[13px] font-extrabold" href={pump.catalog} target="_blank" rel="noreferrer">새 창에서 보기 ↗</a><a className="mt-[15px] w-fit text-[13px] font-extrabold text-[#9cd9f4]" href={pump.catalog} download>PDF 다운로드 ↓</a></div><iframe className="h-full min-h-[525px] w-full border-0 bg-[#cadde4] p-[27px]" title={`${pump.series} 시리즈 카탈로그`} src={`${pump.catalog}#page=1`} /></div>
          <div className="hidden min-h-[260px] flex-col items-start gap-[15px] bg-[#1d3447] px-[25px] py-[37px] text-white max-[760px]:mt-[25px] max-[760px]:flex"><p className="m-0 text-[10px] font-extrabold tracking-[.13em] text-[#91d3f1]">CATALOGUE / KOREAN</p><strong className="text-[25px] tracking-[-.06em]">{pump.series} 시리즈 카탈로그</strong><span className="text-xs text-[#a7c1ce]">{pump.pages}</span><a className="mt-[5px] w-full bg-[#1674aa] p-[13px] text-center text-[13px] font-extrabold" href={pump.catalog} target="_blank" rel="noreferrer">PDF 새 창 열기 ↗</a><a className="mt-[-5px] w-full p-[13px] text-center text-[13px] font-extrabold text-[#a6ddf4]" href={pump.catalog} download>PDF 다운로드 ↓</a></div>
        </article>
      </section>
    </main><V3Footer />
  </div>;
}
