import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import SignUpRegion from '../pages/SignUpRegion';
import SignUpCountry from '../pages/SignUpCountry';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />

      <Route path="/dashboard" exact isPrivate component={Dashboard} />
      <Route
        path="/dashboard/signup-region"
        exact
        isPrivate
        component={SignUpRegion}
      />
      <Route
        path="/dashboard/signup-country"
        exact
        isPrivate
        component={SignUpCountry}
      />
    </Switch>
  );
}

export default Routes;
