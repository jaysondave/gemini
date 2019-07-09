import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import maintenanceAssignedList from "../../data/maintenanceAssignedList";
import MaintenanceList from "../NewJob/NewJobList";
import AppModuleHeader from "components/AppModuleHeader/index";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";


class Rejected extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No maintenance found in not view",
      alertMessage: "",
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      searchKey: "",
      filterOption: "All buildings",
      allBuilding: maintenanceAssignedList,
      maintenanceList: maintenanceAssignedList,
      currentBuilding: null,
      selectedSubBuilding: null,
      selectedBuilding: null,
      selectedbuildings: 0,
      addBuildingState: false
    };
  }

  onMaintenanceSelect = (data) => {
    data.selected = !data.selected;
    let selectedbuildings = 0;
    const maintenanceList = this.state.maintenanceList.map(building => {
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
      maintenanceList: maintenanceList
    });

  };
  onDeleteMaintenance = (data) => {
    this.setState({
      alertMessage: "BuildingDetail Deleted Successfully",
      showMessage: true,
      allBuilding: this.state.allBuilding.filter((building) => building.id !== data.id),
      maintenanceList: this.state.allBuilding.filter((building) => building.id !== data.id)
    });
  };
  onDeleteSelectedBuilding = () => {
    const buildings = this.state.allBuilding.filter((building) => !building.selected);
    this.setState({
      alertMessage: "BuildingDetail Deleted Successfully",
      showMessage: true,
      allBuilding: buildings,
      maintenanceList: buildings,
      selectedbuildings: 0
    });
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false
    });
  };
  getAllBuilding = () => {
    let maintenanceList = this.state.allBuilding.map((building) => building ? {
      ...building,
      selected: true
    } : building);
    this.setState({
      selectedbuildings: maintenanceList.length,
      allBuilding: maintenanceList,
      maintenanceList: maintenanceList
    });
  };
  getUnselectedAllBuilding = () => {
    let maintenanceList = this.state.allBuilding.map((building) => building ? {
      ...building,
      selected: false
    } : building);
    this.setState({
      selectedbuildings: 0,
      allBuilding: maintenanceList,
      maintenanceList: maintenanceList
    });
  };

  onAllBuildingSelect() {
    const selectAll = this.state.selectedbuildings < this.state.maintenanceList.length;
    if (selectAll) {
      this.getAllBuilding();
    } else {
      this.getUnselectedAllBuilding();
    }
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
  showBuildings = ({ currentBuilding, maintenanceList }) => {
    return (
      <MaintenanceList maintenanceList={maintenanceList}
                       onMaintenanceSelect={this.onMaintenanceSelect.bind(this)}
                       onDeleteMaintenance={this.onDeleteMaintenance.bind(this)}
      />
    );
  };
  onSearch = (e) => {
    console.log('search key', e.target.value);
    this.setState({searchKey: e.target.value})
  };

  render() {
    const { maintenanceList, addBuildingState, selectedbuildings, alertMessage, showMessage, noContentFoundMessage } = this.state;
    return (
      <div className="app-wrapper">
          <div className="module-box content-margin-auto">
            <div className="module-box-header">
              <AppModuleHeader placeholder="Search building" notification={false} apps={false} value={this.state.searchKey} onChange={this.onSearch}/>
            </div>
            <div className="module-box-content">
              <div className="module-box-topbar">

                <Checkbox color="primary"
                          indeterminate={selectedbuildings > 0 && selectedbuildings < maintenanceList.length}
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
                {maintenanceList.length === 0 ?
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : this.showBuildings(this.state)
                }


              </CustomScrollbars>

            </div>
          </div>
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
export default connect(mapStateToProps)(Rejected);
