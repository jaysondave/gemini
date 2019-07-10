import React from "react";
import { withRouter } from "react-router-dom";

class RejectedCell extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
    };
  }

  render() {
    const { maintenance, onMaintenanceSelect } = this.props;
    const { menuState, anchorEl, suspendDialogVisible } = this.state;
    const { id, building, reporter, reportContent, assign, viewDate } = maintenance;
    return (

      <div className="contact-item module-list-item">

        <div className="d-flex f-1 flex-wrap">

          <div className="d-flex f-1 flex-wrap">

            <div className="mx-1 mx-md-3 font-size-16 f-1 position-relative">
              <div className="position-absolute align-center">{id}</div>
            </div>
            <div className="col con-inf-mw-100 f-2">
              <p className="mb-0">
                  <span className="text-truncate contact-name text-primary-color text-bold">
                    {"Administrator"}
                  </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                    {"Building Name"}
                </span>
              </div>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                    {building.address}
                </span>
              </div>

            </div>
            <div className="col con-inf-mw-100 f-2">
              <div className="text-muted">
                  <span className="text-primary-color text-bold">
                      {"Description of report"}
                  </span>
              </div>
            </div>
            <div className="col con-inf-mw-100 f-1">
              <p className="mb-0">
                  <span className="text-primary-darken-4-color">
                      Due Date: &nbsp;&nbsp;&nbsp;&nbsp;{reporter.date}
                  </span>
              </p>
              <p className="mb-0">
                  <span className="text-primary-darken-4-color">
                      Reject Date: {reporter.date}
                  </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(RejectedCell);
