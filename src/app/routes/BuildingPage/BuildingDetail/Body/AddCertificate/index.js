import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import {DropzoneArea} from 'material-ui-dropzone'
import IntlMessages from "util/IntlMessages";
import FormControlLabel from "../AddRent";

class AddCertificate extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddCertificate: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      certificateType: "",
      recordDate: "",
      recordNumber: "",
      storageCode: "",
      registered: false,
      compliance: "",
      note: "",
      expiryDate: "",
      expiryNoteDate: "",
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
  handleChangeChecked = name => (event, checked) => {
    this.setState({ [name]: checked });
  };
  render() {
    const { onSaveCertificate, onCertificateClose, open, certificate } = this.props;
    const {
      id,
      certificateType,
      recordDate,
      recordNumber,
      storageCode,
      registered,
      compliance,
      note,
      expiryDate,
      expiryNoteDate,
      uploadFile
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "Insert Certificate" :
            "Edit Certificate"}
          <IconButton className="text-white"
                      onClick={onCertificateClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Type of Certificate</InputLabel>
                    <Select
                      value={certificateType}
                      onChange={this.handleChange("certificateType")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"certificateType1"}>certificateType1</MenuItem>
                      <MenuItem value={"certificateType2"}>certificateType2</MenuItem>
                      <MenuItem value={"certificateType3"}>certificateType3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <TextField
                    id="date"
                    label="Record Date"
                    type="date"
                    value={recordDate}
                    fullWidth
                    onChange={this.handleChange("recordDate")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <TextField
                    label="Record Number"
                    type="number"
                    value={recordNumber}
                    fullWidth
                    onChange={this.handleChange("recordNumber")}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <TextField
                    label="Storage Code"
                    value={storageCode}
                    fullWidth
                    onChange={this.handleChange("storageCode")}
                  />
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <FormControlLabel
                    control={
                      <Checkbox color="primary"
                                checked={registered}
                                onChange={this.handleChangeChecked("registered")}
                                value="registered"
                      />
                    }
                    label="Registered"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
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
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <TextField
                    id="date"
                    label="Expiry Date"
                    type="date"
                    value={expiryDate}
                    fullWidth
                    onChange={this.handleChange("expiryDate")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <TextField
                    id="date"
                    label="Expiry Note Date"
                    type="date"
                    value={expiryNoteDate}
                    fullWidth
                    onChange={this.handleChange("expiryNoteDate")}
                    InputLabelProps={{
                      shrink: true
                    }}
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
            onCertificateClose();
            onSaveCertificate(
              {});
            this.setState({});

          }}>Save Document</Button>
        </div>
      </Modal>
    );
  }
}

export default AddCertificate;
