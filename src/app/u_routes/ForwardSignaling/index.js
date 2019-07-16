import React from "react";
import ContainerHeader from "components/ContainerHeader";
import Widget from "components/Widget/index";
import IntlMessages from "util/IntlMessages";
import NewReport from "./NewReport";

const report_list = [
  {
    id: 1,
    type: "generic_report",
    icon: require("../../../assets/images/user/telephone_(1).png"),
    title: "GENERIC REPORT"
  },
  {
    id: 2,
    type: "damage",
    icon: require("../../../assets/images/user/tools-cross-settings-symbol-for-interface_(1).png"),
    title: "DAMAGE"
  },
  { id: 3, type: "sewer", icon: require("../../../assets/images/user/plunger_(2).png"), title: "SEWER" },
  { id: 4, type: "lifts", icon: require("../../../assets/images/user/lift-up.png"), title: "LIFTS" },
  {
    id: 5,
    type: "external_areas",
    icon: require("../../../assets/images/user/tree-silhouette_(2).png"),
    title: "EXTERNAL AREAS"
  },
  {
    id: 6,
    type: "doors_windows",
    icon: require("../../../assets/images/user/clean-window-glass_(2).png"),
    title: "DOORS/WINDOWS"
  },
  {
    id: 7,
    type: "phone_lights",
    icon: require("../../../assets/images/user/black-light-bulb.png"),
    title: "PHONE/LIGHTS"
  },
  { id: 8, type: "waterworks", icon: require("../../../assets/images/user/leak.png"), title: "WATERWORKS" },
  { id: 9, type: "thermal_center", icon: require("../../../assets/images/user/flame.png"), title: "THERMAL CENTER" },
  {
    id: 10,
    type: "cleaning",
    icon: require("../../../assets/images/user/bucket-with-bubbles_(2).png"),
    title: "CLEANING"
  },
  {
    id: 11,
    type: "safety_systems",
    icon: require("../../../assets/images/user/siren_(2).png"),
    title: "SAFETY SYSTEMS"
  },
  { id: 12, type: "painting", icon: require("../../../assets/images/user/paintbrush.png"), title: "PAINTING" }
];

class ForwardSignaling extends React.Component {


  onTapReport = (type) => {
    this.setState({ type, newReport: true });
  };
  onClose = () => {
    this.setState({ type: null, newReport: false });
  };

  constructor(props) {
    super(props);
    this.state = {
      newReport: false,
      type: null
    };
  }

  render() {
    const { newReport, type } = this.state;
    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={"Dashboard"}/>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              {report_list.map(report => (
                <div key={report.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer"
                     onClick={() => this.onTapReport(report.type)}>
                  <Widget styleName="p-4">
                    <div className="media align-items-center flex-nowrap">
                      <div className="mr-lg-4 mr-3">
                        <img className="img-fluid h-100px w-100px" src={report.icon} alt="..."/>
                      </div>
                      <div className="media-body">
                        <h1 className="jr-font-weight-bold mb-0">{report.title}</h1>
                      </div>
                    </div>
                  </Widget>
                </div>
              ))}


            </div>
          </div>
        </div>
        {newReport && type &&
          <NewReport
            open={newReport}
            type={type}
            onClose={this.onClose}
          />
        }
      </div>
    );
  }
}

export default ForwardSignaling;
