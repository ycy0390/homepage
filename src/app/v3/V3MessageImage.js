'use client';

import { useEffect, useState } from 'react';

export default function V3MessageImage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section className="grid place-items-center bg-transparent px-6 pb-[30px] pt-[95px] max-[760px]:px-4 max-[760px]:pb-4 max-[760px]:pt-[43px]">
      <button className="w-[min(781px,100%)] cursor-zoom-in border-0 bg-transparent p-0 max-[760px]:w-full" type="button" onClick={() => setIsOpen(true)} aria-label="함께라서 멀리갈 수 있습니다 이미지 확대">
        <img className="block aspect-[781/157] h-auto w-full object-contain" src="/v3-message.jpg" alt="함께라서 멀리갈 수 있습니다" />
      </button>
      {isOpen && <div className="fixed inset-0 z-[100] grid cursor-zoom-out place-items-center bg-[rgba(8,14,18,.86)] p-[30px] max-[760px]:px-3 max-[760px]:py-5" role="dialog" aria-modal="true" aria-label="확대 이미지" onClick={() => setIsOpen(false)}>
        <button className="fixed right-[25px] top-[19px] h-[42px] w-[42px] cursor-pointer border-0 bg-transparent text-4xl leading-none text-white max-[760px]:right-2 max-[760px]:top-[7px]" type="button" onClick={() => setIsOpen(false)} aria-label="확대 이미지 닫기">×</button>
        <img className="max-h-[82vh] w-[min(1100px,92vw)] cursor-default object-contain shadow-[0_18px_55px_rgba(0,0,0,.38)] max-[760px]:max-h-none max-[760px]:w-full" src="/v3-message.jpg" alt="함께라서 멀리갈 수 있습니다" onClick={(event) => event.stopPropagation()} />
      </div>}
    </section>
  );
}
