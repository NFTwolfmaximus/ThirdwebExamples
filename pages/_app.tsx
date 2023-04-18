import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

import { useState } from "react";
import ChainContext from "../Context/Chain";
import * as Chains from "@thirdweb-dev/chains";



const activeChain = "ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  //Create state variable for selected chain. Default value is Ethereum 
  const [selectedChain, setSelectedChain] = useState<Chains.Chain>(Chains.Ethereum);

  return (
    // Wrap Our Thirdweb Provider with our own. Remember information passes top-down. 
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      <ThirdwebProvider activeChain={selectedChain} supportedChains={[Chains.Polygon,Chains.Ethereum]}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ChainContext.Provider>
  );
}

export default MyApp;
