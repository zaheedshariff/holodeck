import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// PROTECT ROUTES!
// if the come in with a path of signin , we use loggedinpath to assign route
// restprops isn't needed because of the loggedinpath

// 1. pass in user, 2. pass in loggedin path if logged in, 3. if not as seen in the first bracket,
// render the children, which will render the components, 4. give me the rest of the props
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

//this will protect the browser page

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}