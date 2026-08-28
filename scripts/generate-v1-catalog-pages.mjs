import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { catalogProducts } from "../src/data/products/index.js";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = join(scriptDirectory, "..");
const outputDirectory = join(projectDirectory, "public", "html", "v1");

const staticPrefix = "../../";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function withBreaks(value = "") {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function publicPath(value) {
  return `${staticPrefix}${String(value ?? "").replace(/^\/+/, "")}`;
}

function makeResourceButtons(resources) {
  return resources
    .map((resource) => {
      const attributes = [
        `data-resource="${escapeHtml(resource.key)}"`,
        `data-label="${escapeHtml(resource.label)}"`,
        `data-available="${resource.available ? "true" : "false"}"`,
        `data-action="${escapeHtml(resource.action ?? "preview")}"`,
      ];

      if (resource.available && resource.file) {
        attributes.push(`data-file="${escapeHtml(publicPath(resource.file))}"`);
      }

      return `<button class="resource-button" ${attributes.join(" ")} type="button"><span data-resource-label>${escapeHtml(resource.label)}</span><span>${resource.available ? "↗" : "—"}</span></button>`;
    })
    .join("\n              ");
}

function makeHighlights(highlights) {
  if (!highlights?.length) return "";

  return `<section class="highlights" aria-label="대표 사양">
        <div class="highlights-inner">
          ${highlights
            .map(
              (highlight) =>
                `<dl><dt>${escapeHtml(highlight.label)}</dt><dd>${escapeHtml(highlight.value)}</dd></dl>`,
            )
            .join("\n          ")}
        </div>
      </section>`;
}

function getRowSpan(rows, rowIndex, key, groupKey) {
  const value = rows[rowIndex][key];
  const groupValue = groupKey ? rows[rowIndex][groupKey] : undefined;

  if (
    rowIndex > 0 &&
    rows[rowIndex - 1][key] === value &&
    (!groupKey || rows[rowIndex - 1][groupKey] === groupValue)
  ) {
    return 0;
  }

  let span = 1;
  while (
    rows[rowIndex + span]?.[key] === value &&
    (!groupKey || rows[rowIndex + span]?.[groupKey] === groupValue)
  ) {
    span += 1;
  }

  return span;
}

function makeSpecificationTable(specification) {
  if (!specification) return "";

  const { columns, rows, notes = [] } = specification;
  const primaryColumn = columns[1];
  const detailColumns = columns.slice(2);
  const primaryUnit =
    primaryColumn.mobileUnit ??
    (primaryColumn.key === "displacement" ? "cm³/rev" : "");

  const desktopRows = rows
    .map((row, rowIndex) => {
      const cells = columns
        .map((column, columnIndex) => {
          const rowSpan = getRowSpan(
            rows,
            rowIndex,
            column.key,
            specification.mergeWithin,
          );

          if (rowSpan === 0) return "";

          const cellClasses = [
            columnIndex !== columns.length - 1 ? "structural-not-last" : "",
            column.key === "model" ? "spec-model" : "",
          ]
            .filter(Boolean)
            .join(" ");
          const rowSpanAttribute =
            rowSpan > 1 ? ` rowspan="${rowSpan}"` : "";

          return `<td${rowSpanAttribute}${cellClasses ? ` class="${cellClasses}"` : ""}>${withBreaks(row[column.key])}</td>`;
        })
        .join("");

      return `<tr>${cells}</tr>`;
    })
    .join("\n                ");

  const mobileCards = rows
    .map((row) => {
      const detailRows = detailColumns
        .map(
          (column) =>
            `<div><dt>${withBreaks(column.label)}</dt><dd>${withBreaks(row[column.key])}</dd></div>`,
        )
        .join("");
      const emptyCell =
        detailColumns.length % 2 === 1
          ? '<div class="mobile-spec-empty" aria-hidden="true"></div>'
          : "";

      return `<article class="mobile-spec-card"><header><strong>${escapeHtml(row.model)}</strong><span>${escapeHtml(row[primaryColumn.key])}${primaryUnit ? ` ${escapeHtml(primaryUnit)}` : ""}</span></header><dl>${detailRows}${emptyCell}</dl></article>`;
    })
    .join("\n              ");

  const notesMarkup = notes.length
    ? `<ul class="spec-notes">${notes
        .map((note) => `<li>${escapeHtml(note)}</li>`)
        .join("")}</ul>`
    : "";

  return `<div class="spec-table-wrap">
              <table class="spec-table${specification.dense ? " spec-table-dense" : ""}"><caption class="sr-only">${escapeHtml(specification.title)}</caption><thead><tr>${columns
                .map(
                  (column) =>
                    `<th scope="col">${withBreaks(column.label)}</th>`,
                )
                .join("")}</tr></thead><tbody>
                ${desktopRows}
              </tbody></table>
              <div class="mobile-specs">
                ${mobileCards}
              </div>
            </div>${notesMarkup}`;
}

function makeSupplementalSpecification(specification) {
  if (!specification) return "";

  return `<section class="supplemental-spec"><h4>${escapeHtml(specification.title)}</h4>${makeSpecificationTable(specification)}</section>`;
}

function makeModelCode(modelCode) {
  if (!modelCode) return "";

  const sequence = modelCode.groups?.length
    ? `<div class="model-code-sequence" aria-label="${escapeHtml(modelCode.example)} 형식 기호 번호 안내">${modelCode.groups
        .map((group, groupIndex) => {
          const tokens = group
            .map(
              ([number, code]) =>
                `<span class="model-token"><span>${escapeHtml(code)}</span><b>${escapeHtml(number)}</b></span>`,
            )
            .join("");
          const hyphen =
            groupIndex < modelCode.groups.length - 1
              ? '<span class="model-hyphen" aria-hidden="true">-</span>'
              : "";

          return `<span class="model-group">${tokens}${hyphen}</span>`;
        })
        .join("")}</div>`
    : `<code>${escapeHtml(modelCode.example)}</code>`;

  const items = modelCode.items
    .map(([code, title, description, secondary]) => {
      const secondaryMarkup = secondary
        ? `<p class="model-code-secondary">${withBreaks(secondary)}</p>`
        : "";

      return `<article><b>${escapeHtml(code)}</b><div><h4>${escapeHtml(title)}</h4>${description ? `<p>${withBreaks(description)}</p>` : ""}${secondaryMarkup}</div></article>`;
    })
    .join("\n              ");
  const placeholder =
    modelCode.items.length % 2
      ? '<div class="model-code-placeholder" aria-hidden="true"></div>'
      : "";

  return `<section class="model-code" aria-labelledby="model-code-heading">
              <div class="model-code-heading"><p>MODEL CODE</p><h3 id="model-code-heading">형식</h3></div>
              <div class="model-code-main">${sequence}<p>${
                modelCode.groups?.length
                  ? "위 번호는 아래 선택 항목과 대응합니다. 실제 형식 선정은 운전 조건에 따라 기술 검토가 필요합니다."
                  : "실제 형식 선정은 운전 조건과 회로 사양을 기준으로 기술 검토가 필요합니다."
              }</p></div>
              <div class="model-code-list">${items}${placeholder}</div>
            </section>`;
}

function makeModal() {
  return `<div class="resource-modal" data-resource-modal aria-labelledby="resource-use-title" aria-modal="true" role="dialog"><button class="modal-backdrop" data-modal-close aria-label="자료 이용 안내 닫기" type="button"></button><section class="modal-panel"><header class="modal-header"><p>DOCUMENT ACCESS</p><h2 id="resource-use-title">자료 이용 안내</h2><p class="modal-summary"><span data-modal-resource></span> 자료를 <span data-modal-action></span> 전에 확인해 주세요.</p></header><div class="modal-body"><ul><li>본 자료의 저작권은 한국도키멕 주식회사가 보유합니다.</li><li>무단 복제, 배포, 판매 등의 2차 이용은 금지되어 있습니다.</li><li>카탈로그에 기재된 사양 및 특성은 일정 조건 하에서의 대표 성능이며, 모든 조건하에서의 동작을 보증하는 것은 아닙니다.</li><li>제품마다 기기 차이로 인해 다소 변동이 있을 수 있습니다.</li></ul></div><footer class="modal-actions"><button class="modal-cancel" data-modal-cancel type="button">취소</button><button class="modal-confirm" data-modal-confirm type="button">확인</button></footer></section></div>`;
}

function makeProductPage(product) {
  const category = product.category ?? "PISTON PUMP";
  const koreanCategory = product.koreanCategory ?? "피스톤 펌프";

  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(product.title)} | 한국도키멕</title>
    <link rel="stylesheet" href="../../static/css/v1/styles.css" />
  </head>
  <body>
    <header class="header">
      <a href="products.html" aria-label="한국도키멕 제품 페이지 처음으로"><img class="logo" src="../../tokimec_logo.png" alt="한국도키멕 TOKIMEC" /></a>
      <nav class="nav" aria-label="주요 메뉴">
        <a href="products.html">제품소개</a>
        <a href="#resources">기술 자료</a>
        <a href="#specification">형식·사양</a>
      </nav>
    </header>

    <main>
      <section class="hero" id="top">
        <div class="hero-copy">
          <p class="eyebrow">HYDRAULICS / ${escapeHtml(category)} / ${escapeHtml(product.series)} SERIES</p>
          <p class="crumb">제품소개 <span>›</span> 유압 <span>›</span> 펌프 <span>›</span> ${escapeHtml(koreanCategory)}</p>
          <h1>${withBreaks(product.headline)}</h1>
          <p class="english">${escapeHtml(product.englishTitle)}</p>
          <p class="lead">${withBreaks(product.lead)}</p>
          <div class="resource-grid" data-resource-grid>
              ${makeResourceButtons(product.resources)}
          </div>
        </div>
        <div class="visual">
          <div class="series">SERIES<br /><strong>${escapeHtml(product.series)}</strong></div>
          <img class="${escapeHtml(product.heroImageClass ?? "")}" src="${escapeHtml(publicPath(product.image))}" alt="${escapeHtml(product.imageAlt)}" />
          <p class="visual-caption">${escapeHtml(product.visualCaption)}</p>
        </div>
      </section>

      ${makeHighlights(product.highlights)}

      <section class="technical" id="resources">
        <div class="section-heading">
          <div><p class="kicker">PRODUCT TECHNICAL DATA</p><h2>제품 구조와<br />작동 정보를 봅니다.</h2></div>
          <p>제품 외관, 내부 단면 및 유압 심벌을 통해 ${escapeHtml(product.series)} 시리즈의 기본 구성과 적용 특성을 빠르게 확인할 수 있습니다.</p>
        </div>
        <div class="technical-grid">
          <figure class="technical-figure product"><img src="${escapeHtml(publicPath(product.technicalProductImage))}" alt="${escapeHtml(product.series)} 시리즈 제품" /><figcaption>${escapeHtml(product.series)} SERIES / PRODUCT</figcaption></figure>
          <figure class="technical-figure section-view"><img src="${escapeHtml(publicPath(product.structureImage))}" alt="${escapeHtml(product.series)} 시리즈 구조도" /><figcaption>INTERNAL STRUCTURE / SECTION VIEW</figcaption></figure>
          <div class="technical-copy"><p class="kicker">PRODUCT TECHNICAL DATA</p><h3>${escapeHtml(product.technicalTitle)}</h3><p>${escapeHtml(product.technicalDescription)}</p></div>
          <figure class="technical-figure symbol"><img src="${escapeHtml(publicPath(product.symbolImage))}" alt="${escapeHtml(product.series)} 시리즈 유압 심벌" /><figcaption>HYDRAULIC SYMBOL</figcaption></figure>
        </div>
      </section>

      <section class="specification" id="specification">
        <div class="spec-layout">
          <div class="spec-intro"><p class="kicker">MODEL &amp; SPECIFICATION</p><h2>형식과<br />기본 사양</h2></div>
          <div class="spec-content">
            ${makeModelCode(product.modelCode)}
            <div class="standard-specification">
              <p>STANDARD SPECIFICATION</p>
              <h3>${escapeHtml(product.specification.title)}</h3>
              ${makeSpecificationTable(product.specification)}
              ${makeSupplementalSpecification(product.supplementalSpecification)}
            </div>
          </div>
        </div>
      </section>

      <section class="resource-cta"><button data-show-resources type="button">자료 바로보기 <span>↑</span></button></section>
    </main>

    <footer class="footer"><img class="logo" src="../../tokimec_logo.png" alt="한국도키멕 TOKIMEC" /><p>제품별 제공 자료와 세부 사양은 변경될 수 있으며, 최신 자료는 본 페이지의 기술 자료 버튼에서 확인할 수 있습니다.</p></footer>

    ${makeModal()}
    <script src="../../static/js/v1/script.js"></script>
  </body>
</html>
`;
}

function makeProductCard({ href, category, image, alt, title, summary }) {
  return `<a class="product-card" href="${escapeHtml(href)}"><span>${escapeHtml(category)}</span><img src="${escapeHtml(image)}" alt="${escapeHtml(alt)}" /><div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(summary)}</p><b>제품 상세보기 →</b></div></a>`;
}

function makeProductsPage() {
  const pistonProducts = catalogProducts.filter(
    (product) => product.category === "PISTON PUMP",
  );
  const vaneProducts = catalogProducts.filter(
    (product) => product.category === "VANE PUMP",
  );
  const legacyPistonCards = [
    {
      href: "index.html",
      category: "PISTON PUMP / P**V SERIES",
      image: "../../piston-pump-pv-series.png",
      alt: "P**V",
      title: "저소음 가변용량형 피스톤 펌프",
      summary: "16 - 130 cm³/rev · 최고 21 MPa",
    },
    {
      href: "ph-series.html",
      category: "PISTON PUMP / PH SERIES",
      image: "../../piston-pump-ph-series.png",
      alt: "PH",
      title: "저소음고압 가변용량형 피스톤 펌프",
      summary: "80 - 130 cm³/rev · 최고 30 MPa",
    },
  ];
  const makeCatalogCards = (products) =>
    products
      .map((product) =>
        makeProductCard({
          href: `${product.slug}.html`,
          category: `${product.category} / ${product.series} SERIES`,
          image: publicPath(product.image),
          alt: product.imageAlt,
          title: product.title,
          summary: product.highlights.map((item) => item.value).join(" · "),
        }),
      )
      .join("\n          ");

  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>제품소개 | HTML V1</title>
    <link rel="stylesheet" href="../../static/css/v1/styles.css" />
  </head>
  <body>
    <header class="header">
      <a href="products.html" aria-label="한국도키멕 제품소개"><img class="logo" src="../../tokimec_logo.png" alt="한국도키멕 TOKIMEC" /></a>
      <nav class="nav" aria-label="주요 메뉴"><a href="products.html">제품소개</a></nav>
    </header>
    <main>
      <section class="index-hero"><p class="eyebrow">PRODUCT INTRODUCTION</p><h1>제품소개</h1><span>유압기기 › 펌프 › 피스톤 펌프 · 정용량형 베인 펌프</span></section>
      <section class="product-list">
        <h2 class="product-list-title">피스톤 펌프</h2>
        ${legacyPistonCards.map(makeProductCard).join("\n        ")}
        ${makeCatalogCards(pistonProducts)}
      </section>
      <section class="product-list product-list-vane">
        <h2 class="product-list-title">정용량형 베인 펌프</h2>
        ${makeCatalogCards(vaneProducts)}
      </section>
    </main>
    <footer class="footer"><img class="logo" src="../../tokimec_logo.png" alt="한국도키멕 TOKIMEC" /><p>제품 시리즈를 선택해 기술 자료와 기본 사양을 확인하세요.</p></footer>
  </body>
</html>
`;
}

await mkdir(outputDirectory, { recursive: true });

await Promise.all(
  catalogProducts.map((product) =>
    writeFile(
      join(outputDirectory, `${product.slug}.html`),
      makeProductPage(product),
      "utf8",
    ),
  ),
);

await writeFile(join(outputDirectory, "products.html"), makeProductsPage(), "utf8");

console.log(`Generated ${catalogProducts.length} catalog detail pages and products.html.`);
