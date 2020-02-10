import { hot } from 'react-hot-loader';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Router from '@/app/router';
import PropTypes from 'prop-types';

const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
};

export default hot(module)(App);
