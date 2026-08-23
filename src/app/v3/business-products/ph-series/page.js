import ProductDetail from '../ProductDetail';
import { pistonPumps } from '../data';

export default function PhSeriesDetail() {
  return <ProductDetail pump={pistonPumps[1]} />;
}
