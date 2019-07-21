import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from 'react-router-dom'

class BuildingCell extends React.Component {

  onBuildingOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  onDeleteBuilding = (building) => {
    this.setState({ addBuildingState: false });
    // this.props.onDeleteBuilding(building);
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

    const options = [
      "Delete"
    ];
    return (

      <div className="contact-item module-list-item">
        <div className="d-flex f-1 flex-wrap">

          <div className="d-flex f-1 flex-wrap">

            <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
              <div className="align-center">{"123123"}</div>
            </div>
            <div className="col con-inf-mw-100 f-1">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"Building Name"}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"Via della Pace n.30"}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"Building Address"}
                </span>
              </p>

            </div>
            <div className="col con-inf-mw-100 f-2">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"Admin Name"}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                   {"Via della Pace n.30"}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"Address"}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"Mob: 12312312"}
                </span>
            </p>

            </div>


          </div>
          <div className="col-auto px-1 actions d-none d-sm-flex">
            <IconButton className="icon-btn p-2" onClick={this.onBuildingOptionSelect}>
              <i className="zmdi zmdi-more-vert" />
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
                  if (option === "Delete") {
                    this.handleRequestClose();
                    this.onDeleteBuilding(building);
                  }
                }
                }>
                  {option}
                </MenuItem>
              )}
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BuildingCell);
