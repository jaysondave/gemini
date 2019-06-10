import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import IntlMessages from "util/IntlMessages";

class AddBody extends React.Component {
  constructor(props) {
    super(props);
    console.log({ addBuilding: props });
    const { id, type, name, address, house_num, cap, city, province, code_fisc, body_picture } = props.body;
    this.state = {
      id,
      type,
      name,
      address,
      house_num,
      cap,
      city,
      province,
      code_fisc,
      body_picture
    };
  }

  render() {
    const { onSaveBody, onBodyClose, onDeleteBody, open, body } = this.props;
    const { id, type, name, address, house_num, cap, city, province, code_fisc, body_picture } = this.state;

    return (
      <Modal className="modal-box" toggle={onBodyClose} isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {body.name === "" ? "Add Body" :
            "Save Body"}
          <IconButton className="text-white"
                      onClick={onBodyClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <TextField
                required
                id="required"
                label={"Type of Body"}
                onChange={(event) => this.setState({ name: event.target.value })}
                defaultValue={type}
                margin="none"/>
              <TextField
                id="required"
                label={"Name of Body"}
                onChange={(event) => this.setState({ email: event.target.value })}
                value={name}
                margin="normal"/>
              <TextField
                id="required"
                label={"N.part of house"}
                onChange={(event) => this.setState({ phone: event.target.value })}
                value={house_num}
                margin="normal"
              />
              <TextField
                id="required"
                label={"Address"}
                onChange={(event) => this.setState({ designation: event.target.value })}
                value={address}
                multiline
                rowsMax="4"
                margin="normal"/>
              <TextField
                id="required"
                label={"CAP"}
                onChange={(event) => this.setState({ designation: event.target.value })}
                value={cap}
                multiline
                rowsMax="4"
                margin="normal"/>
              <TextField
                id="required"
                label={"City"}
                onChange={(event) => this.setState({ designation: event.target.value })}
                value={city}
                multiline
                rowsMax="4"
                margin="normal"/>
              <TextField
                id="required"
                label={"Province"}
                onChange={(event) => this.setState({ designation: event.target.value })}
                value={province}
                multiline
                rowsMax="4"
                margin="normal"/>
              <TextField
                id="required"
                label={"Fiscal Code"}
                onChange={(event) => this.setState({ designation: event.target.value })}
                value={code_fisc}
                multiline
                rowsMax="4"
                margin="normal"/>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={name === ""} variant="contained" color="primary" onClick={() => {
            onBodyClose();
            onSaveBody(
              {
              });
            this.setState({

            });

          }}>Save Body</Button>
        </div>
      </Modal>
    );
  }
}

export default AddBody;