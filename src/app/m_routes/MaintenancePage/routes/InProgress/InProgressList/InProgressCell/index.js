import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router-dom";
import RejectJob from "../../RejectJob";
import SuspendWork from "../../SuspendWork";

class InProgressCell extends React.Component {

  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  onBuildingClose = () => {
    this.setState({ addBuildingState: false });
  };
  onOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  onTapReject = () => {
    this.setState({ menuState: false, rejectDialogVisible: true });
  };
  onTapSubAssign = () => {
    this.setState({ menuState: false});
    this.props.history.push('in-progress/sub-assign');
  };
  onTapChat = () => {
    this.setState({ menuState: false });
    this.props.history.push('/app/m-chat');
  };
  onTapSuspend = () => {
    this.setState({ menuState: false, suspendDialogVisible: true });
  };
  onTapRevoke = () => {
    this.setState({ menuState: false });
    this.props.history.push('in-progress/revoke');
  };
  onClose = name => {
    this.setState({[name]: false});
  };
  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
      rejectDialogVisible: false,
      subAssignDialogVisible: false,
      suspendDialogVisible: false,
    };
  }

  render() {
    const { maintenance, onMaintenanceSelect } = this.props;
    const { menuState, anchorEl, rejectDialogVisible, subAssignDialogVisible, suspendDialogVisible } = this.state;
    const { id, building, reporter, reportContent, assign, viewDate } = maintenance;

    const options = [
      "Reject",
      "Assign",
      "Suspend",
      "Revoke",
      "Chat"
    ];
    return (

      <div className="contact-item module-list-item">

        <div className="d-flex f-1 flex-wrap">

          <div className="d-flex f-1 flex-wrap">

            <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
              <div className="position-absolute align-center">{id}</div>
            </div>
            <div className="col con-inf-mw-100 f-2">
              <p className="mb-0">
                  <span className="text-truncate contact-name text-primary-color text-bold">
                    {"Administrator"}
                  </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                    {"Building Name"}
                </span>
              </div>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                    {building.address}
                </span>
              </div>

            </div>
            <div className="col con-inf-mw-100 f-2">
              <div className="text-muted">
                  <span className="text-primary-color text-bold">
                      {"Description of report"}
                  </span>
              </div>
            </div>
            <div className="col con-inf-mw-100 f-2">
              <p className="mb-0">
                  <span className="text-primary-darken-4-color">
                      Due Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{reporter.date}
                  </span>
              </p>
              <p className="mb-0">
                  <span className="text-primary-darken-4-color">
                      Accept Date: {reporter.date}
                  </span>
              </p>
            </div>
          </div>
          <div className="col-auto px-1 actions d-none d-sm-flex">
            <IconButton className="icon-btn p-2" onClick={this.onOptionSelect}>
              <i className="zmdi zmdi-more-vert" />
            </IconButton>

            <Menu id="long-menu"
                  anchorEl={anchorEl}
                  open={menuState}
                  onClose={this.handleRequestClose}

                  MenuListProps={{
                    style: {
                      width: 150
                    }
                  }}>
              {options.map(option =>
                <MenuItem key={option} onClick={() => {
                  if (option === "Reject") {
                    this.onTapReject();
                  } else if (option === "Assign") {
                    this.onTapSubAssign();
                  } else if (option === "Chat") {
                    this.onTapChat();
                  } else if (option === "Suspend") {
                    this.onTapSuspend();
                  } else if (option === "Revoke") {
                    this.onTapRevoke();
                  }
                }
                }>
                  {option}
                </MenuItem>
              )}
            </Menu>
          </div>

        </div>
        {rejectDialogVisible &&
          <RejectJob
            open={rejectDialogVisible}
            onClose={this.onClose}
          />
        }
        {suspendDialogVisible &&
        <SuspendWork
          open={suspendDialogVisible}
          onClose={this.onClose}
        />
        }
      </div>
    );
  }
}

export default withRouter(InProgressCell);
