# Vitest Browser Mode + MSW

## Create an environment

Create a codebase by,

```sh
npm create vite@latest vitest-browser-mode-with-msw-example -- --template react-ts
cd vitest-browser-mode-with-msw-example
npm install
```

Install vitest and @vitest/browser by,

```sh
touch tsconfig.spec.json vitest.setup.ts
sh -c 'mkdir -p "$(dirname "$0")" && touch "$0"' `echo src/__tests__/data-fetch.spec.ts`
npm install -D vitest @vitest/browser playwright
```

Install playwright by,

```sh
npx playwright install
```

## Run tests

```sh
npm run test
```
