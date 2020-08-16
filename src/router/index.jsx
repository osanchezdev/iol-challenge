import * as React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Home';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Redirect to={'/'} />
      </Switch>
    </Router>
  );
};
