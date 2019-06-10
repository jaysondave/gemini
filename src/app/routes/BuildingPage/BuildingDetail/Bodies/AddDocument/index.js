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
import IntlMessages from "util/IntlMessages";

class AddDocument extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddSystem: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      documentType: "",
      registrationDate: "",
      registrationNumber: "",
      storageCode: "",
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
    const { onSaveDocument, onDocumentClose, open, document } = this.props;
    const {
      id,
      documentType,
      registrationDate,
      registrationNumber,
      storageCode,
      compliance,
      note,
      uploadFile
    } = this.state;
    return (
      <Modal className="modal-box" toggle={onDocumentClose} isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "Insert Document" :
            "Edit Document"}
          <IconButton className="text-white"
                      onClick={onDocumentClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Type of Document</InputLabel>
                    <Select
                      value={documentType}
                      onChange={this.handleChange("documentType")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"documentType1"}>documentType1</MenuItem>
                      <MenuItem value={"documentType1"}>documentType1</MenuItem>
                      <MenuItem value={"documentType1"}>documentType1</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <TextField
                    id="date"
                    label="Registration Date"
                    type="date"
                    value={registrationDate}
                    fullWidth
                    onChange={this.handleChange("registrationDate")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <TextField
                    label="Registration Number"
                    type="number"
                    value={registrationNumber}
                    fullWidth
                    onChange={this.handleChange("registrationNumber")}
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
            onDocumentClose();
            onSaveDocument(
              {});
            this.setState({});

          }}>Save Document</Button>
        </div>
      </Modal>
    );
  }
}

export default AddDocument;
