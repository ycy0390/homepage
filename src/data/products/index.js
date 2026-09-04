import { catalogProducts as catalogSourceProducts } from "./catalog-products.js";
import { pistonSeriesProducts } from "./piston-series.js";

// 데이터 파일별 제품을 하나의 V1 상품 저장소로 통합하고 URL 규칙을 제공합니다.
const categoryPaths = {
  "PISTON PUMP": ["hydraulics", "pumps", "piston-pumps"],
  "VANE PUMP": ["hydraulics", "pumps", "vane-pumps"],
};

// 카테고리 경로가 없는 기존 데이터에도 공통 URL 체계를 보완합니다.
const withCategoryPath = (product) => ({
  ...product,
  categoryPath: product.categoryPath ?? categoryPaths[product.category],
});

// 화면과 정적 라우트에서 사용할 가공 완료 제품 목록입니다.
export const catalogProducts = catalogSourceProducts.map(withCategoryPath);
export const allProducts = [...pistonSeriesProducts, ...catalogProducts].map(
  withCategoryPath,
);

// Next.js의 동적 상세 페이지가 빌드 시 생성할 경로 매개변수입니다.
export const productPathParams = allProducts.map(
  ({ categoryPath: [system, group, category], slug }) => ({
    system,
    group,
    category,
    slug,
  }),
);

// 목록 카드가 사용하는 V1 제품 상세 URL을 일관되게 생성합니다.
export const getProductUrl = ({ categoryPath, slug }) =>
  `/v1/products/${categoryPath.join("/")}/${slug}`;

// URL의 네 단계 경로와 모두 일치하는 제품만 반환합니다.
export function getProductByPath({ system, group, category, slug }) {
  return allProducts.find(
    (product) =>
      product.slug === slug &&
      product.categoryPath.join("/") === `${system}/${group}/${category}`,
  );
}

// 슬러그만 아는 경우를 위한 간단한 조회 함수입니다.
export const getProductBySlug = (slug) =>
  allProducts.find((product) => product.slug === slug);
