import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import {withRouter} from 'react-router-dom'
import MenuItem from "@material-ui/core/MenuItem";

class FloorCell extends React.Component {

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
  onTapRooms = () => {
    this.setState({ menuState: false });
    this.props.history.push('floors/rooms');
  };
  render() {
    const { item, onDelete, onEdit } = this.props;
    const { menuState, anchorEl } = this.state;
    const { name, target } = item;
    return (
      <div className="contact-item module-list-item">

          <div className="d-flex f-1 flex-wrap">
            <div className="col con-inf-mw-100 ml-4 f-1">
              <div className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {name}
                </span>
              </div>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                  {target.name}{"(Intended use)"}
                </span>
              </div>

            </div>
            <div className="col con-inf-mw-100 f-1 text-center">
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"Number of rooms"}
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
                <MenuItem onClick={() => {
                  this.onTapRooms();
                }
                }>
                  {"ROOM"}
                </MenuItem>
            </Menu>

          </div>
      </div>
    );
  }
}

export default withRouter(FloorCell);
