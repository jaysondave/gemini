import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {withRouter} from 'react-router-dom'

class SystemCell extends React.Component {

    onSubBuildingOptionSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
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

    onEditRent = () => {
        this.props.history.push('systems/sub-components');
    }

    render() {
        const options = [
            "SUB-COMPONENTS"
        ];
        const {item, onDelete, onEdit} = this.props;
        const {menuState, anchorEl} = this.state;
        const {component, brand, system_model, description, attachment} = item;
        return (

            <div className="contact-item module-list-item">

                <div className="d-flex f-1 flex-wrap">
                    <div className="col con-inf-mw-100 ml-4 f-1">
                        <div className="mb-0">
                          <span className="text-truncate contact-name text-dark">
                            {component}
                          </span>
                        </div>

                        <div className="mb-0">
                          <span className="text-truncate contact-name text-dark">
                            {brand}
                          </span>
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
                                        case "SUB-COMPONENTS":
                                            this.onEditRent();
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

export default withRouter(SystemCell);
