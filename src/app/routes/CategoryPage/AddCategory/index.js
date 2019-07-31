import React, { Component } from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import BootstrapInput from "../../../../components/BootstrapInput";

class AddCategory extends Component {
  constructor(props) {
    super(props);
    const { id, name, category_type } = props.category;
    this.state = {
      name,
      category_type
    };
  }
  tapSaveBtn = () => {
    const { name, category_type } = this.state;
    const { onSave, onUpdate, category } = this.props;
    if (category.name) {
      onUpdate(name)
    } else {
      onSave(name, category_type)
    }
    this.setState({name: null});
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { onClose, open, category } = this.props;
    const { name, category_type } = this.state;

    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {category.name == null ? "Add Category" :
            "Edit Category"}
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
                {!category.id &&
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right ">
                      <label className="font-size-18">User Type</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
                        <Select
                            value={category_type}
                            onChange={this.handleChange("category_type")}
                            input={<BootstrapInput/>}
                        >
                          <MenuItem value={"maintainer"}>Maintainer</MenuItem>
                          <MenuItem value={"professional"}>Professional</MenuItem>
                          <MenuItem value={"stockist"}>Stockist</MenuItem>
                        </Select>
                      </FormControl>
                      <div className={`invalid-text ${this.state.category_id_error? '': 'invalid-text-invisible'}`}>{"* Specialization is required"}</div>
                    </div>
                  </div>
                }
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Category Name</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                      className='form-control form-control-lg'
                      value={name}
                      onChange={(e) => this.setState({name: e.target.value})}
                    />
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={category_type === undefined || category_type === null || category_type === "" || name === "" || name == null || name === this.props.category.name} variant="contained" color="primary" onClick={() => {
            this.tapSaveBtn();
          }}>Save Category</Button>
        </div>
      </Modal>
    );
  }
}

export default AddCategory;
