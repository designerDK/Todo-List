export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>디자이너 디케이 투두리스트 테스트입니다. dk's todo list</title>
      <meta name="description" 
      content="디자이너 디케이 투두리스트 테스트입니다. dk's todo list"></meta>
      <meta name="google-site-verification" content="ohrGnA7RsHT30X375ixKOmz7HJIZHM3ZBCPU3Y2ootg" />
      <meta name="naver-site-verification" content="e3a247e584e22522a6693436645ab33639a09cbf" />
      </head>
      <body>
        <h1>디자이너 디케이 투두리스트 테스트입니다.</h1>
        {children}
      </body>
    </html>
  );
}
