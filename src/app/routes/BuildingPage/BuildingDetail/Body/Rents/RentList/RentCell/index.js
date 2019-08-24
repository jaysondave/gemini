import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import {withRouter} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
    const { item, onDelete, onEdit } = this.props;
    const { menuState, anchorEl } = this.state;
    const { landlord, tenant, expiry_date, end_date } = item;
    return (

      <div className="contact-item module-list-item">
        <div className="d-flex f-1 flex-wrap">
            <div className="col con-inf-mw-100 f-2">
              <p className="mb-0">
                <FontAwesomeIcon icon="user"/>
                <span className="text-truncate contact-name text-dark ml-1">
                  {landlord.first_name + " " + landlord.last_name}{"(Landlord)"}
                </span>
              </p>

              <p className="mb-0">
                <FontAwesomeIcon icon="user"/>
                <span className="text-truncate contact-name text-dark ml-1">
                  {tenant.first_name + " " + tenant.last_name}{"(Tenant)"}
                </span>
              </p>

              <div className="text-muted">
              </div>
            </div>
            <div className="col con-inf-mw-100 f-1">
              <p className="mb-0">
                <FontAwesomeIcon icon="calendar-alt"/>
                <span className="text-truncate contact-name text-dark ml-1">
                  {expiry_date}{"(Expiry Date)"}
                </span>
              </p>

              <p className="mb-0">
                <FontAwesomeIcon icon="clock"/>
                <span className="text-truncate contact-name text-dark ml-1">
                  {end_date}{"(End Date)"}
                </span>
              </p>
            </div>
          </div>
          <div className="col-auto px-1 actions d-none d-sm-flex">
            <IconButton className="icon-btn p-2" onClick={this.onSubBuildingOptionSelect}>
              <i className="zmdi zmdi-more-vert"/>
            </IconButton>
          </div>
      </div>
    );
  }
}

export default withRouter(RentCell);
