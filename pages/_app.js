import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import Head from "next/head";
import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DrugSafe</title>
        <meta name="description" content="A modern harm reduction website."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp
