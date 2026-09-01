const resourcePriority={catalog:1,outline:2,structure:3,'2d':4,'3d':5,manual:6};
const activeResource=(button)=>button.dataset.available==='true'&&Boolean(button.dataset.file);
const resourceGrid=document.querySelector('[data-resource-grid]');
const modal=document.querySelector('[data-resource-modal]');
let selectedResource=null;

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

document.querySelectorAll('.visual-caption,.spec-table th').forEach((element)=>{
  element.innerHTML=element.innerHTML.replace(/\\n/g,'<br>');
});

if(resourceGrid){
  const resources=[...resourceGrid.querySelectorAll('[data-resource]')];
  resources.forEach((button)=>{
    const available=activeResource(button);
    const label=button.dataset.label;
    button.classList.toggle('is-active',available);
    button.classList.toggle('is-disabled',!available);
    button.disabled=!available;
    button.querySelector('[data-resource-label]').textContent=available?label:`${label} 준비중`;
  });
  resources.sort((first,second)=>{
    const availability=Number(activeResource(second))-Number(activeResource(first));
    return availability||resourcePriority[first.dataset.resource]-resourcePriority[second.dataset.resource];
  }).forEach((button)=>resourceGrid.append(button));
}

function closeResourceModal(){
  selectedResource=null;
  modal?.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}

function openResourceModal(button){
  if(!modal||!activeResource(button))return;
  selectedResource=button;
  const action=button.dataset.action==='download'?'다운로드':'새 창에서 열기';
  modal.querySelector('[data-modal-resource]').textContent=button.dataset.label;
  modal.querySelector('[data-modal-action]').textContent=action;
  modal.querySelector('[data-modal-confirm]').textContent=`확인 후 ${action} ↗`;
  modal.classList.add('is-open');
  document.body.classList.add('modal-open');
  modal.querySelector('[data-modal-confirm]').focus();
}

document.querySelectorAll('[data-resource]').forEach((button)=>button.addEventListener('click',()=>openResourceModal(button)));
document.querySelectorAll('[data-show-resources]').forEach((button)=>button.addEventListener('click',()=>{
  const top=document.getElementById('top');
  if(!top)return;
  top.scrollIntoView({behavior:'smooth',block:'start'});
  const startedAt=Date.now();
  const show=()=>{
    if(Math.abs(top.getBoundingClientRect().top)<=8||Date.now()-startedAt>=1400){
      document.querySelectorAll('[data-resource].is-active').forEach((item)=>item.classList.add('is-highlighted'));
      window.setTimeout(()=>document.querySelectorAll('[data-resource]').forEach((item)=>item.classList.remove('is-highlighted')),1600);
      return;
    }
    window.setTimeout(show,80);
  };
  window.setTimeout(show,350);
}));

modal?.querySelector('[data-modal-close]').addEventListener('click',closeResourceModal);
modal?.querySelector('[data-modal-cancel]').addEventListener('click',closeResourceModal);
modal?.querySelector('[data-modal-confirm]').addEventListener('click',()=>{
  if(!selectedResource)return;
  const link=document.createElement('a');
  link.href=selectedResource.dataset.file;
  if(selectedResource.dataset.action==='download'){link.download='';}else{link.target='_blank';link.rel='noreferrer';}
  document.body.append(link);link.click();link.remove();closeResourceModal();
});
window.addEventListener('keydown',(event)=>{if(event.key==='Escape')closeResourceModal();});
/* HTML v1 interactions */
