// HTML V1 공용 상호작용: 제품 자료의 상태·표시 순서·모달 안내를 한 곳에서 관리합니다.
// 활성 자료는 준비 중 자료보다 먼저 보이도록 유형별 우선순위를 둡니다.
const resourcePriority={catalog:1,outline:2,structure:3,'2d':4,'3d':5,manual:6};
// data 속성에 실제 파일과 공개 여부가 모두 있어야 링크 가능한 자료로 판단합니다.
const activeResource=(button)=>button.dataset.available==='true'&&Boolean(button.dataset.file);
const resourceGrid=document.querySelector('[data-resource-grid]');
const modal=document.querySelector('[data-resource-modal]');
let selectedResource=null;

// 정적 페이지마다 반복된 헤더에만 시안 선택 링크를 한 번 삽입합니다.
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

// 원본 마크업의 줄바꿈 표기를 화면용 줄바꿈으로 변환합니다.
document.querySelectorAll('.visual-caption,.spec-table th').forEach((element)=>{
  element.innerHTML=element.innerHTML.replace(/\\n/g,'<br>');
});

// 자료 버튼의 활성 상태·안내 문구·정렬 순서를 초기화합니다.
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

// 선택 대상은 하나만 유지해 모달의 확인 동작이 정확한 파일을 가리키게 합니다.
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

// 각 자료 버튼은 파일을 바로 열지 않고, 먼저 동작을 확인하는 모달을 표시합니다.
document.querySelectorAll('[data-resource]').forEach((button)=>button.addEventListener('click',()=>openResourceModal(button)));
// 제품 상단의 바로가기 버튼은 자료 영역으로 부드럽게 이동한 뒤 사용 가능한 자료를 잠시 강조합니다.
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

// 확인 시 data-action에 따라 새 창 열기와 다운로드를 구분합니다.
modal?.querySelector('[data-modal-close]').addEventListener('click',closeResourceModal);
modal?.querySelector('[data-modal-cancel]').addEventListener('click',closeResourceModal);
modal?.querySelector('[data-modal-confirm]').addEventListener('click',()=>{
  if(!selectedResource)return;
  const link=document.createElement('a');
  link.href=selectedResource.dataset.file;
  if(selectedResource.dataset.action==='download'){link.download='';}else{link.target='_blank';link.rel='noreferrer';}
  document.body.append(link);link.click();link.remove();closeResourceModal();
});
// 키보드 사용자도 Escape 키로 모달을 닫을 수 있습니다.
window.addEventListener('keydown',(event)=>{if(event.key==='Escape')closeResourceModal();});
/* HTML v1 interactions */
