<!-- markdownlint-disable MD014 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD029 -->

<div align="center">

<h1 style="font-size: 2.5rem; font-weight: bold;">near-vite-starter</h1>

  <p>
    <strong>Near + Vite + TypeScript + Tanstack + Tailwind + Playwright </strong>
  </p>

</div>

<details>
  <summary>Table of Contents</summary>

- [Getting Started](#getting-started)
  - [Installing dependencies](#installing-dependencies)
  - [Running the app](#running-the-app)
  - [Building for production](#building-for-production)
  - [Running tests](#running-tests)
- [Learn more about NEAR](#learn-more-about-near)
- [Ethereum wallet login](#ethereum-wallet-login)
- [Preparing for production](#preparing-for-production)
- [Contributing](#contributing)

</details>

This project a [Vite](https://vitejs.dev/) app bootstrapped with [@near-js/client](https://github.com/near/near-api-js/tree/master/packages/client), [@tanstack/react-router](https://tanstack.com/router/latest), and [@tanstack/react-query](https://tanstack.com/query/latest). It uses [tailwind](https://tailwindcss.com/docs/installation) for styling, [shadcn](https://ui.shadcn.com/) components, and offers a [playwright suite](https://playwright.dev/) for testing.

To easily add more components, [browse the shadcn catalog](https://ui.shadcn.com/docs/components/button) and follow its installation guide. You can also easily generate themes through tools [like this one](https://zippystarter.com/tools/shadcn-ui-theme-generator), and copy and paste your colors into the [input.css](./src/input.css).

## Getting Started

### Installing dependencies

```bash
pnpm install
```

### Running the app

First, run the development server:

```bash
pnpm run dev
```

### Building for production

```bash
pnpm run build
```

### Running tests

```bash
pnpm run test
```

See the full [testing guide](./playwright-tests/README.md).

## Learn more about NEAR

To learn more about NEAR, take a look at the following resources:

- [NEAR Developer Portal](https://dev.near.org/) - homebase for near developers.
- [NEAR Documentation](https://docs.near.org) - learn about NEAR.
- [Frontend Docs](https://docs.near.org/build/web3-apps/quickstart) - learn about this example.

You can check out [the NEAR repository](https://github.com/near) - your feedback and contributions are welcome!

## Ethereum wallet login

If developing in testnet and logging in with an Ethereum wallet, you will need to top up the created EVM wallet on NEAR Testnet.
Go to [Aurora's NEAR wallet playground](https://near-wallet-playground.testnet.aurora.dev/), switch to the chain, connect to Metamask and load accounts, then Add funds.

Note that you should also modify the Project IDs in [ethereum-wallet](./src/wallets/ethereum-wallet.ts) for the REOWN_PROJECT_ID.

## Preparing for production

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you're interested in contributing to this project, please read the [contribution guide](./CONTRIBUTING).

<div align="right">
<a href="https://nearbuilders.org" target="_blank">
<img
  src="https://builders.mypinata.cloud/ipfs/QmWt1Nm47rypXFEamgeuadkvZendaUvAkcgJ3vtYf1rBFj"
  alt="Near Builders"
  height="40"
/>
</a>
</div>
