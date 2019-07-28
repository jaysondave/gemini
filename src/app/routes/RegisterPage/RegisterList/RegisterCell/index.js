import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router-dom";

class RegisterCell extends React.Component {

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
    this.props.history.push("/app/buildingDashboard/detail");
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
    const { register, onRegisterSelect } = this.props;
    const { menuState, anchorEl } = this.state;
    const {
      id,
      email,
      user_type,
      first_name,
      last_name,
      picture,
      business_name,
      address,
      home_number,
      zip_code,
      city,
      province,
      cod_fisc,
      p_lva,
      mobile,
      phone,
      pec,
      cuu,
      specialization,
      building
    } = register;

    return (

      <div className="contact-item module-list-item">
        <div className="d-flex f-1 flex-wrap">

          <div className="d-flex f-1 flex-wrap" onClick={() => alert(first_name)}>

            <div className="mx-1 mx-md-3 p-relative"
                 style={{ fontSize: 16}}>
              {(picture === null || picture === '') ?
                  <div className="align-center rounded-circle size-40 bg-blue text-center text-white mx-1 mx-md-3"
                       style={{fontSize: 20}}>
                    {first_name.charAt(0).toUpperCase()}
                  </div>
                 :
                  <img className="rounded-circle size-40 mx-1 mx-md-3" alt={first_name + " " + last_name} src={picture}/>
                }
            </div>
            <div className="col con-inf-mw-100">
              <p className="mb-0">
                  <span className="text-truncate contact-name text-primary-color text-bold">
                      {first_name + " " + last_name}
                  </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                    {address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterCell);
