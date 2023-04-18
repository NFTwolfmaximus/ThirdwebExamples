import { ConnectWallet, useActiveChain, useNetworkMismatch, useSwitchChain } from "@thirdweb-dev/react";
import { Chain, Ethereum, Goerli, Mumbai, Polygon } from "@thirdweb-dev/chains";

import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import ChainContext from "../Context/Chain";
import { useContext, useState } from "react";

const Home: NextPage = () => {

  const { selectedChain, setSelectedChain } = useContext(ChainContext);
  const wrongNetwork = useNetworkMismatch();
  const activeChain = useActiveChain();

  const switchChain = useSwitchChain();

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


  if (wrongNetwork) {

  }

  return (

    <div className={styles.container}>
      <main className={styles.main}>

        <div>
          <ConnectWallet />
        </div>

        <div style={{ padding: '20px' }}></div>

        <div>
          Selected Provider Chain: {selectedChain.chain}
        </div>

        <div>
          Wallet Connected Chain: {activeChain?.chain + ''}
        </div>

        <div style={{ padding: '20px' }}></div>

        <div>
          Network Mismatch: {wrongNetwork.toString().toUpperCase()}
        </div>

        <div style={{ padding: '20px' }}></div>


        <div>
          Switch Provider Chain

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
        </div>

        <div style={{ padding: '20px' }}></div>

        <button onClick={() => switchChain(selectedChain.chainId)}>
          Switch Chain to {selectedChain.chain}
        </button>
        <div>

        </div>


      </main>
    </div>
  );
};

export default Home;
