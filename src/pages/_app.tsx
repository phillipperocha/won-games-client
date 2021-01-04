import GlobalStyles from 'styles/globals'
import Head from 'next/head'

import type { AppProps /*, AppContext */ } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Advanced React - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
