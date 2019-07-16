import React, { Component } from "react";
import PropTypes from "prop-types";

import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";

class ChangePhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {  } = this.state;
    const {open, onClose} = this.props;
    return (
      <Modal className="modal-box w-25" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          {"Change Phone"}
          <IconButton className="text-white"
                      onClick={() => onClose('changePhone')}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content">
          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column order-lg-1">
              <div className="row mt-2">
                <div className="col-lg-12 col-sm-12 col-12 d-flex">
                  <input
                    className='form-control form-control-lg'
                    placeholder="Change PhoneNumber"
                    type="tel"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button variant="contained" color="primary" onClick={() => {
            onClose('changePhone');
          }}>Change Phone</Button>
        </div>
      </Modal>
    );
  }


}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: "relative",
    width: "100%",
    marginTop: 5
  },
  suggestionsContainerOpen: {
    position: "absolute",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
    zIndex: 10
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  }
});



ChangePhone.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChangePhone);
