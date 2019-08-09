import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import buildingList from "../data/buildingList";
import BuildingList from "./BuildingList";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddBuilding from "../Buildings/AddBuilding";
import CustomScrollbars from "util/CustomScrollbars";
import {fetchBuildings} from "../../../../actions";


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
                          style={{ height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)" }}>
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
    this.setState({ addState: true });
  };
  onBuildingClose = () => {
    this.setState({ addState: false });
  };
  onSaveBuilding = (data) => {
    let isNew = true;
    const buildingList = this.state.allBuilding.map((building) => {
      if (building.id === data.id) {
        isNew = false;
        return data;
      } else {
        return building;
      }
    });
    if (isNew) {
      buildingList.push(data);
    }
    this.setState({
      alertMessage: isNew ? "BuildingDetail Added Successfully" : "BuildingDetail Updated Successfully",
      showMessage: true,
      buildingList: buildingList,
      allBuilding: buildingList
    });
    // this.onFilterOptionSelect(this.state.filterOption);
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
  showBuildings = (buildings) => {
    return (
      <BuildingList
          buildingList={buildings}
      />
    );
  };
  onSearch = (e) => {
    console.log('search key', e.target.value)
    this.setState({searchKey: e.target.value})
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
      addState: false
    };
  }
  render() {
    const { addState, alertMessage, showMessage, noContentFoundMessage } = this.state;
    const { buildings } = this.props;
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
              <AppModuleHeader placeholder="Search here..." notification={false} apps={false} value={this.state.searchKey} onChange={this.onSearch}/>
            </div>
            <div className="module-box-content">
              <CustomScrollbars className="module-list-scroll scrollbar"
                                style={{ height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)" }}>

                {buildings.length === 0 ?
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : this.showBuildings(buildings)
                }
              </CustomScrollbars>


            </div>
          </div>
        </div>

        <AddBuilding
          open={addState}
          building={{}}
          onSave={this.onSaveBuilding}
          onClose={this.onBuildingClose}
          onDelete={this.onDeleteBuilding}/>
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

const mapStateToProps = ({ settings, building }) => {
  const { width } = settings;
  const { buildings } = building;
  return { width, buildings };
};
export default connect(mapStateToProps)(BuildingPage);
