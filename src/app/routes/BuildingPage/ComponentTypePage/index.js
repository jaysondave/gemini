import React, {Component} from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import ComponentTypeList from "./ComponentTypeList";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddComponentType from "./AddComponentType";
import CustomScrollbars from "util/CustomScrollbars";
import {
    showLoader,
    createNewComponent,
    updateSelectedComponent,
    deleteSelectedComponent
} from "../../../../actions";
import ReactPaginate from "react-paginate";

class ComponentTypePage extends Component {
    SideBar = () => {
        return <div className="module-side">
            <div className="module-side-header">
                <div className="module-logo">
                    <span>Component</span>
                </div>
            </div>

            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                                  style={{height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)"}}>
                    <div className="module-add-task">
                        <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                                onClick={this.onAdd}>
                            <span>{"New Component"}</span>
                        </Button>
                    </div>
                </CustomScrollbars>
            </div>
        </div>;

    };

    onAdd = () => {
        this.setState({selectedItem: {}, addState: true});
    };
    onEdit = (item) => {
      this.setState({selectedItem: item, addState: true});
    };
    onClose = () => {
        this.setState({addState: false, selectedItem: {}});
    };
    onSave = (name) => {
        this.setState({addState: false});
        const body = {
          component: { name }
        };
        this.props.dispatch(showLoader());
        this.props.dispatch(createNewComponent(body))
    };
    onUpdate = (name) => {
        const { selectedItem } = this.state;
        const { id } = selectedItem;
        const body = {
            component: { name }
        };
        this.setState({addState: false, selectedItem: {}});
        this.props.dispatch(showLoader());
        this.props.dispatch(updateSelectedComponent(id, body))
    };
    onUpdateActive = (id, active) => {
        const body = {
            component: { active }
        };
        this.setState({addState: false, selectedItem: {}});
        this.props.dispatch(showLoader());
        this.props.dispatch(updateSelectedComponent(id, body))
    };
    onDelete = (id) => {
        this.props.dispatch(showLoader());
        this.props.dispatch(deleteSelectedComponent(id))
    };

    onToggleDrawer() {
        this.setState({
            drawerState: !this.state.drawerState
        });
    }

    showBuildings = (data, selectedPageNum, numPerPage) => {
        const dataList = data.slice(selectedPageNum*numPerPage, (selectedPageNum + 1)*numPerPage);
        return (
            <ComponentTypeList
                selectedPageNum={selectedPageNum}
                data={dataList}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
                onUpdateActive={this.onUpdateActive}
            />
        );
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
    constructor(props) {
        super(props);
        this.state = {
            noContentFoundMessage: "No Body Type found",
            alertMessage: "",
            showMessage: false,
            drawerState: false,
            searchKey: "",
            addState: false,
            selectedItem: {},

            selectPageNum: 0,
            numPerPage: 10
        };
    }

    render() {
        const {
            addState,
            selectedItem,
            alertMessage,
            showMessage,
            noContentFoundMessage,
            searchKey,
            selectPageNum,
            numPerPage
        } = this.state;
        const {allComponent} = this.props;
        const dataList = searchKey === ""?allComponent: this.filterData(allComponent, searchKey);
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
                                             value={this.state.searchKey} onChange={this.onSearch}/>
                        </div>
                        <div className="module-box-content">
                            <CustomScrollbars className="module-list-scroll scrollbar"
                                              style={{height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)"}}>
                                <div className="contact-item module-list-item">
                                    <div className="d-flex f-1 flex-wrap">
                                        <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
                                            <div className="align-center">{""}</div>
                                        </div>
                                        <div className="col con-inf-mw-100 f-3 position-relative">
                                            <div className="text-dark align-center text-bold">
                                                {"Name"}
                                            </div>
                                        </div>

                                        <div className="col con-inf-mw-100 f-1 position-relative">
                                            <div className="text-dark align-center text-bold">
                                                {"Active"}
                                            </div>
                                        </div>
                                        <div className="col con-inf-mw-100 f-1 position-relative">
                                            <div className="text-dark align-center text-bold">
                                                {"Delete"}
                                            </div>
                                        </div>
                                        <div className="col con-inf-mw-100 f-1 position-relative">
                                            <div className="text-dark align-center text-bold">
                                                {"Edit"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {allComponent.length === 0 ?
                                    <div className="h-100 d-flex align-items-center justify-content-center">
                                        {noContentFoundMessage}
                                    </div>
                                    : this.showBuildings(dataList, selectPageNum, numPerPage)
                                }


                            </CustomScrollbars>
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={<a className="page-link">...</a>}
                                pageCount={dataList.length/numPerPage}
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
                {addState &&
                <AddComponentType
                    open={addState}
                    item={selectedItem}
                    onClose={this.onClose}
                    onSave={this.onSave}
                    onUpdate={this.onUpdate}
                />
                }
                <Snackbar
                    anchorOrigin={{vertical: "top", horizontal: "center"}}
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

const mapStateToProps = ({settings, component}) => {
    const {width} = settings;
    const {allComponent} = component;
    return {width, allComponent};
};
export default connect(mapStateToProps)(ComponentTypePage);
