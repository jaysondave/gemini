import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const RegisterDashboard = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`}/>
      <Route path={`${match.url}/collaborator`} component={asyncComponent(() => import('./routes/Collaborator'))}/>
      <Route path={`${match.url}/maintainer`} component={asyncComponent(() => import('./routes/Maintainer'))}/>
      <Route path={`${match.url}/professional`} component={asyncComponent(() => import('./routes/Professional'))}/>
      <Route path={`${match.url}/stockist`} component={asyncComponent(() => import('./routes/Stockist'))}/>
      <Route path={`${match.url}/signaling`} component={asyncComponent(() => import('./routes/Signaling'))}/>
      <Route path={`${match.url}/tenant`} component={asyncComponent(() => import('./routes/Tenant'))}/>
      <Route path={`${match.url}/landlord`} component={asyncComponent(() => import('./routes/Landlord'))}/>
    </Switch>
  </div>
);

export default RegisterDashboard;
