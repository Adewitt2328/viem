import { defineChain } from '../../utils/chain/defineChain.js'
import { formatters } from '../opStack/formatters.js'

const sourceId = 11_155_111 // sepolia

export const pgnTestnet = /*#__PURE__*/ defineChain({
  id: 58008,
  network: 'pgn-testnet',
  name: 'PGN ',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://sepolia.publicgoods.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'PGN Testnet Explorer',
      url: 'https://explorer.sepolia.publicgoods.network',
    },
    blocksout: {
      name: 'PGN Testnet Explorer',
      url: 'https://explorer.sepolia.publicgoods.network',
    },
  },
  contracts: {
    l2OutputOracle: {
      [sourceId]: {
        address: '0xD5bAc3152ffC25318F848B3DD5dA6C85171BaEEe',
      },
    },
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 3754925,
    },
  },
  formatters,
  sourceId,
  testnet: true,
})
