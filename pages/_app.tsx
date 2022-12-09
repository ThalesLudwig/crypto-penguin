import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
import RouteGuard from "../components/RouteGuard/RouteGuard";
import Footer from "../components/Footer/Footer";
import ConnectedTheme from "../components/ConnectedTheme/ConnectedTheme";
import store, { persistor } from "../config/store";
import Header from "../components/Header/Header";
import { Alchemy, Network } from "alchemy-sdk";

export default function App({ Component, pageProps }: AppProps) {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_APP_ID,
    network: Network.MATIC_MUMBAI,
  };
  const alchemy = new Alchemy(config);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedTheme>
          <Head>
            <title>Crypto-Penguin</title>
            <meta name="description" content="The personal NFT multichain wishlist" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <RouteGuard>
            <Component {...pageProps} alchemy={alchemy} />
          </RouteGuard>
          <Footer />
        </ConnectedTheme>
      </PersistGate>
    </Provider>
  );
}
