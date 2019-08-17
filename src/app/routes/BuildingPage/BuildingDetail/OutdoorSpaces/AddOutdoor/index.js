import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { DropzoneArea } from "material-ui-dropzone";
import BootstrapInput from "../../../../../../components/BootstrapInput";
import {connect} from "react-redux";

const conditions = ["Good", "Normal", "Bad"];
class AddOutdoor extends React.Component {

  handleSubmit = () => {
    const {
      component,
      sub_component,
      condition,
      name,
      note,
      files
    } = this.state;
    const { building_id, onSave } = this.props;
    console.log(files[0]);
    let body = new FormData();
    body.append("body[name]", name);
    body.append("body[component_id]", component);
    body.append("body[sub_component_id]", sub_component);
    body.append("body[condition]", condition);
    body.append("body[note]", note);
    body.append("body[building_id]", building_id);
    body.append("body[attachment]", files[0]);
    onSave(body);
  };
  isValid = () => {
    const { component, sub_component, condition, name, note, files } = this.state;
    return component !== "" &&
        sub_component !== "" &&
        condition !== ""  &&
        name !== ""  &&
        note !== ""  &&
        files !== null;
  };
  constructor(props) {
    super(props);
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      component: '',
      sub_component: '',
      condition: '',
      name: '',
      note: '',
      files: null
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeFile = (files) => {
    console.log(files);
    console.log(files[0]);
    this.setState({
      files: files
    });
  };
  render() {
    const { onSave, onClose, open, rent } = this.props;
    const {
      id,
      component,
      sub_component,
      condition,
      name,
      note
    } = this.state;
    const { allComponent, allSubComponent } = this.props;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "Insert Outdoor" :
            "Edit Outdoor"}
          <IconButton className="text-white"
            onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <form className="row" noValidate autoComplete="off">

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
                    <label className="align-center font-size-18">Component</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <Select
                          value={component}
                          onChange={this.handleChange("component")}
                          input={<BootstrapInput/>}
                      >
                        {allComponent.map(component =>
                            <MenuItem key={component.id} value={component.id}>{component.name}</MenuItem>
                        )}
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Sub Component</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <Select
                          value={sub_component}
                          onChange={this.handleChange("sub_component")}
                          input={<BootstrapInput/>}
                      >
                        {allSubComponent.map(sub_component =>
                            <MenuItem key={sub_component.id} value={sub_component.id}>{sub_component.name}</MenuItem>
                        )}
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right p-relative">
                    <label className="align-center font-size-18">Condition</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <Select
                          value={condition}
                          onChange={this.handleChange("condition")}
                          input={<BootstrapInput/>}
                      >
                        {conditions.map(condition =>
                            <MenuItem key={condition} value={condition}>{condition}</MenuItem>
                        )}
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right">
                    <label className="font-size-18">NOTE</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <FormControl className="w-100 mb-2">
                      <textarea
                          className="form-control form-control-lg" rows="6"
                          style={{ width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5 }}
                          placeholder="Description"
                          value={note}
                          onChange={this.handleChange("note")}
                      />
                    </FormControl>
                  </div>
                </div>

                <div className="row col-md-12 col-12 p-0 mb-2">
                  <div className="col-md-4 text-right">
                    <label className="font-size-18">Attachment</label>
                  </div>
                  <div className="col-md-8 p-0">
                    <DropzoneArea
                        filesLimit={1}
                        acceptedFiles={['image/jpeg', 'image/jpg', 'image/png', 'image/bmp']}
                        dropzoneText={'Drag and drop a file here or click'}
                        onChange={this.handleChangeFile}
                    />
                  </div>
                </div>

              </form>

            </div>
          </div>
        </div>
        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={!this.isValid()} variant="contained" color="primary" onClick={() => {
            this.handleSubmit()
          }}>Save Outdoor</Button>
        </div>
      </Modal>
    );
  }
}
const mapStateToProps = ({ component, subComponent }) => {
  const { allComponent } = component;
  const { allSubComponent } = subComponent;
  return {
    allComponent,
    allSubComponent
  };
};
export default connect(mapStateToProps)(AddOutdoor);
