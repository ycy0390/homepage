document.querySelectorAll('[data-menu]').forEach((button)=>button.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open')));

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

const catalogPreviewMedia=window.matchMedia('(min-width: 761px)');
const loadCatalogPreviews=()=>{
  if(!catalogPreviewMedia.matches)return;
  document.querySelectorAll('iframe[data-catalog-src]').forEach((iframe)=>{
    if(!iframe.hasAttribute('src'))iframe.src=iframe.dataset.catalogSrc;
  });
};
loadCatalogPreviews();
catalogPreviewMedia.addEventListener?.('change',loadCatalogPreviews);
// HTML v2 interactions
