import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import AppModuleHeader from "components/AppModuleHeader/index";
import CustomScrollbars from "util/CustomScrollbars";
import AddImage from "./AddImage";
import ImageItem from "./Components/ImageItem";


const images = [
    {
        image: 'http://jumbo-react.g-axon.com/static/media/desserts.bf7b12e2.jpeg',
        url: 'https://www.google.com',
        publishDate: '2019/07/01',
        expiryDate: '2019/07/10'
    },
    {
        image: 'http://jumbo-react.g-axon.com/static/media/article-post-1.60355775.jpeg',
        url: 'https://www.google.com',
        publishDate: '2019/07/01',
        expiryDate: '2019/07/10'
    },
    {
        image: 'http://jumbo-react.g-axon.com/static/media/article-post.4ac6d461.jpeg',
        url: 'https://www.google.com',
        publishDate: '2019/07/01',
        expiryDate: '2019/07/10'
    }
];
class Images extends Component {

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
                    <span>Images</span>
                </div>
            </div>

            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                    style={{ height: this.props.width >= 1200 ? "calc(100vh - 200px)" : "calc(100vh - 80px)" }}>
                    <div className="module-add-task">
                        <Button className="jr-btn btn-block" variant="contained" color="primary" aria-label="add"
                            onClick={this.onAddImage}>
                            <span>{"New Image"}</span>
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
    onAddImage = () => {
        this.setState({ addImage: true });
    };
    onClose = () => {
        this.setState({ addImage: false });
    };
    onSave = () => {
        this.setState({ addImage: false });
    };
    onSearch = (e) => {
        console.log('search key', e.target.value)
        this.setState({ searchKey: e.target.value })
    };

    render() {
        const { buildingList, alertMessage, showMessage, noContentFoundMessage, data, addImage } = this.state;
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

                                <div className="card shadow border-0 p-4">
                                    <ul className="row articles-section list-unstyled">
                                        {images.map((data, index) => (
                                            <ImageItem key={index} data={data} />
                                        ))}
                                    </ul>
                                </div>

                            </CustomScrollbars>

                        </div>
                    </div>
                    {addImage &&
                        <AddImage
                            open={addImage}
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
export default connect(mapStateToProps)(Images);
