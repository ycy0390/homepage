import { notFound } from "next/navigation";

import ProductPage from "@/app/v1/components/ProductPage";
import { getProductByPath, productPathParams } from "@/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return productPathParams;
}

export async function generateMetadata({ params }) {
  const product = getProductByPath(await params);

  if (!product) return {};

  return {
    title: `${product.series} | 한국도키멕`,
    description: product.lead,
  };
}

export default async function ProductDetailPage({ params }) {
  const product = getProductByPath(await params);

  if (!product) notFound();

  return <ProductPage product={product} />;
}
