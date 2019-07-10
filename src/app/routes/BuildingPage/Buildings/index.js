import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import buildingList from "../data/buildingList";
import BuildingList from "./BuildingList";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddBuilding from "../Buildings/AddBuilding";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";


class BuildingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No building found in selected folder",
      alertMessage: "",
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      user: {
        name: "Robert Johnson",
        email: "robert.johnson@example.com",
        avatar: "https://via.placeholder.com/150x150"
      },
      searchKey: "",
      filterOption: "All buildings",
      allBuilding: buildingList,
      buildingList: buildingList,
      currentBuilding: null,
      selectedSubBuilding: null,
      selectedBuilding: null,
      selectedbuildings: 0,
      addBuildingState: false
    };
  }

  BuildingSideBar = () => {
    return <div className="module-side">
      <div className="module-side-header">
        <div className="module-logo">
          <span>BUILDING</span>
        </div>
      </div>

      <div className="module-side-content">
        <CustomScrollbars className="module-side-scroll scrollbar"
                          style={{ height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)" }}>
          <div className="module-add-task">
            <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                    onClick={this.onAddBuilding}>
              <span>{"Add New Building"}</span>
            </Button>
          </div>
        </CustomScrollbars>
      </div>
    </div>;

  };

  onBuildingSelect = (data) => {
    data.selected = !data.selected;
    let selectedbuildings = 0;
    const buildingList = this.state.buildingList.map(building => {
        if (building.selected) {
          selectedbuildings++;
        }
        if (building.id === data.id) {
          if (building.selected) {
            selectedbuildings++;
          }
          return data;
        } else {
          return building;
        }
      }
    );
    this.setState({
      selectedbuildings: selectedbuildings,
      buildingList: buildingList
    });

  };


  onAddBuilding = () => {
    this.setState({ addBuildingState: true });
  };
  onBuildingClose = () => {
    this.setState({ addBuildingState: false });
  };
  onSaveBuilding = (data) => {
    let isNew = true;
    const buildingList = this.state.allBuilding.map((building) => {
      if (building.id === data.id) {
        isNew = false;
        return data;
      } else {
        return building;
      }
    });
    if (isNew) {
      buildingList.push(data);
    }
    this.setState({
      alertMessage: isNew ? "BuildingDetail Added Successfully" : "BuildingDetail Updated Successfully",
      showMessage: true,
      buildingList: buildingList,
      allBuilding: buildingList
    });
    // this.onFilterOptionSelect(this.state.filterOption);
  };
  onDeleteBuilding = (data) => {
    this.setState({
      alertMessage: "BuildingDetail Deleted Successfully",
      showMessage: true,
      allBuilding: this.state.allBuilding.filter((building) => building.id !== data.id),
      buildingList: this.state.allBuilding.filter((building) => building.id !== data.id)
    });
  };
  onDeleteSelectedBuilding = () => {
    const buildings = this.state.allBuilding.filter((building) => !building.selected);
    this.setState({
      alertMessage: "BuildingDetail Deleted Successfully",
      showMessage: true,
      allBuilding: buildings,
      buildingList: buildings,
      selectedbuildings: 0
    });
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false
    });
  };
  getAllBuilding = () => {
    let buildingList = this.state.allBuilding.map((building) => building ? {
      ...building,
      selected: true
    } : building);
    this.setState({
      selectedbuildings: buildingList.length,
      allBuilding: buildingList,
      buildingList: buildingList
    });
  };
  getUnselectedAllBuilding = () => {
    let buildingList = this.state.allBuilding.map((building) => building ? {
      ...building,
      selected: false
    } : building);
    this.setState({
      selectedbuildings: 0,
      allBuilding: buildingList,
      buildingList: buildingList
    });
  };

  onAllBuildingSelect() {
    const selectAll = this.state.selectedbuildings < this.state.buildingList.length;
    if (selectAll) {
      this.getAllBuilding();
    } else {
      this.getUnselectedAllBuilding();
    }
  }


  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  onSaveCadastral = () => {

  };
  onSaveRent = () => {

  };
  onSaveSystem = () => {

  };
  onSaveDocument = () => {

  };
  onSaveCertificate = () => {

  };
  showBuildings = ({ currentBuilding, buildingList }) => {
    return (
      <BuildingList buildingList={buildingList}
                    onBuildingSelect={this.onBuildingSelect.bind(this)}
                    onDeleteBuilding={this.onDeleteBuilding.bind(this)}
                    onSaveBuilding={this.onSaveBuilding.bind(this)}/>
    );
  };
  onSearch = (e) => {
    console.log('search key', e.target.value)
    this.setState({searchKey: e.target.value})
  };

  render() {
    const { user, buildingList, addBuildingState, selectedbuildings, alertMessage, showMessage, noContentFoundMessage, currentBuilding } = this.state;
    return (
      <div className="app-wrapper">
        <div className="app-module animated slideInUpTiny animation-duration-3">

          <div className="d-block d-xl-none">
            <Drawer
              open={this.state.drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.BuildingSideBar(user)}
            </Drawer>
          </div>
          <div className="app-module-sidenav d-none d-xl-flex">
            {this.BuildingSideBar(user)}
          </div>

          <div className="module-box">
            <div className="module-box-header">
              <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                          onClick={this.onToggleDrawer.bind(this)}>
                <i className="zmdi zmdi-menu"/>
              </IconButton>
              <AppModuleHeader placeholder="Search here..." notification={false} apps={false} value={this.state.searchKey} onChange={this.onSearch}/>
            </div>
            <div className="module-box-content">
              <div className="module-box-topbar">

                <Checkbox color="primary"
                          indeterminate={selectedbuildings > 0 && selectedbuildings < buildingList.length}
                          checked={selectedbuildings > 0}
                          onChange={this.onAllBuildingSelect.bind(this)}
                          value="SelectMail"/>


                {selectedbuildings > 0 &&
                <IconButton className="icon-btn"
                            onClick={this.onDeleteSelectedBuilding.bind(this)}>
                  <i className="zmdi zmdi-delete"/>
                </IconButton>}

              </div>

              <CustomScrollbars className="module-list-scroll scrollbar"
                                style={{ height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)" }}>
                {buildingList.length === 0 ?
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : this.showBuildings(this.state)
                }


              </CustomScrollbars>

            </div>
          </div>
        </div>

        <AddBuilding
          open={addBuildingState}
          building={{}}
          onSaveBuilding={this.onSaveBuilding}
          onBuildingClose={this.onBuildingClose}
          onDeleteBuilding={this.onDeleteBuilding}/>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={showMessage}
          autoHideDuration={3000}
          onClose={this.handleRequestClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{alertMessage}</span>}
        /></div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { width } = settings;
  return { width };
};
export default connect(mapStateToProps)(BuildingPage);
