/* eslint-disable header/header */
export const ChainInfoMap = {
  // kusama: {
  //   slug: 'kusama',
  //   name: 'Kusama',
  //   isTestnet: false,
  //   chainStatus: 'ACTIVE',
  //   icon: 'https://chain-list-assets.subwallet.app/assets/chains/kusama.png',
  //   providers: {
  //     RadiumBlock: 'wss://kusama.public.curie.radiumblock.co/ws',
  //     LuckyFriday: 'wss://rpc-kusama.luckyfriday.io',
  //     Stakeworld: 'wss://ksm-rpc.stakeworld.io',
  //     'IBP-GeoDNS1': 'wss://rpc.ibp.network/kusama',
  //     'Light Client': 'light://substrate-connect/kusama'
  //   },
  //   evmInfo: null,
  //   substrateInfo: {
  //     relaySlug: null,
  //     paraId: null,
  //     genesisHash: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
  //     addressPrefix: 2,
  //     chainType: 'RELAYCHAIN',
  //     crowdloanUrl: null,
  //     blockExplorer: 'https://kusama.subscan.io/',
  //     existentialDeposit: '333333333',
  //     symbol: 'KSM',
  //     decimals: 12,
  //     hasNativeNft: true,
  //     supportStaking: true,
  //     supportSmartContract: null,
  //     crowdloanParaId: null,
  //     crowdloanFunds: []
  //   },
  //   extraInfo: {
  //     subscanSlug: 'kusama',
  //     chainBalanceSlug: 'kusama'
  //   },
  //   bitcoinInfo: null,
  //   tonInfo: null
  // },
  aigent: {
    slug: 'aigent',
    name: 'AIGENT',
    isTestnet: false,
    chainStatus: 'ACTIVE',
    icon: 'https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/aigent-logo.png',
    providers: {
      aigent: 'wss://backend.ai-gents.io'
    },
    evmInfo: null,
    substrateInfo: {
      relaySlug: null,
      paraId: 0,
      genesisHash: '0x917813c36c7b1346d6895458dda04f24c0ff771ec7cd676fc5fe93fbc223e098',
      addressPrefix: 42,
      chainType: 'RELAYCHAIN',
      crowdloanUrl: null,
      blockExplorer: 'https://testnet.ai-gents.io/#/explorer',
      existentialDeposit: '500',
      symbol: 'AIGENT',
      decimals: 18,
      hasNativeNft: false,
      supportStaking: true,
      supportSmartContract: null,
      crowdloanParaId: null,
      crowdloanFunds: []
    },
    extraInfo: {
      subscanSlug: 'aigent'
    },
    bitcoinInfo: null,
    tonInfo: null
  }
};
