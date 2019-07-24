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
    onSave = (name) => {
        this.setState({addCategoryState: false});
        const body = {
          category: { name }
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

    showBuildings = (categories) => {
        return (
            <CategoryList
                categories={categories}
                onEditCategory={this.onEditCategory}
                onDelete={this.onDelete}
                onUpdateActive={this.onUpdateActive}
            />
        );
    };
    onSearch = (e) => {
        console.log('search key', e.target.value)
        this.setState({searchKey: e.target.value})
    };
    fetchCategories = () => {
        this.props.dispatch(fetchCategories());
    };

    componentDidMount() {
        this.fetchCategories()
    }

    constructor(props) {
        super(props);
        this.state = {
            noContentFoundMessage: "No Category found",
            alertMessage: "",
            showMessage: false,
            drawerState: false,
            searchKey: "",
            addCategoryState: false,
            selectedCategory: {}
        };
    }

    render() {
        const {
            addCategoryState,
            selectedCategory,
            alertMessage,
            showMessage,
            noContentFoundMessage
        } = this.state;
        const {allCategory} = this.props;
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
                                {allCategory.length === 0 ?
                                    <div className="h-100 d-flex align-items-center justify-content-center">
                                        {noContentFoundMessage}
                                    </div>
                                    : this.showBuildings(allCategory)
                                }


                            </CustomScrollbars>

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
