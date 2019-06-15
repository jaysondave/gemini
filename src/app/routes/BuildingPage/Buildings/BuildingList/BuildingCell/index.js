import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {withRouter} from 'react-router-dom'
import AddBuilding from "../../AddBuilding/index";
import AddBody from "../../../BuildingDetail/Bodies/AddBody";
import AddMaintenance from "../../../BuildingDetail/Maintenance/AddMaintenance";

class BuildingCell extends React.Component {

  onBuildingOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  onBuildingClose = () => {
    this.setState({ addBuildingState: false });
  };
  onDeleteBuilding = (building) => {
    this.setState({ addBuildingState: false });
    this.props.onDeleteBuilding(building);
  };
  onEditBuilding = () => {
    this.setState({ menuState: false, addBuildingState: true });
  };
  onBodyClose = () => {
    this.setState({ addBuildingState: false });
  };
  onBodies = () => {
    this.props.history.push('/app/buildingDashboard/detail')
  };
  onMaintenance = () => {
    this.setState({ menuState: false, addMaintenance: true });
  };
  onMaintenanceClose = () => {
    this.setState({ addMaintenance: false });
  };
  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
      addBuildingState: false,
      addMaintenance: false,
    };
  }

  render() {
    const { building, onBuildingSelect, onSaveBuilding, onSaveBody } = this.props;
    const { menuState, anchorEl, addBuildingState, addBody, addMaintenance } = this.state;
    const { id, building_name, thumb, user_name, user_address, building_report, subBuildingList } = building;

    const options = [
      "Edit",
      "Bodies",
      "Outdoor Spaces",
      "Notice Board",
      "Maintenance",
      "Delete"
    ];
    return (

      <div className="contact-item module-list-item">

        <Checkbox color="primary"
                  checked={building.selected}
                  value="checkedF"
                  onClick={() => {
                    onBuildingSelect(building);
                  }}
        />
        <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>

          <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>

            <div className="mx-1 mx-md-3"
                 style={{ fontSize: 16, flex: 1, position: "relative" }}>
              <div className="align-center">{id}</div>
            </div>
            <div className="col con-inf-mw-100" style={{ flex: 3 }}>
              <p className="mb-0">
                        <span className="text-truncate contact-name text-dark">
                            {building_name}
                        </span>
              </p>

              <div className="text-muted">
                        <span className="email d-inline-block mr-2">
                            {user_name},
                        </span>

                <span className="phone d-inline-block">
                            {user_address}
                        </span>
              </div>
            </div>
            <div className="col con-inf-mw-100" style={{ flex: 1, textAlign: "center" }}>
              <p className="mb-0">
                        <span className="text-truncate contact-name text-dark">
                            {"No.Part of Building"}
                        </span>
              </p>

              <div className="text-muted">
                        <span className="email d-inline-block mr-2">
                            {subBuildingList.length}
                        </span>
              </div>
            </div>
            <div className="col con-inf-mw-100" style={{ flex: 1, textAlign: "center" }}>
              <p className="mb-0">
                        <span className="text-truncate contact-name text-dark">
                            {"No.Reporter"}
                        </span>
              </p>

              <div className="text-muted">
                        <span className="email d-inline-block mr-2">
                            {building_report}
                        </span>
              </div>
            </div>
          </div>
          <div className="col-auto px-1 actions d-none d-sm-flex">
            <IconButton className="icon-btn p-2" onClick={this.onBuildingOptionSelect}>
              <i className="zmdi zmdi-more-vert"/>
            </IconButton>

            <Menu id="long-menu"
                  anchorEl={anchorEl}
                  open={menuState}
                  onClose={this.handleRequestClose}

                  MenuListProps={{
                    style: {
                      width: 150
                    }
                  }}>
              {options.map(option =>
                <MenuItem key={option} onClick={() => {
                  if (option === "Edit") {
                    this.onEditBuilding();
                  } else if (option === "Delete") {
                    this.handleRequestClose();
                    this.onDeleteBuilding(building);
                  } else if (option === "Bodies") {
                    this.onBodies();
                  } else if (option === "Maintenance") {
                    this.onMaintenance();
                  }
                }
                }>
                  {option}
                </MenuItem>
              )}
            </Menu>
            {addBuildingState &&
            <AddBuilding open={addBuildingState} building={building} onSaveBuilding={onSaveBuilding}
                         onBuildingClose={this.onBuildingClose} onDeleteBuilding={this.onDeleteBuilding}/>
            }
            {addBody &&
            <AddBody
              open={addBody}
              body={{}}
              onSaveBody={onSaveBody}
              onBodyClose={this.onBodyClose}/>
            }
            {addMaintenance &&
            <AddMaintenance
              maintenance={{}}
              open={addMaintenance}
              onSaveBody={onSaveBody}
              onMaintenanceClose={this.onMaintenanceClose}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BuildingCell);
