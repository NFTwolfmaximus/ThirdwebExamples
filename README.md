## Getting Started

Once you have this code base run the below to install dependencies. 

```bash
yarn install
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

## Performing The Switch 
**In our index.tsx file we will first need to import our Chain Context.**
```bash
import ChainContext from "../Context/Chain";
```

**Then we will create a selectedChain varaiable and set it equal to what the value is in our Context** 
```bash
  const { selectedChain, setSelectedChain } = useContext(ChainContext);
```

**For Thirdweb hooks we will need** 
```bash
  const wrongNetwork = useNetworkMismatch()
  const activeChain = useActiveChain();
  const switchChain = useSwitchChain();
```
useNetworkMismatch - Compares the users wallet connection to the Provider value in our Dapp 

useActiveChain - Return the value of our currently selected Provider chain.

switchChain - Prompts a switch network event on the users connected wallet. 

**Providing a List of chains for the user to select**
Add as many chains as you would like your user to have available as options on your select tag. 
 ```bash
        <div>
            <select
              value={String(selectedChain.chainId)}
              onChange={(e) => translateChainID(parseInt(e.target.value))}
            >
              {/* <option value={String(Polygon.chainId)}>Mumbai</option>
              <option value={String(Goerli.chainId)}>Goerli</option> */}
              <option value={String(Ethereum.chainId)}>Ethereum</option>
              <option value={String(Polygon.chainId)}>Polygon</option>

            </select>
        </div>
 ```

**Converting User Selection to Chain - translateChainID()**
This method will convert our String value into the chainID that our Context and Thirdweb Provider require. 

Match the cases in the Switch statement with the options you offer. 

```bash
 const translateChainID = (chainId: number) => {
    let dropdownChain: Chain;
    dropdownChain = Ethereum

    switch (chainId) {
      case 80001: dropdownChain = Mumbai
        break;
      case 5: dropdownChain = Goerli
        break;
      case 137: dropdownChain = Polygon
        break;
      default: dropdownChain = Ethereum
        break;
    }
    setSelectedChain(dropdownChain)
  }
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [Follow My Twitter](https://twitter.com/NFTwolfmaximus) - Rotating Topics on Thirdweb and Web 3 
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.

## Join the Thirdweb Discord!

I usually hang out in the support channel and am available for any questions! 

For any questions, suggestions, join the discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
