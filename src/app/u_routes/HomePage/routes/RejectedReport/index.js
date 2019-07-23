import React, { Component } from "react";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import maintenanceNotViewedList from "../../data/maintenanceNotViewedList";
import RejectedList from "./RejectedReportList";
import AppModuleHeader from "components/AppModuleHeader/index";
import CustomScrollbars from "util/CustomScrollbars";


class RejectedReport extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No maintenance found in not view",
      alertMessage: "",
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      searchKey: "",
      allBuilding: maintenanceNotViewedList,
      maintenanceList: maintenanceNotViewedList,
    };
  }

  handleRequestClose = () => {
    this.setState({
      showMessage: false
    });
  };

  showBuildings = ({ currentBuilding, maintenanceList }) => {
    return (
      <RejectedList maintenanceList={maintenanceList}
      />
    );
  };
  onSearch = (e) => {
    console.log('search key', e.target.value);
    this.setState({searchKey: e.target.value})
  };

  render() {
    const { maintenanceList, alertMessage, showMessage, noContentFoundMessage } = this.state;
    return (
      <div className="app-wrapper">
        <div className="module-box content-margin-auto">
          <div className="module-box-header">
            <AppModuleHeader placeholder="Search here..." notification={false} apps={false} value={this.state.searchKey} onChange={this.onSearch}/>
          </div>
          <div className="module-box-content">
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
export default connect(mapStateToProps)(RejectedReport);
