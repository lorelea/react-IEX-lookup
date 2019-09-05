## Demo → [https://lorelea.github.io/react-IEX-lookup/](https://lorelea.github.io/react-IEX-lookup/)
## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
| Command | Description |
| --- | --- |
| `npm start` | Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. |
| `npm run build` | Builds the app for production to the `build` folder. |
| `npm test` | Launches the test runner in the interactive watch mode. |
| `npm run eject` | Customize build tools configurations... | 
| `npm run deploy` | Runs `npm run build` and publishes result to a **gh-pages** branch on GitHub |
| `npm run serve` | Statically serving production ready `build` directory. Open [http://localhost:5000](http://localhost:5000) to view it in the browser. |
## Browser compatibility
- ~~added [polyfill.io](https://polyfill.io) to retrieve custom, browser-specific polyfills with gated feature's check.~~
- added [HTML5 Shim](https://github.com/aFarkas/html5shiv) and [Respond.js](https://github.com/scottjehl/Respond) to IE8 support of HTML5 elements and media queries.
- added [react-app-polyfill](https://www.npmjs.com/package/react-app-polyfill) (IE9 & stable modules)
- changed `browserslist` default criterias
## CSS
- added CSS Reset (only parts of PostCSS Normalize CSS according to project's browserslist)
- added [node-sass](https://github.com/sass/node-sass)
## Components
- configured support importing modules using absolute paths.
- ~~utilized [react-select](https://github.com/JedWatson/react-select) serchable select component.~~
  **Due to critical [issue](https://github.com/JedWatson/react-select/issues/2850) with long list rendering, switched to another component.**
  - https://blog.johnnyreilly.com/2019/04/react-select-with-less-typing-lag.html
  - (example)[https://codesandbox.io/s/lxv7omv65l]
  - (example)[https://codesandbox.io/s/zn70lqp31m]
  - (example)[https://codesandbox.io/s/qoro7wzy9]
- developed custom autocomplete component
- utilized [react-windowed-select](https://github.com/jacobworrel/react-windowed-select) to workaround `react-select` issue with big list rendering (An integration of **react-window** with **react-select**).
- separated `api-config` per environment
