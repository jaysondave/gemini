import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from 'components/BootstrapInput';
import { DropzoneArea } from "material-ui-dropzone";
import {connect} from "react-redux";

class AddFloor extends React.Component {

  handleSubmit = () => {
    const {
      target,
      name,
      files
    } = this.state;
    const { body_id, onSave } = this.props;
    console.log(files[0]);
    let body = new FormData();
    body.append("body[name]", name);
    body.append("body[target_id]", target);
    body.append("body[body_id]", body_id);
    body.append("body[attachment]", files[0]);
    onSave(body);
  };
  isValid = () => {
    const { target, name, files } = this.state;
    return target !== "" &&
        name !== ""  &&
        files !== null;
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeFile = (files) => {
    console.log(files);
    this.setState({
      files: files
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      target: "",
      files: null
    };
  }
  render() {
    const { onSave, onClose, open, rent } = this.props;
    const {
      id,
      name,
      target,
    } = this.state;
    const { targets } = this.props;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "Insert Floor" :
            "Edit Floor"}
          <IconButton className="text-white"
                      onClick={() => onClose()}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">Name</label>
                </div>
                <div className="col-md-8 p-0">
                  <input
                    className='form-control form-control-lg'
                    value={name}
                    onChange={this.handleChange("name")}
                  />
                </div>
              </div>

              <div className="row col-md-12 col-12 p-0 mb-5">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">Intended of Use</label>
                </div>
                <div className="col-md-8 p-0">
                  <FormControl className="w-100 mb-2">
                    <Select
                      value={target}
                      onChange={this.handleChange("target")}
                      input={<BootstrapInput/>}
                    >
                      {targets.map(target =>
                          <MenuItem key={target.id} value={target.id}>{target.name}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </div>
              </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="font-size-18">Picture</label>
              </div>
              <div className="col-md-8 p-0">
                <DropzoneArea
                  filesLimit={1}
                  showFileNamesInPreview={true}
                  dropzoneText={"Drag and drop a file here or click"}
                  onChange={this.handleChangeFile}
                />
              </div>
            </div>

          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={!this.isValid()} variant="contained" color="primary" onClick={() => {
            this.handleSubmit()
          }}>Save Floor</Button>
        </div>
      </Modal>
    );
  }
}
const mapStateToProps = ({ target }) => {
  const { targets } = target;
  return {
    targets
  }
};
export default connect(mapStateToProps)(AddFloor);
