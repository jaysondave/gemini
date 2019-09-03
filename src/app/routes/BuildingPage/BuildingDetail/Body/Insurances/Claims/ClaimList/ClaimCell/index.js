import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import {withRouter} from 'react-router-dom'
import MenuItem from "@material-ui/core/MenuItem";
import AddAmount from "../../AddAmount";
import AddDocument from "../../AddDocument";
import AddReminder from "../../AddReminder";
import AddExpert from "../../AddExpert";

class ClaimCell extends React.Component {

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
      addAmount: false,
      addDocument: false,
      addReminder: false,
      addExpert: false,
    };
  }
  onTapEdit = () => {
    this.setState({ menuState: false });
  };
  onTapAddExpert = () => {
    this.setState({ menuState: false, addExpert: true });
  };
  onTapAddReminder = () => {
    this.setState({ menuState: false, addReminder: true });
  };
  onTapSendDoc = () => {
    this.setState({ menuState: false });
  };
  onTapIntegrationDoc = () => {
    this.setState({ menuState: false, addDocument: true });
  };
  onTapAmount = () => {
    this.setState({ menuState: false, addAmount: true });
  };
  onTapClosureReject = () => {
    this.setState({ menuState: false });
  };
  onTapDelete = () => {
    this.setState({ menuState: false });
  };

  onSaveAmount = () => {
    this.setState({ addAmount: false });
  };
  onSaveDocument = () => {
    this.setState({ addDocument: false });
  };
  onSaveReminder = () => {
    this.setState({ addReminder: false });
  };
  onSaveExpert = () => {
    this.setState({ addExpert: false });
  };
  onCloseEditer = (name) => {
    this.setState({[name]: false});
  };
  render() {
    const options = [
      "EDIT",
      "ADD REMINDER",
      "ADD AN EXPERT",
      "SEND DOCUMENTS TO INSURANCE AGENCY",
      "INTEGRATION OF DOCUMENTS",
      "CLEARANCE AMOUNT",
      "CLOSURE FOR REJECT",
      "DELETE"
    ];
    const {
      item,
      onEdit,
      onDelete,
    } = this.props;
    const { menuState, anchorEl, addAmount, addDocument, addReminder, addExpert } = this.state;
    const { id, building_name, user_name, user_address, building_report } = item;
    return (

      <div className="contact-item module-list-item">
        <div className="d-flex f-1 flex-wrap">

            <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
              <div className="position-relative align-center">{id}</div>
            </div>
            <div className="col con-inf-mw-100 f-3">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {'contractor'}
                </span>
              </p>

              <div className="text-muted">
                <span className="phone d-inline-block">
                  {'insurance agency'}
                </span>
              </div>
              <div className="text-muted">
                <span className="phone d-inline-block">
                  {'insurance company'}
                </span>
              </div>
            </div>

            <div className="col con-inf-mw-100 f-3">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {'date of claim'}
                </span>
              </p>

              <div className="text-muted">
                <span className="phone d-inline-block">
                  {'description'}
                </span>
              </div>
              <div className="text-muted">
                <span className="phone d-inline-block">
                  {'required amount'}
                </span>
              </div>
            </div>

            <div className="col con-inf-mw-100 f-1 text-center">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"Status"}
                </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                  {'document unsent'}
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
                      width: 350
                    }
                  }}>
              {options.map(option =>
                <MenuItem key={option} onClick={() => {
                  switch (option) {
                    case "EDIT":
                      this.onTapEdit();
                      return;
                    case "ADD AN EXPERT":
                      this.onTapAddExpert();
                      return;
                    case "ADD REMINDER":
                      this.onTapAddReminder();
                      return;
                    case "SEND DOCUMENTS TO INSURANCE AGENCY":
                      this.onTapSendDoc();
                      return;
                    case "INTEGRATION OF DOCUMENTS":
                      this.onTapIntegrationDoc();
                      return;
                    case "CLEARANCE AMOUNT":
                      this.onTapAmount();
                      return;
                    case "CLOSURE FOR REJECT":
                      this.onTapClosureReject();
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
        <AddAmount
          open={addAmount}
          onSave={this.onSaveAmount}
          onClose={this.onCloseEditer}
        />
        <AddDocument
          open={addDocument}
          onSave={this.onSaveDocument}
          onClose={this.onCloseEditer}
        />
        <AddReminder
          open={addReminder}
          onSave={this.onSaveReminder}
          onClose={this.onCloseEditer}
        />
        <AddExpert
          open={addExpert}
          onSave={this.onSaveExpert}
          onClose={this.onCloseEditer}
        />
      </div>
    );
  }
}

export default withRouter(ClaimCell);
