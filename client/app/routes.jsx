import React from 'react';
import { Switch, Route } from 'react-router';

import { Layout, Home, NotFound } from './containers';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Layout>
);

export default Routes;
