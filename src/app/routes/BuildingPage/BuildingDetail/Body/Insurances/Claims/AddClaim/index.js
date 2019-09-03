import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { DropzoneArea } from "material-ui-dropzone";
import InputMask from "react-input-mask";

class AddClaim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      description: "",
      claim_date: "",
      attachment: null
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeFile = (files) => {
    console.log(files);
    this.setState({
      attachment: files
    });
  };
  render() {
    const { onClose, open } = this.props;
    const {
      id,
      description,
      claim_date,
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "New Claim" :
            "Edit Claim"}
          <IconButton className="text-white"
                      onClick={() => onClose()}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">CONTRACTOR</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                    value={"Contractor 1"}
                    className='form-control form-control-lg'
                    readOnly
                />
              </div>
            </div>


            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">INSURANCE AGENCY</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                    value={"Agency 1"}
                    className='form-control form-control-lg'
                    readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">INSURANCE COMPANY</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                    value={"COMPANY 1"}
                    className='form-control form-control-lg'
                    readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">POLICY BRANCH</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                    value={"BRANCH 1"}
                    className='form-control form-control-lg'
                    readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">POLICY NUMBER</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                    value={"POLICY NUMBER 1"}
                    className='form-control form-control-lg'
                    readOnly
                />
              </div>
            </div>


            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">STIPULATION DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                    value={"STIPULATION DATE"}
                    className='form-control form-control-lg'
                    readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">EXPIRATION DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                    value={"EXPIRATION DATE"}
                    className='form-control form-control-lg'
                    readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">CLAIM DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <InputMask
                    mask="99/99/2999"
                    maskChar={null}
                    placeholder={"dd/mm/yyyy"}
                    value={claim_date}
                    onChange={this.handleChange("claim_date")}
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
                <label className="align-center font-size-18">DESCRIPTION</label>
              </div>
              <div className="col-md-8 p-0">
                <textarea
                    className="form-control form-control-lg" rows="6"
                    style={{width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5}}
                    placeholder="Description"
                    value={description}
                    onChange={this.handleChange("description")}
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
          }}>Save CLAIM</Button>
        </div>
      </Modal>
    );
  }
}

export default AddClaim;
