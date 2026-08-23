import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'P**V 시리즈 | 한국도키멕',
  description: '저소음 가변용량형 피스톤 펌프 P**V 시리즈 제품 상세 및 카탈로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
