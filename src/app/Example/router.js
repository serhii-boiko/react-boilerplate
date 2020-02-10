import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExamplePage } from './containers';
import PropTypes from 'prop-types';

const Router = ({ match }) => (
  <Switch>
    <Route path={`${match.url}`} component={ExamplePage} />
  </Switch>
);

Router.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default Router;
