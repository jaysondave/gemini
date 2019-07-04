import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION,
  INSIDE_THE_HEADER
} from 'constants/ActionTypes';
import { switchLanguage, toggleCollapsedNav } from 'actions/Setting';

class HeaderNoticeBoard extends React.Component {

  onAppNotificationSelect = () => {
    this.setState({
      appNotification: !this.state.appNotification
    })
  };
  onMailNotificationSelect = () => {
    this.setState({
      mailNotification: !this.state.mailNotification
    })
  };
  onLangSwitcherSelect = (event) => {
    this.setState({
      langSwitcher: !this.state.langSwitcher, anchorEl: event.currentTarget
    })
  };
  onSearchBoxSelect = () => {
    this.setState({
      searchBox: !this.state.searchBox
    })
  };
  onAppsSelect = () => {
    this.setState({
      apps: !this.state.apps
    })
  };
  onUserInfoSelect = () => {
    this.setState({
      userInfo: !this.state.userInfo
    })
  };
  handleRequestClose = () => {
    this.setState({
      langSwitcher: false,
      userInfo: false,
      mailNotification: false,
      appNotification: false,
      searchBox: false,
      apps: false
    });
  };
  onToggleCollapsedNav = (e) => {
    const val = !this.props.navCollapsed;
    this.props.toggleCollapsedNav(val);
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      searchBox: false,
      searchText: '',
      mailNotification: false,
      userInfo: false,
      langSwitcher: false,
      appNotification: false,
    }
  }

  updateSearchText(evt) {
    this.setState({
      searchText: evt.target.value,
    });
  }
  render() {
    const { drawerType, locale, navigationStyle, horizontalNavPosition } = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-block d-xl-none' : drawerType.includes(COLLAPSED_DRAWER) ? 'd-block' : 'd-none';

    return (
      <AppBar
        className={`app-main-header ${(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) ? 'app-main-header-top' : ''}`}>
        <Toolbar className="app-toolbar" disableGutters={false}>

          <Link className="app-logo mr-2 d-none d-sm-block" to="/">
            <img src={require("assets/images/logo.png")} alt="GEMINI START" title="GEMINI START" />
          </Link>
          <div className="d-flex f-1">
            <div className="f-1" />
            <div className="f-1">
              <div className="font-size-18 font-weight-bold">Building 1</div>
              <div className="">Via del Mercato, 1</div>
              <div className="">06121 PERUGIA(PG)</div>
            </div>
            <div className="f-1">
              <div className="user-profile d-flex flex-row align-items-center float-right">
                <Avatar
                  alt='...'
                  src={'https://via.placeholder.com/150x150'}
                  className="user-avatar "
                />
                <div className="user-detail">
                  <h4 className="user-name text-white" onClick={this.handleClick}>Robert Johnson
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="ellipse-shape"></div>
        </Toolbar>
      </AppBar>
    );
  }

}


const mapStateToProps = ({ settings }) => {
  const { drawerType, locale, navigationStyle, horizontalNavPosition } = settings;
  return { drawerType, locale, navigationStyle, horizontalNavPosition }
};

export default withRouter(connect(mapStateToProps, { toggleCollapsedNav, switchLanguage })(HeaderNoticeBoard));