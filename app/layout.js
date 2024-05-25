export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>디자이너 디케이 투두리스트 테스트입니다. dk's todo list</title>
      <meta name="description" 
      content="디자이너 디케이 투두리스트 테스트입니다. dk's todo list"></meta>

      </head>
      <body>
        <h1>디자이너 디케이 투두리스트 테스트입니다.</h1>
        {children}
      </body>
    </html>
  );
}
