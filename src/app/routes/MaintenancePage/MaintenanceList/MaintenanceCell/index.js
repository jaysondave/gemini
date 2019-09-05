import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router-dom";

class MaintenanceCell extends React.Component {

  onBuildingOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  onBuildingClose = () => {
    this.setState({ addBuildingState: false });
  };
  onDeleteBuilding = (maintenance) => {
    this.setState({ addBuildingState: false });
    this.props.onDeleteMaintenance(maintenance);
  };
  onEditBuilding = () => {
    this.setState({ menuState: false, addBuildingState: true });
  };
  onBodies = () => {
    this.props.history.push("/app/buildingDashboard/3");
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
      addBuildingState: false
    };
  }

  render() {
    const { maintenance, onMaintenanceSelect } = this.props;
    const { menuState, anchorEl } = this.state;
    const { id, building, reporter, reportContent, assign, viewDate } = maintenance;

    const options = [
      "Edit",
      "Delete"
    ];
    return (

      <div className="contact-item module-list-item">

        <Checkbox color="primary"
                  checked={maintenance.selected}
                  value="checkedF"
                  onClick={() => {
                    onMaintenanceSelect(maintenance);
                  }}
        />
        <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>

          <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }} onClick={() => this.props.history.push(`${5}`)}>

            <div className="mx-1 mx-md-3"
                 style={{ fontSize: 16, flex: 1, position: "relative" }}>
              <div style={{ position: "relative", top: "50%", transform: "translateY(-50%)" }}>{id}</div>
            </div>
            <div className="col con-inf-mw-100" style={{ flex: 2 }}>
              <p className="mb-0">
                  <span className="text-truncate contact-name text-primary-color text-bold">
                      {building.name}
                  </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                    {building.address}
                </span>
              </div>
              <div className="text-muted">
                <span className="phone d-inline-block text-primary-accent-4-color">
                  {reporter.name}
                </span>
              </div>
              <div className="text-muted">
                <span className="phone d-inline-block">
                  {reporter.phoneNumber}
                </span>
              </div>
              <div className="text-muted">
                <span className="phone d-inline-block text-dark">
                  {reportContent}
                </span>
              </div>
            </div>
            <div className="col con-inf-mw-100" style={{ flex: 1 }}>
              <div className="text-muted">
                  <span className="text-primary-color text-bold">
                      {assign ? assign.maintainerName : ""}
                  </span>
              </div>
              <div className="text-muted">
                  <span className="text-dark">
                      {assign ? assign.maintainerAddress : ""}
                  </span>
              </div>
              <div className="text-muted">
                  <span className="text-primary-accent-4-color">
                      {assign ? assign.category : ""}
                  </span>
              </div>
            </div>
            <div className="col con-inf-mw-100" style={{ flex: 1 }}>
              <p className="mb-0">
                  <span className="text-primary-darken-4-color">
                      Report Date: {reporter.date}
                  </span>
              </p>
              {viewDate &&
                <p className="mb-0">
                    <span className="text-primary-darken-4-color">
                        View Date: &nbsp;&nbsp;&nbsp;{viewDate}
                    </span>
                </p>
              }
              {assign &&
                <p className="mb-0">
                    <span className="text-primary-darken-4-color">
                        Assign Date: {assign.date}
                    </span>
                </p>
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MaintenanceCell);
