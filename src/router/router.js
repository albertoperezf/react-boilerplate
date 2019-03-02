import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Home from 'components/Home/Home';
import * as routerConstants from 'constants/routerConstants';
import ChangeRoute from 'router/changeRoute';
import RouteNotFound from 'router/routeNotFound';

export default () => (
  <Router>
    <RouteNotFound>
      <ChangeRoute>
        <Switch>
          <Route
            exact
            path={routerConstants.ROUTER_MAIN}
            component={Home}
          />
        </Switch>
      </ChangeRoute>
    </RouteNotFound>
  </Router>
);
