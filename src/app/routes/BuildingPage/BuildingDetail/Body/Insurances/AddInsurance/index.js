import React from "react";
import {Modal, ModalHeader} from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {DropzoneArea} from "material-ui-dropzone";
import BootstrapInput from 'components/BootstrapInput';
import InputMask from "react-input-mask";
import {connect} from "react-redux";
import {fetchPaymentFrequencies} from "../../../../../../../actions";

class AddInsurance extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPaymentFrequencies());
  }

  handleSubmit = () => {
        const {
            agency_id,
            contractor_id,
            payment_frequency_id,
            company,
            policy_branch,
            policy_number,
            stipulation_date,
            expiration_date,
            warning_date,
            note,
            attachment
        } = this.state;
        const {body_id, onSave} = this.props;
        let body = new FormData();
        body.append("body[body_id]", body_id);
        body.append("body[agency_id]", agency_id);
        body.append("body[contractor_id]", contractor_id);
        body.append("body[payment_frequency_id]", payment_frequency_id);
        body.append("body[company]", company);
        body.append("body[policy_branch]", policy_branch);
        body.append("body[policy_number]", policy_number);
        body.append("body[stipulation_date]", stipulation_date);
        body.append("body[expiration_date]", expiration_date);
        body.append("body[warning_date]", warning_date);
        body.append("body[attachment]", attachment);
        body.append("body[note]", note);
        onSave(body);
    };
    isValid = () => {
        const {
            agency_id,
            contractor_id,
            payment_frequency_id,
            company,
            policy_branch,
            policy_number,
            stipulation_date,
            expiration_date,
            warning_date,
            note,
            attachment
        } = this.state;
        return agency_id !== "" &&
            contractor_id !== "" &&
            payment_frequency_id !== "" &&
            company !== "" &&
            policy_branch !== "" &&
            policy_number !== "" &&
            stipulation_date !== "" &&
            expiration_date !== "" &&
            warning_date !== "" &&
            note !== "" &&
            attachment !== null;
    };

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            agency_id: "",
            contractor_id: "",
            payment_frequency_id: "",
            company: "",
            policy_branch: "",
            policy_number: "",
            stipulation_date: "",
            expiration_date: "",
            warning_date: "",
            note: "",
            attachment: null
        };
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };
    handleChangeFile = (files) => {
        console.log(files);
        this.setState({
            attachment: files
        });
    };

    render() {
        const {onClose, open} = this.props;
        const {
            id,
            agency_id,
            contractor_id,
            payment_frequency_id,
            company,
            policy_branch,
            policy_number,
            stipulation_date,
            expiration_date,
            warning_date,
            note,
        } = this.state;
      const {
        stockists,
        managers,
        paymentFrequencies
      } = this.props;
        return (
            <Modal className="modal-box" isOpen={open}>
                <ModalHeader className="modal-box-header bg-primary text-white">
                    {id === "" ? "New Policy" :
                        "Edit Policy"}
                    <IconButton className="text-white"
                                onClick={() => onClose()}>
                        <CloseIcon/>
                    </IconButton>
                </ModalHeader>

                <div className="modal-box-content">
                    <div className="row no-gutters">
                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">INSURANCE AGENCY</label>
                            </div>
                            <div className="col-md-8 p-0">
                              <FormControl className="w-100 mb-2">
                                <Select
                                    value={agency_id}
                                    onChange={this.handleChange("agency_id")}
                                    input={<BootstrapInput/>}
                                >
                                  {stockists.map(s => <MenuItem key={s.id} value={s.id}>{s.first_name + " " + s.last_name}</MenuItem>)}
                                </Select>
                              </FormControl>
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">INSURANCE COMPANY</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <input
                                    value={company}
                                    className='form-control form-control-lg'
                                    onChange={this.handleChange("company")}
                                />
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">POLICY BRANCH</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <input
                                    value={policy_branch}
                                    className='form-control form-control-lg'
                                    onChange={this.handleChange("policy_branch")}
                                />
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">POLICY NUMBER</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <input
                                    value={policy_number}
                                    className='form-control form-control-lg'
                                    onChange={this.handleChange("policy_number")}
                                />
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">CONTRACTOR</label>
                            </div>
                            <div className="col-md-8 p-0">
                              <FormControl className="w-100 mb-2">
                                <Select
                                    value={contractor_id}
                                    onChange={this.handleChange("contractor_id")}
                                    input={<BootstrapInput/>}
                                >
                                  {managers.map(m => <MenuItem key={m.id} value={m.id}>{m.first_name + " " + m.last_name}</MenuItem>)}
                                </Select>
                              </FormControl>
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">STIPULATION DATE</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <InputMask
                                    mask="99/99/2999"
                                    maskChar={null}
                                    placeholder={"dd/mm/yyyy"}
                                    value={stipulation_date}
                                    onChange={this.handleChange("stipulation_date")}
                                >
                                    {(inputProps) => <input
                                        {...inputProps}
                                        className="form-control form-control-lg"
                                    />}
                                </InputMask>
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">EXPIRATION DATE</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <InputMask
                                    mask="99/99/2999"
                                    maskChar={null}
                                    placeholder={"dd/mm/yyyy"}
                                    value={expiration_date}
                                    onChange={this.handleChange("expiration_date")}
                                >
                                    {(inputProps) => <input
                                        {...inputProps}
                                        className="form-control form-control-lg"
                                    />}
                                </InputMask>
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">PAYMENT FREQUENCY</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <FormControl className="w-100 mb-2">
                                    <Select
                                        value={payment_frequency_id}
                                        onChange={this.handleChange("payment_frequency_id")}
                                        input={<BootstrapInput/>}
                                    >
                                      {paymentFrequencies.map(p => <MenuItem value={p.id}>{p.name}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">WARNING DATE</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <InputMask
                                    mask="99/99/2999"
                                    maskChar={null}
                                    placeholder={"dd/mm/yyyy"}
                                    value={warning_date}
                                    onChange={this.handleChange("warning_date")}
                                >
                                    {(inputProps) => <input
                                        {...inputProps}
                                        className="form-control form-control-lg"
                                    />}
                                </InputMask>
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">NOTE</label>
                            </div>
                            <div className="col-md-8 p-0">
                              <textarea
                                  className="form-control form-control-lg" rows="6"
                                  style={{width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5}}
                                  placeholder="Description"
                                  value={note}
                                  onChange={this.handleChange("note")}
                              />
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="font-size-18">ADD IMAGE</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <DropzoneArea
                                    filesLimit={1}
                                    showFileNamesInPreview={true}
                                    dropzoneText={"Drag and drop a file here or click"}
                                    onChange={this.handleChangeFile}
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="modal-box-footer d-flex flex-row">
                    <Button disabled={!this.isValid()} variant="contained" color="primary" onClick={() => {
                        this.handleSubmit()
                    }}>Save Policy</Button>
                </div>
            </Modal>
        );
    }
}
const mapStateToProps = ({users, paymentFrequency}) => {
  const {stockists, managers} = users.users;
  const {paymentFrequencies} = paymentFrequency;
  return {
    stockists,
    managers,
    paymentFrequencies,
  }
};
export default connect(mapStateToProps)(AddInsurance);
