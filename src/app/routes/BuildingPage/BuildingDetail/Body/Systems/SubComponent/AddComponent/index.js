import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import { DropzoneArea } from 'material-ui-dropzone'
import IntlMessages from "util/IntlMessages";

class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddSystem: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      component: "",
      brand: "",
      model: "",
      description: "",
      uploadFile: ""
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeFile = (files) => {
    console.log(files);
    this.setState({
      uploadFile: files
    });
  };
  render() {
    const { onSave, onClose, open, system } = this.props;
    const {
      id,
      component,
      brand,
      model,
      description,
      uploadFile
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "New Component" :
            "Edit Component"}
          <IconButton className="text-white"
            onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Component</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={component}
                    onChange={this.handleChange("component")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Brand</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={brand}
                    onChange={this.handleChange("brand")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Model</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={model}
                    onChange={this.handleChange("model")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Description</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <textarea style={{
                    width: "100%",
                    height: 70,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5
                  }}
                    value={description}
                    placeholder="Description"
                    onChange={this.handleChange("description")}
                  />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Add Files</label>
              </div>
              <div className="col-md-8 p-0">
                <DropzoneArea
                  filesLimit={1}
                  dropzoneText={'Drag and drop a file here or click'}
                  onChange={this.handleChangeFile}
                />
              </div>
            </div>

          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button variant="contained" color="primary" onClick={() => {
            onClose();

          }}>Save Component</Button>
        </div>
      </Modal>
    );
  }
}

export default AddComponent;
