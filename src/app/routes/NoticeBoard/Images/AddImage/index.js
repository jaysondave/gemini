import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import { DropzoneArea } from 'material-ui-dropzone'
import IntlMessages from "util/IntlMessages";
import { InputDate } from "../../../../../components/CustomInput/InputDate";

class AddImage extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddSystem: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      component: "",
      brand: "",
      publishDate: "",
      expiryDate: "",
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
    const { onSave, onClose, open, system } = this.props;
    const {
      id,
      component,
      brand,
      publishDate,
      expiryDate,
      uploadFile
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "New Image" :
            "Edit Image"}
          <IconButton className="text-white"
            onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right">
                <label className="font-size-18">Image</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <DropzoneArea
                    filesLimit={1}
                    dropzoneText={'Drag and drop a file here or click'}
                    onChange={this.handleChangeFile}
                  />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Url</label>
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
                <label className="align-center font-size-18">Publish Date</label>
              </div>
              <div className="col-md-8 p-0">
                <div className="d-flex">
                  <DatePicker
                    disabled
                    readOnly
                    customInput={
                      <InputDate
                      />
                    }
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    selected={publishDate ? new Date(publishDate) : new Date()}
                    onChange={this.updateDate('publishDate')}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row col-md-12 col-12 p-0 mb-2">
            <div className="col-md-4 text-right p-relative">
              <label className="align-center font-size-18">Expiry Date</label>
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
                  selected={expiryDate ? new Date(expiryDate) : null}
                  onChange={this.updateDate('expiryDate')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button variant="contained" color="primary" onClick={() => {
            onClose();

          }}>Save Image</Button>
        </div>
      </Modal>
    );
  }
}

export default AddImage;
