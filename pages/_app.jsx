import { ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import { domainName } from "../const/yourDetails";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "Goreli";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
      }}
    >
      <Head>
        <title>Morvillo Abramowitz Grand Iason & Anello</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="Maglaw"
          content="Cryptocurrency: U.S. Regulatory and Law Enforcement Issues"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
