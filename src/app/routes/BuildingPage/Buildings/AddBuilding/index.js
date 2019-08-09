import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import BootstrapInput from "../../../../../components/BootstrapInput";
import {connect} from "react-redux";

class AddBuilding extends React.Component {
  tapSaveBtn = () => {
    const { name } = this.state;
    const { onSave, onUpdate, item } = this.props;
    if (item.name) {
      onUpdate(name)
    } else {
      onSave(name)
    }
    this.setState({name: null});
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  constructor(props) {
    super(props);
    console.log({ addBuilding: props });
    const { id, building_type_id, name, address, zip_code, city, province, cod_fisc } = props.building;
    this.state = {
      id,
      building_type_id,
      name,
      address,
      zip_code,
      city,
      province,
      cod_fisc
    };
  }

  render() {
    const { onSave, onClose, onDelete, open, building } = this.props;
    const { id, building_type_id, name, address, zip_code, city, province, cod_fisc } = this.state;
    const { allBuildingType } = this.props;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {building.name === "" ? "Add Building" :
            "Save Building"}
          <IconButton className="text-white"
                      onClick={onClose}>
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
                          value={building_type_id}
                          onChange={this.handleChange("category_id")}
                          input={<BootstrapInput/>}
                      >
                        {allBuildingType.map(type =>
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
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Zip code</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
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
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Province</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <input
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
                      className='form-control form-control-lg'
                    />
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={name === ""} variant="contained" color="primary" onClick={() => {
            onClose();

          }}>Save Building</Button>
        </div>
      </Modal>
    );
  }
}
const mapsToProps = ({buildingType}) => {
  const { allBuildingType } = buildingType;
  return { allBuildingType };
};
export default connect(mapsToProps)(AddBuilding);
