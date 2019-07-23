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
import {DropzoneArea} from 'material-ui-dropzone'

class AddSystem extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddSystem: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      systemType: "",
      condition: "",
      compliance: "",
      note: "",
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
    const { onSaveSystem, onSystemClose, open, system } = this.props;
    const {
      id,
      systemType,
      condition,
      compliance,
      note,
      uploadFile
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "Insert System" :
            "Edit System"}
          <IconButton className="text-white"
                      onClick={onSystemClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Type of System</InputLabel>
                    <Select
                      value={systemType}
                      onChange={this.handleChange("systemType")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"systemType1"}>Conforming</MenuItem>
                      <MenuItem value={"systemType2"}>Not conforming</MenuItem>
                      <MenuItem value={"systemType3"}>To be verified</MenuItem>
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
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"condition1"}>condition1</MenuItem>
                      <MenuItem value={"condition2"}>condition2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Compliance</InputLabel>
                    <Select
                      value={compliance}
                      onChange={this.handleChange("compliance")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"compliant"}>Compliant</MenuItem>
                      <MenuItem value={"toBeTested"}>Te be tested</MenuItem>
                      <MenuItem value={"notUpToStandard"}>Not up to standard</MenuItem>
                      <MenuItem value={"notCertified"}>Not certified</MenuItem>
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
              <div className="row" style={{paddingTop: 20}}>
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
            onSystemClose();
            onSaveSystem(
              {});
            this.setState({});

          }}>Save System</Button>
        </div>
      </Modal>
    );
  }
}

export default AddSystem;
