import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


class SidenavContent extends Component {
  componentDidMount() {
    const {history} = this.props;
    const that = this;
    const pathname = `${history.location.pathname}`;// get current path

    const menuLi = document.getElementsByClassName('menu');
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function (event) {
        for (let j = 0; j < menuLi.length; j++) {
          const parentLi = that.closest(this, 'li');
          if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
            menuLi[j].classList.remove('open')
          }
        }
        this.classList.toggle('open');
      }
    }

    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('open');
      } else {
        this.closest(activeLi, 'li').classList.add('open');
      }
    } catch (error) {

    }
  }

  componentWillReceiveProps(nextProps) {

    const {history} = nextProps;
    const pathname = `${history.location.pathname}`;// get current path

    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('open');
      } else {
        this.closest(activeLi, 'li').classList.add('open');
      }
    } catch (error) {

    }
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] == 'function') {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {

    }

    return null;
  }

  render() {
    return (
      <CustomScrollbars className=" scrollbar">
        <ul className="nav-menu">

          <li className="nav-header">
            <IntlMessages id="sidebar.main"/>
          </li>
          <li className="menu no-arrow">
            <NavLink to="/app/home-page">
              <i className="zmdi zmdi-home zmdi-hc-fw "/>
              <span className="nav-text"><IntlMessages id="pages.homePage"/> </span>
            </NavLink>
          </li>
          <li className="menu no-arrow">
            <NavLink to="/app/buildingDashboard">
              <i className="zmdi zmdi-widgets zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="pages.buildingsPage"/></span>
            </NavLink>
          </li>
          <li className="menu collapse-box">
            <Button>
              <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
              <span className="nav-text">Maintenance</span>
            </Button>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/maintenanceDashboard/dashboard">
                  <span className="nav-text">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/maintenanceDashboard/not-view">
                  <span className="nav-text">Not View</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/maintenanceDashboard/viewed">
                  <span className="nav-text">Viewed</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/maintenanceDashboard/assigned">
                  <span className="nav-text">Assigned</span>
                </NavLink>
              </li>
            </ul>
          </li>

        </ul>
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);
