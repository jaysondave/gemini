import React from "react";
import {Modal, ModalHeader} from "reactstrap";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormControl from "@material-ui/core/FormControl";
import InputMask from "react-input-mask";
import BootstrapInput from 'components/BootstrapInput';
import {connect} from "react-redux";
import {showLoader} from "../../../../actions/Alert";
import {registerUser} from "../../../../actions/User";

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

class NewRegister extends React.Component {


  handleChange = name => event => {
    const state_error_name = name + "_error";
    const error = event.target.value === "";
    this.setState({
      [name]: event.target.value,
      [state_error_name]: error
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
  renderCategory = (user_type) => {
    const { category_id } = this.state;
    const { allCategory } = this.props;
    let categories = allCategory.filter(c => c.active === true);
    switch (user_type) {
      case "maintainer":
        categories = categories.filter(c => c.category_type === "maintainer");
        return (
          <div className="row col-md-12 col-12 p-0 mb-2">
            <div className="col-md-4 text-right ">
              <label className="font-size-18">Category</label>
            </div>
            <div className="col-md-8 p-0">
              <FormControl className="w-100 mb-2">
                <Select
                  value={category_id}
                  onChange={this.handleChange("category_id")}
                  input={<BootstrapInput/>}
                >
                  {categories.map(c =>
                      <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                  )}
                </Select>
              </FormControl>
              <div className={`invalid-text ${this.state.category_id_error? '': 'invalid-text-invisible'}`}>{"* Specialization is required"}</div>
            </div>
          </div>

        );
      case "professional":
        categories = categories.filter(c => c.category_type === "professional");
        return (
          <div className="row col-md-12 col-12 p-0 mb-2">
            <div className="col-md-4 text-right ">
              <label className="font-size-18">Category</label>
            </div>
            <div className="col-md-8 p-0">
              <FormControl className="w-100 mb-2">
                <Select
                  value={category_id}
                  onChange={this.handleChange("category_id")}
                  input={<BootstrapInput/>}
                >
                  {categories.map(c =>
                      <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                  )}
                </Select>
              </FormControl>
              <div className={`invalid-text ${this.state.category_id_error? '': 'invalid-text-invisible'}`}>{"* Specialization is required"}</div>
            </div>
          </div>

        );
      case "stockist":
        categories = categories.filter(c => c.category_type === "stockist");
        return (
          <div className="row col-md-12 col-12 p-0 mb-2">
            <div className="col-md-4 text-right ">
              <label className="font-size-18">Category</label>
            </div>
            <div className="col-md-8 p-0">
              <FormControl className="w-100 mb-2">
                <Select
                  value={category_id}
                  onChange={this.handleChange("category_id")}
                  input={<BootstrapInput/>}
                >
                  {categories.map(c =>
                      <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                  )}
                </Select>
              </FormControl>
              <div className={`invalid-text ${this.state.category_id_error? '': 'invalid-text-invisible'}`}>{"* Category is required"}</div>
            </div>
          </div>

        );
      default:
        return null;

    }

  };
  validation = () => {
    const {
      user_type,
      category_id,
      first_name,
      last_name,
      address,
      home_number,
      zip_code,
      city,
      province,
      cod_fisc,
      mobile,
      email,
      password,
      phone,
      pec,
      cuu,
      p_lva,
      specialization,
      building,
    } = this.state;
    return email === "" ||
        first_name === "" ||
        last_name === "" ||
        address === "" ||
        home_number === "" ||
        zip_code === "" ||
        city === "" ||
        province === "" ||
        cod_fisc === "" ||
        mobile === "" ||
        phone === "" ||
        (user_type === "agency"?
            (pec === "" || cuu === "")
            : false) ||
        (user_type === "collaborator" || user_type === "manager" ?
            (specialization === "")
            : false) ||
        (user_type === "maintainer" || user_type === "professional" || user_type === "stockist" ?
            (category_id === "" || p_lva === "" || pec === "" || cuu === "" || specialization === "")
            : false) ||
        (user_type === "user" ?
            (building === "")
            : false);
  };
  onRegisterUser = () => {
    console.log({userToRegister: this.state});
    const {
      user_type,
      category_id,
      first_name,
      last_name,
      address,
      home_number,
      zip_code,
      city,
      province,
      cod_fisc,
      mobile,
      email,
      password,
      phone,
      pec,
      cuu,
      p_lva,
      specialization,
      building,
    } = this.state;

    this.props.dispatch(showLoader());
    this.props.dispatch(registerUser({
      user_type,
      category_id,
      first_name,
      last_name,
      address,
      home_number,
      zip_code,
      city,
      province,
      cod_fisc,
      mobile,
      email,
      password,
      phone,
      pec,
      cuu,
      p_lva,
      specialization,
      building
    }));
  };
  generatePassword = () => {
    let result             = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 8; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  constructor(props) {
    super(props);
    console.log({ NewRegister: props });
    this.state = {
      user_type: props.user_type,
      id: "",
      category_id: "",
      first_name: "",
      last_name: "",
      address: "",
      home_number: "",
      zip_code: "",
      city: "",
      province: "",
      cod_fisc: "",
      mobile: "",
      email: "",
      phone: "",
      pec: "",
      cuu: "",
      p_lva: "",
      specialization: "",
      building: "",
      password: this.generatePassword(),

      category_id_error: false,
      first_name_error: false,
      last_name_error: false,
      address_error: false,
      zip_code_error: false,
      home_number_error: false,
      city_error: false,
      province_error: false,
      cod_fisc_error: false,
      mobile_error: false,
      email_error: false,
      phone_error: false,
      pec_error: false,
      cuu_error: false,
      p_lva_error: false,
      specialization_error: false,
      building_error: false
    };
  }
  render() {
    const { onRegisterClose, open, register } = this.props;
    const {
      user_type,
      id,
      category_id,
      first_name,
      last_name,
      address,
      home_number,
      zip_code,
      city,
      province,
      cod_fisc,
      mobile,
      email,
      phone,
      specialization,
      pec,
      cuu,
      p_lva,
      building,

      category_id_error,
      first_name_error,
      last_name_error,
      address_error,
      home_number_error,
      zip_code_error,
      city_error,
      province_error,
      cod_fisc_error,
      mobile_error,
      email_error,
      phone_error,
      pec_error,
      cuu_error,
      p_lva_error,
      specialization_error,
      building_error
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

                {this.renderCategory(user_type)}
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right">
                    <label className="font-size-18">First Name</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className="form-control form-control-lg"
                        onChange={this.handleChange("first_name")}
                        value={first_name}
                    />
                    <div className={`invalid-text ${first_name_error? '': 'invalid-text-invisible'}`}>{"* First name is required"}</div>
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right">
                    <label className="font-size-18">Last Name</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className="form-control form-control-lg"
                        onChange={this.handleChange("last_name")}
                        value={last_name}
                    />
                    <div className={`invalid-text ${last_name_error? '': 'invalid-text-invisible'}`}>{"* Last name is required"}</div>
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right">
                    <label className="font-size-18">Address</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className="form-control form-control-lg"
                        onChange={this.handleChange("address")}
                        value={address}
                    />
                    <div className={`invalid-text ${address_error? '': 'invalid-text-invisible'}`}>{"* Address is required"}</div>
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right ">
                    <label className="font-size-18">Home Number</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className="form-control form-control-lg"
                        onChange={this.handleChange("home_number")}
                        value={home_number}
                    />
                    <div className={`invalid-text ${home_number_error? '': 'invalid-text-invisible'}`}>{"* Home Number is required"}</div>
                  </div>
                </div>
                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right ">
                    <label className="font-size-18">Zip Code</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className="form-control form-control-lg"
                        type={"number"}
                        onChange={this.handleChange("zip_code")}
                        value={zip_code}
                    />
                    <div className={`invalid-text ${zip_code_error? '': 'invalid-text-invisible'}`}>{"* Zip Code is required"}</div>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right ">
                    <label className="font-size-18">City</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className="form-control form-control-lg"
                        onChange={this.handleChange("city")}
                        value={city}
                    />
                    <div className={`invalid-text ${city_error? '': 'invalid-text-invisible'}`}>{"* City is required"}</div>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right ">
                    <label className="font-size-18">Province</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className="form-control form-control-lg"
                        onChange={this.handleChange("province")}
                        value={province}
                    />
                    <div className={`invalid-text ${province_error? '': 'invalid-text-invisible'}`}>{"* Province is required"}</div>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right ">
                    <label className="font-size-18">Cod.Fisc.</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className="form-control form-control-lg"
                        onChange={this.handleChange("cod_fisc")}
                        value={cod_fisc}
                    />
                    <div className={`invalid-text ${cod_fisc_error? '': 'invalid-text-invisible'}`}>{"* Cod.Fisc is required"}</div>
                  </div>
                </div>

                {user_type === "agency" || user_type === "maintainer" || user_type === "professional" || user_type === "stockist" || user_type === "tenant" || user_type === "landlord"?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right ">
                      <label className="font-size-18">P.lva</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <input
                          className="form-control form-control-lg"
                          onChange={this.handleChange("p_lva")}
                          value={p_lva}
                      />
                      <div className={`invalid-text ${p_lva_error? '': 'invalid-text-invisible'}`}>{"* P.lva is required"}</div>
                    </div>
                  </div>
                  : null
                }


                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right ">
                    <label className="font-size-18">Mobile</label>
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
                        {(inputProps) => <input
                            {...inputProps}
                            className="form-control form-control-lg"
                        />}
                      </InputMask>
                      <div className={`invalid-text ${mobile_error? '': 'invalid-text-invisible'}`}>{"* Mobile is required"}</div>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right ">
                    <label className="font-size-18">Phone</label>
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
                        {(inputProps) =>
                            <input
                                {...inputProps}
                                className="form-control form-control-lg"
                          />}
                      </InputMask>
                      <div className={`invalid-text ${phone_error? '': 'invalid-text-invisible'}`}>{"* Phone is required"}</div>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right ">
                    <label className="font-size-18">Email</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
                        className="form-control form-control-lg"
                        onChange={this.handleChange("email")}
                        value={email}
                    />
                    <div className={`invalid-text ${email_error? '': 'invalid-text-invisible'}`}>{"* Email is required"}</div>
                  </div>
                </div>

                {user_type === "user" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right ">
                      <label className="font-size-18">Building</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <FormControl className="w-100 mb-2">
                        <Select
                          value={building}
                          onChange={this.handleChange("building")}
                          input={<BootstrapInput/>}
                        >
                          <MenuItem value={"building1"}>Building 1</MenuItem>
                          <MenuItem value={"building2"}>Building 2</MenuItem>
                          <MenuItem value={"building3"}>Building 3</MenuItem>
                        </Select>
                      </FormControl>
                      <div className={`invalid-text ${building_error? '': 'invalid-text-invisible'}`}>{"* Building is required"}</div>
                    </div>
                  </div>
                  : null
                }
                {user_type === "agency" || user_type === "maintainer" || user_type === "professional" || user_type === "stockist" || user_type === "tenant" || user_type === "landlord"?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right ">
                      <label className="font-size-18">PEC</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <input
                          className="form-control form-control-lg"
                          onChange={this.handleChange("pec")}
                          value={pec}
                      />
                      <div className={`invalid-text ${pec_error? '': 'invalid-text-invisible'}`}>{"* Pec field is required"}</div>
                    </div>
                  </div>
                  : null
                }
                {user_type === "agency" || user_type === "maintainer" || user_type === "professional" || user_type === "stockist" || user_type === "tenant" || user_type === "landlord"?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right ">
                      <label className="font-size-18">CUU</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <input
                          className="form-control form-control-lg"
                          type={"number"}
                          onChange={this.handleChange("cuu")}
                          value={cuu}
                      />
                      <div className={`invalid-text ${cuu_error? '': 'invalid-text-invisible'}`}>{"* Cuu field is required"}</div>
                    </div>
                  </div>
                  : null
                }

                {user_type === "manager" || user_type === "collaborator" || user_type === "maintainer" || user_type === "professional" || user_type === "stockist" ?
                  <div className="row col-md-12 col-12 p-0 mb-2">
                    <div className="col-md-4 text-right ">
                      <label className="font-size-18">Specialization</label>
                    </div>
                    <div className="col-md-8 p-0">
                      <input
                          className="form-control form-control-lg"
                          type={"text"}
                          onChange={this.handleChange("specialization")}
                          value={specialization}
                      />
                      <div className={`invalid-text ${specialization_error? '': 'invalid-text-invisible'}`}>{"* Specialization is required"}</div>
                    </div>
                  </div>
                  : null
                }


              </form>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button variant="contained" disabled={this.validation()} color="primary" onClick={() => this.onRegisterUser()}>Register</Button>
        </div>
      </Modal>
    );
  }
}
const mapsToProps = ({ category }) => {
  const { allCategory } = category;
  return { allCategory }
};
export default connect(mapsToProps)(NewRegister);
