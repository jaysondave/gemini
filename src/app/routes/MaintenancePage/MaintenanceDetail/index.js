import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { Lock, LockOpen, ArrowBack, Edit } from "@material-ui/icons";
import Widget from "components/Widget/index";

import { connect } from "react-redux";
import { DropzoneArea } from "material-ui-dropzone";
import IconButton from "../../BuildingPage/BuildingDetail/Bodies";

class MaintenanceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      building: "building1",
      body: "body1",
      floor: "floor1",
      room: "room1",
      tipology: "tipology1",
      maintainer: "maintainer1",
      priority: "high",
      notes: "Welcome see to this maintenance!",
      files: null,
      editable: false
    };
  }

  componentWillMount() {
    console.log("MaintenanceDetail page will mount");
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleChangeFile = (files) => {
    console.log(files);
    this.setState({
      files: files
    });
  };
  onEditable = () => {
    const { editable } = this.state;
    this.setState({ editable: !editable });
  };
  onSelectMaintainer = () => {
    this.props.history.push("maintainer");
  };
  onClickCancel = () => {
    const { editable } = this.state;
    this.setState({ editable: !editable });
  };
  onClickSave = () => {
    const { editable } = this.state;
    this.setState({ editable: !editable });
  };

  render() {
    const { editable, building, body, floor, room, tipology, maintainer, priority, notes, files } = this.state;
    return (
      <div className="app-wrapper">
        <div className="row mb-md-3">
          <Widget styleName="col-lg-6 content-margin-auto">
            <div className="d-flex flex-row justify-content-between mb-2">
              <span className="pointer" onClick={() => this.props.history.goBack()}>
                <ArrowBack/>
              </span>
            </div>
            <div className="d-flex flex-row justify-content-between mb-2">

              <h4 className="mr-2">Maintenance Detail</h4>
              <span className="ml-2 pointer" onClick={() => this.onEditable()}>
                {editable ? <LockOpen/> : <Lock/>}
              </span>
            </div>
            <form className="row" noValidate autoComplete="off">
              <div className="col-md-6 col-12">
                <FormControl className="w-100 mb-2" disabled={!editable}>
                  <InputLabel htmlFor="age-simple">Building</InputLabel>
                  <Select
                    value={building}
                    onChange={this.handleChange("building")}
                    input={<Input/>}
                  >
                    <MenuItem value={"building1"}>Building 1</MenuItem>
                    <MenuItem value={"building2"}>Building 2</MenuItem>
                    <MenuItem value={"building3"}>Building 3</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="col-md-6 col-12">
                <FormControl className="w-100 mb-2" disabled={!editable}>
                  <InputLabel htmlFor="age-simple">Body</InputLabel>
                  <Select
                    value={body}
                    onChange={this.handleChange("body")}
                    input={<Input/>}
                  >
                    <MenuItem value={"body1"}>Body 1</MenuItem>
                    <MenuItem value={"body2"}>Body 2</MenuItem>
                    <MenuItem value={"body3"}>Body 3</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-6 col-12">
                <FormControl className="w-100 mb-2" disabled={!editable}>
                  <InputLabel htmlFor="age-simple">Floor</InputLabel>
                  <Select
                    value={floor}
                    onChange={this.handleChange("floor")}
                    input={<Input/>}
                  >
                    <MenuItem value={"floor1"}>Floor 1</MenuItem>
                    <MenuItem value={"floor2"}>Floor 2</MenuItem>
                    <MenuItem value={"floor3"}>Floor 3</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-6 col-12">
                <FormControl className="w-100 mb-2" disabled={!editable}>
                  <InputLabel htmlFor="age-simple">Room</InputLabel>
                  <Select
                    value={room}
                    onChange={this.handleChange("room")}
                    input={<Input/>}
                  >
                    <MenuItem value={"room1"}>Room 1</MenuItem>
                    <MenuItem value={"room2"}>Room 2</MenuItem>
                    <MenuItem value={"room3"}>Room 3</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-6 col-12">
                <FormControl className="w-100 mb-2" disabled={!editable}>
                  <InputLabel htmlFor="age-simple">Tipology</InputLabel>
                  <Select
                    value={tipology}
                    onChange={this.handleChange("tipology")}
                    input={<Input/>}
                  >
                    <MenuItem value={"tipology1"}>Tipology 1</MenuItem>
                    <MenuItem value={"tipology2"}>Tipology 2</MenuItem>
                    <MenuItem value={"tipology3"}>Tipology 3</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="col-md-6 col-12">
                <FormControl className="w-100 mb-2" disabled={!editable}>
                  <InputLabel htmlFor="age-simple">Priority</InputLabel>
                  <Select
                    value={priority}
                    onChange={this.handleChange("priority")}
                    input={<Input/>}
                  >
                    <MenuItem value={"high"}>High</MenuItem>
                    <MenuItem value={"middle"}>Middle</MenuItem>
                    <MenuItem value={"low"}>Low</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="webSite">Maintainer</label>
                  <div style={{ display: "flex" }}>
                    <input
                      disabled={!editable}
                      readOnly
                      className="form-control form-control-lg"
                      style={{ flex: 1 }}
                      id="maintainer"
                      type="text"
                      value={maintainer}
                      placeholder="Select Maintainer"/>
                    <div className="ml-2 pointer" style={{ display: "flex", flexDirection: "column" }}
                         onClick={() => this.onSelectMaintainer()}>
                      <div style={{ flex: 1 }}></div>
                        <Edit/>
                      <div style={{ flex: 1 }}></div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-6 col-12">

              </div>
              <div className="col-md-12 col-12">
                <textarea
                  className="form-control form-control-lg" rows="6"
                  style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                  value={notes}
                  placeholder="Notes"
                  disabled={!editable}
                  onChange={this.handleChange("notes")}
                />
              </div>
              <div className="col-md-12 col-12" style={{ marginTop: 20 }}>
                <DropzoneArea
                  filesLimit={1}
                  showFileNamesInPreview={true}
                  dropzoneText={"Drag and drop a file here or click"}
                  onChange={this.handleChangeFile}
                />
              </div>
              <div className="col-md-12 col-12 " style={{ marginTop: 20 }}>
                <Button variant="contained" color="primary" className="jr-btn text-white"
                        disabled={!editable} onClick={() => this.onClickSave()}>SAVE</Button>
                <Button variant="contained" className="jr-btn bg-white" disabled={!editable}
                        onClick={() => this.onClickCancel()}>CANCEL</Button>
              </div>
            </form>
          </Widget>
        </div>
      </div>
    );
  }
}

export default connect()(MaintenanceDetail);
