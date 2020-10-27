import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Route({ isPrivate = false, component: Component, ...rest }) {
  // reducer
  const { isLogged } = useSelector(state => state.auth);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === isLogged ? (
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
