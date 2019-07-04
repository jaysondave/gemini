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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IntlMessages from "util/IntlMessages";
import { DropzoneArea } from "material-ui-dropzone";

class AddOutdoor extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddRent: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      component: '',
      tipologis: '',
      condition: '',
      numOfElement: '',
      note: '',
      files: null
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeChecked = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  render() {
    const { onSave, onClose, open, rent } = this.props;
    const {
      id,
      component,
      tipologis,
      condition,
      numOfElement,
      note
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "Insert Outdoor" :
            "Edit Outdoor"}
          <IconButton className="text-white"
            onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">

              <div className="row">
                <div className="col-lg-6 col-sm-6 col-6">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Component</InputLabel>
                    <Select
                      value={component}
                      onChange={this.handleChange("component")}
                      input={<Input id="ageSimple1" />}
                    >
                      <MenuItem value={"component1"}>Component 1</MenuItem>
                      <MenuItem value={"component2"}>Component 2</MenuItem>
                      <MenuItem value={"component3"}>Component 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Tipologis</InputLabel>
                    <Select
                      value={tipologis}
                      onChange={this.handleChange("tipologis")}
                      input={<Input id="ageSimple1" />}
                    >
                      <MenuItem value={"tipologis1"}>Tipologis 1</MenuItem>
                      <MenuItem value={"tipologis2"}>Tipologis 2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Condition</InputLabel>
                    <Select
                      value={condition}
                      onChange={this.handleChange("condition")}
                      input={<Input id="ageSimple1" />}
                    >
                      <MenuItem value={"condition1"}>Condition 1</MenuItem>
                      <MenuItem value={"condition2"}>Condition 2</MenuItem>
                      <MenuItem value={"condition3"}>Condition 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                  <textarea style={{
                    width: "100%",
                    height: 70,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5
                  }}
                    value={note}
                    placeholder="Note"
                    onChange={this.handleChange("note")}
                  />
                </div>
              </div>
              <div className="row" style={{ paddingTop: 20 }}>
                <div className="col-md-12 col-12">
                  <DropzoneArea
                    filesLimit={1}
                    dropzoneText={'Drag and drop a file here or click'}
                    onChange={this.handleChangeFile}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={id === ""} variant="contained" color="primary" onClick={() => {
            onClose();

          }}>Save Outdoor</Button>
        </div>
      </Modal>
    );
  }
}

export default AddOutdoor;
