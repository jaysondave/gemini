import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";

import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";


const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia, Plurinational State of" },
  { label: "Bonaire, Sint Eustatius and Saba" },
  { label: "Bosnia and Herzegovina" },
  { label: "Botswana" },
  { label: "Bouvet Island" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
];

const users = [
  { label: "guix7777@outlook.com" },
  { label: "hongdeshuai@gmail.com" },
  { label: "fatpig@gmail.com" }
];


class AddEvent extends Component {
  constructor(props) {
    super(props);
    const { startTime, endTime, selectedEvent } = props;
    this.state = {
      eventTitle: '',
      startDate: new Date(),
      endDate: new Date(),
      eventType: selectedEvent?selectedEvent.eventType:"",
      address: "",
      suggestions: [],
      users: [],
      user: '',
      unit: "",
      notification: null,
      busyType: "busy",
      notes: ""
    };
  }

  handleRequestClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleChange = name => event => {
    alert(event.target.value);
    this.setState({ [name]: event.target.value });
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
  handleUsersFetchRequested = ({ value }) => {
    this.setState({
      users: this.getUsers(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  handleUsersClearRequested = () => {
    this.setState({
      users: []
    });
  };
  handleChangeAddress = (event, { newValue }) => {
    this.setState({
      address: newValue
    });
  };
  handleChangeUser = (event, { newValue }) => {
    this.setState({
      user: newValue
    });
  };
  handleAddNotification = () => {
    const notification = {
      type: "email",
      time: 10,
      unit: "min"
    };
    this.setState({ notification: notification });
  };
  handleRemoveNotification = () => {
    this.setState({ notification: null });
  };

  render() {
    const { startTime, endTime, onClose, selectedEvent, open, classes } = this.props;
    const { eventTitle, startDate, endDate, eventType, notification, busyType, notes } = this.state;
    return (
      <Modal className="modal-box w-25" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {selectedEvent ? "Event Detail" : "Add Event"}
          <IconButton className="text-white"
                      onClick={onClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <div className="row mt-2">
                <div className="col-lg-12 col-sm-12 col-12 d-flex">
                  <div className="p-relative">
                    <div className="align-center mt-2">
                    </div>
                  </div>
                  <div className="row f-1 ml-3">
                    <TextField
                      label={"Title"}
                      value={eventTitle}
                      onChange={this.handleChange("eventTitle")}
                      fullWidth
                      margin="none"/>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-lg-12 col-sm-12 col-12 d-flex">
                  <div className="p-relative">
                    <div className="align-center mt-2">
                      <i className="zmdi zmdi-time zmdi-hc-fw font-size-22"/>
                    </div>
                  </div>
                  <div className="row f-1 ml-2">
                    <div className="col-md-6 col-12">
                      <TextField
                        label="Start Time"
                        type="datetime-local"
                        fullWidth
                        value={startTime}
                        onChange={this.handleChange("startTime")}
                        margin="none"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <TextField
                        label={"End Date"}
                        type="datetime-local"
                        onChange={this.handleChange("endTime")}
                        fullWidth
                        margin="none"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-lg-12 col-sm-12 col-12 d-flex">
                  <div className="p-relative">
                    <div className="align-center mt-2">
                      <i className="zmdi zmdi-sort zmdi-hc-fw font-size-22"/>
                    </div>
                  </div>
                  <div className="f-1 ml-3">
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Type of Event</InputLabel>
                      <Select
                        value={eventType}
                        onChange={this.handleChange("eventType")}
                        input={<Input id="ageSimple1"/>}
                      >
                        <MenuItem value={"Document"}>Document</MenuItem>
                        <MenuItem value={"Certificate"}>Certificate</MenuItem>
                        <MenuItem value={"Rent"}>Rent</MenuItem>
                        <MenuItem value={"Maintenance"}>Maintenance</MenuItem>
                        <MenuItem value={"workInProgress"}>Work In Progress</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12 d-flex">
                  <div className="p-relative">
                    <div className="align-center mt-md-2">
                      <i className="zmdi zmdi-pin zmdi-hc-fw font-size-22"/>
                    </div>
                  </div>
                  <div className="f-1 ml-3">
                    <Autosuggest
                      theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion
                      }}
                      renderInputComponent={this.renderInput}
                      suggestions={this.state.suggestions}
                      onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                      onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                      renderSuggestionsContainer={this.renderSuggestionsContainer}
                      getSuggestionValue={this.getSuggestionValue}
                      renderSuggestion={this.renderSuggestion}
                      inputProps={{
                        classes,
                        placeholder: "Search a location",
                        value: this.state.address,
                        onChange: this.handleChangeAddress
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12 col-sm-12 col-12 d-flex">
                  <div className="">
                    <div className="mt-2">
                      <i className="zmdi zmdi-notifications zmdi-hc-fw font-size-22"/>
                    </div>
                  </div>
                  <div className="f-1">
                    {notification ?
                      <div className="d-flex w-100">
                        <div className="f-3 ml-3 mr-3">
                          <TextField
                            value={notification.type}
                            inputProps={{
                              readOnly: true,
                              disabled: true
                            }}
                            readOnly
                            fullWidth
                            margin="none"/>
                        </div>
                        <div className="f-2 mr-3">
                          <TextField
                            type={"number"}
                            min={"0"}
                            InputProps={{ inputProps: { min: 0 } }}
                            defaultValue={10}
                            fullWidth
                            margin="none"/>
                        </div>
                        <div className="f-2 mr-3">
                          <FormControl className="w-100 mb-2">
                            <Select
                              value={notification.unit}
                              input={<Input id="ageSimple1"/>}
                            >
                              <MenuItem value={"min"}>Minutes</MenuItem>
                              <MenuItem value={"hour"}>Hours</MenuItem>
                              <MenuItem value={"day"}>Days</MenuItem>
                              <MenuItem value={"week"}>Weeks</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="f-1 mr-3">
                          <Button className="jr-btn text-light-grey" onClick={() => this.handleRemoveNotification()}>
                            <i className="zmdi zmdi-close zmdi-hc-lg"/>
                          </Button>
                        </div>
                      </div>
                      :
                      <Button className="jr-btn" color="default" onClick={() => this.handleAddNotification()}>Add
                        Notification</Button>}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12 d-flex">
                  <div className="">
                    <div className="mt-md-3">
                      <i className="zmdi zmdi-calendar zmdi-hc-fw font-size-22"/>
                    </div>
                  </div>
                  <div className="f-1 ml-3">
                    <Autosuggest
                      theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion
                      }}
                      renderInputComponent={this.renderInput}
                      suggestions={this.state.users}
                      onSuggestionsFetchRequested={this.handleUsersFetchRequested}
                      onSuggestionsClearRequested={this.handleUsersClearRequested}
                      renderSuggestionsContainer={this.renderSuggestionsContainer}
                      getSuggestionValue={this.getUserValue}
                      renderSuggestion={this.renderSuggestion}
                      inputProps={{
                        classes,
                        placeholder: "Search a user",
                        value: this.state.user,
                        onChange: this.handleChangeUser
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-12 col-sm-12 col-12 d-flex">
                  <div className="">
                    <div className="mt-2">
                      <i className="zmdi zmdi-calendar-note zmdi-hc-fw font-size-22"/>
                    </div>
                  </div>
                  <div className="f-1 ml-3">
                    <FormControl className="w-100 mb-2">
                      <Select
                        value={busyType}
                        onChange={this.handleChange("busyType")}
                        input={<Input id="ageSimple1"/>}
                      >
                        <MenuItem value={"busy"}>Busy</MenuItem>
                        <MenuItem value={"free"}>Free</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-lg-12 col-sm-12 col-12 d-flex">
                  <div className="">
                    <div className="mt-md-3">
                      <i className="zmdi zmdi-comment-edit zmdi-hc-fw font-size-22"/>
                    </div>
                  </div>
                  <div className="f-1 ml-3">
                    <textarea
                      className="form-control form-control-lg" rows="6"
                      style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                      value={notes}
                      placeholder="Description"
                      onChange={this.handleChange("notes")}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button variant="contained" color="primary" onClick={() => {
            onClose();
          }}>Save Event</Button>
        </div>
      </Modal>
    );
  }

  renderInput = (inputProps) => {
    const { classes, ref, ...other } = inputProps;

    return (
      <TextField
        fullWidth
        inputref={ref}
        InputProps={{
          classes: {
            input: classes.input
          },
          ...other
        }}
      />
    );
  };

  renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </strong>
            );
          })}
        </div>
      </MenuItem>
    );
  };

  renderSuggestionsContainer = (options) => {
    const { containerProps, children } = options;

    return (
      <div className="position-relative z-index-20">
        <Paper {...containerProps} square>
          {children}
        </Paper>
      </div>
    );
  };

  getSuggestionValue = (suggestion) => {
    return suggestion.label;
  };
  getUserValue = (suggestion) => {
    return suggestion.label;
  };

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
      ? []
      : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
  };
  getUsers = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
      ? []
      : users.filter(user => {
        const keep =
          count < 5 && user.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
  }

}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: "relative",
    width: "100%",
    marginTop: 5
  },
  suggestionsContainerOpen: {
    position: "absolute",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
    zIndex: 10
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  }
});



AddEvent.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddEvent);
