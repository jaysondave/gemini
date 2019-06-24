import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const TimeTableDashboard = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`}/>
      <Route path={`${match.url}/dashboard`} component={asyncComponent(() => import('./MainPage'))}/>
    </Switch>
  </div>
);

export default TimeTableDashboard;
