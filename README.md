### React Boilerplate - start React project in one second

[![Dependencies](https://david-dm.org/Serhii-Boiko/react-boilerplate.svg)](https://Serhii-Boiko/react-boilerplate/)

### Get Started
    sudo apt-get update && sudo apt-get install yarn
    yarn
    yarn start
    
[yarn docs](https://yarnpkg.com/lang/en/docs/install/)
        
### Provides
- React 16.12.0
- React-Redux 7.1.3
- React-Router 5.1.2
- React-Intl 3.12.0

### Engines
- Node.JS 12.15.0
- npm 6.13.4
- yarn": 1.21.1

### Development
- webpack-dev-server
- react-hot-loader
- redux-devtools
- redux-logger

### Building
- WebPack 4
- Babel 7
- yarn
- webpack-bundle-analyzer
- Support .env 

### HTTP
- axios
- redux-sage 

### Style support
- CSS
- SASS
- LESS
- Styled Component


### Code Quality
- ESLint
- prettier
- pre commit hooks

### Testing
- Jest

### Local store
Custom middleware for saving redux state to browser local storage.
You can select what data you need to save and restore.
`localStorageMiddleware(serializer)` - the redux middleware.
You should pass the `serializer` object. Example:


```
// src/store/index.tsx
const serializer = {
  value: (store) => store.example.value,
};
```
The object describes what data should be saved in the local store and how that data gets from the redux state.

`reHydrateState(defaultState, deserealizer)` - the function for getting data from local store and pass to redux store.

```
// src/store/rootReducer.tsx
const defaultState = {
  value: 0,
};

const initState = reHydrateState(defaultState, {
  value: (initialState: any, value: number) => {
    initialState.value = value;

    return initialState;
  },
});
```


### Styled Media Query

Media query for Styled Components

Example default usage:

```
const Box = styled.div`
  background: black;
  
  ${media.lessThan("mobileM")`
    background: red;
  `}

  ${media.between("tablet", "laptop")`
    background: green;
  `}
 
  ${media.greaterThan("laptopL")`
    background: blue;
  `}
`;
```

Example media query based on Redux and State or any number:

```
const Box = styled.div`
  background: black;
 
  ${(props) =>  media.stateMediaQueryLessThan("mobileM", props.width)`
    background: red;
  `}
 
  ${(props) => media.stateMediaQueryBetween("tablet", "laptop", props.width)`
    background: green;
  `}
 
  ${(props) => media.stateMediaQueryGreaterThan("laptopL", props.width)`
    background: blue;
  `}
 `;

```

### Env variables
Your project can consume variables declared in your environment as if
they were declared locally in your JS files. By default you will have
NODE_ENV defined for you, and any other environment variables starting
with REACT_APP_.

```
WARNING: Do not store any secrets (such as private API keys) in your React app!
```

### Commands
   `yarn clean` - clean dist folder
    
   `yarn build` - build project to dist folder
   
   `yarn analyzer` - show bundle analyzer page 
   
   `yarn start` - start dev-server with hot-reloading
   
   `yarn test` - start all tests from test folder
   
   `lint` - checking code;
      
   `lint:fix` - checking and auto-correct code;

### Folder structure
    - config
        - nginx [Basic config]
        - webpack [Webpack configs]
    - dist [Built production folder]
    - public [index.html folder]
    - src
        - app
            - Example [Example Feature]
                - components
                - containers
                - actions.js
                - actionTypes.js
                - constants.js
                - index.js
                - reducer.js
                - router.js
                - sages.js
            - Settings [App settings]
            - app.js
            - router.js [Main router]
        - common [Geeneral conponents and utils]
        - store [Store setup (Redux + Redux-Router + Saga)]
        - index.js [File initialize React app]
    - test [Folder for tests]

### Dependencies and dev-dependencies from package.json.
```json
{
  "dependencies": {
    "axios": "^0.19.2",
    "connected-react-router": "^6.7.0",
    "history": "^4.10.1",
    "prop-types": "^15.7.2",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-hot-loader": "^4.12.19",
    "react-intl": "^3.12.0",
    "react-redux": "^7.1.3",
    "react-router": "^5.1.2",
    "react-router-dom": "^5.1.2",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.8",
    "redux-logger": "^3.0.6",
    "redux-saga": "^1.1.3",
    "styled-components": "^5.0.1"
  },
  "devDependencies": {
    "@babel/core": "^7.8.4",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-proposal-object-rest-spread": "^7.8.3",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-async-to-generator": "^7.8.3",
    "@babel/plugin-transform-runtime": "^7.8.3",
    "@babel/preset-env": "^7.8.4",
    "@babel/preset-react": "^7.8.3",
    "@babel/runtime": "^7.8.4",
    "babel-eslint": "^10.0.3",
    "babel-loader": "^8.0.6",
    "babel-plugin-styled-components": "^1.10.7",
    "copy-webpack-plugin": "^5.1.1",
    "css-loader": "^3.4.2",
    "dotenv": "^8.2.0",
    "eslint": "^6.8.0",
    "eslint-config-prettier": "^6.10.0",
    "eslint-config-recommended": "^4.0.0",
    "eslint-import-resolver-webpack": "^0.12.1",
    "eslint-loader": "^3.0.3",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.2",
    "eslint-plugin-react": "^7.18.3",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^5.0.2",
    "html-webpack-harddisk-plugin": "^1.0.1",
    "html-webpack-plugin": "^3.2.0",
    "husky": "^4.2.1",
    "jest": "^25.1.0",
    "json-loader": "^0.5.7",
    "less": "^3.10.3",
    "less-loader": "^5.0.0",
    "lint-staged": "^10.0.7",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.13.1",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "path": "^0.12.7",
    "prettier": "^1.19.1",
    "react-test-renderer": "^16.12.0",
    "sass-loader": "^8.0.2",
    "script-ext-html-webpack-plugin": "^2.1.4",
    "simple-progress-webpack-plugin": "^1.1.2",
    "style-loader": "^1.1.3",
    "terser-webpack-plugin": "^2.3.4",
    "webpack": "^4.41.5",
    "webpack-bundle-analyzer": "^3.6.0",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.3",
    "webpack-manifest-plugin": "^2.2.0",
    "webpack-merge": "^4.2.2"
  }
}
```
