import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import CategoryList from "./CategoryList";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddCategory from "./AddCategory";
import CustomScrollbars from "util/CustomScrollbars";

const categories = [1,2,3];
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
                          style={{ height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)" }}>
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
    this.setState({ addCategoryState: true });
  };
  onClose = () => {
    this.setState({ addCategoryState: false });
  };
  onSave = (name) => {
    this.setState({ addCategoryState: false });
    alert(name)
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

  showBuildings = ({ categories }) => {
    return (
      <CategoryList
          categories={categories}
      />
    );
  };
  onSearch = (e) => {
    console.log('search key', e.target.value)
    this.setState({searchKey: e.target.value})
  };
  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No Category found",
      alertMessage: "",
      showMessage: false,
      drawerState: false,
      searchKey: "",
      categories: categories,
      addCategoryState: false,
      selectedCategory: {}
    };
  }
  render() {
    const {
      categories,
      addCategoryState,
      selectedCategory,
      alertMessage,
      showMessage,
      noContentFoundMessage
    } = this.state;
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
              <AppModuleHeader placeholder="Search here..." notification={false} apps={false} value={this.state.searchKey} onChange={this.onSearch}/>
            </div>
            <div className="module-box-content">
              <CustomScrollbars className="module-list-scroll scrollbar"
                                style={{ height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)" }}>
                {categories.length === 0 ?
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : this.showBuildings(this.state)
                }


              </CustomScrollbars>

            </div>
          </div>
        </div>

        <AddCategory
          open={addCategoryState}
          category={selectedCategory}
          onClose={this.onClose}
          onSave={this.onSave}
        />
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

const mapStateToProps = ({ settings }) => {
  const { width } = settings;
  return { width };
};
export default connect(mapStateToProps)(CategoryPage);
