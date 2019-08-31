import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {DropzoneArea} from 'material-ui-dropzone'
import {connect} from "react-redux";
import BootstrapInput from "../../../../../../components/BootstrapInput";
import InputMask from "react-input-mask";

class AddDocument extends React.Component {
  handleSubmit = () => {
    const {
      document_type_id,
      reg_date,
      reg_number,
      storage_code,
      compliance_id,
      note,
      attachment
    } = this.state;
    const { body_id, onSave } = this.props;
    let body = new FormData();
    body.append("body[body_id]", body_id);

    body.append("body[document_type_id]", document_type_id);
    body.append("body[reg_date]", reg_date);
    body.append("body[reg_number]", reg_number);
    body.append("body[storage_code]", storage_code);
    body.append("body[compliance_id]", compliance_id);
    body.append("body[note]", note);
    body.append("body[attachment]", attachment[0]);
    onSave(body);
  };
  isValid = () => {
    const {
      document_type_id,
      reg_date,
      reg_number,
      storage_code,
      compliance_id,
      note,
      attachment
    } = this.state;
    return document_type_id !== "" &&
        reg_date !== ""  &&
        reg_number !== ""  &&
        storage_code !== ""  &&
        compliance_id !== ""  &&
        note !== ""  &&
        attachment !== null;
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeFile = (files) => {
    console.log(files);
    this.setState({
      attachment: files
    });
  };
  constructor(props) {
    super(props);
    console.log({ AddSystem: props });
    this.state = {
      id: "",
      document_type_id: "",
      reg_date: "",
      reg_number: "",
      storage_code: "",
      compliance_id: "",
      note: "",
      attachment: null
    };
  }
  render() {
    const { onSaveDocument, onClose, open, document } = this.props;
    const {
      id,
      document_type_id,
      reg_date,
      reg_number,
      storage_code,
      compliance_id,
      note,
    } = this.state;
    const { documentTypes, compliances } = this.props;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "Insert Document" :
            "Edit Document"}
          <IconButton className="text-white"
                      onClick={() => onClose()}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">

            <div className="row col-md-12 col-12 p-0 mb-5">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Type of Document</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <Select
                      value={document_type_id}
                      onChange={this.handleChange("document_type_id")}
                      input={<BootstrapInput/>}
                  >
                    {documentTypes.map(document_type =>
                        <MenuItem key={document_type.id} value={document_type.id}>{document_type.name}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Registration Date</label>
              </div>
              <div className="col-md-8 p-0">
                <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder={"dd/mm/yyyy"}
                    value={reg_date}
                    onChange={this.handleChange("reg_date")}
                >
                  {(inputProps) => <input
                      {...inputProps}
                      className="form-control form-control-lg"
                  />}
                </InputMask>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Registration Number</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                    className='form-control form-control-lg'
                    value={reg_number}
                    onChange={this.handleChange("reg_number")}
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Storage Code</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                    className='form-control form-control-lg'
                    value={storage_code}
                    onChange={this.handleChange("storage_code")}
                />
              </div>
            </div>
            <div className="row col-md-12 col-12 p-0 mb-5">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Compliance</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <Select
                      value={compliance_id}
                      onChange={this.handleChange("compliance_id")}
                      input={<BootstrapInput/>}
                  >
                    {compliances.map(compliance =>
                        <MenuItem key={compliance.id} value={compliance.id}>{compliance.name}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Description</label>
              </div>
              <div className="col-md-8 p-0">
                <textarea
                    className="form-control form-control-lg" rows="6"
                    style={{width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5}}
                    value={note}
                    placeholder="Description"
                    onChange={this.handleChange("note")}
                />
              </div>
            </div>


            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="font-size-18">Attachment</label>
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
          <Button disabled={!this.isValid()} variant="contained" color="primary" onClick={() => {
            this.handleSubmit();
          }}>Save Document</Button>
        </div>
      </Modal>
    );
  }
}
const mapStateToProps = ({ documentType, compliance }) => {
  const { documentTypes } = documentType;
  const { compliances } = compliance;
  return {
    documentTypes,
    compliances
  }
};
export default connect(mapStateToProps)(AddDocument);
