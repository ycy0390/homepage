import { V2ProductDetail, v2Products } from "../../components";

// 공통 상세 컴포넌트에 PH 데이터만 전달하는 얇은 라우트 어댑터입니다.
export default function V2PhSeries() {
  return <V2ProductDetail product={v2Products[1]} />;
}
