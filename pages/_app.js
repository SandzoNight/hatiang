import 'bulma/css/bulma.min.css'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>ช่องทางหาเตียงผู้ป่วยโควิด-19</title>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name='keywords' content="หาเตียง, หาเตียงโควิด, เบอร์หาเตียง, เว็บหาเตียง, เว็บหาเตียงโควิด, หาเตียง โควิด"></meta>
      <meta name='description' content="รวบรวมช่องทางการติดต่อหาเตียงรักษาผู้ป่วยโควิด-19"></meta>
      <meta property='og:title' content='ช่องทางหาเตียงผู้ป่วยโควิด-19'/>
      <meta property='og:image' content='/static/og.png' />
      <meta property='og:description' content='รวบรวมช่องทางการติดต่อหาเตียงรักษาผู้ป่วยโควิด-19' />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
