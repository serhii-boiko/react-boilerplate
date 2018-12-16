import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExamplePage } from './containers';

const Router = ({ match }: { match: { url: string } }) => (
  <Switch>
    <Route path={`${match.url}`} component={ExamplePage} />
  </Switch>
);

export default Router;
