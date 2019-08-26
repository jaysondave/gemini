import React from "react";
import {Modal, ModalHeader} from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from 'components/BootstrapInput';
import {DropzoneArea} from 'material-ui-dropzone'
import InputMask from "react-input-mask";
import {connect} from "react-redux";

class AddCertificate extends React.Component {
  handleSubmit = () => {
    const {
      certificate_type_id,
      reg_date,
      reg_number,
      storage_code,
      compliance_id,
      note,
      expiry_date,
      expiry_notice_date,
      attachment
    } = this.state;
    const { body_id, onSave } = this.props;
    let body = new FormData();
    body.append("body[body_id]", body_id);
    body.append("body[certificate_type_id]", certificate_type_id);
    body.append("body[reg_date]", reg_date);
    body.append("body[reg_number]", reg_number);
    body.append("body[storage_code]", storage_code);
    body.append("body[compliance_id]", compliance_id);
    body.append("body[note]", note);
    body.append("body[expiry_date]", expiry_date);
    body.append("body[expiry_notice_date]", expiry_notice_date);
    body.append("body[attachment]", attachment[0]);
    onSave(body);
  };
  isValid = () => {
    const {
      certificate_type_id,
      reg_date,
      reg_number,
      storage_code,
      compliance_id,
      note,
      expiry_date,
      expiry_notice_date,
      attachment
    } = this.state;
    return certificate_type_id !== "" &&
        reg_date !== ""  &&
        reg_number !== ""  &&
        storage_code !== ""  &&
        compliance_id !== ""  &&
        note !== ""  &&
        expiry_date !== ""  &&
        expiry_notice_date !== ""  &&
        attachment !== null;
  };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };
    handleChangeFile = (files) => {
        this.setState({
          attachment: files
        });
    };
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            certificate_type_id: "",
            reg_date: "",
            reg_number: "",
            storage_code: "",
            compliance_id: "",
            note: "",
            expiry_date: "",
            expiry_notice_date: "",
            attachment: null
        };
    }

    render() {
        const {onSave, onClose, open, selectedItem} = this.props;
        const {
            id,
            certificate_type_id,
            reg_date,
            reg_number,
            storage_code,
            compliance_id,
            note,
            expiry_date,
            expiry_notice_date,
        } = this.state;
        const { compliances, certificateTypes } = this.props;
        return (
            <Modal className="modal-box" isOpen={open}>
                <ModalHeader className="modal-box-header bg-primary text-white">
                    {id === "" ? "Insert Certificate" :
                        "Edit Certificate"}
                    <IconButton className="text-white"
                                onClick={() => onClose()}>
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
                                            value={certificate_type_id}
                                            onChange={this.handleChange("certificate_type_id")}
                                            displayEmpty
                                            input={<BootstrapInput/>}
                                        >
                                            <MenuItem value={""} disabled>Select Certificate Type</MenuItem>
                                          {certificateTypes.map(c =>
                                            <MenuItem value={c.id}>{c.name}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>


                            <div className="row mt-2">

                                <div className="col-lg-6 col-sm-6 col-12">
                                    <input
                                        placeholder="Registration Number"
                                        type="number"
                                        value={reg_number}
                                        className='form-control form-control-lg'
                                        onChange={this.handleChange("reg_number")}
                                    />
                                </div>

                                <div className="col-lg-6 col-sm-6 col-12">
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
                            <div className="row mt-4">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <input
                                        placeholder="Storage Code"
                                        type="number"
                                        value={storage_code}
                                        className='form-control form-control-lg'
                                        onChange={this.handleChange("storage_code")}
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12 col-sm-12 col-12">
                                    <FormControl className="w-100 mb-2">
                                        <Select
                                            value={compliance_id}
                                            onChange={this.handleChange("compliance_id")}
                                            displayEmpty
                                            input={<BootstrapInput/>}
                                        >
                                          <MenuItem value={""} disabled>Select Compliance</MenuItem>
                                          {compliances.map(c =>
                                              <MenuItem value={c.id}>{c.name}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12 col-sm-12 col-12">
                                  <textarea
                                      className="form-control form-control-lg" rows="6"
                                      style={{
                                          width: "100%",
                                          height: 70,
                                          marginTop: 5,
                                          paddingHorizontal: 10,
                                          paddingVertical: 5
                                      }}
                                      value={note}
                                      placeholder="Note"
                                      onChange={this.handleChange("note")}
                                  />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder={"dd/mm/yyyy"}
                                        value={expiry_date}
                                        onChange={this.handleChange("expiry_date")}
                                    >
                                        {(inputProps) => <input
                                            {...inputProps}
                                            className="form-control form-control-lg"
                                        />}
                                    </InputMask>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder={"dd/mm/yyyy"}
                                        value={expiry_notice_date}
                                        onChange={this.handleChange("expiry_notice_date")}
                                    >
                                        {(inputProps) => <input
                                            {...inputProps}
                                            className="form-control form-control-lg"
                                        />}
                                    </InputMask>
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
                    <Button disabled={!this.isValid()} variant="contained" color="primary" onClick={() => {
                        this.handleSubmit()
                    }}>Save</Button>
                </div>
            </Modal>
        );
    }
}
const mapStateToProps = ({ certificateType, compliance }) => {
  const { certificateTypes } = certificateType;
  const { compliances } = compliance;
  return {
    certificateTypes,
    compliances
  }
};
export default connect(mapStateToProps)(AddCertificate);
