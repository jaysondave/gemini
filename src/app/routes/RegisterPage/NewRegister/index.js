import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import IntlMessages from "util/IntlMessages";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import InputMask from "react-input-mask";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const OTHER_CATEGORY = [
  "ELECTRICIAN",
  "BRICKLAYER",
  "PAINTER",
  "BLACKSMITH",
  "CHIMMEY SWEEP",
  "PLUMBER",
  "PURGE SEWERAGE",
  "CLEANING",
  "RODENT CONTROL"
];

class NewRegister extends React.Component {
  constructor(props) {
    super(props);
    console.log({ NewRegister: props });
    // const { id, category, name, surName, address, homeNumber, cap, city, province, codFisc, mobile, email, phone, otherCategory} = props.register;
    this.state = {
      userType: props.userType,
      id: "",
      category: "",
      name: "",
      surName: "",
      address: "",
      homeNumber: "",
      cap: "",
      city: "",
      province: "",
      codFisc: "",
      mobile: "",
      email: "",
      phone: "",
      pec: "",
      cuu: "",
      Plva: "",
      userID: "",
      password: "",
      otherCategory: [],
      building: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  beforeMaskedValueChangeMobile = name => (newState, oldState, userInput) => {
    let { value } = newState;
    let selection = newState.selection;
    let cursorPosition = selection ? selection.start : null;

    // keep minus if entered by user
    if (name === "mobile") {
      if (value.endsWith("-") && userInput !== "-" && !this.state.mobile.endsWith("-")) {
        if (cursorPosition === value.length) {
          cursorPosition--;
          selection = { start: cursorPosition, end: cursorPosition };
        }
        value = value.slice(0, -1);
      }
    } else {
      if (value.endsWith("-") && userInput !== "-" && !this.state.phone.endsWith("-")) {
        if (cursorPosition === value.length) {
          cursorPosition--;
          selection = { start: cursorPosition, end: cursorPosition };
        }
        value = value.slice(0, -1);
      }
    }


    return {
      value,
      selection
    };
  };
  renderCategory = (userType) => {
    const { category } = this.state;
    switch (userType) {
      case "maintainer":
        return (
          <div className="row col-md-12 col-12 p-0 mb-2">
            <div className="col-md-4 text-right p-relative">
              <label className="align-center font-size-18">Category</label>
            </div>
            <div className="col-md-8 p-0">
              <FormControl className="w-100 mb-2">
                <Select
                  value={category}
                  onChange={this.handleChange("category")}
                  input={<Input/>}
                >
                  <MenuItem value={"category1"}>ELECTRICIAN</MenuItem>
                  <MenuItem value={"category2"}>BRICKLAYER</MenuItem>
                  <MenuItem value={"category3"}>PAINTER</MenuItem>
                  <MenuItem value={"category4"}>BLACKSMITH</MenuItem>
                  <MenuItem value={"category5"}>CHIMNEY SWEEP</MenuItem>
                  <MenuItem value={"category6"}>PLUMBER</MenuItem>
                  <MenuItem value={"category7"}>PURGE SEWERAGE</MenuItem>
                  <MenuItem value={"category8"}>CLEANING</MenuItem>
                  <MenuItem value={"category9"}>RODENT CONTROL</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

        );
      case "professional":
        return (
          <div className="row col-md-12 col-12 p-0 mb-2">
            <div className="col-md-4 text-right p-relative">
              <label className="align-center font-size-18">Category</label>
            </div>
            <div className="col-md-8 p-0">
              <FormControl className="w-100 mb-2">
                <Select
                  value={category}
                  onChange={this.handleChange("category")}
                  input={<Input/>}
                >
                  <MenuItem value={"category1"}>ARCHITECT</MenuItem>
                  <MenuItem value={"category2"}>SURVEYOR ENGINEER</MenuItem>
                  <MenuItem value={"category3"}>LAWYER BUSINESS</MenuItem>
                  <MenuItem value={"category4"}>CONSULTANT ENERGY</MenuItem>
                  <MenuItem value={"category5"}>MANAGER</MenuItem>
                  <MenuItem value={"category6"}>AGRONOMIST LABOR</MenuItem>
                  <MenuItem value={"category7"}>CONSULTANT</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

        );
      case "stockist":
        return (
          <div className="row col-md-12 col-12 p-0 mb-2">
            <div className="col-md-4 text-right p-relative">
              <label className="align-center font-size-18">Category</label>
            </div>
            <div className="col-md-8 p-0">
              <FormControl className="w-100 mb-2">
                <Select
                  value={category}
                  onChange={this.handleChange("category")}
                  input={<Input/>}
                >
                  <MenuItem value={"category1"}>BUILDING PRODUCT</MenuItem>
                  <MenuItem value={"category2"}>HARDWARE</MenuItem>
                  <MenuItem value={"category3"}>ELECTRICAL SYSTEM</MenuItem>
                  <MenuItem value={"category4"}>HYDRAULIC SYSTEMS AND HEATING</MenuItem>
                  <MenuItem value={"category5"}>GARDENING</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

        );
      default:
        return null;

    }

  };

  render() {
    const { onRegisterClose, open, register } = this.props;
    const {
      userType,
      id,
      category,
      name,
      surName,
      address,
      homeNumber,
      cap,
      city,
      province,
      codFisc,
      mobile,
      email,
      phone,
      otherCategory,
      pec,
      cuu,
      Plva,
      userID,
      password,
      building
    } = this.state;

    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {register === null ? "New Register" :
            "Save Register"}
          <IconButton className="text-white"
                      onClick={onRegisterClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content p-lg-5">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <form className="row" noValidate autoComplete="off">

                {this.renderCategory(userType)}
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Name</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <TextField
                        required
                        id="required"
                        onChange={this.handleChange("name")}
                        value={name}
                        margin="none"/>
                    </FormControl>
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Surname</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <TextField
                        required
                        id="required"
                        onChange={this.handleChange("surName")}
                        value={surName}
                        margin="none"/>
                    </FormControl>
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Address</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <TextField
                        required
                        id="required"
                        onChange={this.handleChange("address")}
                        value={address}
                        margin="none"/>
                    </FormControl>
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Home Number</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <TextField
                        required
                        id="required"
                        onChange={this.handleChange("homeNumber")}
                        value={homeNumber}
                        margin="none"/>
                    </FormControl>
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">CAP</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <TextField
                        required
                        id="required"
                        type={"number"}
                        onChange={this.handleChange("cap")}
                        value={cap}
                        margin="none"/>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">City</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <TextField
                        required
                        id="required"
                        onChange={this.handleChange("city")}
                        value={city}
                        margin="none"/>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Province</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <TextField
                        required
                        id="required"
                        onChange={this.handleChange("province")}
                        value={province}
                        margin="none"/>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Cod.Fisc.</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <TextField
                        required
                        id="required"
                        type={"number"}
                        onChange={this.handleChange("codFisc")}
                        value={codFisc}
                        margin="none"/>
                    </FormControl>
                  </div>
                </div>

                {userType === "maintainer" || userType === "professional" || userType === "stockist" || userType === "tenant" || userType === "landlord" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">P.lva</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
                        <TextField
                          required
                          id="required"
                          type={"number"}
                          onChange={this.handleChange("Plva")}
                          value={Plva}
                          margin="none"/>
                      </FormControl>
                    </div>
                  </div>
                  : null
                }


                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Mobile</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <InputMask
                        mask="(3\9) 3999-999-999"
                        maskChar={null}
                        value={mobile}
                        onChange={this.handleChange("mobile")}
                        beforeMaskedValueChange={this.beforeMaskedValueChangeMobile("mobile")}
                      >
                        {(inputProps) => <TextField {...inputProps} type="tel" margin="none"/>}
                      </InputMask>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Phone</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <InputMask
                        mask="(3\9) 0999-999-999"
                        maskChar={null}
                        value={phone}
                        onChange={this.handleChange("phone")}
                        beforeMaskedValueChange={this.beforeMaskedValueChangeMobile("phone")}
                      >
                        {(inputProps) => <TextField {...inputProps} type="tel" margin="none"/>}
                      </InputMask>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Email</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <TextField
                        required
                        id="required"
                        onChange={this.handleChange("email")}
                        value={email}
                        margin="none"/>
                    </FormControl>
                  </div>
                </div>

                {userType === "signaling" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">Building</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
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
                  : null
                }
                {userType === "maintainer" || userType === "professional" || userType === "stockist" || userType === "tenant" || userType === "landlord" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">PEC</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
                        <TextField
                          required
                          id="required"
                          onChange={this.handleChange("email")}
                          value={pec}
                          margin="none"/>
                      </FormControl>
                    </div>
                  </div>
                  : null
                }
                {userType === "maintainer" || userType === "professional" || userType === "stockist" || userType === "tenant" || userType === "landlord" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">CUU</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
                        <TextField
                          required
                          id="required"
                          type={"number"}
                          onChange={this.handleChange("cuu")}
                          value={cuu}
                          margin="none"/>
                      </FormControl>
                    </div>
                  </div>
                  : null
                }

                {userType === "signaling" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">User ID</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
                        <TextField
                          required
                          id="required"
                          type={"text"}
                          onChange={this.handleChange("userID")}
                          value={userID}
                          margin="none"/>
                      </FormControl>
                    </div>
                  </div>
                  : null
                }
                {userType === "signaling" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">Password</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
                        <TextField
                          required
                          id="required"
                          type={"password"}
                          onChange={this.handleChange("password")}
                          value={password}
                          margin="none"/>
                      </FormControl>
                    </div>
                  </div>
                  : null
                }
                {userType === "collaborator" || userType === "maintainer" || userType === "professional" || userType === "stockist" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right p-relative">
                      <label className="align-center font-size-18">Category to manage</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
                        <Select
                          multiple
                          value={otherCategory}
                          onChange={this.handleChange("otherCategory")}
                          input={<Input/>}
                          renderValue={selected => (
                            <div className="d-flex flex-wrap">
                              {selected.map(value => (
                                <Chip key={value} label={value} className="m-2"/>
                              ))}
                            </div>
                          )}
                          MenuProps={MenuProps}
                        >
                          {OTHER_CATEGORY.map(category => (
                            <MenuItem key={category} value={category}>
                              {category}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  : null
                }


              </form>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={name === ""} variant="contained" color="primary" onClick={() => {
            onRegisterClose();
          }}>Save Register</Button>
        </div>
      </Modal>
    );
  }
}

export default NewRegister;
