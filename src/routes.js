import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import DashboardManager from './components/DashboardManager';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardManager}/>
    <Route path="*" component={DashboardManager}/>
  </Route>
);
