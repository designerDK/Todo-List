export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>디자이너디케이 투두리스트 테스트입니다.</title>
      <meta name="description" 
      content="디자이너디케이 투두리스트 테스트입니다."></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
