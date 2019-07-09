import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import IntlMessages from "util/IntlMessages";

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
              <TextField
                required
                id="required"
                label={"Type of Building"}
                onChange={(event) => this.setState({ name: event.target.value })}
                defaultValue={name}
                margin="none"/>
              <TextField
                id="required"
                label={"Name of Building"}
                onChange={(event) => this.setState({ email: event.target.value })}
                value={email}
                margin="normal"/>
              <TextField
                id="required"
                label={"N.part of Building"}
                onChange={(event) => this.setState({ phone: event.target.value })}
                value={phone}
                margin="normal"
              />
              <TextField
                id="required"
                label={"Address"}
                onChange={(event) => this.setState({ designation: event.target.value })}
                value={designation}
                multiline
                rowsMax="4"
                margin="normal"/>
              <TextField
                id="required"
                label={"CAP"}
                onChange={(event) => this.setState({ designation: event.target.value })}
                value={designation}
                multiline
                rowsMax="4"
                margin="normal"/>
              <TextField
                id="required"
                label={"Common"}
                onChange={(event) => this.setState({ designation: event.target.value })}
                value={designation}
                multiline
                rowsMax="4"
                margin="normal"/>
              <TextField
                id="required"
                label={"Province"}
                onChange={(event) => this.setState({ designation: event.target.value })}
                value={designation}
                multiline
                rowsMax="4"
                margin="normal"/>
              <TextField
                id="required"
                label={"Fiscal Code"}
                onChange={(event) => this.setState({ designation: event.target.value })}
                value={designation}
                multiline
                rowsMax="4"
                margin="normal"/>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={name === ""} variant="contained" color="primary" onClick={() => {
            onBuildingClose();
            onSaveBuilding(
              {
                "id": id,
                "name": name,
                "email": email,
                "phone": phone,
                "designation": designation,
                "selected": selected,
                "starred": starred,
                "frequently": frequently
              });
            this.setState({
              "id": id + 1,
              "name": "",
              "email": "",
              "phone": "",
              "designation": ""
            });

          }}>Save Building</Button>
        </div>
      </Modal>
    );
  }
}

export default AddBuilding;
