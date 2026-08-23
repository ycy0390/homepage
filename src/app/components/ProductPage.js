import InquiryForm from './InquiryForm';

const button = 'inline-flex min-h-12 items-center justify-center gap-4 px-5 text-sm font-extrabold transition hover:-translate-y-0.5';
const kicker = 'mb-4 text-[11px] font-extrabold tracking-[.14em] text-[#1384ba]';

export default function ProductPage({ product }) {
  return (
    <main className="min-h-screen bg-[#f7f9fa] text-[#15253a]">
      <header className="sticky top-0 z-20 flex h-[82px] items-center justify-between border-b border-[#edf0f2] bg-white px-[clamp(24px,6vw,100px)] max-[760px]:h-[70px] max-[760px]:px-5">
        <a className="inline-flex items-center" href="/products" aria-label="한국도키멕 제품 페이지 처음으로"><img className="block w-[154px] max-[760px]:w-[133px]" src="/tokimec_logo.png" alt="한국도키멕 TOKIMEC" /></a>
        <nav className="flex gap-[34px] text-sm font-bold text-[#52616f] max-[760px]:hidden" aria-label="주요 메뉴"><a className="hover:text-[#075a9a]" href="/products">제품소개</a><a className="hover:text-[#075a9a]" href="#models">모델·사양</a><a className="hover:text-[#075a9a]" href="#catalog">카탈로그</a></nav>
        <a className="bg-[#15253a] px-4 py-[11px] text-[13px] font-bold text-white max-[760px]:hidden" href="#inquiry">기술 문의</a>
      </header>

      <section className="grid min-h-[570px] grid-cols-[1.08fr_.92fr] overflow-hidden bg-[linear-gradient(115deg,#e7f8fd_0%,#f7fcfd_55%,#e1f2f8_100%)] max-[760px]:grid-cols-1" id="top">
        <div className="px-[clamp(24px,7vw,110px)] pb-[70px] pt-[clamp(68px,10vw,140px)] max-[760px]:px-6 max-[760px]:pb-12 max-[760px]:pt-[66px]">
          <p className={kicker}>HYDRAULICS / PISTON PUMP / {product.series} SERIES</p>
          <p className="mb-9 text-xs text-[#6c7d88]">제품소개 <span className="px-[7px] text-[#2e93bd]">›</span> 유압 <span className="px-[7px] text-[#2e93bd]">›</span> 펌프 <span className="px-[7px] text-[#2e93bd]">›</span> 피스톤 펌프</p>
          <h1 className="mb-[10px] text-[clamp(42px,5vw,72px)] leading-[1.08] tracking-[-.075em]">{product.headline}</h1>
          <p className="text-[17px] font-semibold tracking-[.01em] text-[#39708a]">{product.englishTitle}</p>
          <p className="my-8 max-w-[500px] whitespace-pre-line break-keep text-[17px] leading-[1.75] text-[#455967]">{product.lead}</p>
          <div className="flex flex-wrap gap-[11px]"><a className={`${button} bg-[#075a9a] text-white`} href="#catalog">카탈로그 미리보기 ↓</a><a className={`${button} border border-[#9bb5c4]`} href={product.catalog} download>PDF 다운로드 ↗</a></div>
        </div>
        <div className="relative grid min-h-[470px] place-items-center overflow-hidden bg-[linear-gradient(140deg,#e5f5f9,#c7e7f1)] before:absolute before:h-[580px] before:w-[580px] before:rounded-full before:border before:border-[rgba(20,112,151,.18)] max-[760px]:min-h-[350px]">
          <div className="absolute right-[8%] top-[11%] z-[1] text-xs font-extrabold leading-[1.1] tracking-[.1em] text-[#0a6c9a]">SERIES<br /><strong className="text-[37px] tracking-[-.08em]">{product.series}</strong></div>
          <img className="relative aspect-[1.3] w-[min(88%,570px)] object-cover object-left-top mix-blend-multiply contrast-[1.06]" src={product.image} alt={product.imageAlt} />
          <p className="absolute bottom-[8%] right-[9%] m-0 whitespace-pre-line text-xs font-bold uppercase leading-[1.4] tracking-[.1em] text-[#3b7e9a]">{product.visualCaption}</p>
        </div>
      </section>

      <section className="relative z-[2] mx-auto mt-[-48px] grid max-w-[1240px] grid-cols-4 bg-white shadow-[0_19px_45px_rgba(24,66,89,.1)] max-[760px]:mt-0 max-[760px]:grid-cols-2" aria-label="핵심 사양">
        {[[product.pressureLabel, product.pressure], ['최고 회전수', '1,800 min⁻¹'], ['최대 이론용적', product.volume], ['카탈로그', `${product.pages} pages · ${product.size}`]].map(([label, value]) => <div className="min-h-[106px] border-b border-r border-[#e7edf0] px-[clamp(17px,2.3vw,36px)] py-7 last:border-r-0 max-[760px]:min-h-[92px] max-[760px]:p-[22px] max-[760px]:nth-[2]:border-r-0" key={label}><span className="mb-[9px] block text-xs text-[#6b7c87]">{label}</span><strong className="text-[clamp(16px,1.6vw,21px)] tracking-[-.04em] text-[#113a5c]">{value}</strong></div>)}
      </section>

      <section className="mx-auto grid max-w-[1240px] grid-cols-[.85fr_1.15fr] gap-[clamp(40px,8vw,150px)] px-8 py-[140px] max-[760px]:grid-cols-1 max-[760px]:px-6 max-[760px]:py-20">
        <div><p className={kicker}>PRODUCT OVERVIEW</p><h2 className="text-[clamp(34px,4vw,56px)] leading-[1.14] tracking-[-.065em]">{product.overviewTitle}</h2></div>
        <div><p className="max-w-[620px] break-keep text-[19px] leading-[1.9] text-[#53636e]">{product.overview}</p><div className="mt-[54px] border-t border-[#cdd9df]">{product.features.map(([number, title, body]) => <article className="grid grid-cols-[48px_140px_1fr] items-baseline gap-3 border-b border-[#dbe4e8] py-5 max-[760px]:grid-cols-[40px_1fr]" key={number}><span className="text-[13px] font-extrabold text-[#1986b6]">{number}</span><h3 className="m-0 text-base">{title}</h3><p className="m-0 text-sm text-[#697984] max-[760px]:col-start-2">{body}</p></article>)}</div></div>
      </section>

      <section className="grid grid-cols-[.9fr_1.1fr] gap-[clamp(40px,8vw,150px)] bg-white px-[max(32px,calc((100vw-1176px)/2))] py-[140px] max-[760px]:grid-cols-1 max-[760px]:px-6 max-[760px]:py-20" id="models">
        <div><p className={kicker}>MODEL LINE-UP</p><h2 className="text-[clamp(34px,4vw,56px)] leading-[1.14] tracking-[-.065em]">{product.series} 시리즈<br />모델 선택</h2><p className="mt-8 whitespace-pre-line text-sm leading-[1.65] text-[#647783]">{product.sideNote}</p></div>
        <div className="border-t-[3px] border-[#146d9d]"><div className="grid grid-cols-[1fr_1.4fr_95px] items-center gap-4 bg-[#eff7fa] px-5 py-4 text-xs font-bold text-[#6a7b86]"><span>형식</span><span>최대 이론용적</span></div>{product.models.map(([model, volume]) => <div className="grid min-h-[60px] grid-cols-[1fr_1.4fr_95px] items-center gap-4 border-b border-[#e0e8eb] px-5" key={model}><strong className="text-[17px] tracking-[.03em]">{model}</strong><span className="text-sm text-[#536d7c]">{volume}</span><a className="text-right text-[13px] font-extrabold text-[#0f74a8]" href="#inquiry">문의하기 →</a></div>)}<p className="mt-[22px] text-xs text-[#7b8991]">실제 선정은 운전 조건과 회로 사양을 기준으로 기술 검토가 필요합니다.</p></div>
      </section>

      <section className="grid min-h-[660px] grid-cols-[.86fr_1.14fr] bg-[#0c2c49] text-white max-[760px]:grid-cols-1" id="catalog">
        <div className="flex flex-col justify-center p-[clamp(60px,9vw,130px)] max-[760px]:px-6 max-[760px]:pb-[34px] max-[760px]:pt-[74px]"><p className={`${kicker} text-[#7ed8f3]`}>CATALOGUE</p><h2 className="text-[clamp(34px,4vw,56px)] leading-[1.14] tracking-[-.065em]">{product.series} 시리즈<br />카탈로그를 확인하세요.</h2><p className="my-[26px] max-w-[410px] break-keep text-[17px] leading-[1.75] text-[#b7cbd6]">{product.catalogCopy}</p><div className="flex flex-wrap gap-[11px]"><a className={`${button} bg-[#1c92c2] text-white`} href={product.catalog} target="_blank" rel="noreferrer">새 창에서 보기 ↗</a><a className="self-center text-sm font-bold text-[#d9edf6]" href={product.catalog} download>PDF 다운로드 ↓</a></div><p className="mt-7 text-xs text-[#7d9aac]">국문 · {product.pages} pages · {product.size}</p><a className="mt-[22px] inline-flex w-fit items-center gap-[10px] text-sm font-extrabold text-[#9dddf2] hover:text-white" href={product.relatedHref}>{product.relatedLabel} →</a></div>
        <div className="min-h-[620px] bg-[#d6eaf1] p-[34px] max-[760px]:hidden"><iframe className="h-full min-h-[552px] w-full border-0 bg-white shadow-[0_16px_35px_rgba(9,44,69,.24)]" title={`${product.series} 시리즈 카탈로그 미리보기`} src={`${product.catalog}#page=1`} /></div>
        <div className="hidden min-h-[310px] flex-col items-start gap-[15px] bg-[linear-gradient(135deg,#d8f1f8,#edf9fc)] px-6 py-[42px] text-[#15253a] max-[760px]:flex"><p className="m-0 text-xs font-extrabold tracking-[.1em] text-[#147fac]">국문 카탈로그</p><strong className="text-[25px] tracking-[-.05em]">{product.series} 시리즈 카탈로그</strong><span className="text-[13px] text-[#617887]">{product.pages} pages · {product.size}</span><a className={`${button} mt-[10px] w-full bg-[#075a9a] text-white`} href={product.catalog} target="_blank" rel="noreferrer">PDF 새 창 열기 ↗</a><a className="self-center text-sm font-extrabold text-[#1e658a]" href={product.catalog} download>PDF 다운로드 ↓</a><a className="self-center text-sm font-extrabold text-[#1e658a]" href={product.relatedHref}>{product.relatedLabel} →</a></div>
      </section>

      <section className="bg-[#e4f6fb] px-8 py-[118px] text-center max-[760px]:px-[18px] max-[760px]:py-[82px]" id="inquiry"><p className={kicker}>PRODUCT INQUIRY</p><h2 className="mx-auto mb-[37px] text-[clamp(34px,4vw,56px)] leading-[1.14] tracking-[-.065em]">적용 조건을 알려주시면<br />적합한 모델 선정을 돕겠습니다.</h2><InquiryForm seriesName={`${product.series} 시리즈`} /></section>
      <footer className="flex min-h-[150px] items-center justify-between gap-6 border-t border-[#e1e8eb] bg-white px-[max(32px,calc((100vw-1176px)/2))] py-[38px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:px-6 max-[760px]:py-7"><img className="w-[135px]" src="/tokimec_logo.png" alt="한국도키멕 TOKIMEC" /><p className="m-0 max-w-[490px] text-xs leading-[1.65] text-[#71808a]">본 페이지는 제공된 {product.series} 시리즈 카탈로그를 바탕으로 제작한 제품 상세 페이지 예시입니다.</p><a className="text-xs font-extrabold text-[#526a7a]" href="#top">맨 위로 ↑</a></footer>
    </main>
  );
}
