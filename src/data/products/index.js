import { catalogProducts as catalogSourceProducts } from "./catalog-products.js";
import { pistonSeriesProducts } from "./piston-series.js";

const categoryPaths = {
  "PISTON PUMP": ["hydraulics", "pumps", "piston-pumps"],
  "VANE PUMP": ["hydraulics", "pumps", "vane-pumps"],
};

const withCategoryPath = (product) => ({
  ...product,
  categoryPath: product.categoryPath ?? categoryPaths[product.category],
});

export const catalogProducts = catalogSourceProducts.map(withCategoryPath);
export const allProducts = [...pistonSeriesProducts, ...catalogProducts].map(
  withCategoryPath,
);

export const productPathParams = allProducts.map(
  ({ categoryPath: [system, group, category], slug }) => ({
    system,
    group,
    category,
    slug,
  }),
);

export const getProductUrl = ({ categoryPath, slug }) =>
  `/v1/products/${categoryPath.join("/")}/${slug}`;

export function getProductByPath({ system, group, category, slug }) {
  return allProducts.find(
    (product) =>
      product.slug === slug &&
      product.categoryPath.join("/") === `${system}/${group}/${category}`,
  );
}

export const getProductBySlug = (slug) =>
  allProducts.find((product) => product.slug === slug);
