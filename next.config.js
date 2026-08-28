import { allProducts, getProductUrl } from "./src/data/products/index.js";

const legacyProductRedirects = allProducts.flatMap((product) => {
  const destination = getProductUrl(product);

  return [
    { source: `/products/${product.slug}`, destination, permanent: false },
    { source: `/v1/products/${product.slug}`, destination, permanent: false },
  ];
});

const phSeries = allProducts.find((product) => product.slug === "ph-series");

const nextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/v1", permanent: false },
      { source: "/v1/products", destination: "/v1", permanent: false },
      {
        source: "/ph-series",
        destination: getProductUrl(phSeries),
        permanent: false,
      },
      {
        source: "/v1/ph-series",
        destination: getProductUrl(phSeries),
        permanent: false,
      },
      ...legacyProductRedirects,
    ];
  },
};

export default nextConfig;
