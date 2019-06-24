import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const RegisterDashboard = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`}/>
      <Route path={`${match.url}/dashboard`} component={asyncComponent(() => import('./MainPage'))}/>
      <Route path={`${match.url}/collaborator`} component={asyncComponent(() => import('./routes/Collaborator'))}/>
    </Switch>
  </div>
);

export default RegisterDashboard;
