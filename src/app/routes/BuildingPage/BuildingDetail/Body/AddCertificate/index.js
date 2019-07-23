import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import BootstrapInput from 'components/BootstrapInput';
import {DropzoneArea} from 'material-ui-dropzone'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DatePicker from "react-datepicker";
import { InputDate } from "../../../../../../components/CustomInput/InputDate";

class AddCertificate extends React.Component {


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
  updateDate = name => (date) => {
    if (date) {
      this.setState({ [name]: this.formatDate(date.toLocaleDateString()) });
    }
  };
  formatDate = (d) => {
    let date = new Date(d);
    let reformattedDate = [
      date.getFullYear(),
      ("0" + (date.getMonth() + 1)).slice(-2),
      ("0" + date.getDate()).slice(-2)
    ].join('-');
    return reformattedDate;
  };
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
                    <Select
                      value={certificateType}
                      onChange={this.handleChange("certificateType")}
                      input={<BootstrapInput/>}
                    >
                      <MenuItem value={"certificateType1"}>certificateType1</MenuItem>
                      <MenuItem value={"certificateType2"}>certificateType2</MenuItem>
                      <MenuItem value={"certificateType3"}>certificateType3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>


              <div className="row mt-2">

                <div className="col-lg-6 col-sm-6 col-12">
                  <input
                    placeholder="Record Number"
                    type="number"
                    value={recordNumber}
                    className='form-control form-control-lg'
                    onChange={this.handleChange("recordNumber")}
                  />
                </div>

                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="d-flex">
                    <DatePicker
                      customInput={
                        <InputDate/>
                      }
                      placeholderText={"Select Record Date"}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      selected={new Date()}
                      value={recordDate}
                      onChange={this.updateDate('recordDate')}
                    />
                  </div>
                </div>

              </div>
              <div className="row mt-4">
                <div className="col-lg-6 col-sm-6 col-12">
                  <input
                    placeholder="Storage Code"
                    type="number"
                    value={storageCode}
                    className='form-control form-control-lg'
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
              <div className="row mt-4">
                <div className="col-lg-12 col-sm-12 col-12">
                  <FormControl className="w-100 mb-2">
                    <Select
                      value={compliance}
                      onChange={this.handleChange("compliance")}
                      input={<BootstrapInput/>}
                    >
                      <MenuItem value={"compliant"}>Compliant</MenuItem>
                      <MenuItem value={"toBeTested"}>Te be tested</MenuItem>
                      <MenuItem value={"notUpToStandard"}>Not up to standard</MenuItem>
                      <MenuItem value={"notCertified"}>Not certified</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-12 col-sm-12 col-12">
                  <textarea
                    className="form-control form-control-lg" rows="6"
                    style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                    value={note}
                    placeholder="Note"
                    onChange={this.handleChange("note")}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="d-flex">
                    <DatePicker
                      customInput={
                        <InputDate/>
                      }
                      placeholderText={"Select Expiry Date"}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      selected={new Date()}
                      value={expiryDate}
                      onChange={this.updateDate('expiryDate')}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="d-flex">
                    <DatePicker
                      customInput={
                        <InputDate/>
                      }
                      placeholderText={"Select ExpiryNote Date"}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      selected={new Date()}
                      value={expiryNoteDate}
                      onChange={this.updateDate('expiryNoteDate')}
                    />
                  </div>
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
