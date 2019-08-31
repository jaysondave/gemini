import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import {withRouter} from 'react-router-dom'
import MenuItem from "@material-ui/core/MenuItem";

class InsuranceCell extends React.Component {

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
  onTapEdit = () => {
    this.setState({ menuState: false });
  };
  onTapClaims = () => {
    this.setState({ menuState: false });
    this.props.history.push('insurance/claims');
  };
  onTapDelete = () => {
    this.setState({ menuState: false });
  };
  render() {
    const options = [
      "EDIT",
      "CLAIMS",
      "DELETE"
    ];
    const {
      item,
      onEdit,
      onDelete,
    } = this.props;
    const { menuState, anchorEl } = this.state;
    const { id, policy_branch, company, policy_number, agency, contractor, stipulation_date, expiration_date, warning_date } = item;
    return (

      <div className="contact-item module-list-item">

        <div className="d-flex f-1 flex-wrap">
            <div className="col con-inf-mw-100 f-3">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {policy_branch}{" (Policy branch)"}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {company}{" (Policy company)"}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {agency.first_name + " " + agency.last_name}{" (Insurance agency)"}
                </span>
              </p>

            </div>

            <div className="col con-inf-mw-100 f-3">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {policy_number}{" (Policy number)"}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {stipulation_date}{" (Stipulation date)"}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {expiration_date}{" (Expiry date)"}
                </span>
              </p>

            </div>

            <div className="col con-inf-mw-100 f-1 text-center">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"Claims"}
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
                    case "EDIT":
                      this.onTapEdit();
                      return;
                    case "CLAIMS":
                      this.onTapClaims();
                      return;
                    case "DELETE":
                      this.onTapDelete();
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
    );
  }
}

export default withRouter(InsuranceCell);
