import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import maintainerList from "../../data/maintainerList";
import MaintainerList from "../../MaintainerList";
import AppModuleHeader from "components/AppModuleHeader/index";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import { ArrowBack } from "@material-ui/icons";
import Button from "@material-ui/core/Button";


class Maintainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No maintainer",
      alertMessage: "",
      showMessage: false,
      searchKey: "",
      maintainerList: maintainerList,

      selectedMaintainer: null
    };
  }

  componentWillMount() {
    console.log('SubWorkers componentWillMount')
  }

  onMaintainerSelect = (data) => {
    const selectedMaintainer = data.selected ? null : data;
    const maintainerList = this.state.maintainerList.map(maintainer => {
        if (maintainer.id === data.id) {
          maintainer.selected = !data.selected;
        } else {
          maintainer.selected = false;
        }
        return maintainer;
      }
    );
    this.setState({
      selectedMaintainer: selectedMaintainer,
      maintainerList: maintainerList
    });

  };
  showMaintainers = ({ maintainerList }) => {
    return (
      <MaintainerList maintainerList={maintainerList}
                      onMaintainerSelect={this.onMaintainerSelect.bind(this)}
      />
    );
  };
  onSearch = (e) => {
    console.log("search key", e.target.value);
    this.setState({ searchKey: e.target.value });
  };
  onClickCancel = () => {
    this.props.history.goBack();
  };
  onClickSave = () => {
    this.props.history.goBack();
  };

  render() {
    const { maintainerList, selectedMaintainer, alertMessage, showMessage, noContentFoundMessage } = this.state;
    return (
      <div className="app-wrapper">
        <div className="module-box content-margin-auto">
          <div className="module-box-header">
            <AppModuleHeader placeholder="Search Maintainer" notification={false} apps={false}
                             value={this.state.searchKey} onChange={this.onSearch}/>
          </div>
          <div className="module-box-content">
            <CustomScrollbars className="module-list-scroll scrollbar"
                              style={{ height: this.props.width >= 1200 ? "calc(100vh - 265px)" : "calc(100vh - 245px)" }}>
              {maintainerList.length === 0 ?
                <div className="h-100 d-flex align-items-center justify-content-center">
                  {noContentFoundMessage}
                </div>
                : this.showMaintainers(this.state)
              }


            </CustomScrollbars>
            <div className="col-md-12 col-12 ">
              <Button variant="contained" color="primary" className="jr-btn text-white"
                      disabled={selectedMaintainer === null}
                      onClick={() => this.onClickSave()}>ASSIGN</Button>
              <Button variant="contained" className="jr-btn bg-white" disabled={false}
                      onClick={() => this.onClickCancel()}>CANCEL</Button>
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps)(Maintainer);
