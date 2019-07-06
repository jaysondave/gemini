import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import SearchBox from 'components/SearchBox';
import { DropzoneArea } from "material-ui-dropzone";

const users = [
  {image: 'https://via.placeholder.com/150x150', email: 'jhonsmith@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'stella02@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris0254@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02547878@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris0254788@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris025487@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris025478@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris025467@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris025456@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris025445@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris025434@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris0254234@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris025413@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris025412@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02540@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02549@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02548@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02547@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02546@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02545@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02544@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02543@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02542@example.com'},
  {image: 'https://via.placeholder.com/150x150', email: 'chrris02541@example.com'},
  ];

class AddExpert extends React.Component {
  constructor(props) {
    super(props);
    console.log({ AddRent: props });
    // const { id, type, province, city, part, areaMq, sectionRegister, name, fg, partFg, sub, partSub, category, kind, className, deduction, consistency, income, dominicalIncome, agriculturalIncome, conformity, registerationDate, dataFrom, address, heading, note } = props.cadastral;
    this.state = {
      id: "",
      selectedUser: null
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
  updateDate = name => (date) => {
    if (date) {
      this.setState({ [name]: this.formatDate(date.toLocaleDateString()) });
    }
  };
  formatDate = (d) => {
    let date = new Date(d);
    let reformattedDate = [
      date.getFullYear(),
      ("0" + (date.getMonth() + 1)).slice(-2),
      ("0" + date.getDate()).slice(-2)
    ].join('-');
    return reformattedDate;
  };
  render() {
    const { onSave, onClose, open, rent } = this.props;
    const {
      id,
      levelFloor,
      intend,
      files
    } = this.state;
    return (
      <Modal className="modal-box" isOpen={open}>
        <ModalHeader className="modal-box-header bg-primary text-white">
          <SearchBox styleName="d-none d-lg-block" placeholder=""
                     onChange={(e) => alert(e.target.value)}
                     value={''}/>
          <IconButton className="text-white"
                      onClick={() => onClose('addExpert')}>
            <CloseIcon/>
          </IconButton>
        </ModalHeader>

        <div className="modal-box-content over-flow-y pt-2 pb-3">
          <div className="row no-gutters">
            <div className="row col-md-12 col-12 p-0 mb-2">
              <ListItem >
                <ListItemAvatar>
                  <Avatar alt="user" src={''}/>
                </ListItemAvatar>
                <ListItemText primary={'aaa@a.com'}/>
              </ListItem>
            </div>

            <div className="row col-md-12 col-12 p-0 mb-2 bg-light" style={{ height: 1 }}/>

            <div className="row col-md-12 col-12 p-0 mb-2" style={{ height: 500}}>
                {users.map(user =>
                  <ListItem button onClick={() => alert(user.email)} key={user.email}>
                    <ListItemAvatar>
                      <Avatar alt="user" src={user.image}/>
                    </ListItemAvatar>
                    <ListItemText primary={user.email}/>
                  </ListItem>
                )}
            </div>

          </div>
        </div>

        <div className="modal-box-footer d-flex flex-row">
          <Button disabled={id === ""} variant="contained" color="primary" onClick={() => {
            onClose('addExpert');

          }}>Save</Button>
        </div>
      </Modal>
    );
  }
}

export default AddExpert;
