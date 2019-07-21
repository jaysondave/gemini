import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import IntlMessages from "util/IntlMessages";
import { DropzoneArea } from "material-ui-dropzone";
import { InputDate } from "../../../../../../../components/CustomInput/InputDate";
import BootstrapInput from 'components/BootstrapInput';
import DatePicker from "react-datepicker";

class AddInsurance extends React.Component {
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
          {id === "" ? "New Policy" :
            "Edit Policy"}
          <IconButton className="text-white"
                      onClick={onRentClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">INSURANCE AGENCY</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  value={levelFloor}
                  className='form-control form-control-lg'
                  onChange={this.handleChange("levelFloor")}
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">INSURANCE COMPANY</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  value={levelFloor}
                  className='form-control form-control-lg'
                  onChange={this.handleChange("levelFloor")}
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">POLICY BRANCH</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  value={levelFloor}
                  className='form-control form-control-lg'
                  onChange={this.handleChange("levelFloor")}
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">POLICY NUMBER</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  value={levelFloor}
                  className='form-control form-control-lg'
                  onChange={this.handleChange("levelFloor")}
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">CONTACTOR</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  value={levelFloor}
                  className='form-control form-control-lg'
                  onChange={this.handleChange("levelFloor")}
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">STIPULATION DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <div className="d-flex">
                  <DatePicker
                    customInput={
                      <InputDate
                      />
                    }
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    selected={new Date()}
                    onChange={this.updateDate('publishDate')}
                  />
                </div>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">EXPIRATION DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <div className="d-flex">
                  <DatePicker
                    customInput={
                      <InputDate
                      />
                    }
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    selected={new Date()}
                    onChange={this.updateDate('publishDate')}
                  />
                </div>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">SPLITTING UP</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <Select
                    value={intend}
                    onChange={this.handleChange("intend")}
                    input={<BootstrapInput/>}
                  >
                    <MenuItem value={"intend1"}>MONTHLY</MenuItem>
                    <MenuItem value={"intend2"}>QUARTERLY</MenuItem>
                    <MenuItem value={"intend3"}>FOUR</MenuItem>
                    <MenuItem value={"intend4"}>HALF YEARLY</MenuItem>
                    <MenuItem value={"intend5"}>ANNUAL</MenuItem>
                    <MenuItem value={"intend6"}>BIENNIAL</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">WARNING DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <div className="d-flex">
                  <DatePicker
                    customInput={
                      <InputDate
                      />
                    }
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    selected={new Date()}
                    onChange={this.updateDate('publishDate')}
                  />
                </div>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">NOTE</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <textarea
                    className="form-control form-control-lg" rows="6"
                    style={{
                    width: "100%",
                    height: 70,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5
                  }}
                            value={''}
                            placeholder="Description"
                            onChange={this.handleChange("description")}
                  />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="font-size-18">ADD IMAGE</label>
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

          }}>Save Policy</Button>
        </div>
      </Modal>
    );
  }
}

export default AddInsurance;
