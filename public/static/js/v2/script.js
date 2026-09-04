// HTML V2 공용 상호작용: 모바일 메뉴, 시안 선택 링크, 카탈로그 미리보기를 관리합니다.
// 작은 화면에서는 메뉴 버튼으로 내비게이션을 열고 닫습니다.
document.querySelectorAll('[data-menu]').forEach((button)=>button.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open')));

// 정적 헤더에만 시안 선택 링크를 한 번 삽입합니다.
const staticHeader=document.querySelector('.header');
if(staticHeader&&!staticHeader.querySelector('[data-version-index-link]')){
  const versionIndexLink=document.createElement('a');
  versionIndexLink.className='version-index-link';
  versionIndexLink.href='../../index.html';
  versionIndexLink.dataset.versionIndexLink='';
  versionIndexLink.setAttribute('aria-label','홈페이지 시안 선택 화면으로 이동');
  versionIndexLink.textContent='시안 선택';
  const brandLink=staticHeader.querySelector('a');
  staticHeader.insertBefore(versionIndexLink,brandLink?.nextSibling??null);
}

// 대형 화면에서만 외부 카탈로그 iframe을 불러와 작은 화면의 불필요한 로드를 줄입니다.
const catalogPreviewMedia=window.matchMedia('(min-width: 761px)');
const loadCatalogPreviews=()=>{
  if(!catalogPreviewMedia.matches)return;
  document.querySelectorAll('iframe[data-catalog-src]').forEach((iframe)=>{
    if(!iframe.hasAttribute('src'))iframe.src=iframe.dataset.catalogSrc;
  });
};
// 화면 크기가 바뀌어도 조건을 만족하면 아직 로드하지 않은 미리보기만 추가합니다.
loadCatalogPreviews();
catalogPreviewMedia.addEventListener?.('change',loadCatalogPreviews);
// HTML v2 interactions
