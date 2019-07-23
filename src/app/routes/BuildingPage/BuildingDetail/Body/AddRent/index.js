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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class AddRent extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddRent: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      landLord: "",
      tenantName: "",
      contractType: "",
      fg: "",
      sub: "",
      fgPart: "",
      category: "",
      className: "",
      contractDescription: "",
      registrationDate: "",
      registrationNumber: "",
      model: "",
      registrationTax: "",
      registrationTaxType: "",
      rentalFee: "",
      paymentFrequency: "",
      daeList: "",
      numberList: "",
      storageCode: "",
      registered: false,
      note: "",
      expiryDate: "",
      expiryNoticeDate: "",
      updatingDate: "",
      endDate: ""
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeChecked = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  render() {
    const { onSaveRent, onRentClose, open, rent } = this.props;
    const {
      id,
      landLord,
      tenantName,
      contractType,
      fg,
      sub,
      fgPart,
      category,
      className,
      contractDescription,
      registrationDate,
      registrationNumber,
      model,
      registrationTax,
      registrationTaxType,
      rentalFee,
      paymentFrequency,
      daeList,
      numberList,
      storageCode,
      registered,
      note,
      expiryDate,
      expiryNoticeDate,
      updatingDate,
      endDate
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "Insert Rent" :
            "Edit Rent"}
          <IconButton className="text-white"
                      onClick={onRentClose}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Landlord</InputLabel>
                    <Select
                      value={landLord}
                      onChange={this.handleChange("landLord")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"landLord1"}>landLord1</MenuItem>
                      <MenuItem value={"landLord2"}>landLord2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">TENANT NAME</InputLabel>
                    <Select
                      value={tenantName}
                      onChange={this.handleChange("tenantName")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"tenantName1"}>tenantName1</MenuItem>
                      <MenuItem value={"tenantName2"}>tenantName2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Type of Contract</InputLabel>
                    <Select
                      value={contractType}
                      onChange={this.handleChange("contractType")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"loan"}>Loan of Use</MenuItem>
                      <MenuItem value={"service"}>Service Contract</MenuItem>
                      <MenuItem value={"contract"}>Contract</MenuItem>
                      <MenuItem value={"rent"}>Rent</MenuItem>
                    </Select>
                  </FormControl>
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
                    onChange={this.handleChange("fgPart")}
                    defaultValue={fgPart}
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
                    label={"Category"}
                    onChange={this.handleChange("category")}
                    defaultValue={category}
                    fullWidth
                    margin="none"/>
                </div>
              </div>

              <TextField
                label={"Class"}
                onChange={this.handleChange("className")}
                defaultValue={className}
                fullWidth
                margin="none"/>
              <div className="row">
                <div className="col-md-12 col-12">
                  <textarea style={{
                    width: "100%",
                    height: 70,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5
                  }}
                            value={contractDescription}
                            placeholder="Description of Contract"
                            onChange={this.handleChange("contractDescription")}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    id="date"
                    label="Registration Date"
                    type="date"
                    defaultValue={registrationDate}
                    fullWidth
                    onChange={this.handleChange("registrationDate")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Registration Number"}
                    onChange={this.handleChange("registrationNumber")}
                    defaultValue={registrationNumber}
                    fullWidth
                    margin="none"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Model"}
                    onChange={this.handleChange("model")}
                    defaultValue={model}
                    fullWidth
                    margin="none"/>
                </div>
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Registration Tax(€)"}
                    onChange={this.handleChange("registrationTax")}
                    defaultValue={registrationTax}
                    fullWidth
                    margin="none"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Type of Registration Tax</InputLabel>
                    <Select
                      value={registrationTaxType}
                      onChange={this.handleChange("registrationTaxType")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"annual"}>Annual</MenuItem>
                      <MenuItem value={"entirePeriod"}>Entire Period</MenuItem>
                      <MenuItem value={"verbalContract"}>Verbal Contract</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Rental Fee(€)"}
                    onChange={this.handleChange("rentalFee")}
                    defaultValue={rentalFee}
                    fullWidth
                    margin="none"/>
                </div>
                <div className="col-md-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Payment Frequency</InputLabel>
                    <Select
                      value={paymentFrequency}
                      onChange={this.handleChange("paymentFrequency")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"free"}>Free</MenuItem>
                      <MenuItem value={"monthly"}>Monthly</MenuItem>
                      <MenuItem value={"quarterly"}>Quarterly</MenuItem>
                      <MenuItem value={"semiannual"}>semiannual</MenuItem>
                      <MenuItem value={"annual"}>Annual</MenuItem>
                      <MenuItem value={"twoYears"}>Two years</MenuItem>
                      <MenuItem value={"threeYears"}>Three years</MenuItem>
                      <MenuItem value={"fourYears"}>Four years</MenuItem>
                      <MenuItem value={"fiveYears"}>Five years</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Dae List</InputLabel>
                    <Select
                      value={daeList}
                      onChange={this.handleChange("daeList")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"daeList1"}>daeList1</MenuItem>
                      <MenuItem value={"daeList2"}>daeList2</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="col-md-6 col-12">
                  <FormControl className="w-100 mb-2">
                    <InputLabel htmlFor="age-simple">Number List</InputLabel>
                    <Select
                      value={numberList}
                      onChange={this.handleChange("numberList")}
                      input={<Input id="ageSimple1"/>}
                    >
                      <MenuItem value={"numberList1"}>numberList1</MenuItem>
                      <MenuItem value={"numberList2"}>numberList2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    label={"Storage Code"}
                    onChange={this.handleChange("storageCode")}
                    defaultValue={storageCode}
                    fullWidth
                    margin="none"/>
                </div>

                <div className="col-md-6 col-12">
                  <FormControlLabel
                    control={
                      <Checkbox color="primary"
                                checked={registered}
                                onChange={this.handleChangeChecked("registered")}
                                value="registered"
                      />
                    }
                    label="Registered"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-12">
                  <textarea style={{
                    width: "100%",
                    height: 70,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5
                  }}
                            value={note}
                            placeholder="Note"
                            onChange={this.handleChange("note")}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    id="date"
                    label="Expiry Date"
                    type="date"
                    defaultValue={expiryDate}
                    fullWidth
                    onChange={this.handleChange("expiryDate")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>

                <div className="col-md-6 col-12">
                  <TextField
                    id="date"
                    label="Expiry Notice Date"
                    type="date"
                    defaultValue={expiryNoticeDate}
                    fullWidth
                    onChange={this.handleChange("expiryNoticeDate")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    id="date"
                    label="ISTAT Updating Date"
                    type="date"
                    defaultValue={updatingDate}
                    fullWidth
                    onChange={this.handleChange("updatingDate")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <TextField
                    id="date"
                    label="End Date"
                    type="date"
                    defaultValue={endDate}
                    fullWidth
                    onChange={this.handleChange("endDate")}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={id === ""} variant="contained" color="primary" onClick={() => {
            onRentClose();
            onSaveRent(
              {});
            this.setState({});

          }}>Save Rent</Button>
        </div>
      </Modal>
    );
  }
}

export default AddRent;
