import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from './containers/Main';
import Home from './components/Home';
import ForecastContainer from './containers/ForecastContainer';

let routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="forecast/:city" component={ForecastContainer}/>
    </Route>
  </Router>
);

export default routes;
