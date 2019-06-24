import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import {DropzoneArea} from 'material-ui-dropzone'
import IntlMessages from "util/IntlMessages";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputDate } from "../../../../../../components/CustomInput/InputDate";

class AddMaintenance extends React.Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeFile = (files) => {
    console.log(files);
    this.setState({
      uploadFile: files
    });
  };

  constructor(props) {
    super(props);
    console.log({ AddMaintenance: props });
    const { id, type, name, address, house_num, cap, city, province, code_fisc, body_picture } = props.maintenance;
    this.state = {
      id,
      buildingName: '',
      floorName: '',
      bodyName: '',
      roomName: '',
      tipology: '',
      maintainer: '',
      priority: '',
      notes: '',
      files: null,
      reminder: '',
      dueDate: ''
    };
  }
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
    const { onSaveBody, onMaintenanceClose, open, maintenance } = this.props;
    const { id, buildingName, floorName, bodyName, roomName, tipology, maintainer, priority, notes, reminder, dueDate } = this.state;

    return (
      <Modal className="modal-box" toggle={onMaintenanceClose} isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {maintenance.name === "" ? "Edit Maintenance" :
            "Set Maintenance"}
          <IconButton className="text-white"
                      onClick={onMaintenanceClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <TextField
                required
                id="required"
                label={"Building Name"}
                onChange={(event) => this.setState({ buildingName: event.target.value })}
                defaultValue={buildingName}
                margin="none"/>
              <TextField
                id="required"
                label={"Body Name"}
                onChange={(event) => this.setState({ email: event.target.value })}
                value={bodyName}
                margin="normal"/>
              <TextField
                id="required"
                label={"Floor Name"}
                onChange={(event) => this.setState({ floorName: event.target.value })}
                value={floorName}
                margin="normal"
              />
              <FormControl className="w-100 mb-2">
                <InputLabel htmlFor="age-simple">Typology</InputLabel>
                <Select
                  value={tipology}
                  onChange={this.handleChange("tipology")}
                  input={<Input id="ageSimple1"/>}
                >
                  <MenuItem value={"tipology1"}>Typology 1</MenuItem>
                  <MenuItem value={"tipology2"}>Typology 2</MenuItem>
                  <MenuItem value={"tipology3"}>Typology 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="w-100 mb-2">
                <InputLabel htmlFor="age-simple">Maintainer</InputLabel>
                <Select
                  value={maintainer}
                  onChange={this.handleChange("maintainer")}
                  input={<Input id="ageSimple1"/>}
                >
                  <MenuItem value={"maintainer1"}>Maintainer 1</MenuItem>
                  <MenuItem value={"maintainer2"}>Maintainer 2</MenuItem>
                  <MenuItem value={"maintainer3"}>Maintainer 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="w-100 mb-2">
                <InputLabel htmlFor="age-simple">Priority</InputLabel>
                <Select
                  value={priority}
                  onChange={this.handleChange("priority")}
                  input={<Input id="ageSimple1"/>}
                >
                  <MenuItem value={"priority1"}>Priority 1</MenuItem>
                  <MenuItem value={"priority2"}>Priority 2</MenuItem>
                  <MenuItem value={"priority3"}>Priority 3</MenuItem>
                </Select>
              </FormControl>
              <div className="row w-100 mb-2 mt-2">
                <div className="col-md-2 p-relative">
                  <label className="align-center font-size-18">Due Date</label>
                </div>
                <div className="col-md-10 p-0">
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
                      selected={dueDate ? new Date(dueDate) : null}
                      onChange={this.updateDate('dueDate')}
                    />
                  </div>
                </div>

              </div>
              <FormControl className="w-100 mb-2">
                <InputLabel htmlFor="age-simple">Reminder</InputLabel>
                <Select
                  value={reminder}
                  onChange={this.handleChange("reminder")}
                  input={<Input/>}
                >
                  <MenuItem value={"notRemember"}>NOT REMEMBER</MenuItem>
                  <MenuItem value={"oneTime"}>ONE TIME</MenuItem>
                  <MenuItem value={"everyDay"}>EVERY DAY OF DELAY</MenuItem>
                  <MenuItem value={"threeDay"}>AFTER THREE DAYS OF DELAY</MenuItem>
                </Select>
              </FormControl>
              <textarea style={{
                width: "100%",
                height: 70,
                marginTop: 10,
                marginBottom: 10,
                paddingHorizontal: 10,
                paddingVertical: 5
              }}
                        value={notes}
                        placeholder="Note"
                        onChange={this.handleChange("notes")}
              />
              <DropzoneArea
                filesLimit={1}
                dropzoneText={'Drag and drop a file here or click'}
                onChange={this.handleChangeFile}
              />
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={false} variant="contained" color="primary" onClick={() => {
            onMaintenanceClose();
            onSaveBody(
              {
              });
            this.setState({

            });

          }}>Save Maintenance</Button>
        </div>
      </Modal>
    );
  }
}

export default AddMaintenance;
