import React, { Component } from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class AddBuildingType extends Component {
  constructor(props) {
    super(props);
    const { id, name } = props.item;
    this.state = {
      name
    };
  }
  tapSaveBtn = () => {
    const { name } = this.state;
    const { onSave, onUpdate, item } = this.props;
    if (item.name) {
      onUpdate(name)
    } else {
      onSave(name)
    }
    this.setState({name: null});
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { onClose, open, item } = this.props;
    const { name } = this.state;

    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {item.name == null ? "Add Building Type" :
            "Edit Type"}
          <IconButton className="text-white"
                      onClick={() => {
                        this.setState({name: ""});
                        onClose();}
                      }
          >
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <form className="row" noValidate autoComplete="off">
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Type Name</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                      className='form-control form-control-lg'
                      value={name}
                      onChange={this.handleChange("name")}
                    />
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={name === "" || name == null || name === this.props.item.name} variant="contained" color="primary" onClick={() => {
            this.tapSaveBtn();
          }}>Save Building type</Button>
        </div>
      </Modal>
    );
  }
}

export default AddBuildingType;
