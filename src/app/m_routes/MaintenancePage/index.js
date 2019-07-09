import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const MaintainerMaintenanceDashboard = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`}/>
      <Route path={`${match.url}/dashboard`} component={asyncComponent(() => import('./MainPage'))}/>
      <Route path={`${match.url}/new-job`} component={asyncComponent(() => import('./routes/NewJob'))}/>
      <Route path={`${match.url}/end-job`} component={asyncComponent(() => import('./routes/EndJob'))}/>
      <Route path={`${match.url}/in-progress`} component={asyncComponent(() => import('./routes/InProgress'))}/>
      <Route path={`${match.url}/out-standing`} component={asyncComponent(() => import('./routes/OutStanding'))}/>
      <Route path={`${match.url}/closed`} component={asyncComponent(() => import('./routes/Closed'))}/>
      <Route path={`${match.url}/rejected`} component={asyncComponent(() => import('./routes/Rejected'))}/>

      <Route path={`${match.url}/detail`} component={asyncComponent(() => import('./routes/NewJob/MaintenanceDetail'))}/>
      <Route path={`${match.url}/maintainer`} component={asyncComponent(() => import('./routes/Maintainer'))}/>
    </Switch>
  </div>
);

export default MaintainerMaintenanceDashboard;
