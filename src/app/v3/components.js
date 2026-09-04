"use client";

import { useEffect, useState } from "react";

// V3 모든 페이지가 공유하는 내비게이션 구조와 헤더·푸터 컴포넌트입니다.
const menus = [
  { key: "home", label: "홈", href: "/v3" },
  {
    key: "business",
    label: "사업&제품정보",
    href: "/v3/business-products",
    children: [
      { label: "사업소개", href: "/v3/business-products" },
      { label: "유압", href: "/v3/business-products" },
      { label: "서보제어시스템", href: "/v3/business-products" },
      { label: "실린더", href: "/v3/business-products" },
      { label: "PLANT", href: "/v3/business-products" },
      { label: "공압", href: "/v3/business-products" },
      { label: "측정시스템", href: "/v3/business-products" },
      { label: "FA자동화", href: "/v3/business-products" },
      { label: "취급상품", href: "/v3/business-products" },
    ],
  },
  {
    key: "support",
    label: "고객지원",
    href: "/v3/customer-support",
    children: [
      { label: "공지&뉴스", href: "/v3/customer-support" },
      { label: "자료실", href: "/v3/customer-support" },
      { label: "Q&A", href: "/v3/customer-support" },
    ],
  },
  {
    key: "recruit",
    label: "인재채용",
    href: "/v3/recruit",
    children: [
      { label: "채용안내", href: "/v3/recruit" },
      { label: "인재상", href: "/v3/recruit" },
      { label: "채용Q&A", href: "/v3/recruit" },
    ],
  },
  {
    key: "company",
    label: "회사소개",
    href: "/v3/company",
    children: [
      { label: "개요", href: "/v3/company" },
      { label: "CEO", href: "/v3/company" },
      { label: "경영방침", href: "/v3/company" },
      { label: "연혁", href: "/v3/company" },
      { label: "사업장", href: "/v3/company" },
    ],
  },
];

// active로 현재 메뉴를 표시하고, overlay는 메인 히어로 위 투명 헤더에만 사용합니다.
export function V3Header({ active = "home", overlay = false }) {
  const [isScrolled, setIsScrolled] = useState(false);

  // 투명 헤더는 스크롤 뒤 흰 배경으로 바꿔 메뉴 가독성을 확보합니다.
  useEffect(() => {
    if (!overlay) return;
    const sync = () => setIsScrolled(window.scrollY > 20);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, [overlay]);

  // 스크롤 상태에 따라 위치와 글자 색상 클래스를 조합합니다.
  const position = overlay
    ? isScrolled
      ? "fixed inset-x-0 top-0 h-[151px] bg-white shadow-[0_1px_0_rgba(0,0,0,.025)] max-[760px]:relative max-[760px]:h-[115px]"
      : "absolute inset-x-0 top-0 bg-transparent max-[760px]:relative max-[760px]:h-[115px] max-[760px]:bg-white"
    : "relative bg-white";
  const navColor =
    overlay && !isScrolled
      ? "text-white max-[760px]:text-[#303030]"
      : "text-[#363636]";

  return (
    <header
      className={`z-20 block h-[162px] border-0 p-0 ${position} max-[760px]:h-[115px]`}
    >
      <a
        className="absolute left-[clamp(24px,4.74vw,60px)] top-[60px] block h-[61px] w-[150px] max-[760px]:left-[17px] max-[760px]:top-2 max-[760px]:h-12 max-[760px]:w-[118px]"
        href="/v3"
        aria-label="한국도키멕 홈"
      >
        <img
          className="h-[61px] w-[150px] object-contain max-[760px]:h-12 max-[760px]:w-[118px]"
          src="/tokimec_logo.png"
          alt="한국도키멕 TOKIMEC"
        />
      </a>
      <nav
        className={`absolute left-[calc(50%-226px)] top-12 flex h-[90px] gap-0 text-sm font-normal ${navColor} max-[760px]:left-0 max-[760px]:top-[68px] max-[760px]:h-[47px] max-[760px]:w-full max-[760px]:justify-start max-[760px]:overflow-x-auto max-[760px]:overflow-y-hidden max-[760px]:border-y max-[760px]:border-[#ececec] max-[760px]:text-xs max-[760px]:[scrollbar-width:none]`}
        aria-label="주요 메뉴"
      >
        {menus.map((menu) => (
          <div
            className="group relative flex h-[90px] max-[760px]:h-[46px] max-[760px]:shrink-0"
            key={menu.key}
          >
            <a
              className={`grid h-[90px] min-w-[116px] place-items-center whitespace-nowrap px-[18px] hover:font-bold max-[760px]:h-[46px] max-[760px]:min-w-0 max-[760px]:px-[15px] max-[760px]:text-xs ${menu.key === "home" ? "min-w-[56px]" : ""} ${menu.key === "business" ? "min-w-[172px]" : ""} ${active === menu.key ? "font-bold" : ""}`}
              href={menu.href}
            >
              {menu.label}
            </a>
            {menu.children && (
              <div className="pointer-events-none absolute left-1/2 top-[90px] grid w-40 -translate-x-1/2 bg-white/[.97] py-[9px] text-[#303030] opacity-0 shadow-[0_8px_15px_rgba(0,0,0,.08)] transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 max-[760px]:hidden">
                {menu.children.map((child) => (
                  <a
                    className="block h-auto min-w-0 whitespace-nowrap px-4 py-[7px] text-xs leading-[1.15] hover:bg-[#f3f3f3] hover:text-[#111]"
                    href={child.href}
                    key={child.label}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

// 메뉴 데이터와 회사 정보를 재사용하는 V3 공용 푸터입니다.
export function V3Footer() {
  return (
    <footer className="flex min-h-0 flex-col items-center gap-0 bg-white px-5 pb-2 pt-[25px] text-center text-[11px] text-[#4a4a4a] max-[760px]:px-[15px] max-[760px]:pb-[13px] max-[760px]:pt-[31px]">
      <div className="mb-3 flex gap-[7px]" aria-label="SNS 바로가기">
        <a
          className="grid h-[18px] w-[18px] place-items-center rounded-full bg-[#3d3d3d] text-[9px] font-extrabold leading-none text-white"
          href="https://blog.naver.com/tokimec"
          target="_blank"
          rel="noreferrer"
          aria-label="네이버 블로그"
        >
          N
        </a>
        <a
          className="grid h-[18px] w-[18px] place-items-center rounded-full bg-[#3d3d3d] text-[9px] font-extrabold leading-none text-white"
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="유튜브"
        >
          ▶
        </a>
      </div>
      <nav
        className="mb-[10px] flex gap-0 max-[760px]:flex-wrap max-[760px]:justify-center max-[760px]:gap-y-[7px]"
        aria-label="하단 메뉴"
      >
        {menus.map((menu) => (
          <a
            className="border-r border-[#d1d1d1] px-[7px] leading-none last:border-0"
            href={menu.href}
            key={menu.key}
          >
            {menu.label}
          </a>
        ))}
      </nav>
      <div>
        <strong className="font-normal">한국도키멕주식회사</strong>
        <p className="mb-0 mt-[3px] leading-[1.2] text-[#707070] max-[760px]:text-[10px]">
          TEL) 02-2670-4632~6&nbsp;&nbsp;&nbsp; FAX) 02-2672-5712
        </p>
        <p className="mb-0 mt-[3px] leading-[1.2] text-[#707070] max-[760px]:text-[10px]">
          서울시 영등포구 선유로70 우리벤처타운II
        </p>
        <p className="mb-0 mt-[3px] leading-[1.2] text-[#707070] max-[760px]:text-[10px]">
          Copyright (c) TOKIMEC KOREA POWER CONTROL CO., LTD All right reserved.
        </p>
      </div>
      <div className="mt-[9px] flex gap-[13px]">
        <a href="/v3">이용약관</a>
        <a href="/v3">개인정보처리방침</a>
      </div>
      <small className="mt-3 text-[10px] text-[#8c8c8c] max-[760px]:mt-[14px]">
        Copyright ⓒ 2026 한국도키멕주식회사 All rights reserved.
      </small>
    </footer>
  );
}
