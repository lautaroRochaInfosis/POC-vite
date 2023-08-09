# vamos capo

This project was created from the Infosis Frontend Template. It ships with React 18, TypeScript, Express, ReduxToolkit, ReactRouterDom and Vitest + RTL. Bundled with Vite and Rollup. <br> You may add or remove these packages as needed.

## Project Structure

├── index.html<br> ├── package.json<br> ├── provision<br> ├── .ci<br> ├── public-------------------> STATIC DIRECTORY<br> ├── SECURITY.md<br> ├── server-------------------> BACKEND CODE<br> ├── sonar-project.properties<br> ├── src -----------------------> FRONTEND CODE<br> ├── tsconfig.json<br> ├── tsconfig.node.json<br> ├── vite.config.ts<br> ├── vitest.config.ts<br>

<br>

## How to use this project

note: prefer yarn over npm when possible for the download speed difference

### Install dependencies

<br>

```bash
yarn install || npm i
```

### Run Project

<br>

```bash
yarn dev || npm run dev
```

App will be exposed on port 5173, Express API will be accesible through the '/api' route on port 8080.

## Frontend Templating

<br>

The template has PLOP installed and configured to create new components and Redux Slices.

```bash
yarn plop:client || npm run plop:client
```

You may edit or expand this from `./provision/plop/plofile.cjs`

## Static code analysis

<br>

The project is configured with ESLint and Prettier, config files are in ./.ci/linters. Both commands can be used with the :fix flag to automatically solve issues. <br>

```bash
yarn lint || npm run lint
```

<br>

```bash
yarn prettier || npm run prettier
```

## UnitTesting

<br>

### Run all tests

```
yarn test:client || npm run test:client
```

### Run tests and get coverage report

```
yarn coverage || npm run coverage
```
