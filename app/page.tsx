const modelRows = [
  ['P16V', '16 cm³/rev'],
  ['P21V', '21 cm³/rev'],
  ['P31V', '31 cm³/rev'],
  ['P40V', '40 cm³/rev'],
  ['P70V', '70 cm³/rev'],
  ['P100V', '100 cm³/rev'],
  ['P130V', '130 cm³/rev'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="한국도키멕 제품 페이지 처음으로">
          <span className="brand-mark" aria-hidden="true">+</span>
          <span>TOKIMEC <small>KOREA</small></span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#overview">제품소개</a>
          <a href="#models">모델·사양</a>
          <a href="#catalog">카탈로그</a>
        </nav>
        <a className="header-contact" href="mailto:tokimec@tokimec.co.kr">기술 문의</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">HYDRAULICS / PISTON PUMP / P**V SERIES</p>
          <p className="breadcrumb">제품소개 <span>›</span> 유압 <span>›</span> 펌프 <span>›</span> 피스톤 펌프</p>
          <h1>저소음 가변용량형<br />피스톤 펌프</h1>
          <p className="english-title">Low noise variable displacement piston pumps</p>
          <p className="lead">
            전기 다이렉트 제어, 압력보상 제어, 로드센싱 제어 등
            다양한 제어 방식을 지원하는 P**V 시리즈입니다.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#catalog">카탈로그 미리보기 <span aria-hidden="true">↓</span></a>
            <a className="button secondary" href="/catalogs/variable-displacement-piston-pumps.pdf" download>
              PDF 다운로드 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-label">SERIES<br /><strong>P**V</strong></div>
          <img src="/piston-pump-pv-series.png" alt="P**V 시리즈 저소음 가변용량형 피스톤 펌프" />
          <p>Variable displacement<br />Piston pump</p>
        </div>
      </section>

      <section className="quick-specs" aria-label="핵심 사양">
        <div><span>최고 사용압력</span><strong>21 MPa</strong></div>
        <div><span>최고 회전수</span><strong>1,800 min⁻¹</strong></div>
        <div><span>최대 이론용적</span><strong>16 - 130 cm³/rev</strong></div>
        <div><span>카탈로그</span><strong>31 pages · 5.0 MB</strong></div>
      </section>

      <section className="section overview" id="overview">
        <div className="section-heading">
          <p className="section-kicker">PRODUCT OVERVIEW</p>
          <h2>낮은 소음과 정밀한<br />제어를 위한 유압 펌프</h2>
        </div>
        <div className="overview-copy">
          <p>
            P**V 시리즈는 고성능·고신뢰성을 갖춘 가변용량형 피스톤 펌프입니다.
            복합적인 유압 시스템에 대응할 수 있도록 다양한 제어 기능을 구성할 수 있습니다.
          </p>
          <div className="feature-list">
            <article><span>01</span><h3>저소음 설계</h3><p>저소음 운전이 필요한 장비 환경에 적합합니다.</p></article>
            <article><span>02</span><h3>다양한 제어</h3><p>전기 다이렉트·압력보상·로드센싱 제어를 지원합니다.</p></article>
            <article><span>03</span><h3>폭넓은 용적</h3><p>16부터 130 cm³/rev까지 모델을 선택할 수 있습니다.</p></article>
          </div>
        </div>
      </section>

      <section className="section models" id="models">
        <div className="section-heading">
          <p className="section-kicker">MODEL LINE-UP</p>
          <h2>P**V 시리즈<br />모델 선택</h2>
          <p className="side-note">최대 사용압력 21 MPa<br />최고 회전수 1,800 min⁻¹</p>
        </div>
        <div className="model-panel">
          <div className="model-panel-head"><span>형식</span><span>최대 이론용적</span></div>
          {modelRows.map(([model, volume]) => (
            <div className="model-row" key={model}>
              <strong>{model}</strong><span>{volume}</span><a href="mailto:tokimec@tokimec.co.kr?subject=P**V%20Series%20제품%20문의">문의하기 <b aria-hidden="true">→</b></a>
            </div>
          ))}
          <p className="model-note">실제 선정은 운전 조건과 회로 사양을 기준으로 기술 검토가 필요합니다.</p>
        </div>
      </section>

      <section className="catalog" id="catalog">
        <div className="catalog-copy">
          <p className="section-kicker">CATALOGUE</p>
          <h2>카탈로그를<br />바로 확인하세요.</h2>
          <p>전체 31페이지의 제품 선정표, 사용상 주의사항, 모델 형식 및 상세 사양을 확인할 수 있습니다.</p>
          <div className="catalog-actions">
            <a className="button primary" href="/catalogs/variable-displacement-piston-pumps.pdf" target="_blank" rel="noreferrer">새 창에서 보기 <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/catalogs/variable-displacement-piston-pumps.pdf" download>PDF 다운로드 <span aria-hidden="true">↓</span></a>
          </div>
          <p className="catalog-meta">국문 · 31 pages · 5.0 MB</p>
        </div>
        <div className="catalog-viewer">
          <iframe title="가변용량형 피스톤 펌프 카탈로그 미리보기" src="/catalogs/variable-displacement-piston-pumps.pdf#page=1" />
        </div>
      </section>

      <section className="contact-band">
        <p className="section-kicker">PRODUCT INQUIRY</p>
        <h2>적용 조건을 알려주시면<br />적합한 모델 선정을 돕겠습니다.</h2>
        <a className="button light" href="mailto:tokimec@tokimec.co.kr?subject=P**V%20Series%20제품%20문의">P**V 시리즈 기술 문의 <span aria-hidden="true">→</span></a>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark" aria-hidden="true">+</span><span>TOKIMEC <small>KOREA</small></span></div>
        <p>본 페이지는 제공된 P**V 시리즈 카탈로그를 바탕으로 제작한 제품 상세 페이지 예시입니다.</p>
        <a href="#top">맨 위로 ↑</a>
      </footer>
    </main>
  );
}
