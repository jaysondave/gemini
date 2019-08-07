import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import SideNavMaintainer from 'containers/SideNavMaintainer/index';
import SideNavSubWorker from "../containers/SideNavSubWorker/index";
import SideNavUser from "../containers/SideNavUser/index";

import Footer from 'components/Footer';
import {
  ABOVE_THE_HEADER,
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION,
} from 'constants/ActionTypes';
import { isIOS, isMobile } from 'react-device-detect';
import asyncComponent from '../util/asyncComponent';
import TopNav from 'components/TopNav';
import BuildingDashboard from "./routes/BuildingPage";
import MaintenanceDashboard from "./routes/MaintenancePage";
import TimeTableDashboard from "./routes/TimeTablePage";
import RegisterDashboard from "./routes/RegisterPage";

import MaintainerMaintenanceDashboard from "./m_routes/MaintenancePage";
import MTimeTableDashboard from "./m_routes/TimeTablePage";

import SubWorkerMaintenanceDashboard from "./sub_routes/MaintenancePage"
import STimeTableDashboard from "./sub_routes/TimeTablePage";
import UserReportDashboard from "./u_routes/HomePage";
import {
  fetchBodyTypes,
  fetchBuildingTypes,
  fetchCategories,
  fetchComponents,
  fetchSubComponents,
  fetchUsers
} from "../actions";
class App extends React.Component {
  componentDidMount() {
    console.log("Root App componentDidMount");
    this.props.dispatch(fetchUsers());
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetchBuildingTypes());
    this.props.dispatch(fetchBodyTypes());
    this.props.dispatch(fetchComponents());
    this.props.dispatch(fetchSubComponents());
  }

  renderSideBar = () => {
    const { authUser } = this.props;
    const { user } = authUser;
    switch (user.user_type) {
      case 'admin':
        return (<Sidebar />);
      case 'maintainer':
        return (<SideNavMaintainer />);
      case 'sub_worker':
        return (<SideNavSubWorker />);
      case 'user':
        return (<SideNavUser />);
      default:
        return null;
    }

  };
  render() {
    const { match, drawerType, navigationStyle, horizontalNavPosition } = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';

    //set default height and overflow for iOS mobile Safari 10+ support.
    if (isIOS && isMobile) {
      document.body.classList.add('ios-mobile-view-height')
    }
    else if (document.body.classList.contains('ios-mobile-view-height')) {
      document.body.classList.remove('ios-mobile-view-height')
    }

    return (
      <div className={`app-container ${drawerStyle}`}>
        {/* <Tour /> */}

        {this.renderSideBar()}
        <div className="app-main-container">
          <div
            className={`app-header ${navigationStyle === HORIZONTAL_NAVIGATION ? 'app-header-horizontal' : ''}`}>
            {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
              <TopNav styleName="app-top-header" />}
            <Header />
            {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
              <TopNav />}
          </div>

          <main className="app-main-content-wrapper">
            <div className="app-main-content">
              <Switch>
                <Route path={`${match.url}/home-page`}
                  component={asyncComponent(() => import('./routes/HomePage'))}
                />
                <Route path={`${match.url}/buildingDashboard`}
                  component={BuildingDashboard} />
                <Route path={`${match.url}/maintenanceDashboard`}
                  component={MaintenanceDashboard} />
                <Route path={`${match.url}/timetable`}
                  component={TimeTableDashboard} />
                  <Route path={`${match.url}/categories`}
                         component={asyncComponent(() => import('./routes/CategoryPage'))} />
                <Route path={`${match.url}/registers`}
                  component={RegisterDashboard} />
                <Route exact path={`${match.url}/notice-board`}
                  component={asyncComponent(() => import('./routes/NoticeBoard'))}
                />
                <Route exact path={`${match.url}/notice-board/messages`}
                  component={asyncComponent(() => import('./routes/NoticeBoard/Messages'))}
                />
                <Route exact path={`${match.url}/notice-board/images`}
                  component={asyncComponent(() => import('./routes/NoticeBoard/Images'))}
                />
                <Route path={`${match.url}/warehouse`}
                component={asyncComponent(() => import('./routes/WareHouse'))}/>

                <Route path={`${match.url}/buildingDashboard`}
                       component={BuildingDashboard} />

                <Route path={`${match.url}/maintainer`}
                       component={MaintainerMaintenanceDashboard} />
                <Route path={`${match.url}/m-timetable`}
                       component={MTimeTableDashboard} />
                <Route path={`${match.url}/sub-worker`}
                       component={asyncComponent(() => import('./m_routes/RegisterPage'))} />
                <Route path={`${match.url}/m-document`}
                       component={asyncComponent(() => import('./m_routes/DocumentPage'))} />
                <Route path={`${match.url}/m-profile`}
                       component={asyncComponent(() => import('./m_routes/ProfilePage'))} />
                <Route path={`${match.url}/m-chat`}
                       component={asyncComponent(() => import('./m_routes/ChatPage'))} />



                <Route path={`${match.url}/s-worker`}
                       component={SubWorkerMaintenanceDashboard} />
                <Route path={`${match.url}/s-timetable`}
                       component={STimeTableDashboard} />
                <Route path={`${match.url}/s-document`}
                       component={asyncComponent(() => import('./sub_routes/DocumentPage'))} />
                <Route path={`${match.url}/s-profile`}
                       component={asyncComponent(() => import('./sub_routes/ProfilePage'))} />
                <Route path={`${match.url}/s-chat`}
                       component={asyncComponent(() => import('./sub_routes/ChatPage'))} />

                <Route path={`${match.url}/user`}
                       component={UserReportDashboard} />
                <Route exact path={`${match.url}/u-profile`}
                       component={asyncComponent(() => import('./u_routes/ProfilePage'))} />
                <Route exact path={`${match.url}/u-profile/buildings`}
                       component={asyncComponent(() => import('./u_routes/ProfilePage/BuildingPage'))} />
                <Route path={`${match.url}/u-chat`}
                       component={asyncComponent(() => import('./u_routes/ChatPage'))} />
                <Route path={`${match.url}/u-forward-signaling`}
                       component={asyncComponent(() => import('./u_routes/ForwardSignaling'))} />





                <Route component={asyncComponent(() => import('components/Error404'))} />
              </Switch>
            </div>
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ settings, auth }) => {
  const { drawerType, navigationStyle, horizontalNavPosition } = settings;
  const { authUser } = auth;
  return { drawerType, navigationStyle, horizontalNavPosition, authUser }
};
export default withRouter(connect(mapStateToProps)(App));
