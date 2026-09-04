import ProductDetail from "../ProductDetail";
import { pistonPumps } from "../data";

// 공용 상세 컴포넌트에 PH 시리즈 데이터만 전달하는 라우트 파일입니다.
export default function PhSeriesDetail() {
  return <ProductDetail pump={pistonPumps[1]} />;
}
