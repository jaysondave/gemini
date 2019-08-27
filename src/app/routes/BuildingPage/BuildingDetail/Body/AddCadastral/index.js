import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from 'components/BootstrapInput';

class AddCadastral extends React.Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      cadastral_type: "",
      province: "",
      city: "",
      part: "",
      area_mq: "",
      selection_register: "",
      denominator: "",
      fg: "",
      partFg: "",
      sub: "",
      sub_part: "",
      category: "",
      kind: "",
      cadastral_class: "",
      deduction: "",
      census_area: "",
      micro_zone: "",
      consistancy: "",
      income: "",
      dominicale_income: "",
      agricultural_income: "",
      conformity: "",
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
      selection_register,
      denominator,
      fg,
      partFg,
      sub,
      sub_part,
      category,
      kind,
      cadastral_class,
      deduction,
      census_area,
      micro_zone,
      consistancy,
      income,
      dominicale_income,
      agricultural_income,
      conformity,
      reg_date,
      data_from,
      address,
      heading,
      note
    } = this.state;
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
                    value={selection_register}
                    onChange={this.handleChange("selection_register")}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Name"}
                    value={name}
                    onChange={this.handleChange("name")}
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
                    value={part}
                    onChange={this.handleChange("part")}
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
                        value={kind}
                        onChange={this.handleChange("kind")}
                        displayEmpty
                        input={<BootstrapInput/>}
                      >
                        <MenuItem value={""} disabled>Select Kind</MenuItem>
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
                      value={conformity}
                      onChange={this.handleChange("conformity")}
                      displayEmpty
                      input={<BootstrapInput/>}
                    >
                      <MenuItem value={""} disabled>Select Compliance</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Registration Date"}
                    value={reg_date}
                    onChange={this.handleChange("reg_date")}
                  />
                </div>
              </div>

              <input
                className='form-control form-control-lg mb-2'
                placeholder={"Address"}
              />
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
          <Button disabled={id === ""} variant="contained" color="primary" onClick={() => {

          }}>Save Cadstral</Button>
        </div>
      </Modal>
    );
  }
}

export default AddCadastral;
