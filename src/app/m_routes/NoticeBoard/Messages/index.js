import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import buildingList from "../data/buildingList";
import BuildingList from "../BuildingList";
import { data } from './data';
import AppModuleHeader from "components/AppModuleHeader/index";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import ListItem from './Component/ListItem';
import AddMessage from "./AddMessage";


class Messages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noContentFoundMessage: "No building found in selected folder",
            alertMessage: "",
            showMessage: false,
            selectedSectionId: 1,
            drawerState: false,
            searchKey: "",
            filterOption: "All buildings",
            allBuilding: buildingList,
            buildingList: buildingList,
            data: data,
            currentBuilding: null,
            selectedSubBuilding: null,
            selectedBuilding: null,
            selectedbuildings: 0,
            addMessage: false
        };
    }
    BuildingSideBar = () => {
        return <div className="module-side">
            <div className="module-side-header">
                <div className="module-logo">
                    <span>Messages</span>
                </div>
            </div>

            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                    style={{ height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)" }}>
                    <div className="module-add-task">
                        <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                            onClick={this.onAddComponent}>
                            <span>{"New Message"}</span>
                        </Button>
                    </div>
                </CustomScrollbars>
            </div>
        </div>;

    };
    updateBuilding(evt) {
        this.setState({
            searchUser: evt.target.value
        });
        this.filterBuilding(evt.target.value);
    }
    onToggleDrawer() {
        this.setState({
            drawerState: !this.state.drawerState
        });
    }
    onAddComponent = () => {
        this.setState({ addMessage: true });
    };
    onClose = () => {
        this.setState({ addMessage: false });
    };
    onSave = () => {
        this.setState({ addMessage: false });
    };
    onSearch = (e) => {
        console.log('search key', e.target.value)
        this.setState({ searchKey: e.target.value })
    };

    render() {
        const { buildingList, alertMessage, showMessage, noContentFoundMessage, data, addMessage } = this.state;
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
                                <i className="zmdi zmdi-menu" />
                            </IconButton>
                            <AppModuleHeader placeholder="Search here..." notification={false} apps={false}
                                onChange={this.updateBuilding.bind(this)}
                                value={this.state.searchUser} />
                        </div>
                        <div className="module-box-content p-3">

                            <CustomScrollbars className="module-list-scroll scrollbar"
                                style={{ height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)" }}>
                                {data.length === 0 ?
                                    <div className="h-100 d-flex align-items-center justify-content-center">
                                        {noContentFoundMessage}
                                    </div>
                                    :
                                    (data.map((data, index) => (
                                        <ListItem key={index} data={data} styleName="card shadow " />
                                    )))
                                }


                            </CustomScrollbars>

                        </div>
                    </div>
                    {addMessage &&
                        <AddMessage
                            open={addMessage}
                            onSave={this.onSave}
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
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ settings }) => {
    const { width } = settings;
    return { width };
};
export default connect(mapStateToProps)(Messages);
