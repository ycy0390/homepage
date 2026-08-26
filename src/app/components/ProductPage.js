"use client";

import { useEffect, useRef, useState } from "react";

const resourceButtonClass =
  "inline-flex min-h-10 items-center justify-between gap-2 px-3 text-[12px] font-extrabold transition";

const kicker =
  "mb-4 text-[11px] font-extrabold tracking-[.14em] text-[#1384ba]";

const resourcePriority = {
  catalog: 1,
  outline: 2,
  structure: 3,
  "2d": 4,
  "3d": 5,
  manual: 6,
};

function sortResources(resources) {
  return [...resources].sort((first, second) => {
    const availability = Number(second.available) - Number(first.available);

    if (availability !== 0) return availability;

    return resourcePriority[first.key] - resourcePriority[second.key];
  });
}

function ResourceButton({ resource, isHighlighted, onRequest }) {
  const label = resource.available
    ? resource.label
    : `${resource.label} 준비중`;

  const content = (
    <>
      <span>{label}</span>
      <span aria-hidden="true">{resource.available ? "↗" : "—"}</span>
    </>
  );

  if (!resource.available) {
    return (
      <span
        aria-disabled="true"
        className={`${resourceButtonClass} cursor-not-allowed bg-[#e5ebee] text-[#85939a]`}
      >
        {content}
      </span>
    );
  }

  return (
    <button
      className={`${resourceButtonClass} cursor-pointer bg-[#075a9a] text-left text-white shadow-[0_10px_24px_rgba(7,90,154,.3)] hover:-translate-y-0.5 hover:bg-[#064d83] hover:shadow-[0_15px_30px_rgba(7,90,154,.4)] ${isHighlighted ? "relative z-10 -translate-y-1 scale-[1.04] ring-4 ring-[#ffd25a] shadow-[0_16px_34px_rgba(7,90,154,.52)]" : ""}`}
      onClick={() => onRequest(resource)}
      type="button"
    >
      {content}
    </button>
  );
}

function ResourceUseModal({ resource, onClose, onConfirm }) {
  if (!resource) return null;

  const actionLabel = resource.action === "download" ? "다운로드" : "새 창에서 열기";

  return (
    <div
      aria-labelledby="resource-use-title"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center p-5 max-[760px]:items-end max-[760px]:p-0"
      role="dialog"
    >
      <button
        aria-label="자료 이용 안내 닫기"
        className="absolute inset-0 cursor-default bg-[#082438]/[.58] backdrop-blur-[2px]"
        onClick={onClose}
        type="button"
      />
      <section className="relative z-10 w-full max-w-[700px] overflow-hidden bg-white shadow-[0_26px_70px_rgba(4,27,42,.35)] max-[760px]:max-w-none">
        <header className="border-b border-[#c8e5ed] bg-[linear-gradient(110deg,#dbf5f8,#bde9f0)] px-[clamp(28px,5vw,52px)] py-[clamp(26px,4vw,39px)]">
          <p className="m-0 text-[11px] font-extrabold tracking-[.14em] text-[#147ea9]">
            DOCUMENT ACCESS
          </p>
          <h2
            className="mb-0 mt-3 text-[clamp(28px,3.2vw,38px)] tracking-[-.065em] text-[#173550]"
            id="resource-use-title"
          >
            자료 이용 안내
          </h2>
          <p className="mb-0 mt-3 text-sm font-bold text-[#3e7188]">
            {resource.label} 자료를 {actionLabel} 전에 확인해 주세요.
          </p>
        </header>
        <div className="px-[clamp(28px,5vw,52px)] py-[clamp(28px,5vw,46px)]">
          <ul className="m-0 grid gap-4 pl-5 break-keep text-[15px] font-semibold leading-[1.75] text-[#314b5c] marker:text-[#147ea9] max-[760px]:gap-3 max-[760px]:text-sm">
            <li>본 자료의 저작권은 한국도키멕 주식회사가 보유합니다.</li>
            <li>무단 복제, 배포, 판매 등의 2차 이용은 금지되어 있습니다.</li>
            <li>
              카탈로그에 기재된 사양 및 특성은 일정 조건 하에서의 대표 성능이며,
              모든 조건하에서의 동작을 보증하는 것은 아닙니다.
            </li>
            <li>제품마다 기기 차이로 인해 다소 변동이 있을 수 있습니다.</li>
          </ul>
        </div>
        <footer className="flex items-center justify-end gap-3 border-t border-[#dbe7eb] bg-[#f7fafb] px-[clamp(28px,5vw,52px)] py-5 max-[760px]:grid max-[760px]:grid-cols-2">
          <button
            className="min-h-11 border border-[#afc1c9] px-5 text-sm font-extrabold text-[#58717e] transition hover:border-[#7894a1] hover:text-[#173550] cursor-pointer"
            onClick={onClose}
            type="button"
          >
            취소
          </button>
          <button
            autoFocus
            className="min-h-11 bg-[#075a9a] px-5 text-sm font-extrabold text-white shadow-[0_8px_18px_rgba(7,90,154,.24)] transition hover:-translate-y-0.5 hover:bg-[#064d83] cursor-pointer"
            onClick={onConfirm}
            type="button"
          >
            확인 후 {actionLabel} ↗
          </button>
        </footer>
      </section>
    </div>
  );
}

function TechnicalVisuals({ product }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <figure className="col-span-4 m-0 overflow-hidden border border-[#d5e2e7] bg-[#edf6f8] max-[760px]:col-span-12">
        <img
          className="h-[210px] w-full object-contain p-5 mix-blend-multiply"
          src={product.technicalProductImage}
          alt={`${product.series} 시리즈 제품`}
        />
        <figcaption className="border-t border-[#d5e2e7] bg-white px-4 py-3 text-[10px] font-extrabold tracking-[.1em] text-[#5d7786]">
          {product.series} SERIES / PRODUCT
        </figcaption>
      </figure>
      <figure className="col-span-8 m-0 overflow-hidden border border-[#d5e2e7] bg-[#edf6f8] max-[760px]:col-span-12">
        <img
          className="h-[210px] w-full object-contain p-5 mix-blend-multiply"
          src={product.structureImage}
          alt={`${product.series} 시리즈 구조도`}
        />
        <figcaption className="border-t border-[#d5e2e7] bg-white px-4 py-3 text-[10px] font-extrabold tracking-[.1em] text-[#5d7786]">
          INTERNAL STRUCTURE / SECTION VIEW
        </figcaption>
      </figure>
      <div className="col-span-8 flex flex-col justify-center bg-[#123a52] px-[clamp(25px,4vw,48px)] py-9 text-white max-[760px]:col-span-12">
        <p className="m-0 text-[10px] font-extrabold tracking-[.14em] text-[#88d8ef]">
          PRODUCT TECHNICAL DATA
        </p>
        <h3 className="mb-4 mt-3 text-[25px] tracking-[-.055em]">
          {product.technicalTitle}
        </h3>
        <p className="m-0 break-keep text-[15px] leading-[1.85] text-[#d3e3e9]">
          {product.technicalDescription}
        </p>
      </div>
      <figure className="col-span-4 m-0 overflow-hidden border border-[#d5e2e7] bg-[#f7fbfc] max-[760px]:col-span-12">
        <img
          className="h-[182px] w-full object-contain p-6 mix-blend-multiply"
          src={product.symbolImage}
          alt={`${product.series} 시리즈 유압 심벌`}
        />
        <figcaption className="border-t border-[#d5e2e7] bg-white px-4 py-3 text-[10px] font-extrabold tracking-[.1em] text-[#5d7786]">
          HYDRAULIC SYMBOL
        </figcaption>
      </figure>
    </div>
  );
}

function ModelCode({ modelCode }) {
  if (!modelCode) return null;

  return (
    <section className="mt-[68px]" aria-labelledby="model-code-heading">
      <div className="border-t-[3px] border-[#146d9d] bg-[#eff7fa] px-5 py-4">
        <p className="m-0 text-[11px] font-extrabold tracking-[.12em] text-[#1384ba]">
          MODEL CODE
        </p>
        <h3
          className="mb-0 mt-2 text-[26px] tracking-[-.06em]"
          id="model-code-heading"
        >
          형식
        </h3>
      </div>
      <div className="border-x border-b border-[#dbe4e8] bg-white p-[clamp(22px,4vw,42px)]">
        {modelCode.groups ? (
          <div
            className="flex flex-wrap items-start gap-y-4 font-mono text-[clamp(20px,2.7vw,32px)] tracking-[.02em] text-[#173550] max-[760px]:text-[18px]"
            aria-label={`${modelCode.example} 형식 기호 번호 안내`}
          >
            {modelCode.groups.map((group, groupIndex) => (
              <span className="inline-flex shrink-0 items-start" key={groupIndex}>
                {group.map(([number, code]) => (
                  <span className="inline-flex flex-col items-center" key={number}>
                    <span className="leading-none">{code}</span>
                    <b className="mt-2 grid h-5 min-w-5 place-items-center bg-[#123a52] px-1 font-sans text-[10px] leading-none text-white">
                      {number}
                    </b>
                  </span>
                ))}
                {groupIndex < modelCode.groups.length - 1 && (
                  <span className="px-1 leading-none" aria-hidden="true">
                    -
                  </span>
                )}
              </span>
            ))}
          </div>
        ) : (
          <code className="block overflow-x-auto whitespace-nowrap font-mono text-[clamp(20px,2.7vw,32px)] tracking-[.02em] text-[#173550]">
            {modelCode.example}
          </code>
        )}
        <p className="mb-0 mt-4 text-xs leading-[1.65] text-[#6d7f89]">
          {modelCode.groups
            ? "위 번호는 아래 선택 항목과 대응합니다. 실제 형식 선정은 운전 조건에 따라 기술 검토가 필요합니다."
            : "실제 형식 선정은 운전 조건과 회로 사양을 기준으로 기술 검토가 필요합니다."}
        </p>
      </div>
      <div className="grid grid-cols-2 border-x border-[#dbe4e8] max-[760px]:grid-cols-1">
        {modelCode.items.map(([code, title, description, secondary]) => (
          <article
            className="grid min-h-[112px] grid-cols-[44px_1fr] gap-4 border-b border-[#dbe4e8] p-5 odd:border-r max-[760px]:odd:border-r-0"
            key={code}
          >
            <span className="grid h-8 w-8 place-items-center bg-[#15253a] text-[11px] font-extrabold text-white">
              {code}
            </span>
            <div>
              <h4 className="m-0 text-sm text-[#29455a]">{title}</h4>
              <p className="mb-0 mt-2 whitespace-pre-line break-keep text-[13px] leading-[1.6] text-[#637681]">
                {description}
              </p>
              {secondary && (
                <p className="mb-0 mt-1 whitespace-pre-line break-keep text-[12px] leading-[1.6] text-[#7b888e]">
                  {secondary}
                </p>
              )}
            </div>
          </article>
        ))}
        {modelCode.items.length % 2 === 1 && (
          <div
            aria-hidden="true"
            className="border-b border-[#dbe4e8] max-[760px]:hidden"
          />
        )}
      </div>
    </section>
  );
}

function SpecificationTable({ specification }) {
  const mergedColumns = new Set(
    specification.columns
      .filter(
        (column) =>
          specification.rows.length > 1 &&
          specification.rows.every(
            (row) => row[column.key] === specification.rows[0][column.key],
          ),
      )
      .map((column) => column.key),
  );

  return (
    <div className="border-t-[3px] border-[#146d9d]">
      <table className="hidden w-full table-fixed border-collapse bg-white text-center text-[12px] text-[#405967] min-[761px]:table">
        <caption className="sr-only">{specification.title}</caption>
        <thead>
          <tr>
            {specification.columns.map((column) => (
              <th
                className="border-b border-r border-[#dbe4e8] bg-[#eff7fa] px-4 py-4 font-extrabold leading-[1.45] last:border-r-0 whitespace-pre-line"
                key={column.key}
                scope="col"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specification.rows.map((row, rowIndex) => (
            <tr key={row.model}>
              {specification.columns.map((column, columnIndex) => {
                const isMerged = mergedColumns.has(column.key);

                if (isMerged && rowIndex > 0) return null;

                return (
                  <td
                    className={`border-b border-r border-[#e0e8eb] px-4 py-[15px] align-middle font-semibold ${columnIndex === specification.columns.length - 1 ? "border-r-0" : ""} ${column.key === "model" ? "font-extrabold text-[#075a9a]" : ""}`}
                    key={column.key}
                    rowSpan={isMerged ? specification.rows.length : undefined}
                  >
                    {row[column.key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grid gap-3 min-[761px]:hidden">
        {specification.rows.map((row) => (
          <article className="overflow-hidden border border-[#dbe4e8] bg-white" key={row.model}>
            <header className="flex items-center justify-between bg-[#eff7fa] px-4 py-3">
              <strong className="text-[16px] text-[#075a9a]">{row.model}</strong>
              <span className="text-xs font-bold text-[#58717e]">
                {row.displacement} cm³/rev
              </span>
            </header>
            <dl className="m-0 grid grid-cols-2 text-xs">
              {specification.columns.slice(2).map((column) => (
                <div className="border-t border-[#e0e8eb] p-3 even:border-l" key={column.key}>
                  <dt className="mb-1 whitespace-pre-line text-[11px] leading-[1.35] text-[#7b8c95]">
                    {column.label}
                  </dt>
                  <dd className="m-0 break-keep font-bold leading-[1.5] text-[#405967]">
                    {row[column.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      {specification.notes?.length > 0 && (
        <ul className="mb-0 mt-5 grid gap-2 pl-5 text-xs leading-[1.65] text-[#73838c]">
          {specification.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SupplementalSpecification({ specification }) {
  if (!specification) return null;

  return (
    <section className="mt-10">
      <h4 className="mb-4 mt-0 text-[17px] tracking-[-.04em] text-[#29455a]">
        {specification.title}
      </h4>
      <SpecificationTable specification={specification} />
    </section>
  );
}

function KeyHighlights({ highlights }) {
  if (!highlights?.length) return null;

  return (
    <section
      className="relative z-10 mx-auto -mt-[48px] max-w-[1240px] px-8 max-[760px]:hidden"
      aria-label="대표 사양"
    >
      <div className="grid grid-cols-3 divide-x divide-[#dce6ea] overflow-hidden border border-[#edf1f3] bg-white shadow-[0_22px_38px_rgba(31,65,84,.13)] max-[760px]:grid-cols-1 max-[760px]:divide-x-0 max-[760px]:divide-y">
        {highlights.map((highlight) => (
          <dl className="m-0 px-8 py-8 max-[760px]:px-6 max-[760px]:py-6" key={highlight.label}>
            <dt className="text-[11px] font-extrabold tracking-[.1em] text-[#658190]">
              {highlight.label}
            </dt>
            <dd className="m-0 mt-3 text-[clamp(19px,2vw,27px)] font-extrabold tracking-[-.045em] text-[#173550]">
              {highlight.value}
            </dd>
          </dl>
        ))}
      </div>
    </section>
  );
}

export default function ProductPage({ product }) {
  const orderedResources = sortResources(product.resources);
  const [isResourceHighlighted, setIsResourceHighlighted] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const resourceHighlightTimer = useRef(null);

  useEffect(
    () => () => {
      if (resourceHighlightTimer.current) {
        window.clearTimeout(resourceHighlightTimer.current);
      }
    },
    [],
  );

  useEffect(() => {
    if (!selectedResource) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedResource(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedResource]);

  function openResourceModal(resource) {
    setSelectedResource(resource);
  }

  function confirmResourceUse() {
    if (!selectedResource?.file) {
      setSelectedResource(null);
      return;
    }

    const resourceLink = document.createElement("a");
    resourceLink.href = selectedResource.file;

    if (selectedResource.action === "download") {
      resourceLink.download = "";
    } else {
      resourceLink.target = "_blank";
      resourceLink.rel = "noreferrer";
    }

    document.body.appendChild(resourceLink);
    resourceLink.click();
    resourceLink.remove();

    setSelectedResource(null);
  }

  function showResourceButtons() {
    const topSection = document.getElementById("top");

    if (!topSection) return;

    if (resourceHighlightTimer.current) {
      window.clearTimeout(resourceHighlightTimer.current);
    }

    setIsResourceHighlighted(false);
    topSection.scrollIntoView({ behavior: "smooth", block: "start" });

    const startedAt = Date.now();
    const revealButtons = () => {
      const hasReachedTop = Math.abs(topSection.getBoundingClientRect().top) <= 8;

      if (hasReachedTop || Date.now() - startedAt >= 1400) {
        setIsResourceHighlighted(true);
        resourceHighlightTimer.current = window.setTimeout(() => {
          setIsResourceHighlighted(false);
          resourceHighlightTimer.current = null;
        }, 1600);
        return;
      }

      resourceHighlightTimer.current = window.setTimeout(revealButtons, 80);
    };

    resourceHighlightTimer.current = window.setTimeout(revealButtons, 350);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fa] text-[#15253a]">
      <header className="sticky top-0 z-20 flex h-[82px] items-center justify-between border-b border-[#edf0f2] bg-white px-[clamp(24px,6vw,100px)] max-[760px]:h-[70px] max-[760px]:px-5">
        <a
          className="inline-flex items-center"
          href="/products"
          aria-label="한국도키멕 제품 페이지 처음으로"
        >
          <img
            className="block w-[154px] max-[760px]:w-[133px]"
            src="/tokimec_logo.png"
            alt="한국도키멕 TOKIMEC"
          />
        </a>
        <nav
          className="flex gap-[34px] text-sm font-bold text-[#52616f] max-[760px]:hidden"
          aria-label="주요 메뉴"
        >
          <a className="hover:text-[#075a9a]" href="/products">
            제품소개
          </a>
          <a className="hover:text-[#075a9a]" href="#resources">
            기술 자료
          </a>
          <a className="hover:text-[#075a9a]" href="#specification">
            형식·사양
          </a>
        </nav>
      </header>

      <section
        className="grid min-h-[570px] grid-cols-[1.08fr_.92fr] overflow-hidden bg-[linear-gradient(115deg,#e7f8fd_0%,#f7fcfd_55%,#e1f2f8_100%)] max-[760px]:grid-cols-1"
        id="top"
      >
        <div className="px-[clamp(24px,7vw,110px)] pb-[70px] pt-[clamp(68px,10vw,140px)] max-[760px]:px-6 max-[760px]:pb-12 max-[760px]:pt-[66px]">
          <p className={kicker}>
            HYDRAULICS / PISTON PUMP / {product.series} SERIES
          </p>
          <p className="mb-9 text-xs text-[#6c7d88]">
            제품소개 <span className="px-[7px] text-[#2e93bd]">›</span> 유압{" "}
            <span className="px-[7px] text-[#2e93bd]">›</span> 펌프{" "}
            <span className="px-[7px] text-[#2e93bd]">›</span> 피스톤 펌프
          </p>
          <h1 className="mb-[10px] text-[clamp(42px,5vw,72px)] leading-[1.08] tracking-[-.075em]">
            {product.headline}
          </h1>
          <p className="text-[17px] font-semibold tracking-[.01em] text-[#39708a]">
            {product.englishTitle}
          </p>
          <p className="mb-7 mt-8 max-w-[500px] whitespace-pre-line break-keep text-[17px] leading-[1.75] text-[#455967]">
            {product.lead}
          </p>
          <div
            className="grid max-w-[530px] grid-cols-3 gap-2 max-[760px]:grid-cols-2"
            id="product-resources"
          >
            {orderedResources.map((resource) => (
              <ResourceButton
                isHighlighted={isResourceHighlighted && resource.available}
                key={resource.key}
                onRequest={openResourceModal}
                resource={resource}
              />
            ))}
          </div>
        </div>
        <div className="relative grid min-h-[470px] place-items-center overflow-hidden bg-[linear-gradient(140deg,#e5f5f9,#c7e7f1)] before:absolute before:h-[580px] before:w-[580px] before:rounded-full before:border before:border-[rgba(20,112,151,.18)] max-[760px]:hidden">
          <div className="absolute right-[8%] top-[11%] z-[1] text-xs font-extrabold leading-[1.1] tracking-[.1em] text-[#0a6c9a]">
            SERIES
            <br />
            <strong className="text-[37px] tracking-[-.08em]">
              {product.series}
            </strong>
          </div>
          <img
            className={`relative aspect-[1.3] w-[min(88%,570px)] mix-blend-multiply contrast-[1.06] ${product.heroImageClass ?? "object-cover object-left-top"}`}
            src={product.image}
            alt={product.imageAlt}
          />
          <p className="absolute bottom-[8%] right-[9%] m-0 whitespace-pre-line text-xs font-bold uppercase leading-[1.4] tracking-[.1em] text-[#3b7e9a]">
            {product.visualCaption}
          </p>
        </div>
      </section>

      <KeyHighlights highlights={product.highlights} />

      <section
        className="mx-auto max-w-[1240px] px-8 py-[140px] max-[760px]:px-6 max-[760px]:py-20"
        id="resources"
      >
        <div className="mb-[68px] grid grid-cols-[.85fr_1.15fr] gap-[clamp(40px,8vw,150px)] max-[760px]:mb-10 max-[760px]:grid-cols-1">
          <div>
            <p className={kicker}>PRODUCT TECHNICAL DATA</p>
            <h2 className="text-[clamp(34px,4vw,56px)] leading-[1.14] tracking-[-.065em]">
              제품 구조
              <br />
              및 작동 정보
            </h2>
          </div>
          <p className="m-0 max-w-[530px] self-end break-keep text-[16px] leading-[1.8] text-[#61727c]">
            제품 외관, 내부 단면 및 유압 심벌을 통해 {product.series} 시리즈의
            기본 구성과 적용 특성을 빠르게 확인할 수 있습니다.
          </p>
        </div>
        <TechnicalVisuals product={product} />
      </section>

      <section
        className="bg-white px-[max(32px,calc((100vw-1176px)/2))] py-[140px] max-[760px]:px-6 max-[760px]:py-20"
        id="specification"
      >
        <div className="grid grid-cols-[.7fr_1.3fr] gap-[clamp(40px,8vw,130px)] max-[760px]:grid-cols-1">
          <div>
            <p className={kicker}>MODEL &amp; SPECIFICATION</p>
            <h2 className="whitespace-nowrap text-[clamp(34px,4vw,56px)] leading-[1.14] tracking-[-.065em]">
              형식과
              <br />
              기본 사양
            </h2>
          </div>
          <div>
            <ModelCode modelCode={product.modelCode} />
            <div className={product.modelCode ? "mt-[68px]" : ""}>
              <p className="mb-4 text-[11px] font-extrabold tracking-[.12em] text-[#1384ba]">
                STANDARD SPECIFICATION
              </p>
              <h3 className="mb-6 mt-0 text-[28px] tracking-[-.06em]">
                {product.specification.title}
              </h3>
              <SpecificationTable specification={product.specification} />
              <SupplementalSpecification
                specification={product.supplementalSpecification}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-[210px] items-center justify-center bg-white px-6 py-10 max-[760px]:min-h-[170px]">
        <button
          className="inline-flex min-h-16 items-center gap-4 bg-[#075a9a] px-9 text-[17px] font-extrabold text-white shadow-[0_14px_28px_rgba(7,90,154,.3)] transition hover:-translate-y-1 hover:bg-[#064d83] hover:shadow-[0_18px_34px_rgba(7,90,154,.4)] max-[760px]:min-h-14 max-[760px]:px-7 max-[760px]:text-[15px]"
          onClick={showResourceButtons}
          type="button"
        >
          자료 바로보기 <span aria-hidden="true">↑</span>
        </button>
      </section>

      <footer className="flex min-h-[150px] items-center justify-between gap-6 border-t border-[#e1e8eb] bg-white px-[max(32px,calc((100vw-1176px)/2))] py-[38px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:px-6 max-[760px]:py-7">
        <img
          className="w-[135px]"
          src="/tokimec_logo.png"
          alt="한국도키멕 TOKIMEC"
        />
        <p className="m-0 max-w-[490px] text-xs leading-[1.65] text-[#71808a]">
          제품별 제공 자료와 세부 사양은 변경될 수 있으며, 최신 자료는 본 페이지의
          기술 자료 버튼에서 확인할 수 있습니다.
        </p>
      </footer>

      <ResourceUseModal
        onClose={() => setSelectedResource(null)}
        onConfirm={confirmResourceUse}
        resource={selectedResource}
      />
    </main>
  );
}
