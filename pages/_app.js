import 'bulma/css/bulma.min.css'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>ช่องทางหาเตียงผู้ป่วยโควิด-19</title>
      <meta property='og:title' content='ช่องทางหาเตียงผู้ป่วยโควิด-19'/>
      <meta property='og:image' content='/static/og.png' />
      <meta property='og:description' content='รวบรวมช่องทางการติดต่อหาเตียงรักษาผู้ป่วยโควิด-19' />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
