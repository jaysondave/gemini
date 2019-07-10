import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MaintainerList from "./SubWorkerList";
import AppModuleHeader from "components/AppModuleHeader/index";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import { ArrowBack } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const subWorkers = [
  {
    id: 1,
    name: 'Massimo Ghirga',
    avatar: '',
    address: 'Via del mercato 1, 06121 PERUGIA(PG)',
    category: ['Plumber', 'Electronic'],
    availibilty: true,
    durc: true,
    ranking: 4,
    selected: false
  },
  {
    id: 2,
    name: 'Li Gwang',
    avatar: '',
    address: 'Via del mercato 1, 06121 PERUGIA(PG)',
    category: ['Plumber', 'Electronic'],
    availibilty: true,
    durc: true,
    ranking: 5,
    selected: false
  },
  {
    id: 3,
    name: 'Hong De',
    avatar: '',
    address: 'Via del mercato 1, 06121 PERUGIA(PG)',
    category: ['Plumber', 'Electronic'],
    availibilty: true,
    durc: true,
    ranking: 3.5,
    selected: false
  },

];
class SubWorkers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noContentFoundMessage: "No maintainer",
      alertMessage: "",
      showMessage: false,
      searchKey: "",
      maintainerList: subWorkers,

      selectedMaintainers: []
    };
  }

  componentWillMount() {
    console.log('SubWorkers componentWillMount')
  }

  onMaintainerSelect = (data) => {
    const maintainerList = this.state.maintainerList.map(maintainer => {
        if (maintainer.id === data.id) {
          maintainer.selected = !data.selected;
        }
        return maintainer;
      }
    );
    const selectedMaintainers = maintainerList.filter(maintainer => maintainer.selected === true);
    this.setState({
      selectedMaintainers: selectedMaintainers,
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
    const { maintainerList, selectedMaintainers, alertMessage, showMessage, noContentFoundMessage } = this.state;
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
                      disabled={selectedMaintainers.length === 0}
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
export default connect(mapStateToProps)(SubWorkers);
