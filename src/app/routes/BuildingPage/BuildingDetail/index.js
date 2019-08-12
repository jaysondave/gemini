import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../../util/asyncComponent';

const BuildingDetail = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/bodies`}/>
            <Route path={`${match.url}/bodies`} component={asyncComponent(() => import('./Body/Bodies'))}/>
            <Route path={`${match.url}/body/:id`} component={asyncComponent(() => import('./Body'))}/>
            <Route path={`${match.url}/maintenance`} component={asyncComponent(() => import('./Maintenance'))}/>
            <Route path={`${match.url}/noticeboard`} component={asyncComponent(() => import('./NoticeBoard'))}/>
            <Route path={`${match.url}/outdoorspaces`} component={asyncComponent(() => import('./OutdoorSpaces'))}/>
        </Switch>
    </div>
);

export default BuildingDetail;
