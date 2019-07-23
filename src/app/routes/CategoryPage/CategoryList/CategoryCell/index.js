import React from "react";
import {withRouter} from 'react-router-dom'
import AddBuilding from "../../AddCategory/index";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";

class CategoryCell extends React.Component {

    onBuildingOptionSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
    };
    onBuildingClose = () => {
        this.setState({addBuildingState: false});
    };
    onDeleteBuilding = (building) => {
        this.setState({addBuildingState: false});
        this.props.onDeleteBuilding(building);
    };
    onEditBuilding = () => {
        this.setState({menuState: false, addBuildingState: true});
    };
    onBodyClose = () => {
        this.setState({addBuildingState: false});
    };
    onBodies = () => {
        this.props.history.push('detail')
    };
    onMaintenance = () => {
        this.setState({menuState: false, addMaintenance: true});
    };
    onMaintenanceClose = () => {
        this.setState({addMaintenance: false});
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
  handleChange = name => (event, checked) => {
    this.setState({[name]: checked});
  };
    render() {
        const {category, index, onSaveBuilding, onSaveBody} = this.props;
        const {menuState, anchorEl, addBuildingState, addBody, addMaintenance} = this.state;
        return (

            <div className="contact-item module-list-item">
                <div className="d-flex f-1 flex-wrap">
                    <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
                        <div className="align-center">{index}</div>
                    </div>
                    <div className="col con-inf-mw-100 f-3 position-relative">
                        <div className="text-dark align-center">
                            {"Category Name"}
                        </div>
                    </div>
                    <div className="col con-inf-mw-100 f-1 position-relative">
                        <div className="text-muted align-center">
                          <Checkbox color="primary"
                                    checked={true}
                                    onChange={this.handleChange('checkedAdmin')}
                          />
                        </div>
                    </div>
                    <div className="col con-inf-mw-100 f-1 position-relative">
                        <div className="text-muted align-center">
                          <IconButton className="d-block" aria-label="Menu"
                                      onClick={() => alert('adf')}>
                            <i className="zmdi zmdi-delete"/>
                          </IconButton>
                        </div>
                    </div>
                    <div className="col con-inf-mw-100 f-1 position-relative">
                      <div className="text-muted align-center">
                        <IconButton className="d-block" aria-label="Menu"
                                    onClick={() => alert('adf')}>
                          <i className="zmdi zmdi-edit"/>
                        </IconButton>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CategoryCell);
