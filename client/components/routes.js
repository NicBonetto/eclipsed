import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import routes from '../utils/routes';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, index) => (
            <Route
              key={ index }
              path={ route.path }
              exact={ route.exact }
              component={ route.component }
            />
          ))
        }
      </Switch>
    </Router>
  );
};

export default Routes;