import React from "react";
import { withRouter } from "react-router-dom";
import ReportDetail from "../../../../ReportDetail";

class RejectedReportCell extends React.Component {

  handleRequestClose = () => {
    this.setState({ menuState: false });
  };

  onClose = () => {
    this.setState({reportDetail: false});
  };
  onTapCell = () => {
    this.setState({reportDetail: true});
  };
  constructor() {
    super();
    this.state = {
      reportDetail: false,
    };
  }

  render() {
    const { maintenance, onMaintenanceSelect } = this.props;
    const {  reportDetail } = this.state;

    return (

      <div className="contact-item module-list-item">


        <div className="d-flex f-1 flex-wrap" onClick={() => this.onTapCell()}>

          <div className="mx-1 mx-md-3 font-size-16 f-1 d-flex">
            <div className="position-relative">
              <div className="align-center">{"123345"}</div>
            </div>
            <div>
              <img className="rounded-circle size-30 mx-1 mx-md-3 align-center" alt={"..."} src={require("../../../../../../../assets/images/user/bucket-with-bubbles_(2).png")}/>
            </div>
            <div className="ml-5">
              <div className="text-truncate contact-name text-primary-color text-bold align-center">
                {"Type of Report"}
              </div>
            </div>
          </div>

          <div className="col con-inf-mw-100">
            <div className="text-primary-darken-4-color align-center">
              Report Date: {"2019/07/16"}
            </div>
          </div>

          <div className="col con-inf-mw-100">
            <div className="text-primary-darken-4-color align-center">
              Rejected Date: {"2019/07/19"}
            </div>
          </div>
        </div>

        {reportDetail &&
        <ReportDetail
          open={reportDetail}
          onClose={this.onClose}
        />
        }
      </div>
    );
  }
}

export default withRouter(RejectedReportCell);
