import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import About from 'components/About/About';
import Home from 'components/Home/Home';
import Map from 'components/Map/Map';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import * as routerConstants from 'constants/routerConstants';
import ChangeRoute from 'router/changeRoute';
import history from 'router/history';
import RouteNotFound from 'router/routeNotFound';

export default () => (
  <Router history={history}>
    <RouteNotFound>
      <ChangeRoute>
        <Switch>
          <ErrorBoundary>
            <Route
              exact
              path={routerConstants.ROUTER_MAIN}
              component={Home}
            />
            <Route
              exact
              path={routerConstants.ROUTER_ABOUT}
              component={About}
            />
            <Route
              exact
              path={routerConstants.ROUTER_MAP}
              component={Map}
            />
          </ErrorBoundary>
        </Switch>
      </ChangeRoute>
    </RouteNotFound>
  </Router>
);
