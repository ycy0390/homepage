"use client";

import { useEffect, useState } from "react";

const slides = Array.from(
  { length: 9 },
  (_, index) => `/v3-recruit-slide-${String(index + 1).padStart(2, "0")}.png`,
);

export default function RecruitGallery() {
  const [active, setActive] = useState(5);
  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);
  return (
    <section
      className="relative mx-auto h-[266px] w-[min(1235px,calc(100%-60px))] overflow-hidden max-[760px]:h-[235px] max-[760px]:w-full"
      aria-label="한국도키멕 업무 현장 사진"
    >
      <img
        className="block h-full w-full object-cover"
        src={slides[active]}
        alt="한국도키멕 업무 현장"
      />{" "}
      <div className="absolute bottom-[17px] right-[23px] flex gap-[6px]">
        {slides.map((_, index) => (
          <button
            aria-label={`${index + 1}번 사진 보기`}
            className={`h-[6px] w-[6px] cursor-pointer rounded-full border-0 p-0 ${index === active ? "scale-[1.3] bg-white" : "bg-white/60"}`}
            onClick={() => setActive(index)}
            key={index}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
