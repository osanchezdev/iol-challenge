import * as React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import loadable from '@loadable/component';

const LazyHome = loadable(() => import('../components/Home'));

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={LazyHome} />
        <Redirect to={'/'} />
      </Switch>
    </Router>
  );
};
