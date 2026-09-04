// HTML V3 공용 상호작용: 공통 헤더·푸터와 각 페이지의 시각적 보조 기능을 초기화합니다.
// data-header의 속성으로 현재 메뉴와 히어로 위 투명 헤더 사용 여부를 페이지별로 지정합니다.
const header = document.querySelector('[data-header]');
if (header) {
  const active = header.dataset.active || 'home';
  const overlay = header.dataset.overlay === 'true';
  // 메뉴 구조는 이 배열에서 관리해 모든 V3 페이지가 같은 내비게이션을 사용하게 합니다.
  const menus = [
    ['home', '홈', 'index.html', []],
    ['business', '사업&제품정보', 'business-products.html', [['사업소개', 'business-products.html'], ['유압', 'business-products.html'], ['피스톤 펌프', 'business-products.html#piston-pump']]],
    ['support', '고객지원', 'support.html', [['공지&뉴스', 'support.html'], ['자료실', 'support.html'], ['Q&A', 'support.html']]],
    ['recruit', '인재채용', 'recruit.html', [['채용안내', 'recruit.html'], ['인재상', 'recruit.html'], ['채용Q&A', 'recruit.html']]],
    ['company', '회사소개', 'company.html', [['개요', 'company.html'], ['CEO', 'company.html'], ['경영방침', 'company.html']]],
  ];

  // 공용 헤더 마크업을 한 번 주입하고 현재 페이지 메뉴만 활성 상태로 표시합니다.
  header.className = `header${overlay ? ' overlay' : ''}`;
  header.innerHTML = `<a class="brand" href="index.html"><img src="../../tokimec_logo.png" alt="한국도키멕"></a><a class="version-index-link" href="../../index.html" aria-label="홈페이지 시안 선택 화면으로 이동">시안 선택</a><nav class="nav">${menus.map(([key, label, href, children]) => `<div class="nav-item ${active === key ? 'active' : ''}"><a href="${href}">${label}</a>${children.length ? `<div class="submenu">${children.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</div>` : ''}</div>`).join('')}</nav>`;

  // 메인 히어로 위 헤더는 스크롤 후 읽기 쉬운 배경 상태로 전환합니다.
  if (overlay) {
    const sync = () => header.classList.toggle('scrolled', scrollY > 20);
    addEventListener('scroll', sync, { passive: true });
    sync();
  }
}
// 상세 페이지의 PDF 미리보기는 넓은 화면에서만 지연 로드합니다.
const catalogPreviewMedia = window.matchMedia('(min-width: 761px)');
const loadCatalogPreviews = () => {
  if (!catalogPreviewMedia.matches) return;
  document.querySelectorAll('iframe[data-catalog-src]').forEach((iframe) => {
    if (!iframe.hasAttribute('src')) iframe.src = iframe.dataset.catalogSrc;
  });
};
loadCatalogPreviews();
catalogPreviewMedia.addEventListener?.('change', loadCatalogPreviews);
// data-footer가 있는 모든 페이지에 동일한 연락처·바로가기 정보를 삽입합니다.
document.querySelectorAll('[data-footer]').forEach((footer) => { footer.className = 'footer'; footer.innerHTML = '<div class="footer-social"><a href="https://blog.naver.com/tokimec">N</a><a href="https://youtube.com">▶</a></div><nav><a href="index.html">홈</a><a href="business-products.html">사업&제품정보</a><a href="support.html">고객지원</a><a href="recruit.html">인재채용</a><a href="company.html">회사소개</a><a href="../../versions.html">6개 버전</a></nav><p>한국도키멕주식회사</p><p>TEL) 02-2670-4632~6 · FAX) 02-2672-5712</p><p>서울시 영등포구 선유로70 우리벤처타운II</p><small>Copyright ⓒ 2026 한국도키멕주식회사 All rights reserved.</small>' });
// 메인 히어로는 버튼 선택과 자동 전환을 모두 지원합니다.
const hero = document.querySelector('[data-hero]'); if (hero) { const slides = ['../../v3-hero-press.jpg', '../../v3-hero-indexpack.png', '../../v3-hero-hydraulic.png', '../../v3-hero-cylinder.png']; let active = 0; const controls = document.createElement('div'); controls.className = 'hero-controls'; controls.innerHTML = slides.map((_, i) => `<button class="${i === 0 ? 'active' : ''}" data-slide="${i}">0${i + 1}</button>`).join(''); hero.append(controls); const show = (i) => { active = i; hero.style.backgroundImage = `url(${slides[i]})`; controls.querySelectorAll('button').forEach((b, n) => b.classList.toggle('active', n === i)) }; controls.addEventListener('click', (e) => { const b = e.target.closest('[data-slide]'); if (b) show(Number(b.dataset.slide)) }); show(0); setInterval(() => show((active + 1) % slides.length), 6000) }
// 이미지 확대창은 배경 클릭·닫기 버튼·Escape 키 모두로 닫을 수 있습니다.
const trigger = document.querySelector('[data-lightbox-trigger]'), lightbox = document.querySelector('[data-lightbox]'); if (trigger && lightbox) { trigger.addEventListener('click', () => lightbox.classList.add('open')); lightbox.addEventListener('click', (e) => { if (e.target === lightbox || e.target.closest('button')) lightbox.classList.remove('open') }); addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('open') }) }
// 채용 페이지의 현장 이미지는 점 버튼과 자동 전환으로 탐색합니다.
const recruitImage = document.querySelector('[data-recruit-image]'); if (recruitImage) { const slides = Array.from({ length: 9 }, (_, i) => `../../v3-recruit-slide-${String(i + 1).padStart(2, '0')}.png`); let active = 5; const dots = document.querySelector('.recruit-dots'); const show = (i) => { active = i; recruitImage.src = slides[i]; dots.querySelectorAll('button').forEach((b, n) => b.classList.toggle('active', n === i)) }; dots.innerHTML = slides.map((_, i) => `<button data-recruit-slide="${i}" aria-label="${i + 1}번 사진"></button>`).join(''); dots.addEventListener('click', (e) => { const b = e.target.closest('[data-recruit-slide]'); if (b) show(Number(b.dataset.recruitSlide)) }); show(active); setInterval(() => show((active + 1) % slides.length), 5000) }
// 고객지원 시안의 검색은 서버 요청 없이 예시 게시글 제목만 즉시 필터링합니다.
const search = document.querySelector('[data-board-search]'); if (search) search.addEventListener('input', () => { const query = search.value.trim().toLowerCase(); document.querySelectorAll('.row[data-title]').forEach((row) => row.hidden = !row.dataset.title.toLowerCase().includes(query)) });
// HTML v3 interactions
