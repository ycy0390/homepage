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
// HTML v2 interactions
