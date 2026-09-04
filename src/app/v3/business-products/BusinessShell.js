// 사업·제품 관련 페이지에서 공통으로 쓰는 서브 비주얼과 좌측 카테고리 내비게이션입니다.
export function SubHero({ trail }) {
  return (
    <section className="flex min-h-[285px] flex-col justify-center bg-[linear-gradient(105deg,#f3f7f8,#e4eef2)] px-[max(24px,calc((100vw-1180px)/2))] py-[70px] max-[760px]:min-h-[230px] max-[760px]:px-6 max-[760px]:py-[55px]">
      <p className="m-0 text-[11px] font-extrabold tracking-[.14em] text-[#1163a2]">
        BUSINESS &amp; PRODUCTS
      </p>
      <h1 className="mb-0 mt-[14px] text-[clamp(42px,5vw,68px)] tracking-[-.085em] max-[760px]:text-[43px]">
        사업&amp;제품정보
      </h1>
      <span className="mt-[26px] text-xs text-[#74828a]">
        홈 <b className="mx-2 text-[#1163a2]">›</b> 사업&amp;제품정보{" "}
        <b className="mx-2 text-[#1163a2]">›</b> {trail}
      </span>
    </section>
  );
}

// 상세 페이지에서도 목록으로 돌아갈 수 있도록 동일한 제품 분류 링크를 제공합니다.
export function BusinessSide() {
  return (
    <aside className="self-start border-t-2 border-[#2f3e46] max-[760px]:pt-[25px]">
      <p className="mb-[7px] mt-[21px] text-[10px] font-extrabold tracking-[.12em] text-[#1163a2]">
        BUSINESS AREA
      </p>
      <h2 className="mb-[29px] text-[28px] tracking-[-.07em]">제품정보</h2>
      <a
        className="block border-t border-[#e5e7e8] py-[14px] text-[13px] font-extrabold text-[#1163a2]"
        href="/v3/business-products#hydraulic"
      >
        유압기기
      </a>
      <a
        className="block border-t border-[#e5e7e8] py-[14px] text-[13px] text-[#7e8a91]"
        href="/v3/business-products#piston-pump"
      >
        피스톤 펌프
      </a>
      <span className="block border-t border-[#e5e7e8] py-[14px] text-[13px] text-[#7e8a91]">
        공압기기
      </span>
      <span className="block border-t border-[#e5e7e8] py-[14px] text-[13px] text-[#7e8a91]">
        전기제어기기
      </span>
      <div className="mt-[37px] bg-[#f2f6f8] px-[17px] py-[22px] max-[760px]:hidden">
        <strong className="block break-keep text-[13px] text-[#44545e]">
          제품 선정이 필요하신가요?
        </strong>
        <a
          className="mt-[14px] block text-xs font-extrabold text-[#1163a2]"
          href="mailto:tokimec@tokimec.co.kr?subject=%5B%ED%95%9C%EA%B5%AD%EB%8F%84%ED%82%A4%EB%A9%95%5D%20%EA%B8%B0%EC%88%A0%20%EB%AC%B8%EC%9D%98"
        >
          기술 문의하기 →
        </a>
      </div>
    </aside>
  );
}
