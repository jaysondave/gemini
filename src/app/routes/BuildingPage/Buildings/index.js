import React, {Component} from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import BuildingList from "./BuildingList";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddBuilding from "../Buildings/AddBuilding";
import CustomScrollbars from "util/CustomScrollbars";
import {
    createNewBuilding,
    deleteBuilding,
    fetchBuildings,
    showLoader,
    updateBuilding,
} from "../../../../actions";
import ReactPaginate from "react-paginate";


class BuildingPage extends Component {


    BuildingSideBar = () => {
        return <div className="module-side">
            <div className="module-side-header">
                <div className="module-logo">
                    <span>BUILDING</span>
                </div>
            </div>

            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                                  style={{height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)"}}>
                    <div className="module-add-task">
                        <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                                onClick={this.onAddBuilding}>
                            <span>{"Add New Building"}</span>
                        </Button>
                    </div>
                </CustomScrollbars>
            </div>
        </div>;

    };

    onAddBuilding = () => {
        this.setState({addState: true});
    };
    onBuildingClose = () => {
        this.setState({addState: false, selectedItem: {}});
    };
    onSaveBuilding = (data) => {
        this.setState({addState: false});
        this.props.dispatch(showLoader());
        this.props.dispatch(createNewBuilding(data))
    };

    onEdit = (item) => {
        this.setState({selectedItem: item, addState: true});
    };
    onDelete = (id) => {
        this.props.dispatch(showLoader());
        this.props.dispatch(deleteBuilding(id))
    };
    onUpdate = (body) => {
        this.setState({addState: false, selectedItem: {}});
        this.props.dispatch(showLoader());
        this.props.dispatch(updateBuilding(body.id, {building: body}))
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

    showBuildings = (data, selectedPageNum, numPerPage) => {
        const dataList = data.slice(selectedPageNum * numPerPage, (selectedPageNum + 1) * numPerPage);
        return (
            <BuildingList
                data={dataList}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
            />
        );
    };
    onSearch = (e) => {
        this.setState({searchKey: e.target.value, selectPageNum: 0})
    };
    filterData = (data, searchKey) => {
        return data.filter((c) =>
            c.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || c.building_code.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
        );
    };
    handlePageClick = data => {
        const selectPageNum = data.selected;
        this.setState({selectPageNum});
    };

    componentDidMount() {
        this.props.dispatch(fetchBuildings());
    }

    constructor(props) {
        super(props);
        this.state = {
            noContentFoundMessage: "No building found",
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
        const {addState, alertMessage, showMessage, noContentFoundMessage, searchKey, selectPageNum, numPerPage, selectedItem} = this.state;
        const {buildings} = this.props;
        const dataList = searchKey === "" ? buildings : this.filterData(buildings, searchKey);
        return (
            <div className="app-wrapper">
                <div className="app-module animated slideInUpTiny animation-duration-3">

                    <div className="d-block d-xl-none">
                        <Drawer
                            open={this.state.drawerState}
                            onClose={this.onToggleDrawer.bind(this)}>
                            {this.BuildingSideBar()}
                        </Drawer>
                    </div>
                    <div className="app-module-sidenav d-none d-xl-flex">
                        {this.BuildingSideBar()}
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

                                {buildings.length === 0 ?
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
                {addState &&
                <AddBuilding
                    open={addState}
                    item={selectedItem}
                    onSave={this.onSaveBuilding}
                    onUpdate={this.onUpdate}
                    onClose={this.onBuildingClose}/>
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

const mapStateToProps = ({settings, building}) => {
    const {width} = settings;
    const {buildings} = building;
    return {width, buildings};
};
export default connect(mapStateToProps)(BuildingPage);
