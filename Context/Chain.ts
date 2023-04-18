import { createContext } from "react";
import * as Chains from "@thirdweb-dev/chains";

import {Chain} from "@thirdweb-dev/chains"

const ChainContext = createContext({
  selectedChain:<Chain>Chains.Ethereum,
  setSelectedChain:(chain:Chains.Chain) =>{
  }
});

export default ChainContext;
