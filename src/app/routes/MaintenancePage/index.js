import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const MaintenanceDashboard = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`}/>
      <Route path={`${match.url}/dashboard`} component={asyncComponent(() => import('./MainPage'))}/>
      <Route path={`${match.url}/not-view`} component={asyncComponent(() => import('./routes/NotView'))}/>
      <Route path={`${match.url}/viewed`} component={asyncComponent(() => import('./routes/Viewed'))}/>
      <Route path={`${match.url}/assigned`} component={asyncComponent(() => import('./routes/Assigned'))}/>
      <Route path={`${match.url}/in-progress`} component={asyncComponent(() => import('./routes/InProgress'))}/>
      <Route path={`${match.url}/done`} component={asyncComponent(() => import('./routes/Done'))}/>
      <Route path={`${match.url}/end`} component={asyncComponent(() => import('./routes/End'))}/>
      <Route path={`${match.url}/out-standing`} component={asyncComponent(() => import('./routes/OutStanding'))}/>
      <Route path={`${match.url}/rejected`} component={asyncComponent(() => import('./routes/Rejected'))}/>

      <Route path={`${match.url}/detail`} component={asyncComponent(() => import('./MaintenanceDetail'))}/>
      <Route path={`${match.url}/maintainer`} component={asyncComponent(() => import('./routes/Maintainer'))}/>
    </Switch>
  </div>
);

export default MaintenanceDashboard;
