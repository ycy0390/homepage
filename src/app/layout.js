import "./tailwind.css";

export const metadata = {
  title: "P**V 시리즈 | 한국도키멕",
  description:
    "저소음 가변용량형 피스톤 펌프 P**V 시리즈 제품 상세 및 카탈로그",
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
