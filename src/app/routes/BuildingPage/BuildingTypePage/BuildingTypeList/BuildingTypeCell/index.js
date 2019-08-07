import React from "react";
import {withRouter} from 'react-router-dom'
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";

class BuildingTypeCell extends React.Component {
  handleChange = name => (event, checked) => {
    this.setState({[name]: checked});
  };
    render() {
        const {item, index, onEdit, onDelete, onUpdateActive} = this.props;
        const { name, active } = item;
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
                                    onChange={() => onUpdateActive(item.id, !active)}
                          />
                        </div>
                    </div>
                    <div className="col con-inf-mw-100 f-1 position-relative">
                        <div className="text-muted align-center">
                          <IconButton className="d-block" aria-label="Menu"
                                      onClick={() => onDelete(item.id)}>
                            <i className="zmdi zmdi-delete"/>
                          </IconButton>
                        </div>
                    </div>
                    <div className="col con-inf-mw-100 f-1 position-relative">
                      <div className="text-muted align-center">
                        <IconButton className="d-block" aria-label="Menu"
                                    onClick={() => onEdit(item)}>
                          <i className="zmdi zmdi-edit"/>
                        </IconButton>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(BuildingTypeCell);
