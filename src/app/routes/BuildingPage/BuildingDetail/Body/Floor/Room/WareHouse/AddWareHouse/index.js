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
import IntlMessages from "util/IntlMessages";
import { DropzoneArea } from "material-ui-dropzone";

class AddWareHouse extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddRent: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      intend: "",
      files: null
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeFile = (files) => {
    console.log(files);
    this.setState({
      files: files
    });
  };

  render() {
    const { onSave, onClose, open, rent } = this.props;
    const {
      id,
      intend,
      files
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {id === "" ? "New WareHouse" :
            "Edit WareHouse"}
          <IconButton className="text-white"
            onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">WareHouse Location</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <Select
                    value={intend}
                    onChange={this.handleChange("intend")}
                    input={<Input />}
                  >
                    <MenuItem value={"intend1"}>OFFICIES</MenuItem>
                    <MenuItem value={"intend2"}>RESIDENTIAL</MenuItem>
                    <MenuItem value={"intend3"}>SCHOOL</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Category</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <Select
                    value={intend}
                    onChange={this.handleChange("intend")}
                    input={<Input />}
                  >
                    <MenuItem value={"intend1"}>OFFICIES</MenuItem>
                    <MenuItem value={"intend2"}>RESIDENTIAL</MenuItem>
                    <MenuItem value={"intend3"}>SCHOOL</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Tipology</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <Select
                    value={intend}
                    onChange={this.handleChange("intend")}
                    input={<Input />}
                  >
                    <MenuItem value={"intend1"}>OFFICIES</MenuItem>
                    <MenuItem value={"intend2"}>RESIDENTIAL</MenuItem>
                    <MenuItem value={"intend3"}>SCHOOL</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Description</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <Select
                    value={intend}
                    onChange={this.handleChange("intend")}
                    input={<Input />}
                  >
                    <MenuItem value={"intend1"}>OFFICIES</MenuItem>
                    <MenuItem value={"intend2"}>RESIDENTIAL</MenuItem>
                    <MenuItem value={"intend3"}>SCHOOL</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Furnisher</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <Select
                    value={intend}
                    onChange={this.handleChange("intend")}
                    input={<Input />}
                  >
                    <MenuItem value={"intend1"}>OFFICIES</MenuItem>
                    <MenuItem value={"intend2"}>RESIDENTIAL</MenuItem>
                    <MenuItem value={"intend3"}>SCHOOL</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Brand</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <Select
                    value={intend}
                    onChange={this.handleChange("intend")}
                    input={<Input />}
                  >
                    <MenuItem value={"intend1"}>OFFICIES</MenuItem>
                    <MenuItem value={"intend2"}>RESIDENTIAL</MenuItem>
                    <MenuItem value={"intend3"}>SCHOOL</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Model</label>
              </div>
              <div className="col-md-8 p-0">
                <FormControl className="w-100 mb-2">
                  <Select
                    value={intend}
                    onChange={this.handleChange("intend")}
                    input={<Input />}
                  >
                    <MenuItem value={"intend1"}>OFFICIES</MenuItem>
                    <MenuItem value={"intend2"}>RESIDENTIAL</MenuItem>
                    <MenuItem value={"intend3"}>SCHOOL</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Inventory N.</label>
              </div>
              <div className="col-md-2 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={''}
                    onChange={this.handleChange("levelFloor")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Serial N</label>
              </div>
              <div className="col-md-2 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={''}
                    onChange={this.handleChange("levelFloor")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Height(Cm)</label>
              </div>
              <div className="col-md-2 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={''}
                    onChange={this.handleChange("levelFloor")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Width(Cm)</label>
              </div>
              <div className="col-md-2 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={''}
                    onChange={this.handleChange("levelFloor")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Length(Cm)</label>
              </div>
              <div className="col-md-2 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={''}
                    onChange={this.handleChange("levelFloor")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Weight(Kg)</label>
              </div>
              <div className="col-md-2 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={''}
                    onChange={this.handleChange("levelFloor")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Invoice Code</label>
              </div>
              <div className="col-md-2 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={''}
                    onChange={this.handleChange("levelFloor")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Purchase Price</label>
              </div>
              <div className="col-md-2 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={''}
                    onChange={this.handleChange("levelFloor")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Market Value</label>
              </div>
              <div className="col-md-2 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={''}
                    onChange={this.handleChange("levelFloor")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
              <div className="col-md-4 text-right p-relative">
                <label className="align-center font-size-18">Purchase Date</label>
              </div>
              <div className="col-md-2 p-0">
                <FormControl className="w-100 mb-2">
                  <TextField
                    value={''}
                    onChange={this.handleChange("levelFloor")}
                    fullWidth
                    margin="none" />
                </FormControl>
              </div>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="font-size-18">Note</label>
              </div>
              <div className="col-md-8 p-0">
              <textarea style={{
                  width: "100%",
                  height: 70,
                  marginTop: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 5
                }}
                  value={''}
                  placeholder="Note"
                  onChange={this.handleChange("note")}
                />
              </div>
            </div>


            <div className="row col-md-12 col-12 p-0 mb-2">
              <div className="col-md-4 text-right p-relative">
                <label className="font-size-18">Picture</label>
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
          <Button disabled={id === ""} variant="contained" color="primary" onClick={() => {
            onClose();

          }}>Save WareHouse</Button>
        </div>
      </Modal>
    );
  }
}

export default AddWareHouse;
