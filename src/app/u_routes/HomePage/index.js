import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const UserReportDashboard = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/sent`}/>
      <Route path={`${match.url}/sent`} component={asyncComponent(() => import('./routes/SentReport'))}/>
      <Route path={`${match.url}/closed`} component={asyncComponent(() => import('./routes/ClosedReport'))}/>
      <Route path={`${match.url}/rejected`} component={asyncComponent(() => import('./routes/RejectedReport'))}/>

    </Switch>
  </div>
);

export default UserReportDashboard;
