import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import {withRouter} from 'react-router-dom'

class OutdoorCell extends React.Component {

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

    renderUrl = (url) => {
        if (url.startsWith('http')) {
            return url;
        } else {
            return 'http://localhost:5000' + url;
        }
    };

    render() {
        const {
            item,
            onEdit,
            onDelete,
        } = this.props;
        const {menuState, anchorEl} = this.state;
        const {id, condition, note, attachment, component, sub_component, building_id, name} = item;
        const condition_bg_color = condition === "Good"?"#ffc107": condition === "Bad"? "red": "green";
        return (

            <div className="contact-item module-list-item">

                <div className="d-flex f-1 flex-wrap" onClick={() => {
                    alert("Edit");
                }}>
                    <div className="mx-1 mx-md-3">
                        <div className="rounded-circle size-80 text-center mx-1 mx-md-3 font-size-20">
                            <img className="rounded-circle size-80 mx-1 mx-md-3 image-resize-cover"
                                 alt={""} src={this.renderUrl(attachment.url)}
                            />
                        </div>

                    </div>
                    <div className="col con-inf-mw-100 f-3">
                        <p className="mb-1 ml-2">
                          <span className="text-truncate contact-name text-primary-color text-bold font-size-18">
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                          </span>
                        </p>
                        <div className="text-muted">
                            <span className="d-inline-block outdoor-item-status" style={{ backgroundColor: condition_bg_color}}>
                                {condition}
                            </span>
                        </div>
                        <div className="text-muted">
                          <span>
                            <i className="zmdi zmdi-pin zmdi-hc-fw font-size-18"/>
                          </span>
                            <span className="d-inline-block mr-2">
                              {component.name}
                          </span>
                        </div>

                        <div className="text-muted">
                          <span>
                            <i className="zmdi zmdi-pin zmdi-hc-fw font-size-18"/>
                          </span>
                            <span className="d-inline-block mr-2">
                              {sub_component.name}
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
                            {0}
                          </span>
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

export default withRouter(OutdoorCell);
