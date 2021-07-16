import 'bulma/css/bulma.min.css'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <>
    <Head>
      <title>ช่องทางหาเตียงผู้ป่วยโควิด-19</title>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name='keywords' content="หาเตียง, หาเตียงโควิด, เบอร์หาเตียง, เว็บหาเตียง, เว็บหาเตียงโควิด, หาเตียง โควิด"></meta>
      <meta name='description' content="รวบรวมช่องทางการติดต่อหาเตียงรักษาผู้ป่วยโควิด-19"></meta>
      <meta property='og:title' content='ช่องทางหาเตียงผู้ป่วยโควิด-19' />
      <meta property='og:image' content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/og.png`} />
      <meta property='og:description' content='รวบรวมช่องทางการติดต่อหาเตียงรักษาผู้ป่วยโควิด-19' />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
