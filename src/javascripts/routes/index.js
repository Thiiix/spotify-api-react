import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from '@js/pages/Login';
import Search from '@js/pages/Search';
import Authorize from '@js/pages/Authorize';

import NotAuthentication from '@js/components/auth/NotAuthentication';

const Routes = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={(routeProps) => (
        <NotAuthentication component={Login} {...Object.assign({}, props, routeProps)}>
          <Login />
        </NotAuthentication>
      )} />
      <Route exact path='/authorize' component={Authorize} />
      <Route path='/search' component={Search} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
