import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { Lock, LockOpen, ArrowBack, Edit } from "@material-ui/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Widget from "components/Widget/index";

import { connect } from "react-redux";
import { DropzoneArea } from "material-ui-dropzone";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { InputDate } from "../../../../components/CustomInput/InputDate";


class MaintenanceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      building: "building1",
      body: "body1",
      floor: "floor1",
      room: "room1",
      category: "category1",
      maintainer: "Maintainer1",
      addtionalMaintainer: "Maintainer2",
      group: '',
      component: '',
      operation: '',
      workerTitle: '',
      priority: "high",
      notes: "",
      dueDate: '',
      reminder: '',
      files: null,
      chipData: [
        {key: 0, name: 'Domnic Harris', image: 'https://gemini-start.s3-eu-west-1.amazonaws.com/workers/profile_girl.jpg'},
        {key: 1, name: 'Garry Sobars', image: 'https://gemini-start.s3-eu-west-1.amazonaws.com/workers/profile_girl.jpg'},
        {key: 2, name: 'Stella Johnson', image: 'https://gemini-start.s3-eu-west-1.amazonaws.com/workers/profile_girl.jpg'},
        {key: 3, name: 'Alex Dolgove', image: 'https://gemini-start.s3-eu-west-1.amazonaws.com/workers/profile_girl.jpg'},
        {key: 4, name: 'John Smith', image: 'https://gemini-start.s3-eu-west-1.amazonaws.com/workers/profile_girl.jpg'},
      ],
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
  handleRequestDelete = data => () => {
    const chipData = [...this.state.chipData];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    this.setState({chipData});
  };
  render() {
    const {
      editable,
      building,
      body,
      floor,
      room,
      category,
      maintainer,
      dueDate,
      reminder,
      addtionalMaintainer,
      priority,
      notes,
      workerTitle,
      group,
      component,
      operation,
      chipData
    } = this.state;
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

              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">BUILDING</label>
                </div>
                <div className="col-md-8 p-0">
                  <FormControl className="w-100 mb-2" disabled={!editable}>
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
              </div>


              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">BODY</label>
                </div>
                <div className="col-md-8 p-0">
                  <FormControl className="w-100 mb-2" disabled={!editable}>
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
              </div>



              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">FLOOR</label>
                </div>
                <div className="col-md-8 p-0">
                  <FormControl className="w-100 mb-2" disabled={!editable}>
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
              </div>


              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">ROOM</label>
                </div>
                <div className="col-md-8 p-0">
                  <FormControl className="w-100 mb-2" disabled={!editable}>
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
              </div>

              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">CATEGORY</label>
                </div>
                <div className="col-md-8 p-0">
                  <FormControl className="w-100 mb-2" disabled={!editable}>
                    <Select
                      value={category}
                      onChange={this.handleChange("category")}
                      input={<Input/>}
                    >
                      <MenuItem value={"category1"}>Category 1</MenuItem>
                      <MenuItem value={"category2"}>Category 2</MenuItem>
                      <MenuItem value={"category3"}>Category 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">PRIORITY</label>
                </div>
                <div className="col-md-8 p-0">
                  <FormControl className="w-100 mb-2" disabled={!editable}>
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
              </div>

              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">GROUP</label>
                </div>
                <div className="col-md-8 p-0">
                  <FormControl className="w-100 mb-2" disabled={!editable}>
                    <Select
                      value={group}
                      onChange={this.handleChange("group")}
                      input={<Input/>}
                    >
                      <MenuItem value={"group1"}>Group 1</MenuItem>
                      <MenuItem value={"group2"}>Group 2</MenuItem>
                      <MenuItem value={"group3"}>Group 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">COMPONENT</label>
                </div>
                <div className="col-md-8 p-0">
                  <FormControl className="w-100 mb-2" disabled={!editable}>
                    <Select
                      value={component}
                      onChange={this.handleChange("component")}
                      input={<Input/>}
                    >
                      <MenuItem value={"component1"}>Component 1</MenuItem>
                      <MenuItem value={"component2"}>Component 2</MenuItem>
                      <MenuItem value={"component3"}>Component 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">OPERATION</label>
                </div>
                <div className="col-md-8 p-0">
                  <FormControl className="w-100 mb-2" disabled={!editable}>
                    <Select
                      value={operation}
                      onChange={this.handleChange("operation")}
                      input={<Input/>}
                    >
                      <MenuItem value={"operation1"}>Operation 1</MenuItem>
                      <MenuItem value={"operation2"}>Operation 2</MenuItem>
                      <MenuItem value={"operation3"}>Operation 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">DUE DATE</label>
                </div>
                <div className="col-md-8 p-0">
                  <div>
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
              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">REMINDER</label>
                </div>
                <div className="col-md-4 p-0">
                  <FormControl className="w-100 mb-2" disabled={!editable}>
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
                </div>
              </div>

              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="font-size-18">ASSIGN WORKER</label>
                </div>
                <div className="col-md-8 p-0">
                  <div style={{ display: "flex" }}>
                    <div className="manage-margin d-flex flex-wrap">
                      {chipData.map(data => {
                        return (
                          <Chip
                            avatar={<Avatar src={data.image}/>}
                            label={data.name}
                            key={data.key}
                            onDelete={this.handleRequestDelete(data)}
                          />
                        );
                      })}
                    </div>
                    <div className="ml-2 pointer" style={{ display: "flex", flexDirection: "column" }}
                         onClick={() => this.onSelectMaintainer()}>
                      <div style={{ flex: 1 }}></div>
                      <Edit/>
                      <div style={{ flex: 1 }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right p-relative">
                  <label className="align-center font-size-18">WORKER ORDER TITLE</label>
                </div>
                <div className="col-md-8 p-0">
                  <input
                    disabled={!editable}
                    className="form-control form-control-lg"
                    style={{ flex: 1 }}
                    id="workerTitle"
                    type="text"
                    value={workerTitle}
                    onChange={this.handleChange("workerTitle")}
                    placeholder="Type worker order title"/>
                </div>
              </div>
              <div className="row col-md-12 col-12 p-0 mb-2">
                <div className="col-md-4 text-right">
                  <label className="font-size-18">DETAIL DESCRIPTION</label>
                </div>
                <div className="col-md-8 p-0">
                  <textarea
                    className="form-control form-control-lg" rows="6"
                    style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                    value={notes}
                    placeholder="Description"
                    disabled={!editable}
                    onChange={this.handleChange("notes")}
                  />
                </div>
              </div>
              <div className="col-md-12 col-12 mb-2">
                <DropzoneArea
                  filesLimit={1}
                  showFileNamesInPreview={true}
                  dropzoneText={"Drag and drop a file here or click"}
                  onChange={this.handleChangeFile}
                />
              </div>
              <div className="col-md-12 col-12">
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
