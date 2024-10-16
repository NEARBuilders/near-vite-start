# NEAR + React + TypeScript + Vite

This project a [Vite](https://vitejs.dev/) app bootstrapped with [@near-js/client](https://github.com/near/near-api-js/tree/master/packages/client), [@tanstack/react-router](https://tanstack.com/router/latest), and [@tanstack/react-query](https://tanstack.com/query/latest). It uses [tailwind](https://tailwindcss.com/docs/installation) for styling.

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

## Ethereum Wallet Login

If developing in testnet and logging in with an Ethereum wallet, you will need to top up the created EVM wallet on NEAR Testnet.
Go to [Aurora's NEAR wallet playground](https://near-wallet-playground.testnet.aurora.dev/), switch to the chain, connect to Metamask and load accounts, then Add funds.

## Expanding the ESLint configuration

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
