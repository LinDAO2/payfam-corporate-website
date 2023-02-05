import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>
          PayFam | Move Cash and Crypto your way | Withdraw to your bank, MoMo
          and Crypto Wallet.
        </title>
        <meta name="description" content="Send Money Across Africa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="png" href="../assets/favicon.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
