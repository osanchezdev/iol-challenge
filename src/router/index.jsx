import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Loader from '../components/global/Loader';

const LazyHome = React.lazy(() => import('../components/Home'));

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route exact path={'/'} component={LazyHome} />
          <Redirect to={'/'} />
        </Suspense>
      </Switch>
    </Router>
  );
};
