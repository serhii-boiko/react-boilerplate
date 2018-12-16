// @flow
import React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Router from '@/app/router';
import type { Store } from '@/store/rootReducer';

type History = {
  [key: any]: any,
};

const App = ({ store, history }: { store: Store, history: History }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(App);
