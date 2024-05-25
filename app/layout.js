export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>디자이너디케이 투두리스트 테스트입니다.</title>
      <meta name="description" 
      content="디자이너디케이 투두리스트 테스트입니다."></meta>
      <meta name="google-site-verification" content="ohrGnA7RsHT30X375ixKOmz7HJIZHM3ZBCPU3Y2ootg" />
      <meta name="naver-site-verification" content="e3a247e584e22522a6693436645ab33639a09cbf" />
      </head>
      <body>{children}</body>
    </html>
  );
}
