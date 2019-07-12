import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from 'components/BootstrapInput';
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
              <div className="row mb-2">
                <div className="col-lg-6 col-sm-6 col-12">
                  <FormControl className="w-100">
                    <Select
                      value={type}
                      onChange={this.handleChange("type")}
                      input={<BootstrapInput/>}
                    >
                      <MenuItem value={"building"}>Building</MenuItem>
                      <MenuItem value={"landing"}>Landing</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-6 col-sm-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Province"}
                  />
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"City"}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Part"}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Area(mq)"}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Section Register"}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Name"}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Fg."}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Part of Fg"}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Sub."}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Part of Sub"}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  {type === "building" ?
                    <input
                      className='form-control form-control-lg'
                      placeholder={"Category"}
                    />
                    :
                    <FormControl className="w-100 mb-2">
                      <Select
                        value={kind}
                        onChange={this.handleChange("kind")}
                        input={<BootstrapInput/>}
                      >
                        <MenuItem value={"kind1"}>kind1</MenuItem>
                        <MenuItem value={"kind2"}>kind2</MenuItem>
                      </Select>
                    </FormControl>}

                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Class"}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={type === "building" ? "Census area" : "Deduction"}
                  />
                </div>
                {type === "building" ?
                  <div className="col-md-6 col-12">
                    <input
                      className='form-control form-control-lg'
                      placeholder={"Micro-zone"}
                    />
                  </div>
                  : null
                }

              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={type === "building" ? "Consistency" : "Dominicale Income"}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={type === "building" ? "Income(€)" : "Agricultural Income(€)"}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <Select
                      value={conformity}
                      onChange={this.handleChange("conformity")}
                      input={<BootstrapInput/>}
                    >
                      <MenuItem value={"conformity1"}>conformity1</MenuItem>
                      <MenuItem value={"conformity2"}>conformity2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-6 col-12">
                  <input
                    className='form-control form-control-lg'
                    placeholder={"Registration Date"}
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
                onChange={this.handleChange("dataFrom")}
              />

              <textarea
                className="form-control form-control-lg" rows="6"
                style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                placeholder="Heading"
                onChange={this.handleChange("heading")}
              />

              <textarea
                className="form-control form-control-lg" rows="6"
                style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
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
