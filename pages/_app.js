import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import Head from "next/head";
import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DrugSafe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp
