import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {withRouter} from 'react-router-dom'

class SubBuildingCell extends React.Component {

    onSubBuildingOptionSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
    };
    onDeleteSubBuilding = (contact) => {
        this.setState({addContactState: false});
        this.props.onDeleteContact(contact);
    };
    onEditCadstral = () => {
        this.setState({menuState: false});
        this.props.history.push(`body/${this.props.item.id}/cadstral`)
    };
    onEditRent = () => {
        this.setState({menuState: false});
        this.props.history.push(`body/${this.props.item.id}/rents`)
    };
    onEditSystem = () => {
        this.setState({menuState: false});
        this.props.history.push(`body/${this.props.item.id}/systems`)
    };
    onEditDocument = () => {
        this.setState({menuState: false});
        this.props.history.push(`body/${this.props.item.id}/documents`)
    };
    onEditCertificate = () => {
        this.setState({menuState: false});
        this.props.history.push(`body/${this.props.item.id}/certificate`)
    };
    onEditInsurance = () => {
        this.setState({menuState: false});
        this.props.history.push(`body/${this.props.item.id}/insurance`)
    };
    onEditFloor = () => {
        this.setState({menuState: false});
        this.props.history.push(`body/${this.props.item.id}/floors`)
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
        const {menuState, anchorEl} = this.state;
        const {id, body_type, name, address, zip_code, city, province, cod_fisc} = item;

        const options = [
            "FLOORS",
            "RENTS",
            "SYSTEMS",
            "DOCUMENTATIONS",
            "CADASTRAL",
            "CERTIFICATE",
            "INSURANCE"
        ];
        return (

            <div className="contact-item module-list-item">
                <div className="d-flex f-1 flex-wrap" onClick={() => onEdit(item)}>
                    <div className="col con-inf-mw-100 f-3">
                        <p className="mb-1 ml-2">
                          <span className="text-truncate contact-name text-primary-color text-bold font-size-18">
                            {name}
                          </span>
                        </p>

                        <div className="text-muted">
                          <span>
                            <i className="zmdi zmdi-pin zmdi-hc-fw font-size-18"/>
                          </span>
                          <span className="d-inline-block mr-2">
                            {(address ? (address + ", ") : "") + (zip_code ? (zip_code + ", ") : "") + (city ? (city + ", ") : "") + (province ? province : "")}
                          </span>
                        </div>

                        <div className="text-muted">
                          <span>
                            <i className="zmdi zmdi-sort zmdi-hc-fw font-size-18"/>
                          </span>
                          <span className="d-inline-block mr-2">
                            {body_type.name}
                          </span>
                        </div>
                    </div>

                    <div className="col con-inf-mw-100 f-1 text-center">
                        <p className="mb-0">
                          <span className="text-truncate contact-name text-dark">
                            {"Reports"}
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
                                    case "RENTS":
                                        this.onEditRent();
                                        return;
                                    case "SYSTEMS":
                                        this.onEditSystem();
                                        return;
                                    case "DOCUMENTATIONS":
                                        this.onEditDocument();
                                        return;
                                    case "CADASTRAL":
                                        this.onEditCadstral();
                                        return;
                                    case "FLOORS":
                                        this.onEditFloor();
                                        return;
                                    case "CERTIFICATE":
                                        this.onEditCertificate();
                                        return;
                                    case "INSURANCE":
                                        this.onEditInsurance();
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

export default withRouter(SubBuildingCell);
