import React, {Component} from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import CategoryList from "./CategoryList";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddCategory from "./AddCategory";
import CustomScrollbars from "util/CustomScrollbars";
import {fetchCategories} from 'actions/Category'
import {showLoader} from 'actions/Alert'
import {createNewCategory, updateSelectedCategory, deleteSelectedCategory} from "actions/Category";
import Checkbox from "@material-ui/core/Checkbox";
import ReactPaginate from "react-paginate";

class CategoryPage extends Component {
    SideBar = () => {
        return <div className="module-side">
            <div className="module-side-header">
                <div className="module-logo">
                    <span>CATEGORIES</span>
                </div>
            </div>

            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                                  style={{height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)"}}>
                    <div className="module-add-task">
                        <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                                onClick={this.onAddCategory}>
                            <span>{"New Category"}</span>
                        </Button>
                    </div>
                </CustomScrollbars>
            </div>
        </div>;

    };

    onAddCategory = () => {
        this.setState({selectedCategory: {}, addCategoryState: true});
    };
    onEditCategory = (category) => {
      this.setState({selectedCategory: category, addCategoryState: true});
    };
    onClose = () => {
        this.setState({addCategoryState: false, selectedCategory: {}});
    };
    onSave = (name, category_type) => {
        this.setState({addCategoryState: false});
        const body = {
          category: { name, category_type }
        };
        this.props.dispatch(showLoader());
        this.props.dispatch(createNewCategory(body))
    };
    onUpdate = (name) => {
        const { selectedCategory } = this.state;
        const { id } = selectedCategory;
        const body = {
            category: { name }
        };
        this.setState({addCategoryState: false, selectedCategory: {}});
        this.props.dispatch(showLoader());
        this.props.dispatch(updateSelectedCategory(id, body))
    };
    onUpdateActive = (id, active) => {
        const body = {
            category: { active }
        };
        this.setState({addCategoryState: false, selectedCategory: {}});
        this.props.dispatch(showLoader());
        this.props.dispatch(updateSelectedCategory(id, body))
    };
    onDelete = (id) => {
        this.props.dispatch(showLoader());
        this.props.dispatch(deleteSelectedCategory(id))
    };

    onAllBuildingSelect() {
        const selectAll = this.state.selectedbuildings < this.state.buildingList.length;
        if (selectAll) {
            this.getAllBuilding();
        } else {
            this.getUnselectedAllBuilding();
        }
    }


    onToggleDrawer() {
        this.setState({
            drawerState: !this.state.drawerState
        });
    }

    showBuildings = (categories, selectedPageNum, numPerPage) => {
        const categoryList = categories.slice(selectedPageNum*numPerPage, (selectedPageNum + 1)*numPerPage);
        return (
            <CategoryList
                selectedPageNum={selectedPageNum}
                categories={categoryList}
                onEditCategory={this.onEditCategory}
                onDelete={this.onDelete}
                onUpdateActive={this.onUpdateActive}
            />
        );
    };
    onSearch = (e) => {
        this.setState({searchKey: e.target.value, selectPageNum: 0})
    };
    filterCategories = (categories, searchKey) => {
        return categories.filter((c) =>
            c.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
        );
    };
    constructor(props) {
        super(props);
        this.state = {
            noContentFoundMessage: "No Category found",
            alertMessage: "",
            showMessage: false,
            drawerState: false,
            searchKey: "",
            addCategoryState: false,
            selectedCategory: {},

            selectPageNum: 0,
            numPerPage: 10
        };
    }

    render() {
        const {
            addCategoryState,
            selectedCategory,
            alertMessage,
            showMessage,
            noContentFoundMessage,
            searchKey,
            selectPageNum,
            numPerPage
        } = this.state;
        const {allCategory} = this.props;
        const categoryList = searchKey === ""?allCategory: this.filterCategories(allCategory, searchKey);
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
                                        <div className="col con-inf-mw-100 f-3 position-relative">
                                            <div className="text-dark align-center text-bold">
                                                {"Type"}
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
                                {allCategory.length === 0 ?
                                    <div className="h-100 d-flex align-items-center justify-content-center">
                                        {noContentFoundMessage}
                                    </div>
                                    : this.showBuildings(categoryList, selectPageNum, numPerPage)
                                }


                            </CustomScrollbars>
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={<a className="page-link">...</a>}
                                pageCount={allCategory.length/numPerPage}
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
                {addCategoryState &&
                <AddCategory
                    open={addCategoryState}
                    category={selectedCategory}
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

const mapStateToProps = ({settings, category}) => {
    const {width} = settings;
    const {allCategory} = category;
    return {width, allCategory};
};
export default connect(mapStateToProps)(CategoryPage);
