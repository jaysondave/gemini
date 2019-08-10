import React from "react";
import {Modal, ModalHeader} from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Select from "@material-ui/core/Select";
import BootstrapInput from "../../../../../../components/BootstrapInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

class AddBody extends React.Component {
  tapSaveBtn = () => {
    const {id, body_type_id, name, address, zip_code, province, city, cod_fisc} = this.state;
    const {onSave, onUpdate, item} = this.props;
    if (item.id) {
      onUpdate({id, body_type_id, name, address, province, zip_code, city, cod_fisc})
    } else {
      onSave({body_type_id, name, address, province, zip_code, city, cod_fisc});
    }
    this.initValue();
  };
    initValue = () => {
        this.setState({
            body_type_id: "",
            name: '',
            address: '',
            zip_code: '',
            city: '',
            province: '',
            cod_fisc: ''
        });
    };
  validate = () => {
    const {body_type_id, name, address, zip_code, city, province, cod_fisc} = this.state;
    const { item } = this.props;
    if (item.id) {
      return body_type_id === item.body_type_id &&
          name === item.name &&
          address === item.address &&
          zip_code === item.zip_code &&
          city === item.city &&
          province === item.province &&
          cod_fisc === item.cod_fisc
    } else {
      return !body_type_id ||
          !name ||
          !address ||
          !zip_code ||
          !city ||
          !province ||
          !cod_fisc
    }

  };
    constructor(props) {
        super(props);
        const {id, body_type_id, name, address, zip_code, city, province, cod_fisc} = this.props.item;
        this.state = {
            id,
            body_type_id: body_type_id ? body_type_id : "",
            name: name ? name : "",
            address: address ? address : "",
            zip_code: zip_code ? zip_code : "",
            city: city ? city : "",
            province: province ? province : "",
            cod_fisc: cod_fisc ? cod_fisc : "",
        };
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        const {item, open, onClose} = this.props;
        const {id, body_type_id, name, address, zip_code, city, province, code_fisc} = this.state;
        const {allBodyType} = this.props;
        return (
            <Modal className="modal-box" isOpen={open}>
                <ModalHeader className="modal-box-header bg-primary text-white">
                    {item.name === "" ? "Edit Body" :
                        "Save Body"}
                    <IconButton className="text-white"
                                onClick={() => {
                                    this.initValue();
                                    onClose();
                                }}>
                        <CloseIcon/>
                    </IconButton>
                </ModalHeader>

                <div className="modal-box-content">
                    <div className="row no-gutters">
                        <div className="col-lg-12 d-flex flex-column order-lg-1">
                            <form className="row" noValidate autoComplete="off">
                                <div className="row col-md-12 col-12 p-0 mb-2">
                                    <div className="col-md-4 text-right p-relative">
                                        <label className="align-center font-size-18">Type</label>
                                    </div>
                                    <div className="col-md-8 p-0">
                                        <FormControl className="w-100 mb-2">
                                            <Select
                                                value={body_type_id}
                                                onChange={this.handleChange("body_type_id")}
                                                input={<BootstrapInput/>}
                                            >
                                                {allBodyType.map(type =>
                                                    <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
                                                )}
                                            </Select>
                                        </FormControl>

                                    </div>
                                </div>

                                <div className="row col-md-12 col-12 p-0 mb-2">
                                    <div className="col-md-4 text-right p-relative">
                                        <label className="align-center font-size-18">Name</label>
                                    </div>
                                    <div className="col-md-8 p-0">
                                        <input
                                            value={name}
                                            onChange={this.handleChange("name")}
                                            className='form-control form-control-lg'
                                        />
                                    </div>
                                </div>

                                <div className="row col-md-12 col-12 p-0 mb-2">
                                    <div className="col-md-4 text-right p-relative">
                                        <label className="align-center font-size-18">Address</label>
                                    </div>
                                    <div className="col-md-8 p-0">
                                        <input
                                            value={address}
                                            onChange={this.handleChange("address")}
                                            className='form-control form-control-lg'
                                        />
                                    </div>
                                </div>

                                <div className="row col-md-12 col-12 p-0 mb-2">
                                    <div className="col-md-4 text-right p-relative">
                                        <label className="align-center font-size-18">Zip Code</label>
                                    </div>
                                    <div className="col-md-8 p-0">
                                        <input
                                            value={zip_code}
                                            onChange={this.handleChange("zip_code")}
                                            className='form-control form-control-lg'
                                        />
                                    </div>
                                </div>

                                <div className="row col-md-12 col-12 p-0 mb-2">
                                    <div className="col-md-4 text-right p-relative">
                                        <label className="align-center font-size-18">City</label>
                                    </div>
                                    <div className="col-md-8 p-0">
                                        <input
                                            value={city}
                                            onChange={this.handleChange("city")}
                                            className='form-control form-control-lg'
                                        />
                                    </div>
                                </div>

                                <div className="row col-md-12 col-12 p-0 mb-2">
                                    <div className="col-md-4 text-right p-relative">
                                        <label className="align-center font-size-18">Fiscal Code</label>
                                    </div>
                                    <div className="col-md-8 p-0">
                                        <input
                                            value={code_fisc}
                                            onChange={this.handleChange("code_fisc")}
                                            className='form-control form-control-lg'
                                        />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                <div className="modal-box-footer d-flex flex-row">
                    <Button disabled={this.validate()} variant="contained" color="primary" onClick={() => {
                      this.tapSaveBtn();
                    }}>Save Body</Button>
                </div>
            </Modal>
        );
    }
}

export default AddBody;
