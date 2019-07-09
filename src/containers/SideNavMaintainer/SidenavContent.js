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

          <li className="menu collapse-box">
            <Button>
              <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
              <span className="nav-text">DASHBOARD</span>
            </Button>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/m-maintenance/dashboard">
                  <span className="nav-text">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/m-maintenance/new-job">
                  <span className="nav-text">New Job</span>
                </NavLink>
              </li>

              <li>
                <NavLink className="prepend-icon" to="/app/m-maintenance/in-progress">
                  <span className="nav-text">In Progress</span>
                </NavLink>
              </li>

              <li>
                <NavLink className="prepend-icon" to="/app/m-maintenance/end-job">
                  <span className="nav-text">End Job</span>
                </NavLink>
              </li>

              <li>
                <NavLink className="prepend-icon" to="/app/m-maintenance/out-standing">
                  <span className="nav-text">OutStanding</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/m-maintenance/closed">
                  <span className="nav-text">Closed</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/m-maintenance/rejected">
                  <span className="nav-text">Rejected</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu no-arrow">
            <NavLink to="/app/m-timetable">
              <i className="zmdi zmdi-calendar zmdi-hc-fw"/>
              <span className="nav-text">CALENDAR</span>
            </NavLink>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/m-profile">
              <i className="zmdi zmdi-account zmdi-hc-fw"/>
              <span className="nav-text">PROFILE</span>
            </NavLink>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/m-document">
              <i className="zmdi zmdi-comment zmdi-hc-fw"/>
              <span className="nav-text">DOCUMENTS</span>
            </NavLink>
          </li>

          <li className="menu no-arrow">
            <NavLink to="/app/m-profile">
              <i className="zmdi zmdi-accounts zmdi-hc-fw"/>
              <span className="nav-text">SUB WORKERS</span>
            </NavLink>
          </li>
        </ul>
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);
