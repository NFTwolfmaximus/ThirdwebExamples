## Getting Started

Once you have this code base run the below to install dependencies. 

```bash
yarn instal 
```

This example is to describe how to switch chain providers using Thirdweb. This version will runs 0.9.8 of the Thirdweb SDK.



### Chain Provider

We have made another Provider called 'Chain' that is responsible for passing the chain info through out the app. 

It does this through our Chain Context that is imported on an individual page. 

```bash 
import ChainContext from "../Context/Chain";
```

### _app.tsx setup
The app file follows the same documentation for the basic Thirdweb Provider implementation, only wrapped with our new Chain Provider. 

A state variable is used to hold the value of our selected chain that we wish to pass onto the Thirdweb Provider. In this example its default value is set to the Ethereum Network. 

**IMPORTANT:**
DO NOT forget to set the **supportedChains** option in the ThirdwebProvider to support your desired chains.  

```bash
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

import { useState } from "react";
import ChainContext from "../Context/Chain";
import * as Chains from "@thirdweb-dev/chains";
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
```



## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [Follow My Twitter](https://twitter.com/NFTwolfmaximus) - Rotating Topics on Thirdweb and Web 3 
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.

## Join the Thirdweb Discord!

I usually hang out in the support channel and am available for any questions! 

For any questions, suggestions, join the discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
