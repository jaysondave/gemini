import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {withRouter} from 'react-router-dom'

class CadstralCell extends React.Component {

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
    const {
      item,
      onEdit,
      onDelete,
    } = this.props;
    const { menuState, anchorEl } = this.state;
    const { id, name, address, city, province } = item;
    return (

      <div className="contact-item module-list-item">
        <div className="d-flex f-1 flex-wrap">
            <div className="col con-inf-mw-100 f-3">
              <div className="row mb-0">
                <span className="text-truncate contact-name text-primary-color text-bold font-size-18">
                  {name}
                </span>
              </div>

              <div className="row text-muted">
                <div className="row col-6 col-md-6 col-xs-12">
                  <span>
                    <i className="zmdi zmdi-pin zmdi-hc-fw font-size-18"/>
                  </span>
                  <span className="d-inline-block mr-2">
                      {address + ", " + city + " " + province}
                  </span>
                </div>
              </div>
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

export default withRouter(CadstralCell);
