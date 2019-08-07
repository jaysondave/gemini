import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';
import BuildingDetail from "./BuildingDetail";

const BuildingDashboard = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/buildings`}/>
            <Route path={`${match.url}/building_type`} component={asyncComponent(() => import('./BuildingTypePage'))}/>
            <Route path={`${match.url}/body_type`} component={asyncComponent(() => import('./BodyTypePage'))}/>
            <Route path={`${match.url}/component`} component={asyncComponent(() => import('./ComponentTypePage'))}/>
            <Route path={`${match.url}/sub_component`} component={asyncComponent(() => import('./SubComponentTypePage'))}/>
            <Route path={`${match.url}/buildings`} component={asyncComponent(() => import('./Buildings'))}/>
            <Route path={`${match.url}/detail`} component={BuildingDetail}/>
        </Switch>
    </div>
);

export default BuildingDashboard;
