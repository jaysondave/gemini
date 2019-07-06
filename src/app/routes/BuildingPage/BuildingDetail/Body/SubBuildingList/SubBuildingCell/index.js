import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {withRouter} from 'react-router-dom'

class SubBuildingCell extends React.Component {

  onSubBuildingOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  onDeleteSubBuilding = (contact) => {
    this.setState({ addContactState: false });
    this.props.onDeleteContact(contact);
  };
  onEditCadstral = () => {
    this.setState({ menuState: false });
    this.props.history.push('cadstral')
  };
  onEditRent = () => {
    this.setState({ menuState: false });
    this.props.history.push('rents')
  };
  onEditSystem = () => {
    this.setState({ menuState: false });
    this.props.history.push('systems')
  };
  onEditDocument = () => {
    this.setState({ menuState: false });
    this.props.history.push('documents')
  };
  onEditCertificate = () => {
    this.setState({ menuState: false });
    this.props.history.push('certified')
  };
  onEditInsurance = () => {
    this.setState({ menuState: false });
    this.props.history.push('insurance')
  };
  onEditFloor = () => {
    this.setState({ menuState: false });
    this.props.history.push('floors')
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

  render() {
    const {
      subBuilding,
      onSubBuildingSelect,
      onSubBuildingItemSelect,
    } = this.props;
    const { menuState, anchorEl } = this.state;
    const { id, building_name, user_name, user_address, building_report } = subBuilding;

    const options = [
      "FLOORS",
      "RENTS",
      "SYSTEMS",
      "DOCUMENTATIONS",
      "CADASTRAL",
      "CERTIFIED",
      "INSURANCE"
    ];
    return (

      <div className="contact-item module-list-item">

        <Checkbox color="primary"
                  checked={subBuilding.selected}
                  value="checkedF"
                  onClick={() => {
                    onSubBuildingSelect(subBuilding);
                  }}
        />
        <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>

          <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }} onClick={() => {
            onSubBuildingItemSelect(subBuilding);
          }}>

            <div className="mx-1 mx-md-3"
                 style={{ fontSize: 16, flex: 1, position: "relative" }}>
              <div style={{ position: "relative", top: "50%", transform: "translateY(-50%)" }}>{id}</div>
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
            <IconButton className="icon-btn p-2" onClick={this.onSubBuildingOptionSelect}>
              <i className="zmdi zmdi-more-vert"/>
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
                      case "RENTS":
                        this.onEditRent();
                        return;
                      case "SYSTEMS":
                        this.onEditSystem();
                        return;
                      case "DOCUMENTATIONS":
                        this.onEditDocument();
                        return;
                      case "CADASTRAL":
                        this.onEditCadstral();
                        return;
                      case "FLOORS":
                        this.onEditFloor();
                        return;
                      case "CERTIFIED":
                        this.onEditCertificate();
                        return;
                      case "INSURANCE":
                        this.onEditInsurance();
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

export default withRouter(SubBuildingCell);
