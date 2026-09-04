import { notFound } from "next/navigation";

import ProductPage from "@/app/v1/components/ProductPage";
import { getProductByPath, productPathParams } from "@/data/products";

// 등록된 제품 데이터에 대해서만 정적 상세 경로를 생성합니다.
export const dynamicParams = false;

// 빌드 시 모든 제품 URL 파라미터를 Next.js에 전달합니다.
export function generateStaticParams() {
  return productPathParams;
}

// 제품명과 설명을 동적 메타데이터로 반영해 공유·검색 결과를 구분합니다.
export async function generateMetadata({ params }) {
  const product = getProductByPath(await params);

  if (!product) return {};

  return {
    title: `${product.series} | 한국도키멕`,
    description: product.lead,
  };
}

// 요청 경로와 일치하는 제품이 없으면 404 화면을 반환합니다.
export default async function ProductDetailPage({ params }) {
  const product = getProductByPath(await params);

  if (!product) notFound();

  return <ProductPage product={product} />;
}
