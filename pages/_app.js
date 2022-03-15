import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>NextJS News App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
