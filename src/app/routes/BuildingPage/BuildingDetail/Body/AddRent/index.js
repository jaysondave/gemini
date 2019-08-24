import React from "react";
import {Modal, ModalHeader} from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from "../../../../../../components/BootstrapInput";
import InputMask from "react-input-mask";
import {connect} from "react-redux";
import {fetchContractTypes, fetchPaymentFrequencies, fetchRegistrationTaxTypes} from "../../../../../../actions";

class AddRent extends React.Component {


    componentDidMount() {
        this.props.dispatch(fetchContractTypes());
        this.props.dispatch(fetchRegistrationTaxTypes());
        this.props.dispatch(fetchPaymentFrequencies());
    }
    handleSubmit = () => {
        const {
            landlord_id,
            tenant_id,
            fg,
            sub,
            fg_part,
            category,
            rent_class,
            contract_description,
            reg_date,
            reg_number,
            rent_model,
            registration_tax,
            registration_tax_type_id,
            payment_frequency_id,
            contract_type_id,
            rental_fee,
            storage_code,
            note,
            expiry_date,
            expiry_notice_date,
            ISTAT_update_date,
            end_date
        } = this.state;
        const { body_id, onSave } = this.props;
        const body = {
            body_id,
            landlord_id,
            tenant_id,
            fg,
            sub,
            fg_part,
            category,
            rent_class,
            contract_description,
            reg_date,
            reg_number,
            rent_model,
            registration_tax,
            registration_tax_type_id,
            payment_frequency_id,
            contract_type_id,
            rental_fee,
            storage_code,
            note,
            expiry_date,
            expiry_notice_date,
            ISTAT_update_date,
            end_date
        };
        onSave(body);
    };
    isValid = () => {
        const {
            landlord_id,
            tenant_id,
            fg,
            sub,
            fg_part,
            category,
            rent_class,
            contract_description,
            reg_date,
            reg_number,
            rent_model,
            registration_tax,
            registration_tax_type_id,
            payment_frequency_id,
            contract_type_id,
            rental_fee,
            storage_code,
            note,
            expiry_date,
            expiry_notice_date,
            ISTAT_update_date,
            end_date
        } = this.state;
        return landlord_id !== "" && tenant_id !== "" && fg !== "" && sub !== "" && fg_part !== "" &&
            category !== "" && rent_class !== "" && contract_description !== "" && reg_date !== "" &&
            reg_number !== "" && rent_model !== "" && registration_tax !== "" && registration_tax_type_id !== "" &&
            payment_frequency_id !== "" && contract_type_id !== "" && rental_fee !== "" && storage_code !== "" &&
            note !== "" && expiry_date !== "" && expiry_notice_date !== "" && ISTAT_update_date !== "" && end_date !== "";

    };
    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };
    constructor(props) {
        super(props);
        // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
        this.state = {
            id: "",
            landlord_id: "",
            tenant_id: "",
            fg: "",
            sub: "",
            fg_part: "",
            category: "",
            rent_class: "",
            contract_description: "",
            reg_date: "",
            reg_number: "",
            rent_model: "",
            registration_tax: "",
            registration_tax_type_id: "",
            payment_frequency_id: "",
            contract_type_id: "",
            rental_fee: "",
            storage_code: "",
            note: "",
            expiry_date: "",
            expiry_notice_date: "",
            ISTAT_update_date: "",
            end_date: ""
        };
    }
    render() {
        const {onSave, onClose, open, rent} = this.props;
        const {
            id,
            landlord_id,
            tenant_id,
            fg,
            sub,
            fg_part,
            category,
            rent_class,
            contract_description,
            reg_date,
            reg_number,
            rent_model,
            registration_tax,
            registration_tax_type_id,
            payment_frequency_id,
            contract_type_id,
            rental_fee,
            storage_code,
            note,
            expiry_date,
            expiry_notice_date,
            ISTAT_update_date,
            end_date
        } = this.state;
        const {
            landlords,
            tenants,
            contractTypes,
            registrationTaxTypes,
            paymentFrequencies
        } = this.props;
        return (
            <Modal className="modal-box" isOpen={open}>
                <ModalHeader className="modal-box-header bg-primary text-white">
                    {id === "" ? "Insert Rent" :
                        "Edit Rent"}
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
                                            value={landlord_id}
                                            displayEmpty
                                            onChange={this.handleChange("landlord_id")}
                                            input={<BootstrapInput/>}
                                        >
                                            <MenuItem value={""} disabled>Select Landlord</MenuItem>
                                            {landlords.map(item =>
                                                <MenuItem key={item.id}
                                                          value={item.id}>{item.first_name + " " + item.last_name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-12">
                                    <FormControl className="w-100">
                                        <Select
                                            value={tenant_id}
                                            displayEmpty
                                            onChange={this.handleChange("tenant_id")}
                                            input={<BootstrapInput/>}
                                        >
                                            <MenuItem value={""} disabled>Select Tenant</MenuItem>
                                            {tenants.map(item =>
                                                <MenuItem key={item.id}
                                                          value={item.id}>{item.first_name + " " + item.last_name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-12 col-sm-12 col-12">
                                    <FormControl className="w-100">
                                        <Select
                                            value={contract_type_id}
                                            displayEmpty
                                            onChange={this.handleChange("contract_type_id")}
                                            input={<BootstrapInput/>}
                                        >
                                            <MenuItem value={""} disabled>Select Type of Contract</MenuItem>
                                            {contractTypes.map(item =>
                                                <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <input
                                        className='form-control form-control-lg'
                                        placeholder={"Fg"}
                                        value={fg}
                                        onChange={this.handleChange("fg")}
                                    />
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <input
                                        className='form-control form-control-lg'
                                        placeholder={"Part of Fg"}
                                        value={fg_part}
                                        onChange={this.handleChange("fg_part")}
                                    />
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <input
                                        className='form-control form-control-lg'
                                        placeholder={"Sub"}
                                        value={sub}
                                        onChange={this.handleChange("sub")}
                                    />
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <input
                                        className='form-control form-control-lg'
                                        placeholder={"Category"}
                                        value={category}
                                        onChange={this.handleChange("category")}
                                    />
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-12 col-sm-12 col-12">
                                    <input
                                        className='form-control form-control-lg'
                                        placeholder={"Class"}
                                        value={rent_class}
                                        onChange={this.handleChange("rent_class")}
                                    />
                                </div>
                            </div>
                            <textarea
                                className="form-control form-control-lg" rows="6"
                                style={{
                                    width: "100%",
                                    height: 70,
                                    marginTop: 5,
                                    paddingHorizontal: 10,
                                    paddingVertical: 5
                                }}
                                placeholder="Description of Contract"
                                value={contract_description}
                                onChange={this.handleChange("contract_description")}
                            />

                            <div className="row mt-2 mb-2">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder={"Registration Date"}
                                        value={reg_date}
                                        onChange={this.handleChange("reg_date")}
                                    >
                                        {(inputProps) => <input
                                            {...inputProps}
                                            className="form-control form-control-lg"
                                        />}
                                    </InputMask>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <input
                                        className='form-control form-control-lg'
                                        placeholder={"Registration Number"}
                                        value={reg_number}
                                        onChange={this.handleChange("reg_number")}
                                    />
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <input
                                        className='form-control form-control-lg'
                                        placeholder={"Model"}
                                        value={rent_model}
                                        onChange={this.handleChange("rent_model")}
                                    />
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <input
                                        className='form-control form-control-lg'
                                        placeholder={"Registration Tax(€)"}
                                        value={registration_tax}
                                        onChange={this.handleChange("registration_tax")}
                                    />
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-12 col-sm-12 col-12">
                                    <FormControl className="w-100">
                                        <Select
                                            value={registration_tax_type_id}
                                            displayEmpty
                                            onChange={this.handleChange("registration_tax_type_id")}
                                            input={<BootstrapInput/>}
                                        >
                                            <MenuItem value={""} disabled>Select Type of Registration Tax</MenuItem>
                                            {registrationTaxTypes.map(item =>
                                                <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <input
                                        className='form-control form-control-lg'
                                        placeholder={"Rental Fee(€)"}
                                        value={rental_fee}
                                        onChange={this.handleChange("rental_fee")}
                                    />
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <FormControl className="w-100">
                                        <Select
                                            value={payment_frequency_id}
                                            displayEmpty
                                            onChange={this.handleChange("payment_frequency_id")}
                                            input={<BootstrapInput/>}
                                        >
                                            <MenuItem value={""} disabled>Select Payment Frequency</MenuItem>
                                            {paymentFrequencies.map(item =>
                                                <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-12 col-sm-12 col-12">
                                    <input
                                        className='form-control form-control-lg'
                                        placeholder={"Storage Code"}
                                        value={storage_code}
                                        onChange={this.handleChange("storage_code")}
                                    />
                                </div>
                            </div>
                            <textarea
                                className="form-control form-control-lg" rows="6"
                                style={{
                                    width: "100%",
                                    height: 70,
                                    marginTop: 5,
                                    paddingHorizontal: 10,
                                    paddingVertical: 5
                                }}
                                placeholder="Note"
                                value={note}
                                onChange={this.handleChange("note")}
                            />

                            <div className="row mt-2 mb-2">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder={"Expiry Date"}
                                        value={expiry_date}
                                        onChange={this.handleChange("expiry_date")}
                                    >
                                        {(inputProps) => <input
                                            {...inputProps}
                                            className="form-control form-control-lg"
                                        />}
                                    </InputMask>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder={"Expiry Notice Date"}
                                        value={expiry_notice_date}
                                        onChange={this.handleChange("expiry_notice_date")}
                                    >
                                        {(inputProps) => <input
                                            {...inputProps}
                                            className="form-control form-control-lg"
                                        />}
                                    </InputMask>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder={"ISTAT Updating Date"}
                                        value={ISTAT_update_date}
                                        onChange={this.handleChange("ISTAT_update_date")}
                                    >
                                        {(inputProps) => <input
                                            {...inputProps}
                                            className="form-control form-control-lg"
                                        />}
                                    </InputMask>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder={"End Date"}
                                        value={end_date}
                                        onChange={this.handleChange("end_date")}
                                    >
                                        {(inputProps) => <input
                                            {...inputProps}
                                            className="form-control form-control-lg"
                                        />}
                                    </InputMask>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-box-footer d-flex flex-row">
                    <Button disabled={!this.isValid()} variant="contained" color="primary" onClick={() => {
                        this.handleSubmit();
                    }}>Save Rent</Button>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = ({users, contractType, registrationTaxType, paymentFrequency}) => {
    const {landlords, tenants} = users.users;
    const {contractTypes} = contractType;
    const {registrationTaxTypes} = registrationTaxType;
    const {paymentFrequencies} = paymentFrequency;
    return {
        landlords,
        tenants,
        contractTypes,
        registrationTaxTypes,
        paymentFrequencies,
    }
};
export default connect(mapStateToProps)(AddRent);
