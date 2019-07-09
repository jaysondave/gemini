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
    const { id, name, surName, avatar, address, homeNumber, cap, city, province, codFisc, mobile, phone, email } = register;

    const options = [
      "Edit",
      "Delete"
    ];
    return (

      <div className="contact-item module-list-item">

        <Checkbox color="primary"
                  checked={register.selected}
                  value="checkedF"
                  onClick={() => {
                    onRegisterSelect(register);
                  }}
        />
        <div className="d-flex f-1 flex-wrap">

          <div className="d-flex f-1 flex-wrap" onClick={() => alert(name)}>

            <div className="mx-1 mx-md-3 p-relative"
                 style={{ fontSize: 16}}>
              {(avatar === null || avatar === '') ?
                  <div className="align-center rounded-circle size-40 bg-blue text-center text-white mx-1 mx-md-3"
                       style={{fontSize: 20}}>
                    {name.charAt(0).toUpperCase()}
                  </div>
                 :
                  <img className="rounded-circle size-40 mx-1 mx-md-3" alt={name} src={avatar}/>
                }
            </div>
            <div className="col con-inf-mw-100">
              <p className="mb-0">
                  <span className="text-truncate contact-name text-primary-color text-bold">
                      {name}
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
