import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createHashHistory';
import MainApp from './MainApp';
import configureStore from './store';

const rootEl = document.getElementById('root');
const history = createHistory();
const initState = {};
const store = configureStore(initState, history);

ReactDOM.render(
    <MainApp store={store} history={history} />,
    rootEl,
);
