// Copyright 2019-2022 @subwallet/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BuyService, BuyTokenInfo, SupportService } from '@subwallet/extension-koni-ui/types';

const DEFAULT_BUY_SERVICE: BuyService = { symbol: '', network: '' };

const DEFAULT_SERVICE_INFO: Record<SupportService, BuyService> = {
  transak: { ...DEFAULT_BUY_SERVICE },
  banxa: { ...DEFAULT_BUY_SERVICE },
  coinbase: { ...DEFAULT_BUY_SERVICE },
  onramper: { ...DEFAULT_BUY_SERVICE },
  moonpay: { ...DEFAULT_BUY_SERVICE }
};

export const MAP_PREDEFINED_BUY_TOKEN: Record<string, BuyTokenInfo> = {
  'aigent-NATIVE-AIGENT': {
    serviceInfo: {
      ...DEFAULT_SERVICE_INFO,
      banxa: {
        network: 'aigent',
        symbol: 'AIGENT'
      },
      coinbase: {
        network: 'aigent',
        symbol: 'AIGENT'
      }
    },
    network: 'aigent',
    slug: 'aigent-NATIVE-AIGENT',
    symbol: 'AIGENT',
    support: 'SUBSTRATE',
    services: [
    ]
  },
  'kusama-NATIVE-KSM': {
    serviceInfo: {
      ...DEFAULT_SERVICE_INFO,
      banxa: {
        network: 'KSM',
        symbol: 'KSM'
      },
      coinbase: {
        network: 'kusama',
        symbol: 'KSM'
      }
    },
    network: 'kusama',
    slug: 'kusama-NATIVE-KSM',
    symbol: 'KSM',
    support: 'SUBSTRATE',
    services: [
      'banxa',
      'coinbase'
    ]
  }
};

export const LIST_PREDEFINED_BUY_TOKEN = Object.values(MAP_PREDEFINED_BUY_TOKEN);
