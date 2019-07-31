import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import RegisterList from "../../RegisterList";
import AppModuleHeader from "components/AppModuleHeader/index";
import CustomScrollbars from "util/CustomScrollbars";
import Drawer from "@material-ui/core/Drawer";
import NewRegister from "../../NewRegister";


class Signaling extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No Signaling found",
      alertMessage: "",
      showMessage: false,
      drawerState: false,
      searchKey: "",
      currentRegister: null,
      selectedRegister: null,
      selectedRegisters: 0,
      addBuildingState: false,
      isOpen: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      showMessage: false
    });
  };

  showRegisters = (registerList) => {
    return (
      <RegisterList
          registerList={registerList}
      />
    );
  };
  onSearch = (e) => {
    console.log("search key", e.target.value);
    this.setState({ searchKey: e.target.value });
  };

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  RegisterSideBar = () => {
    return <div className="module-side">
      <div className="module-side-header">
        <div className="module-logo">
          <span>Signaling</span>
        </div>
      </div>

      <div className="module-side-content">
        <CustomScrollbars className="module-side-scroll scrollbar"
                          style={{ height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)" }}>
          <div className="module-add-task">
            <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                    onClick={this.onTapNewRegister}>
              <span>{"New Signaling"}</span>
            </Button>
          </div>
        </CustomScrollbars>
      </div>
    </div>;

  };
  onRegisterClose = () => {
    this.setState({ isOpen: false });
  };
  onTapNewRegister = () => {
    this.setState({ isOpen: true });
  };
  render() {
    const { alertMessage, showMessage, noContentFoundMessage, isOpen, selectedRegister } = this.state;
    const { end_users } = this.props;
    return (
      <div className="app-wrapper">
        <div className="app-module animated slideInUpTiny animation-duration-3">
          <div className="d-block d-xl-none">
            <Drawer
              open={this.state.drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.RegisterSideBar()}
            </Drawer>
          </div>
          <div className="app-module-sidenav d-none d-xl-flex">
            {this.RegisterSideBar()}
          </div>
          <div className="module-box">
            <div className="module-box-header">
              <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                          onClick={this.onToggleDrawer.bind(this)}>
                <i className="zmdi zmdi-menu"/>
              </IconButton>
              <AppModuleHeader placeholder="Search signaling" notification={false} apps={false}
                               value={this.state.searchKey} onChange={this.onSearch}/>
            </div>
            <div className="module-box-content">
              <div className="module-box-topbar">
              </div>

              <CustomScrollbars className="module-list-scroll scrollbar"
                                style={{ height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)" }}>
                {end_users.length === 0 ?
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : this.showRegisters(end_users)
                }


              </CustomScrollbars>

            </div>
          </div>
        </div>
        {isOpen &&
        <NewRegister
          user_type={'user'}
          onRegisterClose={this.onRegisterClose}
          open={isOpen}
          register={selectedRegister}
        />
        }
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={showMessage}
          autoHideDuration={3000}
          onClose={this.handleRequestClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{alertMessage}</span>}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ settings, users }) => {
  const { width } = settings;
  const { end_users } = users.users
  return { width, end_users };
};
export default connect(mapStateToProps)(Signaling);
