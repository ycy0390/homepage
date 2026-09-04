import { V3Footer, V3Header } from "../components";
import SupportBoard from "./SupportBoard";

// 고객지원 경로는 공용 레이아웃 안에 클라이언트 검색 게시판을 배치합니다.
export default function V3CustomerSupportPage() {
  return (
    <div className="min-h-screen bg-white font-[Arial,'Noto_Sans_KR',sans-serif] tracking-[-.035em] text-[#262d32]">
      <V3Header active="support" />
      <main>
        <SupportBoard />
      </main>
      <V3Footer />
    </div>
  );
}
