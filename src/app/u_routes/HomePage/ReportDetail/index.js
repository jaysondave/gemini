import React, { Component } from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
class ReportDetail extends Component {
  render() {
    const { onClose, open } = this.props;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {"Report Detail"}
          <IconButton className="text-white"
                      onClick={() => onClose()}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right">
                <label className="font-size-18">N. REPORT</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  className='form-control form-control-lg'
                  readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right">
                <label className="font-size-18">REPORT DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  className='form-control form-control-lg'
                  readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right">
                <label className="font-size-18">REPORT TYPE</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  className='form-control form-control-lg'
                  readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right">
                <label className="font-size-18">ASSIGN DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  className='form-control form-control-lg'
                  readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right">
                <label className="font-size-18">WORKER NAME</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  className='form-control form-control-lg'
                  readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right">
                <label className="font-size-18">EXPECTED DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  className='form-control form-control-lg'
                  readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right">
                <label className="font-size-18">EXPECTED CLOSURE DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  className='form-control form-control-lg'
                  readOnly
                />
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right">
                <label className="font-size-18">END DATE</label>
              </div>
              <div className="col-md-8 p-0">
                <input
                  className='form-control form-control-lg'
                  readOnly
                />
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
                  readOnly
                />
              </div>
            </div>


          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button variant="contained" color="primary" onClick={() => {
            onClose();

          }}>Close</Button>
        </div>
      </Modal>
    )
  }
}
export default ReportDetail;
