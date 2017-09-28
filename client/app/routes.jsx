import React from 'react';
import { Switch, Route } from 'react-router';

import { Layout, Home, Login, Quiz, NotFound } from './containers';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/quiz" component={Quiz} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Layout>
);

export default Routes;
