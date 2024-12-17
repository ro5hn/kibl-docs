import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Kibl Documentation',
  description: 'The Ultimate Liquidity Layer for BTC & ETH Restaking Assets',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/getting-started/installation' },
      { text: 'Features', link: '/components/Features' },
      { text: 'Guides', items: [
        { text: 'Bitcoin Staking', link: '/guides/bitcoin-staking' },
        { text: 'Money Markets', link: '/guides/money-markets' }
      ]},
      { text: 'Tokenomics', link: '/tokenomics/overview' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' }
        ]
      },
      {
        text: 'Core Features',
        items: [
          { text: 'Overview', link: '/components/Features' }
        ]
      },
      {
        text: 'User Guides',
        items: [
          { text: 'Bitcoin Staking', link: '/guides/bitcoin-staking' },
          { text: 'Money Markets', link: '/guides/money-markets' }
        ]
      },
      {
        text: 'Tokenomics',
        items: [
          { text: 'Overview', link: '/tokenomics/overview' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kibl' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Kibl'
    }
  }
});