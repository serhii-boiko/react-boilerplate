### React Boilerplate - start React project in one second

[![Dependencies](https://david-dm.org/Serhii-Boiko/react-boilerplate.svg)](https://Serhii-Boiko/react-boilerplate/)

##### ToDo list
- [ ] Add lazy load React components
- [ ] Add environment variables
- [ ] ReSelect

### Get Started
    sudo apt-get update && sudo apt-get install yarn
    yarn
    yarn start
    
[yarn docs](https://yarnpkg.com/lang/en/docs/install/)
        
### Provides
- React 16.6.3
- React-Redux 6.0.0
- React-Router 4.3.1
- React-Intl 2.7.2

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


### Code Quality
- ESLint
- prettier
- airbnb
- Flow

### Testing
- Jest


### All list commands:
   `yarn clean` - clean dist folder
    
   `yarn build` - build project to dist folder
   
   `yarn analyzer` - show bundle analyzer page 
   
   `yarn start` - start dev-server with hot-reloading
   
   `yarn test` - start all tests from test folder

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
                - state.js
            - Settings [App settings]
            - app.js
            - router.js [Main router]
        - common [Geeneral conponents and utils]
        - models [Models folders]
        - store [Store setup (Redux + Redux-Router + Saga)]
        - index.js [File initialize React app]
    - test [Folder for tests]

### Dependencies and dev-dependencies from package.json.
```json
{
  "dependencies": {
    "axios": "^0.18.0",
    "connected-react-router": "^6.0.0",
    "history": "^4.7.2",
    "react": "^16.6.3",
    "react-dom": "^16.6.3",
    "react-hot-loader": "^4.6.0",
    "react-intl": "^2.7.2",
    "react-redux": "^6.0.0",
    "react-router": "^4.3.1",
    "react-router-dom": "^4.3.1",
    "redux": "^4.0.1",
    "redux-devtools-extension": "^2.13.7",
    "redux-logger": "^3.0.6",
    "redux-saga": "^0.16.2"
  },
 "devDependencies": {
    "@babel/core": "^7.2.2",
    "@babel/plugin-proposal-class-properties": "^7.2.1",
    "@babel/plugin-proposal-object-rest-spread": "^7.2.0",
    "@babel/plugin-syntax-dynamic-import": "^7.2.0",
    "@babel/plugin-transform-async-to-generator": "^7.2.0",
    "@babel/polyfill": "^7.0.0",
    "@babel/preset-env": "^7.2.0",
    "@babel/preset-flow": "^7.0.0",
    "@babel/preset-react": "^7.0.0",
    "babel-eslint": "^10.0.1",
    "babel-loader": "^8.0.4",
    "copy-webpack-plugin": "^4.6.0",
    "css-loader": "^2.0.1",
    "css-module-flow": "^1.0.0",
    "eslint": "^5.10.0",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-config-prettier": "^3.3.0",
    "eslint-import-resolver-webpack": "^0.10.1",
    "eslint-loader": "^2.1.1",
    "eslint-plugin-flowtype": "^3.2.0",
    "eslint-plugin-flowtype-errors": "^3.6.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-jsx-a11y": "^6.1.2",
    "eslint-plugin-prettier": "^3.0.0",
    "eslint-plugin-react": "^7.11.1",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^2.0.0",
    "flow-bin": "^0.89.0",
    "html-webpack-harddisk-plugin": "^1.0.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^23.6.0",
    "json-loader": "^0.5.7",
    "less": "^3.9.0",
    "less-loader": "^4.1.0",
    "mini-css-extract-plugin": "^0.5.0",
    "node-sass": "^4.11.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "path": "^0.12.7",
    "prettier": "^1.15.3",
    "react-test-renderer": "^16.6.3",
    "sass-loader": "^7.1.0",
    "script-ext-html-webpack-plugin": "^2.1.3",
    "simple-progress-webpack-plugin": "^1.1.2",
    "style-loader": "^0.23.1",
    "uglifyjs-webpack-plugin": "^2.0.1",
    "webpack": "^4.27.1",
    "webpack-bundle-analyzer": "^3.0.3",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10",
    "webpack-manifest-plugin": "^2.0.4",
    "webpack-merge": "^4.1.5"
  }
}
```
