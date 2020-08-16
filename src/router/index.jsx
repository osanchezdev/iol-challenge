import * as React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Home';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} component={Home} />
        <Route path={'*'}>
          <Redirect to={'/'} />
        </Route>
      </Switch>
    </Router>
  );
};
