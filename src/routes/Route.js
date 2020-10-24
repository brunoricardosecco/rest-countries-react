import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

function Route({ isPrivate = false, component: Component, ...rest }) {
  const isAuthenticated = false;
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default Route;
