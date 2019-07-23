import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class AddBuilding extends React.Component {
  constructor(props) {
    super(props);
    console.log({ addBuilding: props });
    const { id, thumb, name, email, phone, designation, selected, starred, frequently } = props.building;
    this.state = {
      id,
      name,
      email,
      phone,
      designation,
      selected,
      starred,
      frequently
    };
  }

  render() {
    const { onSaveBuilding, onBuildingClose, onDeleteBuilding, open, building } = this.props;
    const { id, name, email, phone, designation, selected, starred, frequently } = this.state;

    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {building.name === "" ? "Add Building" :
            "Save Building"}
          <IconButton className="text-white"
                      onClick={onBuildingClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <form className="row" noValidate autoComplete="off">
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Type of Building</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Name of Building</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">N.part of Building</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Address</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">CAP</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Common</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Province</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Fiscal Code</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={name === ""} variant="contained" color="primary" onClick={() => {
            onBuildingClose();

          }}>Save Building</Button>
        </div>
      </Modal>
    );
  }
}

export default AddBuilding;
