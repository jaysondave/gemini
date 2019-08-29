import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from 'components/BootstrapInput';
import InputMask from "react-input-mask";
import {connect} from "react-redux";

class AddCadastral extends React.Component {
  handleSubmit = () => {
    const {
      name,
      cadastral_type,
      province,
      city,
      part,
      area_mq,
      section_register,
      fg,
      part_fg,
      sub,
      sub_part,
      category,
      kind_id,
      cadastral_class,
      deduction,
      census_area,
      micro_zone,
      consistancy,
      income,
      dominicale_income,
      agricultural_income,
      compliance_id,
      reg_date,
      data_from,
      address,
      heading,
      note
    } = this.state;
    const { body_id, onSave } = this.props;
    let body = new FormData();
    body.append("body[body_id]", body_id);
    body.append("body[name]", name);
    body.append("body[cadastral_type]", cadastral_type);
    body.append("body[province]", province);
    body.append("body[city]", city);
    body.append("body[part]", part);
    body.append("body[area_mq]", area_mq);
    body.append("body[section_register]", section_register);
    body.append("body[fg]", fg);
    body.append("body[part_fg]", part_fg);
    body.append("body[sub]", sub);
    body.append("body[sub_part]", sub_part);
    body.append("body[category]", category);
    body.append("body[kind_id]", kind_id);
    body.append("body[cadastral_class]", cadastral_class);
    body.append("body[deduction]", deduction);
    body.append("body[census_area]", census_area);
    body.append("body[micro_zone]", micro_zone);
    body.append("body[consistancy]", consistancy);
    body.append("body[income]", income);
    body.append("body[dominicale_income]", dominicale_income);
    body.append("body[agricultural_income]", agricultural_income);
    body.append("body[compliance_id]", compliance_id);
    body.append("body[reg_date]", reg_date);
    body.append("body[data_from]", data_from);
    body.append("body[address]", address);
    body.append("body[heading]", heading);
    body.append("body[note]", note);
    onSave(body);
  };
  isValid = () => {
    const {
      name,
      cadastral_type,
      province,
      city,
      part,
      area_mq,
      section_register,
      fg,
      part_fg,
      sub,
      sub_part,
      category,
      kind_id,
      cadastral_class,
      deduction,
      census_area,
      micro_zone,
      consistancy,
      income,
      dominicale_income,
      agricultural_income,
      compliance_id,
      reg_date,
      data_from,
      address,
      heading,
      note
    } = this.state;
    return name !== "" &&
        cadastral_type !== ""  &&
        province !== ""  &&
        city !== ""  &&
        part !== ""  &&
        note !== ""  &&
        area_mq !== ""  &&
        section_register !== ""  &&
        fg !== ""  &&
        part_fg !== ""  &&
        sub !== ""  &&
        sub_part !== ""  &&
        (cadastral_type === "Landing" ? kind_id !== "": category !== "") &&
        cadastral_class !== ""  &&
        (cadastral_type === "Building" ? census_area !== "": deduction !== "") &&
        (cadastral_type === "Building" ? micro_zone !== "": true) &&
        (cadastral_type === "Building" ? consistancy !== "": dominicale_income !== "") &&
        (cadastral_type === "Building" ? income !== "": agricultural_income !== "") &&
        compliance_id !== ""  &&
        reg_date !== ""  &&
        data_from !== ""  &&
        address !== ""  &&
        heading !== "";
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      cadastral_type: "Building",
      province: "",
      city: "",
      part: "",
      area_mq: "",
      section_register: "",
      fg: "",
      part_fg: "",
      sub: "",
      sub_part: "",
      category: "",
      kind_id: 1,
      cadastral_class: "",
      deduction: "",
      census_area: "",
      micro_zone: "",
      consistancy: "",
      income: "",
      dominicale_income: "",
      agricultural_income: "",
      compliance_id: "",
      reg_date: "",
      data_from: "",
      address: "",
      heading: "",
      note: "",
      attachment: null
    };
  }

  render() {
    const { onSave, onClose, open, selectedItem } = this.props;
    const {
      id,
      name,
      cadastral_type,
      province,
      city,
      part,
      area_mq,
      section_register,
      fg,
      part_fg,
      sub,
      sub_part,
      category,
      kind_id,
      cadastral_class,
      deduction,
      census_area,
      micro_zone,
      consistancy,
      income,
      dominicale_income,
      agricultural_income,
      compliance_id,
      reg_date,
      data_from,
      address,
      heading,
      note
    } = this.state;
    const { compliances, cadastralKinds } = this.props;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "Insert Cadastral" :
            "Edit Cadastral"}
          <IconButton className="text-white"
                      onClick={() => onClose()}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <div className="row mb-2">
                <div className="col-lg-6 col-sm-6 col-12">
                  <FormControl className="w-100">
                    <Select
                      value={cadastral_type}
                      onChange={this.handleChange("cadastral_type")}
                      displayEmpty
                      input={<BootstrapInput/>}
                    >
                      <MenuItem value={""} disabled>Select Type</MenuItem>
                      <MenuItem value={"Building"}>Building</MenuItem>
                      <MenuItem value={"Landing"}>Landing</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                      className='form-control form-control-lg'
                      placeholder={"Name"}
                      value={name}
                      onChange={this.handleChange("name")}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                      className='form-control form-control-lg mb-2'
                      placeholder={"Address"}
                      value={address}
                      onChange={this.handleChange("address")}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-6 col-sm-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Province"}
                    value={province}
                    onChange={this.handleChange("province")}
                  />
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"City"}
                    value={city}
                    onChange={this.handleChange("city")}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Part"}
                    value={part}
                    onChange={this.handleChange("part")}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Area(mq)"}
                    value={area_mq}
                    onChange={this.handleChange("area_mq")}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Section Register"}
                    value={section_register}
                    onChange={this.handleChange("section_register")}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Fg."}
                    value={fg}
                    onChange={this.handleChange("fg")}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Part of Fg"}
                    value={part_fg}
                    onChange={this.handleChange("part_fg")}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Sub."}
                    value={sub}
                    onChange={this.handleChange("sub")}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Part of Sub"}
                    value={sub_part}
                    onChange={this.handleChange("sub_part")}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  {cadastral_type === "Building" ?
                    <input
                      className='form-control form-control-lg'
                      placeholder={"Category"}
                      value={category}
                      onChange={this.handleChange("category")}
                    />
                    :
                    <FormControl className="w-100 mb-2">
                      <Select
                        value={kind_id}
                        onChange={this.handleChange("kind_id")}
                        displayEmpty
                        input={<BootstrapInput/>}
                      >
                        <MenuItem value={""} disabled>Select Kind</MenuItem>
                        {cadastralKinds.map(c => <MenuItem value={c.id}>{c.name}</MenuItem>)}
                      </Select>
                    </FormControl>}

                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Class"}
                    value={cadastral_class}
                    onChange={this.handleChange("cadastral_class")}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={cadastral_type === "Building" ? "Census area" : "Deduction"}
                    value={cadastral_type === "Building"? census_area: deduction}
                    onChange={this.handleChange(cadastral_type === "Building"? "census_area": "deduction")}
                  />
                </div>
                {cadastral_type === "Building" ?
                  <div className="col-md-6 col-12">
                    <input
                      className='form-control form-control-lg'
                      placeholder={"Micro-zone"}
                      value={micro_zone}
                      onChange={this.handleChange("micro_zone")}
                    />
                  </div>
                  : null
                }

              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={cadastral_type === "Building" ? "Consistency" : "Dominicale Income"}
                    value={cadastral_type === "Building"?consistancy: dominicale_income}
                    onChange={this.handleChange(cadastral_type === "Building"? "consistancy": "dominicale_income")}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={cadastral_type === "Building" ? "Income(€)" : "Agricultural Income(€)"}
                    value={cadastral_type === "Building"?income: agricultural_income}
                    onChange={this.handleChange(cadastral_type === "Building"? "income": "agricultural_income")}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <Select
                      value={compliance_id}
                      onChange={this.handleChange("compliance_id")}
                      displayEmpty
                      input={<BootstrapInput/>}
                    >
                      <MenuItem value={""} disabled>Select Compliance</MenuItem>
                      {compliances.map(c => <MenuItem value={c.id}>{c.name}</MenuItem>)}
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-6 col-12">
                  <InputMask
                      mask="99/99/2999"
                      maskChar={null}
                      placeholder={"Registration Date(dd/mm/yyyy)"}
                      value={reg_date}
                      onChange={this.handleChange("reg_date")}
                  >
                    {(inputProps) => <input
                        {...inputProps}
                        className="form-control form-control-lg"
                    />}
                  </InputMask>
                </div>
              </div>
              <textarea
                className="form-control form-control-lg" rows="6"
                style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                placeholder="Data From"
                value={data_from}
                onChange={this.handleChange("data_from")}
              />

              <textarea
                className="form-control form-control-lg" rows="6"
                style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                placeholder="Heading"
                value={heading}
                onChange={this.handleChange("heading")}
              />

              <textarea
                className="form-control form-control-lg" rows="6"
                style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                placeholder="Note"
                value={note}
                onChange={this.handleChange("note")}
              />
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={!this.isValid()} variant="contained" color="primary" onClick={() => {
            this.handleSubmit()
          }}>Save Cadstral</Button>
        </div>
      </Modal>
    );
  }
}
const mapStateToProps = ({ cadastralKind, compliance }) => {
  const { cadastralKinds } = cadastralKind;
  const { compliances } = compliance;
  return {
    cadastralKinds,
    compliances
  }
};
export default connect(mapStateToProps)(AddCadastral);
