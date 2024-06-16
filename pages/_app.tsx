import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import Navbar from "../components/navbar";
import Footer1 from "../components/footer1";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Ecommerce Desktop Website.</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer1/>
    </Fragment>
  );
}

export default MyApp;
