const header = document.querySelector('[data-header]');
if (header) {
  const active = header.dataset.active || 'home';
  const overlay = header.dataset.overlay === 'true';
  const menus = [
    ['home', '홈', 'index.html', []],
    ['business', '사업&제품정보', 'business-products.html', [['사업소개', 'business-products.html'], ['유압', 'business-products.html'], ['피스톤 펌프', 'business-products.html#piston-pump']]],
    ['support', '고객지원', 'support.html', [['공지&뉴스', 'support.html'], ['자료실', 'support.html'], ['Q&A', 'support.html']]],
    ['recruit', '인재채용', 'recruit.html', [['채용안내', 'recruit.html'], ['인재상', 'recruit.html'], ['채용Q&A', 'recruit.html']]],
    ['company', '회사소개', 'company.html', [['개요', 'company.html'], ['CEO', 'company.html'], ['경영방침', 'company.html']]],
  ];

  header.className = `header${overlay ? ' overlay' : ''}`;
  header.innerHTML = `<a class="brand" href="index.html"><img src="../../tokimec_logo.png" alt="한국도키멕"></a><nav class="nav">${menus.map(([key, label, href, children]) => `<div class="nav-item ${active === key ? 'active' : ''}"><a href="${href}">${label}</a>${children.length ? `<div class="submenu">${children.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</div>` : ''}</div>`).join('')}</nav><a class="version-index-link" href="../../index.html" aria-label="홈페이지 시안 선택 화면으로 이동">시안 선택</a>`;

  if (overlay) {
    const sync = () => header.classList.toggle('scrolled', scrollY > 20);
    addEventListener('scroll', sync, { passive: true });
    sync();
  }
}
document.querySelectorAll('[data-footer]').forEach((footer) => { footer.className = 'footer'; footer.innerHTML = '<div class="footer-social"><a href="https://blog.naver.com/tokimec">N</a><a href="https://youtube.com">▶</a></div><nav><a href="index.html">홈</a><a href="business-products.html">사업&제품정보</a><a href="support.html">고객지원</a><a href="recruit.html">인재채용</a><a href="company.html">회사소개</a><a href="../../versions.html">6개 버전</a></nav><p>한국도키멕주식회사</p><p>TEL) 02-2670-4632~6 · FAX) 02-2672-5712</p><p>서울시 영등포구 선유로70 우리벤처타운II</p><small>Copyright ⓒ 2026 한국도키멕주식회사 All rights reserved.</small>' });
const hero = document.querySelector('[data-hero]'); if (hero) { const slides = ['../../v3-hero-press.jpg', '../../v3-hero-indexpack.png', '../../v3-hero-hydraulic.png', '../../v3-hero-cylinder.png']; let active = 0; const controls = document.createElement('div'); controls.className = 'hero-controls'; controls.innerHTML = slides.map((_, i) => `<button class="${i === 0 ? 'active' : ''}" data-slide="${i}">0${i + 1}</button>`).join(''); hero.append(controls); const show = (i) => { active = i; hero.style.backgroundImage = `url(${slides[i]})`; controls.querySelectorAll('button').forEach((b, n) => b.classList.toggle('active', n === i)) }; controls.addEventListener('click', (e) => { const b = e.target.closest('[data-slide]'); if (b) show(Number(b.dataset.slide)) }); show(0); setInterval(() => show((active + 1) % slides.length), 6000) }
const trigger = document.querySelector('[data-lightbox-trigger]'), lightbox = document.querySelector('[data-lightbox]'); if (trigger && lightbox) { trigger.addEventListener('click', () => lightbox.classList.add('open')); lightbox.addEventListener('click', (e) => { if (e.target === lightbox || e.target.closest('button')) lightbox.classList.remove('open') }); addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('open') }) }
const recruitImage = document.querySelector('[data-recruit-image]'); if (recruitImage) { const slides = Array.from({ length: 9 }, (_, i) => `../../v3-recruit-slide-${String(i + 1).padStart(2, '0')}.png`); let active = 5; const dots = document.querySelector('.recruit-dots'); const show = (i) => { active = i; recruitImage.src = slides[i]; dots.querySelectorAll('button').forEach((b, n) => b.classList.toggle('active', n === i)) }; dots.innerHTML = slides.map((_, i) => `<button data-recruit-slide="${i}" aria-label="${i + 1}번 사진"></button>`).join(''); dots.addEventListener('click', (e) => { const b = e.target.closest('[data-recruit-slide]'); if (b) show(Number(b.dataset.recruitSlide)) }); show(active); setInterval(() => show((active + 1) % slides.length), 5000) }
const search = document.querySelector('[data-board-search]'); if (search) search.addEventListener('input', () => { const query = search.value.trim().toLowerCase(); document.querySelectorAll('.row[data-title]').forEach((row) => row.hidden = !row.dataset.title.toLowerCase().includes(query)) });
// HTML v3 interactions
