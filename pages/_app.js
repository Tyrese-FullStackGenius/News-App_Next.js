import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>NextJS News App</title>
          <link rel="icon" href="../public/favicon.ico" />
          <meta name="description" content="A simple NextJS application to get the recent news from News API - Brazil located."/>
          <meta property="og:image" content="../public/news-icon.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
