import React from "react";
import ContainerHeader from "components/ContainerHeader";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import IntlMessages from "util/IntlMessages";

import { increamentData, recentActivity } from "./mdata";
import Widget from "../../../../components/Widget";
import RecentActivity from "./RecentActivity";
import CardOverView from "../../../../components/Cards/CardOverView";

class MainPage extends React.Component {

  constructor(props) {
    super(props);
  }
  onTapBlock = (name) => {
    this.props.history.push(name)
  };
  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={"Maintenance"}/>
        <div className="row">
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer" onClick={() => this.onTapBlock('not-view')}>
                <CardOverView
                  chartProperties={{
                    title: "NOT VIEW",
                    number: "30",
                    icon: "stats",
                    bgColor: "indigo",
                    styleName: "up",
                    desc: "ON THIS WEEK",
                    percent: "+3"
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#273894' fill="#273894"
                            fillOpacity={1}/>
                    </AreaChart>
                  </ResponsiveContainer>}
                />

              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer" onClick={() => this.onTapBlock('viewed')}>
                <CardOverView
                  chartProperties={{
                    title: "VIEW",
                    number: "5",
                    icon: "stats",
                    bgColor: "indigo",
                    styleName: "up",
                    desc: "ON THIS WEEK",
                    percent: "+3"
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#273894' fill="#273894"
                            fillOpacity={1}/>
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer" onClick={() => this.onTapBlock('assigned')}>
                <CardOverView
                  chartProperties={{
                    title: "ASSIGNED",
                    number: "10",
                    icon: "stats",
                    bgColor: "indigo",
                    styleName: "down",
                    desc: "ON THIS WEEK",
                    percent: "+3"
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#273894' fill="#273894"
                            fillOpacity={1}/>
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer" onClick={() => this.onTapBlock('in-progress')}>
                <CardOverView
                  chartProperties={{
                    title: "IN PROGRESS",
                    number: "12",
                    icon: "stats",
                    bgColor: "indigo",
                    styleName: "down",
                    desc: "ON THIS WEEK",
                    percent: "+3"
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#273894' fill="#273894"
                            fillOpacity={1}/>
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer" onClick={() => this.onTapBlock('done')}>
                <CardOverView
                  chartProperties={{
                    title: "DONE",
                    number: "30",
                    icon: "stats",
                    bgColor: "pink accent-2",
                    styleName: "up",
                    desc: "ON THIS WEEK",
                    percent: "+3"
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#da2361' fill='#da2361'
                            fillOpacity={1}/>
                    </AreaChart>
                  </ResponsiveContainer>}
                />

              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer" onClick={() => this.onTapBlock('end')}>
                <CardOverView
                  chartProperties={{
                    title: "END",
                    number: "5",
                    icon: "stats",
                    bgColor: "pink accent-2",
                    styleName: "up",
                    desc: "ON THIS WEEK",
                    percent: "+3"
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#da2361' fill='#da2361'
                            fillOpacity={1}/>
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer" onClick={() => this.onTapBlock('out-standing')}>
                <CardOverView
                  chartProperties={{
                    title: "OUTSTANDING",
                    number: "10",
                    icon: "stats",
                    bgColor: "pink accent-2",
                    styleName: "down",
                    desc: "ON THIS WEEK",
                    percent: "+3"
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#da2361' fill='#da2361'
                            fillOpacity={1}/>
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 hover-pointer" onClick={() => this.onTapBlock('rejected')}>
                <CardOverView
                  chartProperties={{
                    title: "REJECTED",
                    number: "12",
                    icon: "stats",
                    bgColor: "pink accent-2",
                    styleName: "down",
                    desc: "ON THIS WEEK",
                    percent: "+3"
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#da2361' fill='#da2361'
                            fillOpacity={1}/>
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <Widget>
              <RecentActivity shape="rounded" recentList={recentActivity}/>
            </Widget>
          </div>
        </div>

      </div>
    );
  }
}

export default MainPage;
