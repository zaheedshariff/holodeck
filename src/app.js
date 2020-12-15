import React from 'react';
// browser router handles history 
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

// Passing these ROUTES, which is definied in constants/routes.js as props
import * as ROUTES from './constants/routes'


export default function App() {

  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}


// another way to evaluate routes:
// <Route path='/user'>
//   <p>Hello I am a user</p>
// </Route>