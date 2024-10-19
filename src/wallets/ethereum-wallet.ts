/**
 * ETHEREUM WALLET
 *
 * This prepares an EVM NEAR wallet option to be made available to the near-wallet
 * It is NOT configured to login to an specific contract.
 *
 * Make sure to configure your REOWN_PROJECT_ID
 */

import { NETWORK_ID } from "@/config";
import { injected, walletConnect } from "@wagmi/connectors";
import {
  // Config as WagmiConfig,
  createConfig,
  http,
  reconnect
} from "@wagmi/core";
import { createWeb3Modal } from "@web3modal/wagmi";

// MODIFY WITH YOUR OWN PROJECT_ID HERE : https://cloud.reown.com/sign-in
export const REOWN_PROJECT_ID = "8d5dd3e6eda55e2e0adffb629fd52c27";

// Chains for EVM Wallets
export const evmWalletChains = {
  mainnet: {
    chainId: 397,
    name: "Near Mainnet",
    explorer: "https://eth-explorer.near.org",
    rpc: "https://eth-rpc.mainnet.near.org"
  },
  testnet: {
    chainId: 398,
    name: "Near Testnet",
    explorer: "https://eth-explorer-testnet.near.org",
    rpc: "https://near-wallet-relayer.testnet.aurora.dev"
  },
  localnet: {
    chainId: 398,
    name: "Near Testnet",
    explorer: "https://eth-explorer-testnet.near.org",
    rpc: "https://eth-rpc.testnet.near.org"
  }
};

export const EVMWalletChain = evmWalletChains[NETWORK_ID];

export const NEARProtocol = {
  id: EVMWalletChain.chainId,
  name: EVMWalletChain.name,
  nativeCurrency: {
    decimals: 18,
    name: "NEAR",
    symbol: "NEAR"
  },
  rpcUrls: {
    default: { http: [EVMWalletChain.rpc] },
    public: { http: [EVMWalletChain.rpc] }
  },
  blockExplorers: {
    default: {
      name: "NEAR Explorer",
      url: EVMWalletChain.explorer
    }
  },
  testnet: NETWORK_ID === "testnet"
};

export const wagmiConfig = createConfig({
  chains: [NEARProtocol],
  transports: {
    [NEARProtocol.id]: http()
  },
  connectors: [
    walletConnect({
      projectId: REOWN_PROJECT_ID,
      showQrModal: false
    }),
    injected({ shimDisconnect: true })
  ]
});
reconnect(wagmiConfig);

export const web3Modal = createWeb3Modal({
  wagmiConfig,
  projectId: REOWN_PROJECT_ID
});

export const transformedWeb3Modal = {
  ...web3Modal,
  getState: () => {
    const state = web3Modal.getState();
    const selectedNetworkIdString = state.selectedNetworkId;

    const selectedNetworkId = selectedNetworkIdString
      ? parseInt(selectedNetworkIdString.split(":")[1], 10)
      : undefined;

    return {
      ...state,
      selectedNetworkId
    };
  },
  open: web3Modal.open.bind(web3Modal),

  close: web3Modal.close.bind(web3Modal),
  subscribeEvents: web3Modal.subscribeEvents.bind(web3Modal)
};
