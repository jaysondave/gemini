import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router-dom";
import NewDocument from "../../NewDocument";

class DocumentCell extends React.Component {

  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  onBuildingClose = () => {
    this.setState({ addBuildingState: false });
  };
  onOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  onTapEdit = () => {
    this.setState({ menuState: false, edit: true});
  };
  onTapDelete = () => {
    this.setState({ menuState: false });
  };
  onClose = name => {
    this.setState({edit: false});
  };
  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
      edit: false,
    };
  }

  render() {
    const { menuState, anchorEl, edit } = this.state;

    const options = [
      "Edit",
      "Delete",
    ];
    return (

      <div className="contact-item module-list-item">

        <div className="d-flex f-1 flex-wrap">

          <div className="d-flex f-1 flex-wrap">

            <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
              <div className="position-absolute align-center">{"id1223123"}</div>
            </div>
            <div className="col con-inf-mw-100 f-2">
              <p className="mb-0">
                  <span className="text-truncate contact-name text-primary-color text-bold">
                    {"Type of Document"}
                  </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                    {"Name of Document"}
                </span>
              </div>

            </div>

            <div className="col con-inf-mw-100 f-1">
              <p className="mb-0">
                  <span className="text-primary-darken-4-color">
                      End Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"2019/07/11"}
                  </span>
              </p>
              <p className="mb-0">
                  <span className="text-primary-darken-4-color">
                      Warning Date: {"2019/07/11"}
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
                  if (option === "Edit") {
                    this.onTapEdit();
                  } else if (option === "Delete") {
                    this.onTapDelete();
                  }
                }
                }>
                  {option}
                </MenuItem>
              )}
            </Menu>
          </div>

        </div>

        {edit &&
          <NewDocument
            document={null}
            onClose={this.onClose}
            open={edit}

          />
        }
      </div>
    );
  }
}

export default withRouter(DocumentCell);
