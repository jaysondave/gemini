import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import registerList from "../../data/registerList";
import RegisterList from "../../RegisterList";
import AppModuleHeader from "components/AppModuleHeader/index";
import CustomScrollbars from "util/CustomScrollbars";
import Drawer from "@material-ui/core/Drawer";
import NewRegister from "../../NewRegister";
import ReactPaginate from "react-paginate";


class Professional extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No Professional found",
      alertMessage: "",
      showMessage: false,
      drawerState: false,
      searchKey: "",
      currentRegister: null,
      selectedRegister: null,
      selectedRegisters: 0,
      addBuildingState: false,
      isOpen: false,

      selectPageNum: 0,
      numPerPage: 5
    };
  }


  handleRequestClose = () => {
    this.setState({
      showMessage: false
    });
  };

  showRegisters = (registerList, selectedPageNum, numPerPage) => {
    const users = registerList.slice(selectedPageNum*numPerPage, (selectedPageNum + 1)*numPerPage);
    return (
        <RegisterList
            registerList={users}
        />
    );
  };
  onSearch = (e) => {
    this.setState({ searchKey: e.target.value, selectPageNum: 0 });
  };

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  RegisterSideBar = () => {
    return <div className="module-side">
      <div className="module-side-header">
        <div className="module-logo">
          <span>Professional</span>
        </div>
      </div>

      <div className="module-side-content">
        <CustomScrollbars className="module-side-scroll scrollbar"
                          style={{ height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)" }}>
          <div className="module-add-task">
            <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                    onClick={this.onTapNewRegister}>
              <span>{"New Professional"}</span>
            </Button>
          </div>
        </CustomScrollbars>
      </div>
    </div>;

  };
  onRegisterClose = () => {
    this.setState({ isOpen: false });
  };
  onTapNewRegister = () => {
    this.setState({ isOpen: true });
  };
  filterUsers = (users, userName) => {
    return users.filter((user) =>
        (user.first_name + " " + user.last_name).toLowerCase().indexOf(userName.toLowerCase()) > -1
    );
  };
  handlePageClick = data => {
    const selectPageNum = data.selected;
    this.setState({selectPageNum});
  };
  render() {
    const { alertMessage, showMessage, noContentFoundMessage, isOpen, selectedRegister, searchKey, selectPageNum, numPerPage } = this.state;
    const { professionals } = this.props;
    const users = searchKey === ""?professionals: this.filterUsers(professionals, searchKey);
    return (
      <div className="app-wrapper">
        <div className="app-module animated slideInUpTiny animation-duration-3">
          <div className="d-block d-xl-none">
            <Drawer
              open={this.state.drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.RegisterSideBar()}
            </Drawer>
          </div>
          <div className="app-module-sidenav d-none d-xl-flex">
            {this.RegisterSideBar()}
          </div>
          <div className="module-box">
            <div className="module-box-header">
              <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                          onClick={this.onToggleDrawer.bind(this)}>
                <i className="zmdi zmdi-menu"/>
              </IconButton>
              <AppModuleHeader placeholder="Search professional" notification={false} apps={false}
                               value={searchKey} onChange={this.onSearch}/>
            </div>
            <div className="module-box-content">
              <div className="module-box-topbar">
              </div>

              <CustomScrollbars className="module-list-scroll scrollbar"
                                style={{ height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)" }}>
                {users.length === 0 ?
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : this.showRegisters(users, selectPageNum, numPerPage)
                }
              </CustomScrollbars>
              <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={<a className="page-link">...</a>}
                  pageCount={users.length/numPerPage}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName="pagination justify-content-center"
                  pageClassName="page-item"
                  activeClassName="active"
                  disabledClassName="disabled"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakClassName="page-item disabled"
              />
            </div>
          </div>
        </div>
        {isOpen &&
        <NewRegister
          user_type={'professional'}
          onRegisterClose={this.onRegisterClose}
          open={isOpen}
          register={selectedRegister}
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

const mapStateToProps = ({ settings, users }) => {
  const { width } = settings;
  const { professionals } = users.users
  return { width, professionals };
};
export default connect(mapStateToProps)(Professional);
