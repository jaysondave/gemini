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
import IntlMessages from "util/IntlMessages";

class AddCadastral extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddCadastral: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      type: "building",
      province: "",
      city: "",
      part: "",
      areaMq: "",
      sectionRegister: "",
      denominator: "",
      fg: "",
      partFg: "",
      sub: "",
      partSub: "",
      category: "",
      kind: "",
      className: "",
      deduction: "",
      censusArea: "",
      microZone: "",
      consistency: "",
      income: "",
      dominicalIncome: "",
      agriculturalIncome: "",
      conformity: "",
      registerationDate: "",
      dataFrom: "",
      address: "",
      heading: "",
      note: ""
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { onSaveCadastral, onCadastralClose, open, Cadastral } = this.props;
    const {
      id,
      type,
      province,
      city,
      part,
      areaMq,
      sectionRegister,
      denominator,
      fg,
      partFg,
      sub,
      partSub,
      category,
      kind,
      className,
      censusArea,
      microZone,
      deduction,
      consistency,
      income,
      dominicalIncome,
      agriculturalIncome,
      conformity,
      registerationDate,
      dataFrom,
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
                      onClick={onCadastralClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Type</InputLabel>
                    <Select
                      value={type}
                      onChange={this.handleChange("type")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"building"}>Building</MenuItem>
                      <MenuItem value={"landing"}>Landing</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Province</InputLabel>
                    <Select
                      value={province}
                      onChange={this.handleChange("province")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"province1"}>province1</MenuItem>
                      <MenuItem value={"province2"}>province2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">City</InputLabel>
                    <Select
                      value={city}
                      onChange={this.handleChange("city")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"city1"}>city1</MenuItem>
                      <MenuItem value={"city2"}>city1</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Part"}
                    onChange={this.handleChange("part")}
                    defaultValue={part}
                    fullWidth
                    margin="none"/>
                </div>
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Area(mq)"}
                    onChange={this.handleChange("areaMq")}
                    defaultValue={areaMq}
                    fullWidth
                    margin="none"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Section Register"}
                    onChange={this.handleChange("sectionRegister")}
                    defaultValue={sectionRegister}
                    fullWidth
                    margin="none"/>
                </div>
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Name"}
                    onChange={this.handleChange("denominator")}
                    defaultValue={denominator}
                    fullWidth
                    margin="none"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Fg."}
                    onChange={this.handleChange("fg")}
                    defaultValue={fg}
                    fullWidth
                    margin="none"/>
                </div>
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Part of Fg"}
                    onChange={this.handleChange("partFg")}
                    defaultValue={partFg}
                    fullWidth
                    margin="none"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Sub."}
                    onChange={this.handleChange("sub")}
                    defaultValue={sub}
                    fullWidth
                    margin="none"/>
                </div>
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Part of Sub"}
                    onChange={this.handleChange("partSub")}
                    defaultValue={partSub}
                    fullWidth
                    margin="none"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  {type === "building" ?
                    <TextField
                      label={"Category"}
                      onChange={this.handleChange("category")}
                      defaultValue={category}
                      fullWidth
                      margin="none"/>
                    :
                    <FormControl className="w-100 mb-2">
                      <InputLabel htmlFor="age-simple">Kind</InputLabel>
                      <Select
                        value={kind}
                        onChange={this.handleChange("kind")}
                        input={<Input id="ageSimple1"/>}
                      >
                        <MenuItem value={"kind1"}>kind1</MenuItem>
                        <MenuItem value={"kind2"}>kind2</MenuItem>
                      </Select>
                    </FormControl>}

                </div>
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Class"}
                    onChange={this.handleChange("className")}
                    defaultValue={className}
                    fullWidth
                    margin="none"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    label={type === "building" ? "Census area" : "Deduction"}
                    onChange={this.handleChange(type === "building" ? "censusArea" : "deduction")}
                    value={type === "building" ? censusArea : deduction}
                    fullWidth
                    margin="none"/>
                </div>
                {type === "building" ?
                  <div className="col-md-6 col-12">
                    <TextField
                      label={"Micro-zone"}
                      onChange={this.handleChange("microZone")}
                      defaultValue={microZone}
                      fullWidth
                      margin="none"/>
                  </div>
                  : null
                }

              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    label={type === "building" ? "Consistency" : "Dominicale Income"}
                    onChange={this.handleChange(type === "building" ? "consistency" : "dominicalIncome")}
                    defaultValue={type === "building" ? consistency : dominicalIncome}
                    fullWidth
                    margin="none"/>
                </div>
                <div className="col-md-6 col-12">
                  <TextField
                    label={type === "building" ? "Income(€)" : "Agricultural Income(€)"}
                    onChange={this.handleChange(type === "building" ? "income" : "agriculturalIncome")}
                    defaultValue={type === "building" ? income : agriculturalIncome}
                    fullWidth
                    margin="none"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Conformity</InputLabel>
                    <Select
                      value={conformity}
                      onChange={this.handleChange("conformity")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"conformity1"}>conformity1</MenuItem>
                      <MenuItem value={"conformity2"}>conformity2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-6 col-12">
                  <TextField
                    id="date"
                    label="Registration Date"
                    type="date"
                    defaultValue={registerationDate}
                    fullWidth
                    onChange={this.handleChange("registerationDate")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
              </div>

              <TextField
                label={"Address"}
                onChange={this.handleChange("address")}
                defaultValue={address}
                fullWidth
                margin="none"/>
              <textarea style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                        value={dataFrom}
                        placeholder="Data From"
                        onChange={this.handleChange("dataFrom")}
              />
              <textarea style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                        value={heading}
                        placeholder="Heading"
                        onChange={this.handleChange("heading")}
              />
              <textarea style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                        value={note}
                        placeholder="Note"
                        onChange={this.handleChange("note")}
              />
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={id === ""} variant="contained" color="primary" onClick={() => {
            onCadastralClose();
            onSaveCadastral(
              {});
            this.setState({});

          }}>Save Cadstral</Button>
        </div>
      </Modal>
    );
  }
}

export default AddCadastral;
