import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR" className="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Paulo Guilherme — Desenvolvedor Back-end especialista em C# e .NET" />
        <meta name="keywords" content="C#, .NET, ASP.NET Core, Back-end, API, Developer, Desenvolvedor" />
        <meta name="author" content="Paulo Guilherme Fideli" />
        <meta property="og:title" content="Paulo Guilherme | Backend Developer" />
        <meta property="og:description" content="Desenvolvedor Back-end especialista em C# e .NET. APIs robustas, arquitetura limpa e soluções escaláveis." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}