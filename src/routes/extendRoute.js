import React from 'react';
import { Route } from 'react-router-dom';

const ExtendRoute = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
);

export default ExtendRoute;
