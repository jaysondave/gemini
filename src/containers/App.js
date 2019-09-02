import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl'
import dotenv from 'dotenv'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {library} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import "assets/vendors/style"
import defaultTheme from './themes/defaultTheme';
import AppLocale from '../lngProvider';

import MainApp from 'app/index';
import SignIn from './SignIn';
import SignUp from './SignUp';
import LoadComponent from "components/LoadComponent";
import { setInitUrl } from 'actions/Auth';
import RTL from 'util/RTL';
import asyncComponent from 'util/asyncComponent';
import NoticeBoard from './NoticeBoard';
import { hideMessage } from "actions/Alert";

library.add(
    fab,
    fas
);

const RestrictedRoute = ({ component: Component, authUser, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />}
  />;

class App extends Component {

  componentWillMount() {
    dotenv.config();
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    if (this.props.initURL === '') {
      this.props.setInitUrl(this.props.history.location.pathname);
    }
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
  }

  render() {
    const { match, location, locale, authUser, initURL, isDirectionRTL, showMessage, alertMessage, loader } = this.props;
    if (location.pathname === '/') {
      if (!authUser) {
        return ( <Redirect to={'/signin'}/> );
      } else if (authUser.user.user_type === 'admin') {
        return (<Redirect to={'/app/home-page'} />);
      } else if (authUser.user.user_type === 'maintainer') {
        return (<Redirect to={'/app/maintainer'} />);
      } else if (authUser.user.user_type === 'sub_worker') {
        return (<Redirect to={'/app/s-worker'}/>);
      } else if (authUser.user.user_type === 'sub_worker') {
        return (<Redirect to={'/app/user'}/>);
      } else {
        return (<Redirect to={initURL} />);
      }
    }
    const applyTheme = createMuiTheme(defaultTheme);

    if (isDirectionRTL) {
      applyTheme.direction = 'rtl';
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl');
      applyTheme.direction = 'ltr';
    }

    const currentAppLocale = AppLocale[locale.locale];
    return (
      <MuiThemeProvider theme={applyTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}>
            <RTL>
              <div className="app-main">
                <Switch>
                  <RestrictedRoute path={`${match.url}app`} authUser={authUser}
                    component={MainApp} />
                  <Route path='/signin' component={SignIn} />
                  <Route path='/signup' component={SignUp} />
                  <Route path='/notice-board' component={NoticeBoard} />
                  <Route
                    component={asyncComponent(() => import('components/Error404'))} />
                </Switch>
                {showMessage && NotificationManager.error(alertMessage)}
                <NotificationContainer/>
                {loader && <LoadComponent />}
              </div>
            </RTL>
          </IntlProvider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ settings, auth, alert }) => {
  const { sideNavColor, locale, isDirectionRTL } = settings;
  const { authUser, initURL } = auth;
  const {alertMessage, showMessage, loader} = alert;
  return { sideNavColor, locale, isDirectionRTL, authUser, initURL, alertMessage, showMessage, loader }
};

export default connect(mapStateToProps, { setInitUrl, hideMessage })(App);

