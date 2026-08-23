'use client';

import { useEffect, useState } from 'react';

const slides = [
  { image: '/v3-hero-press.jpg', label: '1번 메인 이미지' },
  { image: '/v3-hero-indexpack.png', label: '2번 메인 이미지' },
  { image: '/v3-hero-hydraulic.png', label: '3번 메인 이미지' },
  { image: '/v3-hero-cylinder.png', label: '4번 메인 이미지' },
];

export default function V3Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => { const id = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 6000); return () => window.clearInterval(id); }, []);
  const slide = slides[active];
  return <section className="relative min-h-[min(72vw,912px)] bg-cover bg-center transition-[background-image] duration-500 max-[760px]:min-h-[300px]" style={{ backgroundImage: `url(${slide.image})` }} aria-label={slide.label}><div className="absolute bottom-[26px] right-[clamp(24px,6vw,95px)] flex gap-[18px] max-[760px]:bottom-4 max-[760px]:right-[18px] max-[760px]:gap-[13px]">{slides.map((item, index) => <button key={item.label} type="button" className={`border-0 border-b-2 bg-transparent pb-2 text-xs font-extrabold text-white/80 [text-shadow:0_1px_5px_rgba(0,0,0,.8)] ${index === active ? 'border-b-white' : 'border-b-transparent'}`} onClick={() => setActive(index)} aria-label={`${index + 1}번 슬라이드 보기`}>0{index + 1}</button>)}</div></section>;
}
