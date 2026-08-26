import ProductDetail from "../ProductDetail";
import { pistonPumps } from "../data";

export default function PvSeriesDetail() {
  return <ProductDetail pump={pistonPumps[0]} />;
}
