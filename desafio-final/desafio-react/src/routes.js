import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import PrivateRoute from './components/PrivateRoute';

const routes = () => (
  <Switch>
    <PrivateRoute path="/" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
  </Switch>
);

export default routes;
