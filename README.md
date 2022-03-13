# vue3-boilerplate

This project is consisted of the following packages.

* Vue 3
* Vite
* Typescript
* Vuetify 3
* Pinia
* Axios
* Cypress
* Vitest
* ESLint

## Architecture
```
├─ cypress
├─ environment      // environment variables files.
├─ public           // static assets.
├─ src
│  ├─ assets        // assets such as images or font files.
│  ├─ components    // universal Vue components.
│  ├─ plugins       // app level functionality.
│  ├─ router        // view's routers config.
│  ├─ script        // script files.
│  │  └─ api        // script files for backend api.
│  ├─ stores        // pinia store modules.
│  ├─ styles        // css(scss) files.
│  └─ views         // pages.
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

1. WebStorm > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint

2. Check `Automatic ESLint configuration`

3. Check `Run eslint —fix on save`

```sh
npm run lint
```

## References
* [awesone-vue](https://github.com/vuejs/awesome-vue#frameworks)
