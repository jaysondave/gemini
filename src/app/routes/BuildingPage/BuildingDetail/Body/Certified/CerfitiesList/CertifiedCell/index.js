import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {withRouter} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CertifiedCell extends React.Component {

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
    };
  }

  render() {
    const {
      item,
      onEdit,
      onDelete,
    } = this.props;
    const { menuState, anchorEl } = this.state;
    const { id, certificate_type, reg_date, reg_number, storage_code, compliance, note, expiry_date, expiry_notice_date } = item;
    return (

      <div className="contact-item module-list-item">
        <div className="d-flex f-1 flex-wrap">
          <div className="col con-inf-mw-100 ml-4 f-1">
            <div className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {certificate_type.name}
                </span>
            </div>

            <div className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {compliance.name}
                </span>
            </div>
          </div>
          <div className="col con-inf-mw-100 f-1 text-center">
            <p className="mb-0">
              <FontAwesomeIcon icon="calendar-alt"/>
              <span className="text-truncate contact-name text-dark ml-1">
                {reg_date}
              </span>
            </p>
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

export default withRouter(CertifiedCell);
