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
import { InputDate } from "../../../../../../components/CustomInput/InputDate";
import DatePicker from "react-datepicker";

class SuspendWork extends React.Component {
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
    const { onClose, open, rent } = this.props;
    const {
      id,
      levelFloor,
      intend,
      files
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {"Suspend Work"}
          <IconButton className="text-white"
                      onClick={() => onClose('suspendDialogVisible')}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">FROM DATE</label>
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
                <label className="align-center font-size-18">TO DATE</label>
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
                  <textarea style={{
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
            onClose('suspendDialogVisible');

          }}>Suspend</Button>
        </div>
      </Modal>
    );
  }
}

export default SuspendWork;
