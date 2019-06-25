import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import registerList from "../../data/registerList";
import RegisterList from "../../RegisterList";
import AppModuleHeader from "components/AppModuleHeader/index";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import Drawer from "@material-ui/core/Drawer";
import NewRegister from "../../NewRegister";


class Stockist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No Collaborator found",
      alertMessage: "",
      showMessage: false,
      drawerState: false,
      searchKey: "",
      allUsers: registerList,
      registerList: registerList,
      currentRegister: null,
      selectedRegister: null,
      selectedRegisters: 0,
      addBuildingState: false,
      isOpen: false,
    };
  }

  onRegisterSelect = (data) => {
    data.selected = !data.selected;
    let selectedRegisters = 0;
    const registerList = this.state.registerList.map(register => {
        if (register.selected) {
          selectedRegisters++;
        }
        if (register.id === data.id) {
          if (register.selected) {
            selectedRegisters++;
          }
          return data;
        } else {
          return register;
        }
      }
    );
    this.setState({
      selectedRegisters: selectedRegisters,
      registerList: registerList
    });

  };
  onDeleteRegister = (data) => {
    this.setState({
      alertMessage: "User is deleted successfully",
      showMessage: true,
      allUsers: this.state.allUsers.filter((register) => register.id !== data.id),
      registerList: this.state.allUsers.filter((register) => register.id !== data.id)
    });
  };
  onDeleteSelectedRegister = () => {
    const allUsers = this.state.allUsers.filter((register) => !register.selected);
    this.setState({
      alertMessage: "Users is deleted successfully",
      showMessage: true,
      allUsers: allUsers,
      registerList: allUsers,
      selectedRegisters: 0
    });
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false
    });
  };
  getAllUser = () => {
    let registerList = this.state.allUsers.map((register) => register ? {
      ...register,
      selected: true
    } : register);
    this.setState({
      selectedRegisters: registerList.length,
      allUsers: registerList,
      registerList: registerList
    });
  };
  getUnselectedAllUser = () => {
    let registerList = this.state.allUsers.map((register) => register ? {
      ...register,
      selected: false
    } : register);
    this.setState({
      selectedRegisters: 0,
      allUsers: registerList,
      registerList: registerList
    });
  };

  onAllUserSelect() {
    const selectAll = this.state.selectedRegisters < this.state.registerList.length;
    if (selectAll) {
      this.getAllUser();
    } else {
      this.getUnselectedAllUser();
    }
  }

  showRegisters = ({ registerList }) => {
    return (
      <RegisterList registerList={registerList}
                    onRegisterSelect={this.onRegisterSelect.bind(this)}
                    onDeleteRegister={this.onDeleteRegister.bind(this)}
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
          <span>Stockist</span>
        </div>
      </div>

      <div className="module-side-content">
        <CustomScrollbars className="module-side-scroll scrollbar"
                          style={{ height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)" }}>
          <div className="module-add-task">
            <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                    onClick={this.onTapNewRegister}>
              <span>{"New Stockist"}</span>
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
    const { registerList, addBuildingState, selectedRegisters, alertMessage, showMessage, noContentFoundMessage, isOpen, selectedRegister } = this.state;
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
              <AppModuleHeader placeholder="Search stockist" notification={false} apps={false}
                               value={this.state.searchKey} onChange={this.onSearch}/>
            </div>
            <div className="module-box-content">
              <div className="module-box-topbar">

                <Checkbox color="primary"
                          indeterminate={selectedRegisters > 0 && selectedRegisters < registerList.length}
                          checked={selectedRegisters > 0}
                          onChange={this.onAllUserSelect.bind(this)}
                          value="SelectMail"/>


                {selectedRegisters > 0 &&
                <IconButton className="icon-btn"
                            onClick={this.onDeleteSelectedRegister.bind(this)}>
                  <i className="zmdi zmdi-delete"/>
                </IconButton>}

              </div>

              <CustomScrollbars className="module-list-scroll scrollbar"
                                style={{ height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)" }}>
                {registerList.length === 0 ?
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : this.showRegisters(this.state)
                }


              </CustomScrollbars>

            </div>
          </div>
        </div>
        {isOpen &&
        <NewRegister
          userType={'stockist'}
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

const mapStateToProps = ({ settings }) => {
  const { width } = settings;
  return { width };
};
export default connect(mapStateToProps)(Stockist);
