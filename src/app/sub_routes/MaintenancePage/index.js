import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const SubWorkerMaintenanceDashboard = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`}/>
      <Route path={`${match.url}/dashboard`} component={asyncComponent(() => import('./MainPage'))}/>
      <Route path={`${match.url}/new-job`} component={asyncComponent(() => import('./routes/NewJob'))}/>
      <Route path={`${match.url}/accepted`} component={asyncComponent(() => import('./routes/AcceptedJob'))}/>
      <Route exact path={`${match.url}/in-progress`} component={asyncComponent(() => import('./routes/InProgress'))}/>
      <Route exact path={`${match.url}/out-standing`} component={asyncComponent(() => import('./routes/OutStanding'))}/>
      <Route path={`${match.url}/closed`} component={asyncComponent(() => import('./routes/Closed'))}/>
      <Route path={`${match.url}/rejected`} component={asyncComponent(() => import('./routes/Rejected'))}/>

    </Switch>
  </div>
);

export default SubWorkerMaintenanceDashboard;
