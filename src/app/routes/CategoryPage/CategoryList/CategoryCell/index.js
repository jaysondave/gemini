import React from "react";
import {withRouter} from 'react-router-dom'
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
        const {category, index, onEditCategory, onDelete, onUpdateActive} = this.props;
        const { name, active } = category;
        const {menuState, anchorEl, addBuildingState, addBody, addMaintenance} = this.state;
        return (

            <div className="contact-item module-list-item">
                <div className="d-flex f-1 flex-wrap">
                    <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
                        <div className="align-center">{index}</div>
                    </div>
                    <div className="col con-inf-mw-100 f-3 position-relative">
                        <div className="text-dark align-center">
                            {name}
                        </div>
                    </div>
                    <div className="col con-inf-mw-100 f-1 position-relative">
                        <div className="text-muted align-center">
                          <Checkbox color="primary"
                                    checked={active}
                                    onChange={() => onUpdateActive(category.id, !active)}
                          />
                        </div>
                    </div>
                    <div className="col con-inf-mw-100 f-1 position-relative">
                        <div className="text-muted align-center">
                          <IconButton className="d-block" aria-label="Menu"
                                      onClick={() => onDelete(category.id)}>
                            <i className="zmdi zmdi-delete"/>
                          </IconButton>
                        </div>
                    </div>
                    <div className="col con-inf-mw-100 f-1 position-relative">
                      <div className="text-muted align-center">
                        <IconButton className="d-block" aria-label="Menu"
                                    onClick={() => onEditCategory(category)}>
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
