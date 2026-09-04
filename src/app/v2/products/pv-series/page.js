import { V2ProductDetail, v2Products } from "../../components";

// 공통 상세 컴포넌트에 P**V 데이터만 전달하는 얇은 라우트 어댑터입니다.
export default function V2PvSeries() {
  return <V2ProductDetail product={v2Products[0]} />;
}
