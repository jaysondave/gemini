import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from 'react-router-dom'

class BuildingCell extends React.Component {

  onBuildingOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  onEditImages = (building) => {
    this.setState({ menuState: false, addBuildingState: false });
    this.props.history.push('notice-board/images')
  };
  onEditMessages = () => {
    this.setState({ menuState: false, addBuildingState: true });
    this.props.history.push('notice-board/messages')
  };
  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
      addBuildingState: false,
      addMaintenance: false,
    };
  }

  render() {
    const { building } = this.props;
    const { menuState, anchorEl } = this.state;
    const { id, building_name, thumb, user_name, user_address, building_report, subBuildingList } = building;

    const options = [
      "Messages",
      "Images"
    ];
    return (

      <div className="contact-item module-list-item">
        <div className="d-flex f-1 flex-wrap">

          <div className="d-flex f-1 flex-wrap" onClick={() => this.props.history.push('/notice-board')}>

            <div className="mx-1 mx-md-3 f-1 p-relative font-size-16">
              <div className="align-center">{id}</div>
            </div>
            <div className="col con-inf-mw-100 f-3">
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
            <div className="col con-inf-mw-100 f-1 text-center">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"No.Part of Building"}
                </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                  {subBuildingList.length}
                </span>
              </div>
            </div>
            <div className="col con-inf-mw-100 f-1 text-center">
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
            <IconButton className="icon-btn p-2" onClick={this.onBuildingOptionSelect}>
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
                  if (option === "Messages") {
                    this.handleRequestClose();
                    this.onEditMessages();
                  } else if (option === "Images") {
                    this.handleRequestClose();
                    this.onEditImages();
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

export default withRouter(BuildingCell);
