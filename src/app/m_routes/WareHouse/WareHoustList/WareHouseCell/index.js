import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from 'react-router-dom'

class WareHouseCell extends React.Component {

  onSubBuildingOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
      addCadstral: false,
      addRent: false,
      addSystem: false,
      addDocument: false,
      addCertificate: false
    };
  }
  onEditRent = () => {
    this.setState({ menuState: false });
  };
  onEditSystem = () => {
    this.setState({ menuState: false });
  };
  onEditDocument = () => {
    this.setState({ menuState: false });
  };
  render() {

    const options = [
      "EDIT",
      "DELETE",
      "MAINTENANCE"
    ];

    const {
      subBuilding,
      onSubBuildingSelect,
      onSubBuildingItemSelect,
    } = this.props;
    const { menuState, anchorEl } = this.state;
    const { id, building_name, user_name, user_address, building_report } = subBuilding;
    return (

      <div className="contact-item module-list-item">

        <Checkbox color="primary"
          checked={subBuilding.selected}
          value="checkedF"
          onClick={() => {
            onSubBuildingSelect(subBuilding);
          }}
        />
        <div className="d-flex f-1 flex-wrap">

          <div className="d-flex f-1 flex-wrap" onClick={() => {
            onSubBuildingItemSelect(subBuilding);
          }}>

            <div className="mx-1 mx-md-3 p-relative f-1 font-size-12">
              <div className="align-center">{id}</div>
            </div>
            <div className="col con-inf-mw-100 f-3">
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

            <div className="col con-inf-mw-100 f-3">
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

          </div>

          <div className="col-auto px-1 actions d-none d-sm-flex">
            <IconButton className="icon-btn p-2" onClick={this.onSubBuildingOptionSelect}>
              <i className="zmdi zmdi-more-vert" />
            </IconButton>

            <Menu id="long-menu"
              anchorEl={anchorEl}
              open={menuState}
              onClose={this.handleRequestClose}

              MenuListProps={{
                style: {
                  width: 200
                }
              }}>
              {options.map(option =>
                <MenuItem key={option} onClick={() => {
                  switch (option) {
                    case "EDIT":
                      this.onEditRent();
                      return;
                    case "DELETE":
                      this.onEditSystem();
                      return;
                    case "MAINTENANCE":
                      this.onEditDocument();
                      return;
                    default:
                      return;
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

export default withRouter(WareHouseCell);
