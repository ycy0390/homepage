"use client";

import { useMemo, useState } from "react";

// 실제 API 연동 전 화면 흐름을 검토할 수 있도록 둔 공지·뉴스 예시 데이터입니다.
const notices = [
  [
    "37",
    "[월간도키멕2026년7월호]2026년 하반기 팀장 워크샵",
    "2026-07-29",
    "63",
    "1",
  ],
  [
    "36",
    "[월간도키멕2026년6월호]안전보건관리체계 구축 컨설팅 진행등",
    "2026-06-24",
    "126",
    "1",
  ],
  [
    "35",
    "[월간도키멕2026년5월호]AI와 함께한 5월 4T 컨텐츠 미팅 현장 스케치",
    "2026-05-28",
    "95",
    "1",
  ],
  [
    "34",
    "[월간도키멕2026년4월호]4월 4T 컨텐츠 미팅 현장 스케치",
    "2026-04-30",
    "104",
    "1",
  ],
  [
    "33",
    "[월간도키멕2026년3월호]워터코리아 2026, 도키멕의 기술로 물 산업의 내일을 그리다.",
    "2026-03-31",
    "106",
    "1",
  ],
  [
    "32",
    "[월간도키멕2026년2월호]2026 병오년, 새로운 도약을 여는 사업 시무식",
    "2026-02-26",
    "177",
    "1",
  ],
  [
    "31",
    "[월간도키멕2026년1월호]경주에서 열린 26년 상반기 팀장워크샵 리뷰",
    "2026-01-28",
    "185",
    "1",
  ],
  [
    "30",
    "[월간도키멕2025년12월호]이달의 간추린 도키멕 뉴스",
    "2025-12-31",
    "148",
    "1",
  ],
  [
    "29",
    "[월간도키멕2025년11월호]하나된 도키멕, 2025년 창립기념행사 및 스킨쉽데이!",
    "2025-11-26",
    "200",
    "1",
  ],
  [
    "28",
    "[월간도키멕2025년10월호]10월의 4T 컨텐츠 미팅 속으로!",
    "2025-10-29",
    "63",
    "1",
  ],
];

// 검색어와 페이지 상태를 브라우저에서 관리하는 고객지원 게시판 시안입니다.
export default function SupportBoard() {
  const [query, setQuery] = useState("");
  // 제목에 검색어가 포함된 게시글만 화면에 남깁니다.
  const rows = useMemo(
    () =>
      notices.filter((notice) =>
        notice[1].toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  );
  const rowClass =
    "grid min-h-[42px] grid-cols-[72px_minmax(0,1fr)_92px_112px_66px_62px] items-center border-b border-[#e4e4e4] text-center text-xs text-[#777] max-[760px]:min-h-[68px] max-[760px]:grid-cols-[36px_minmax(0,1fr)_64px] max-[760px]:text-[10px] [&>*:nth-child(4)]:max-[760px]:hidden [&>*:nth-child(5)]:max-[760px]:hidden [&>*:nth-child(6)]:max-[760px]:hidden";
  return (
    <section
      className="mx-auto w-[min(1235px,calc(100%-60px))] pb-[54px] pt-[45px] max-[760px]:w-[calc(100%-34px)] max-[760px]:pb-[42px] max-[760px]:pt-[34px]"
      aria-label="공지 및 뉴스"
    >
      <div className="mb-7 flex items-center justify-between max-[760px]:mb-6 max-[760px]:grid max-[760px]:gap-5">
        <h1 className="m-0 text-xl font-medium tracking-[-.05em] text-[#333]">
          공지&amp;뉴스{" "}
          <small className="text-[13px] font-normal text-[#8a8a8a]">37</small>
        </h1>
        <label className="flex h-[31px] w-[230px] items-center border border-[#d7d7d7] max-[760px]:w-full">
          <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap p-0 [clip:rect(0,0,0,0)]">
            공지 검색
          </span>
          <input
            className="h-full min-w-0 flex-1 border-0 px-[9px] text-xs text-[#4c4c4c] outline-0"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="검색어를 입력하세요"
          />
          <b className="w-[30px] -rotate-[15deg] text-center text-[19px] font-normal text-[#7f7f7f]">
            ⌕
          </b>
        </label>
      </div>
      <div className="border-t border-[#777]" role="table">
        <div
          className={`${rowClass} min-h-[42px] text-[#4b4b4b] max-[760px]:min-h-[38px]`}
          role="row"
        >
          <span>No</span>
          <span>제목</span>
          <span>글쓴이</span>
          <span>작성시간</span>
          <span>조회수</span>
          <span>좋아요</span>
        </div>
        {rows.map((notice) => (
          <a
            className={`${rowClass} [&>strong]:overflow-hidden [&>strong]:text-left [&>strong]:text-[13px] [&>strong]:font-normal [&>strong]:text-[#444] [&>strong]:text-ellipsis [&>strong]:whitespace-nowrap hover:[&>strong]:underline max-[760px]:[&>strong]:text-xs`}
            href={"#notice-" + notice[0]}
            key={notice[0]}
            role="row"
          >
            <span>{notice[0]}</span>
            <strong>{notice[1]}</strong>
            <span>관리자</span>
            <time>{notice[2]}</time>
            <span>{notice[3]}</span>
            <span>{notice[4]}</span>
          </a>
        ))}
      </div>
      <nav
        className="mt-7 flex justify-center gap-[5px]"
        aria-label="공지 페이지"
      >
        <button
          className="h-7 w-7 cursor-pointer border-0 bg-transparent text-xs text-[#777]"
          type="button"
          aria-label="이전 페이지"
        >
          ‹
        </button>
        <button
          className="h-7 w-7 border border-[#555] bg-transparent text-xs text-[#333]"
          type="button"
        >
          1
        </button>
        {["2", "3", "4"].map((page) => (
          <button
            className="h-7 w-7 cursor-pointer border-0 bg-transparent text-xs text-[#777]"
            type="button"
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          className="h-7 w-7 cursor-pointer border-0 bg-transparent text-xs text-[#777]"
          type="button"
          aria-label="다음 페이지"
        >
          ›
        </button>
      </nav>
    </section>
  );
}
