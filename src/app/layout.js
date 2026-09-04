import "./tailwind.css";

// 모든 Next.js 경로에 적용되는 문서 언어와 기본 메타데이터를 정의합니다.
export const metadata = {
  title: "한국도키멕 홈페이지 시안",
  description: "한국도키멕 홈페이지 v1, v2, v3 시안 선택 화면",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="ko">
      <body className="m-0 bg-[#f7f9fa] font-[Arial,'Noto_Sans_KR',sans-serif] tracking-[-.025em] text-[#15253a] antialiased">
        {children}
      </body>
    </html>
  );
}
