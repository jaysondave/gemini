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

            <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
              <div className="position-relative align-center">{id}</div>
            </div>
            <div className="col con-inf-mw-100 f-3">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {'Policy Branch'}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {'Insurance Company'}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {'Insurance Agency'}
                </span>
              </p>

            </div>

            <div className="col con-inf-mw-100 f-3">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {'Policy Number'}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {'Stipulation Date'}
                </span>
              </p>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {'Expiration Date'}
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
                  {'3'}
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
      </div>
    );
  }
}

export default withRouter(InsuranceCell);
