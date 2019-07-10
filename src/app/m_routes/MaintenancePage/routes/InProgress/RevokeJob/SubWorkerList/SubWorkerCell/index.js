import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router-dom";

class SubWorkerCell extends React.Component {

  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  onBuildingClose = () => {
    this.setState({ addBuildingState: false });
  };
  onOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  onTapRevoke = () => {
    this.setState({ menuState: false,});
  };
  onTapChat = () => {
    this.setState({ menuState: false });
  };
  onClose = name => {
    this.setState({[name]: false});
  };
  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
    };
  }

  render() {
    const { maintenance, onMaintenanceSelect } = this.props;
    const { menuState, anchorEl} = this.state;
    const { id, building, reporter} = maintenance;

    const options = [
      "Revoke",
      "Chat"
    ];
    return (

      <div className="contact-item module-list-item">

        <div className="d-flex f-1 flex-wrap">
          <div className="d-flex f-1 flex-wrap">
            <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
              <div className="position-absolute align-center text-primary-color text-bold">{"Worker 1"}</div>
            </div>

            <div className="col con-inf-mw-100 f-1 position-relative">
              <p className="mb-0 position-absolute align-center">
                  <span className="text-primary-darken-4-color">
                      Due Date: {"2019/07/10"}
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
                  if (option === "Revoke") {
                    this.onTapRevoke();
                  } else if (option === "Chat") {
                    this.onTapChat();
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

export default withRouter(SubWorkerCell);
