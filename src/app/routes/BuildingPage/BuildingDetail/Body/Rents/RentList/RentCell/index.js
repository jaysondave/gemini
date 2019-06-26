import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import {withRouter} from 'react-router-dom'

class RentCell extends React.Component {

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

  render() {
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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RentCell);
