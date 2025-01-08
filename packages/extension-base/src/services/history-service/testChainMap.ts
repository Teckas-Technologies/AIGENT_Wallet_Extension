// Copyright 2019-2022 @polkadot/extension-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { _ChainInfo } from '@subwallet/chain-list/types';

export const TEST_CHAIN_LIST = [
{
  slug: 'kusama',
  name: 'Kusama',
  isTestnet: false,
  chainStatus: 'ACTIVE',
  providers: {
    Parity: 'wss://kusama-rpc.polkadot.io',
    OnFinality: 'wss://kusama.api.onfinality.io/public-ws',
    Dwellir: 'wss://kusama-rpc.dwellir.com',
    'Light Client': 'light://substrate-connect/kusama',
    PinkNode: 'wss://public-rpc.pinknode.io/kusama',
    RadiumBlock: 'wss://kusama.public.curie.radiumblock.xyz/ws',
    '1RPC': 'wss://1rpc.io/ksm'
  },
  substrateInfo: {
    paraId: null,
    relaySlug: null,
    genesisHash: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
    addressPrefix: 2,
    crowdloanUrl: null,
    chainType: 'RELAYCHAIN',
    blockExplorer: 'https://kusama.subscan.io/',
    symbol: 'KSM',
    existentialDeposit: '333333333',
    decimals: 12,
    hasNativeNft: true,
    supportStaking: true,
    supportSmartContract: null
  },
  evmInfo: null,
  active: true,
  currentProvider: 'Parity'
},
{
  slug: 'aigent',
  name: 'AIGENT',
  isTestnet: false,
  chainStatus: 'ACTIVE',
  providers: {
    aigent: "wss://backend.ai-gents.io"
  },
  substrateInfo: {
    paraId: 0,
    relaySlug: null,
    genesisHash: '0x917813c36c7b1346d6895458dda04f24c0ff771ec7cd676fc5fe93fbc223e098',
    addressPrefix: 42,
    crowdloanUrl: null,
    chainType: 'RELAYCHAIN',
    blockExplorer: 'https://testnet.ai-gents.io/#/explorer',
    symbol: 'AIGENT',
    existentialDeposit: '500',
    decimals: 18,
    hasNativeNft: false,
    supportStaking: true,
    supportSmartContract: null
  },
  evmInfo: null,
  active: true,
  currentProvider: 'aigent'
}
] as unknown as _ChainInfo[];

export const TEST_CHAIN_MAP: Record<string, _ChainInfo> = Object.fromEntries(TEST_CHAIN_LIST.map((chain) => [chain.slug, chain]));
