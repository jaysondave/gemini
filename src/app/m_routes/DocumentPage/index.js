import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import dummyDoc from "./data/dummyDoc";
import DocumentList from "./DocumentList";
import AppModuleHeader from "components/AppModuleHeader/index";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import Drawer from "@material-ui/core/Drawer";
import NewDocument from "./NewDocument";


class DocumentPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No Document found",
      alertMessage: "",
      showMessage: false,
      drawerState: false,
      searchKey: "",
      documents: dummyDoc,
      isOpen: false,
    };
  }
  onDeleteRegister = (data) => {
    this.setState({
      alertMessage: "User is deleted successfully",
      showMessage: true,
      allUsers: this.state.allUsers.filter((register) => register.id !== data.id),
      registerList: this.state.allUsers.filter((register) => register.id !== data.id)
    });
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false
    });
  };
  showDocuments = ({ documents }) => {
    return (
      <DocumentList documents={documents}
                    onDeleteRegister={this.onDeleteRegister.bind(this)}
      />
    );
  };
  onSearch = (e) => {
    console.log("search key", e.target.value);
    this.setState({ searchKey: e.target.value });
  };

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  SideBar = () => {
    return <div className="module-side">
      <div className="module-side-header">
        <div className="module-logo">
          <span>Documents</span>
        </div>
      </div>

      <div className="module-side-content">
        <CustomScrollbars className="module-side-scroll scrollbar"
                          style={{ height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)" }}>
          <div className="module-add-task">
            <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                    onClick={this.onTapNew}>
              <span>{"New Document"}</span>
            </Button>
          </div>
        </CustomScrollbars>
      </div>
    </div>;

  };
  onClose = () => {
    this.setState({ isOpen: false });
  };
  onTapNew = () => {
    this.setState({ isOpen: true });
  };
  render() {
    const { documents, alertMessage, showMessage, noContentFoundMessage, isOpen } = this.state;
    return (
      <div className="app-wrapper">
        <div className="app-module animated slideInUpTiny animation-duration-3">
          <div className="d-block d-xl-none">
            <Drawer
              open={this.state.drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.SideBar()}
            </Drawer>
          </div>
          <div className="app-module-sidenav d-none d-xl-flex">
            {this.SideBar()}
          </div>
          <div className="module-box">
            <div className="module-box-header">
              <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                          onClick={this.onToggleDrawer.bind(this)}>
                <i className="zmdi zmdi-menu"/>
              </IconButton>
              <AppModuleHeader placeholder="Search document" notification={false} apps={false}
                               value={this.state.searchKey} onChange={this.onSearch}/>
            </div>
            <div className="module-box-content">
              <CustomScrollbars className="module-list-scroll scrollbar"
                                style={{ height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)" }}>
                {documents.length === 0 ?
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : this.showDocuments(this.state)
                }


              </CustomScrollbars>

            </div>
          </div>
        </div>
        {isOpen &&
        <NewDocument
          onClose={this.onClose}
          open={isOpen}
        />
        }
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={showMessage}
          autoHideDuration={3000}
          onClose={this.handleRequestClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{alertMessage}</span>}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { width } = settings;
  return { width };
};
export default connect(mapStateToProps)(DocumentPage);
