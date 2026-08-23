import { V3Footer, V3Header } from './components';
import V3Hero from './V3Hero';
import V3MessageImage from './V3MessageImage';

export default function V3Home() {
  return (
    <div className="min-h-screen bg-white font-[Arial,'Noto_Sans_KR',sans-serif] tracking-[-.035em] text-[#262d32]">
      <V3Header overlay />
      <main>
        <V3Hero />
        <section className="bg-[#f2f2f2]">
          <V3MessageImage />
          <section className="mx-auto grid h-[525px] w-[min(1674px,calc(100%-70px))] grid-cols-[246px_minmax(0,1fr)_246px] gap-[clamp(48px,calc(12.7vw-113px),130px)] max-[760px]:h-auto max-[760px]:w-[calc(100%-40px)] max-[760px]:grid-cols-2 max-[760px]:gap-3" id="company"><img className="h-full w-full object-cover max-[760px]:hidden" src="/v3-feature-left.jpg" alt="한국도키멕 제품 생산라인" /><div className="grid grid-cols-3 grid-rows-2 gap-[clamp(28px,1.6vw,31px)] max-[760px]:col-span-full max-[760px]:gap-3 [&>img]:h-full [&>img]:w-full [&>img]:object-cover max-[760px]:[&>img]:aspect-[1.45]"><img src="/v3-feature-01.jpg" alt="공압 밸브" /><img src="/v3-feature-02.jpg" alt="유압 밸브" /><img src="/v3-feature-03.jpg" alt="유압 펌프" /><img src="/v3-feature-04.jpg" alt="Hydraulic Unit" /><img src="/v3-feature-05.jpg" alt="유압 펌프 생산과 수출" /><img src="/v3-feature-06.jpg" alt="Index Pack" /></div><img className="h-full w-full object-cover max-[760px]:hidden" src="/v3-feature-right.jpg" alt="공압 실린더" /></section>
        </section>
        <section className="bg-white px-[max(24px,calc((100vw-1180px)/2))] pb-[100px] pt-[185px] max-[760px]:px-7 max-[760px]:pb-[70px] max-[760px]:pt-[92px]" id="support"><p className="mb-[45px] text-center text-2xl font-bold tracking-[-.055em] text-[#313a40] max-[760px]:mb-[35px] max-[760px]:text-[22px]">Our Partners</p><div className="grid grid-cols-4 items-center gap-x-[38px] gap-y-16 max-[760px]:grid-cols-2 max-[760px]:gap-x-[25px] max-[760px]:gap-y-[43px] [&>img]:max-h-[78px] [&>img]:w-full [&>img]:object-contain [&>img]:saturate-[.93] max-[760px]:[&>img]:max-h-[46px]"><img src="/v3-partner-tokyo.png" alt="Tokyo Keiki" /><img src="/v3-partner-walvoil.jpg" alt="Walvoil" /><img src="/v3-partner-ckd.png" alt="CKD" /><img src="/v3-partner-italgroup.png" alt="Italgroup" /><img src="/v3-partner-inovance.png" alt="Inovance" /><img src="/v3-partner-atios.png" alt="Atios" /><img src="/v3-partner-phyusis.png" alt="Phyusis" /><img src="/v3-partner-matrix.jpg" alt="Matrix" /><img src="/v3-partner-settima.png" alt="Settima" /><img src="/v3-partner-casappa.png" alt="Casappa" /></div></section>
      </main>
      <V3Footer />
    </div>
  );
}
