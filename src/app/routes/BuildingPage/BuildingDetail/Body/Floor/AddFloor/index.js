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

class AddFloor extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddRent: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      levelFloor: "",
      intend: "",
      files: null
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeFile = (files) => {
    console.log(files);
    this.setState({
      files: files
    });
  };

  render() {
    const { onSaveRent, onRentClose, open, rent } = this.props;
    const {
      id,
      levelFloor,
      intend,
      files
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "Insert Floor" :
            "Edit Floor"}
          <IconButton className="text-white"
                      onClick={onRentClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">Level of Floor</label>
                </div>
                <div className="col-md-8 p-0">
                  <input
                    className='form-control form-control-lg'
                    value={levelFloor}
                    onChange={this.handleChange("levelFloor")}
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
                      value={intend}
                      onChange={this.handleChange("intend")}
                      input={<BootstrapInput/>}
                    >
                      <MenuItem value={"intend1"}>OFFICIES</MenuItem>
                      <MenuItem value={"intend2"}>RESIDENTIAL</MenuItem>
                      <MenuItem value={"intend3"}>SCHOOL</MenuItem>
                      <MenuItem value={"intend4"}>ASYLUM</MenuItem>
                      <MenuItem value={"intend5"}>WAREHOUSE</MenuItem>
                      <MenuItem value={"intend6"}>SURGERIES</MenuItem>
                      <MenuItem value={"intend7"}>SHOP</MenuItem>
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
          <Button disabled={id === ""} variant="contained" color="primary" onClick={() => {
            onRentClose();

          }}>Save Floor</Button>
        </div>
      </Modal>
    );
  }
}

export default AddFloor;
