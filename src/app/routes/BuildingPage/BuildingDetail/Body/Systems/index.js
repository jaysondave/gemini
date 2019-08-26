import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import AppModuleHeader from "components/AppModuleHeader/index";
import CustomScrollbars from "util/CustomScrollbars";
import AddSystem from "../AddSystem";
import SystemList from "./SystemList";
import {
  createNewFloor, createNewSystem,
  fetchFloors,
  fetchSystems,
  fetchTargets,
  showLoader,
  updateFloor, updateSystem
} from "../../../../../../actions";
import ReactPaginate from "react-paginate";


class SystemsList extends Component {

  SideBar = () => {
    return <div className="module-side">
      <div className="module-side-header">
        <div className="module-logo">
          <span>System</span>
        </div>
      </div>
 
      <div className="module-side-content">
        <CustomScrollbars className="module-side-scroll scrollbar"
                          style={{ height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)" }}>
          <div className="module-add-task">
            <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                    onClick={this.onAddSystem}>
              <span>{"New System"}</span>
            </Button>
          </div>
        </CustomScrollbars>
      </div>
    </div>;

  };
  onSystemClose = () => {
    this.setState({ addSystem: false });
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false
    });
  };

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  onAddSystem = () => {
    this.setState({ addSystem: true });
  };
  onEdit = (item) => {
    this.setState({selectedItem: item, addSystem: true});
  };
  onSave = (data) => {
    this.setState({addSystem: false});
    this.props.dispatch(showLoader());
    this.props.dispatch(createNewSystem(data));
  };
  onUpdate = (body) => {
    this.setState({addSystem: false, selectedItem: {}});
    this.props.dispatch(showLoader());
    this.props.dispatch(updateSystem(body.id, body));
  };
  onDelete = () => {
    this.setState({addSystem: false, selectedItem: {}});
  };
  onClose = () => {
    this.setState({addSystem: false, selectedItem: {}});
  };
  showList = (data, selectedPageNum, numPerPage) => {
    const dataList = data.slice(selectedPageNum * numPerPage, (selectedPageNum + 1) * numPerPage);
    return <SystemList
        data={dataList}
        onEdit={this.onEdit}
        onDelete={this.onDelete}
    />;
  };
  onSearch = (e) => {
    this.setState({searchKey: e.target.value, selectPageNum: 0})
  };
  filterData = (data, searchKey) => {
    return data.filter((c) =>
        c.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
    );
  };
  handlePageClick = data => {
    const selectPageNum = data.selected;
    this.setState({selectPageNum});
  };

  componentDidMount() {
    this.props.dispatch(fetchSystems(this.getBodyId()));
  }
  getBodyId = () => {
    const url = this.props.match.url;
    const url_array = url.split('/');
    return url_array[url_array.length - 2];
  };

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No body found in this building",
      alertMessage: "",
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      searchUser: "",
      addSystem: false,
      selectedItem: {},

      selectPageNum: 0,
      numPerPage: 10
    };
  }
  render() {
    const {
      searchKey,
      addSystem,
      alertMessage,
      showMessage,
      noContentFoundMessage,
      selectedItem,
      selectPageNum,
      numPerPage
    } = this.state;
    const {systems} = this.props;
    const dataList = systems;
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
              <AppModuleHeader placeholder="Search here..." notification={false} apps={false}
                               onChange={this.onSearch}
                               value={searchKey}/>
            </div>
            <div className="module-box-content">
              <div className="module-box-topbar">
                <IconButton className="icon-btn"
                            onClick={() => {this.props.history.goBack();}}>
                  <i className="zmdi zmdi-arrow-back"/>
                </IconButton>

              </div>
              <CustomScrollbars className="module-list-scroll scrollbar"
                                style={{ height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)" }}>
                {dataList == null || dataList.length === 0 ?
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : this.showList(dataList, selectPageNum, numPerPage)
                }


              </CustomScrollbars>
              <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={<a className="page-link">...</a>}
                  pageCount={dataList.length / numPerPage}
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
        {addSystem &&
        <AddSystem
            open={addSystem}
            item={selectedItem}
            body_id={this.getBodyId()}
            onSave={this.onSave}
            onUpdate={this.onUpdate}
            onClose={this.onClose}
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
        /></div>
    );
  }
}

const mapStateToProps = ({ settings, system }) => {
  const { width } = settings;
  const { systems } = system;
  return { width, systems };
};
export default withRouter(connect(mapStateToProps)(SystemsList));

