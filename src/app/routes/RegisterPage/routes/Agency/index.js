import React, {Component} from "react";
import IconButton from "@material-ui/core/IconButton";
import {connect} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import RegisterList from "../../RegisterList";
import AppModuleHeader from "components/AppModuleHeader/index";
import CustomScrollbars from "util/CustomScrollbars";
import Drawer from "@material-ui/core/Drawer";
import NewRegister from "../../NewRegister";


class Agency extends Component {
    handleRequestClose = () => {
        this.setState({
            showMessage: false
        });
    };

    showRegisters = (registerList) => {
        return (
            <RegisterList
                registerList={registerList}
            />
        );
    };
    onSearch = (e) => {
        console.log("search key", e.target.value);
        this.setState({searchKey: e.target.value});
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
                    <span>Agencies</span>
                </div>
            </div>

            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                                  style={{height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)"}}>
                    <div className="module-add-task">
                        <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                                onClick={this.onTapNewRegister}>
                            <span>{"New Agency"}</span>
                        </Button>
                    </div>
                </CustomScrollbars>
            </div>
        </div>;

    };
    onRegisterClose = () => {
        this.setState({isOpen: false});
    };
    onTapNewRegister = () => {
        this.setState({isOpen: true});
    };
    constructor(props) {
        super(props);
        this.state = {
            noContentFoundMessage: "No Agency found",
            alertMessage: "",
            showMessage: false,
            drawerState: false,
            searchKey: "",
            currentRegister: null,
            selectedRegister: null,
            selectedRegisters: 0,
            addBuildingState: false,
            isOpen: false,
        };
    }

    render() {
        const { alertMessage, showMessage, noContentFoundMessage, isOpen, selectedRegister} = this.state;
        const { agencies } = this.props;
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
                            <AppModuleHeader placeholder="Search collaborator" notification={false} apps={false}
                                             value={this.state.searchKey} onChange={this.onSearch}/>
                        </div>
                        <div className="module-box-content">
                            <CustomScrollbars className="module-list-scroll scrollbar"
                                              style={{height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)"}}>
                                {agencies.length === 0 ?
                                    <div className="h-100 d-flex align-items-center justify-content-center">
                                        {noContentFoundMessage}
                                    </div>
                                    : this.showRegisters(agencies)
                                }


                            </CustomScrollbars>

                        </div>
                    </div>
                </div>
                {isOpen &&
                <NewRegister
                    user_type={'agency'}
                    onRegisterClose={this.onRegisterClose}
                    open={isOpen}
                    register={selectedRegister}
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
                />
            </div>
        );
    }
}

const mapStateToProps = ({settings, users}) => {
    const {width} = settings;
    const { agencies } = users.users;
    return {width, agencies};
};
export default connect(mapStateToProps)(Agency);
