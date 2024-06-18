import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <title>Paulo Guilherme</title>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"/>
      </Head>
      <body className='bg-portfolio-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}