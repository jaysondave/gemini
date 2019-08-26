import React from "react";
import {Modal, ModalHeader} from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {DropzoneArea} from 'material-ui-dropzone'

class AddSystem extends React.Component {
    handleSubmit = () => {
        const {
            component,
            brand,
            system_model,
            description,
            files
        } = this.state;
        const {body_id, onSave} = this.props;
        console.log(files[0]);
        let body = new FormData();
        body.append("body[component]", component);
        body.append("body[brand]", brand);
        body.append("body[system_model]", system_model);
        body.append("body[description]", description);
        body.append("body[body_id]", body_id);
        body.append("body[attachment]", files[0]);
        onSave(body);
    };
    isValid = () => {
        const {
            component,
            brand,
            system_model,
            description,
            files
        } = this.state;
        return component !== "" &&
            brand !== "" &&
            system_model !== "" &&
            description !== "" &&
            files !== null;
    };
    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };
    handleChangeFile = (files) => {
        console.log(files);
        this.setState({
          files: files
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            component: "",
            brand: "",
            system_model: "",
            description: "",
            files: null
        };
    }

    render() {
        const {onSave, onClose, open, system} = this.props;
        const {
            id,
            component,
            brand,
            system_model,
            description
        } = this.state;
        return (
            <Modal className="modal-box" isOpen={open}>
                <ModalHeader className="modal-box-header bg-primary text-white">
                    {id === "" ? "Insert System" :
                        "Edit System"}
                    <IconButton className="text-white"
                                onClick={() => onClose()}>
                        <CloseIcon/>
                    </IconButton>
                </ModalHeader>

                <div className="modal-box-content">
                    <div className="row no-gutters">
                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">Component</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <input
                                    className='form-control form-control-lg'
                                    value={component}
                                    onChange={this.handleChange("component")}
                                />
                            </div>
                        </div>
                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">Brand</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <input
                                    className='form-control form-control-lg'
                                    value={brand}
                                    onChange={this.handleChange("brand")}
                                />
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">Model</label>
                            </div>
                            <div className="col-md-8 p-0">
                                <input
                                    className='form-control form-control-lg'
                                    value={system_model}
                                    onChange={this.handleChange("system_model")}
                                />
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">Description</label>
                            </div>
                            <div className="col-md-8 p-0">
                              <textarea
                                  className="form-control form-control-lg" rows="6"
                                  style={{width: "100%", height: 70, marginTop: 5, paddingHorizontal: 10, paddingVertical: 5}}
                                  value={description}
                                  placeholder="Description"
                                  onChange={this.handleChange("description")}
                              />
                            </div>
                        </div>

                        <div className="row col-md-12 col-12 p-0 mb-2">
                            <div className="col-md-4 text-right p-relative">
                                <label className="align-center font-size-18">Image</label>
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
                    }}>Save System</Button>
                </div>
            </Modal>
        );
    }
}

export default AddSystem;
