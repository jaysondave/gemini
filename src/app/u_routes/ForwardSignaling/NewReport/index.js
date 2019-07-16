import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from 'components/BootstrapInput';
import IntlMessages from "util/IntlMessages";
import { DropzoneArea } from "material-ui-dropzone";

class NewReport extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddRent: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      building: "",
      admin: "",
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
    const { onClose, open } = this.props;
    const {
      id,
      admin,
      building,
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {"New Report"}
          <IconButton className="text-white"
                      onClick={() => onClose()}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">ADMINISTRATOR</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100">
                  <Select
                    value={admin}
                    onChange={this.handleChange("admin")}
                    input={<BootstrapInput/>}
                  >
                    <MenuItem value={"admin1"}>Admin 1</MenuItem>
                    <MenuItem value={"admin2"}>Admin 2</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">BUILDING</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100">
                  <Select
                    value={building}
                    onChange={this.handleChange("building")}
                    input={<BootstrapInput/>}
                  >
                    <MenuItem value={"building1"}>Building 1</MenuItem>
                    <MenuItem value={"building2"}>Building 2</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right">
                <label className="font-size-18">NOTE</label>
              </div>
              <div className="col-md-8 p-0">
                <textarea
                  className="form-control form-control-lg" rows="6"
                  style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                  placeholder="Description"
                  onChange={this.handleChange("notes")}
                />
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
            onClose();

          }}>Report</Button>
        </div>
      </Modal>
    );
  }
}

export default NewReport;
