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
  onBodies = () => {
    this.props.history.push('detail')
  };
  onMaintenance = () => {
    this.setState({ menuState: false, addMaintenance: true });
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
    const { building, onEdit, onDelete } = this.props;
    const { menuState, anchorEl } = this.state;
    const { building_code, name, building_type, address, zip_code, city, province, cod_fisc, bodies } = building;

    const options = [
      "Edit",
      "Body",
      "Outdoor Spaces",
      "Notice Board",
      "Maintenance",
      "Delete"
    ];
    return (

      <div className="contact-item module-list-item">
        <div className="d-flex flex-wrap f-1">

            <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
              <div className="align-center">{building_code}</div>
            </div>
            <div className="col con-inf-mw-100 f-3">
              <div className="mb-1 ml-2">
                <span className="text-truncate contact-name text-primary-color text-bold font-size-18">
                  {name}
                </span>
              </div>

              <div className="text-muted">
               <span>
                    <i className="zmdi zmdi-pin zmdi-hc-fw font-size-18"/>
                  </span>
                <span className="d-inline-block mr-2">
                      {(address?(address + ", "):"") + (zip_code?(zip_code + ", "):"") + (city?(city + ", "):"") + (province?province:"")}
                  </span>
              </div>
              <div className="text-muted">
               <span>
                    <i className="zmdi zmdi-sort zmdi-hc-fw font-size-18"/>
                  </span>
                <span className="d-inline-block mr-2">
                      {building_type.name}
                  </span>
              </div>
            </div>
            <div className="col con-inf-mw-100 f-1 text-center">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"No.Part of Building"}
                </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                  {bodies.length}
                </span>
              </div>
            </div>
            <div className="col con-inf-mw-100 f-1 text-center">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"No.Report"}
                </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                  {0}
                </span>
              </div>
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
                  if (option === "Edit") {
                    this.handleRequestClose();
                    onEdit(building)
                  } else if (option === "Delete") {
                    this.handleRequestClose();
                    onDelete(building.id);
                  } else if (option === "Body") {
                    this.handleRequestClose();
                    this.onBodies();
                  } else if (option === "Maintenance") {
                    this.handleRequestClose();
                    this.onMaintenance();
                  } else if (option === "Outdoor Spaces") {
                    this.handleRequestClose();
                    this.props.history.push('detail/outdoorspaces');
                  } else if (option === "Notice Board") {
                    this.handleRequestClose();
                    alert("Notice Board")
                  }
                }
                }>
                  {option}
                </MenuItem>
              )}
            </Menu>
          </div>
      </div>
    );
  }
}

export default withRouter(BuildingCell);
