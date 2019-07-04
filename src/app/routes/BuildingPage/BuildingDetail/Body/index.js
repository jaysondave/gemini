import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../../../util/asyncComponent';

const BuildingDetail = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/bodies`}/>
      <Route path={`${match.url}/bodies`} component={asyncComponent(() => import('./Bodies'))}/>
      <Route exact path={`${match.url}/floors`} component={asyncComponent(() => import('./Floor'))}/>
      <Route exact path={`${match.url}/floors/rooms`} component={asyncComponent(() => import('./Floor/Room'))}/>
      <Route exact path={`${match.url}/floors/rooms/warehouses`} component={asyncComponent(() => import('./Floor/Room/WareHouse'))}/>
      <Route path={`${match.url}/rents`} component={asyncComponent(() => import('./Rents'))}/>
      <Route exact path={`${match.url}/systems`} component={asyncComponent(() => import('./Systems'))}/>
      <Route exact path={`${match.url}/systems/sub-components`} component={asyncComponent(() => import('./Systems/SubComponent'))}/>
      <Route path={`${match.url}/documents`} component={asyncComponent(() => import('./Documents'))}/>
      <Route path={`${match.url}/cadstral`} component={asyncComponent(() => import('./Cadstral'))}/>
      <Route path={`${match.url}/certified`} component={asyncComponent(() => import('./Certified'))}/>
    </Switch>
  </div>
);

export default BuildingDetail;
