import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import ChartCard from "./ChartCard";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import IntlMessages from 'util/IntlMessages';

import { increamentData, recentActivity } from "./mdata";
import Widget from "../../../components/Widget";
import RecentActivity from "./RecentActivity";

class HomePage extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={'Dashboard'} />
        <div className="row">
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="row">
              <h3 className="col-md-12 entry-heading">MAINTENANCES</h3>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard chartProperties={{
                  title: 'MAINTENANCES',
                  prize: '30',
                  icon: 'stats',
                  bgColor: 'indigo',
                  styleName: 'up',
                  desc: 'ON THIS WEEK',
                  percent: '+3',
                }}
                           children={<ResponsiveContainer width="100%" height={75}>
                             <AreaChart data={increamentData}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                               <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#273894' fill="#273894"
                                     fillOpacity={1} />
                             </AreaChart>
                           </ResponsiveContainer>}
                />

              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard
                  chartProperties={{
                    title: 'REQUESTS',
                    prize: '5',
                    icon: 'stats',
                    bgColor: 'indigo',
                    styleName: 'up',
                    desc: 'ON THIS WEEK',
                    percent: '+3',
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#273894' fill="#273894"
                            fillOpacity={1} />
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard
                  chartProperties={{
                    title: 'MAINTENANCES CLOSED',
                    prize: '10',
                    icon: 'stats',
                    bgColor: 'indigo',
                    styleName: 'down',
                    desc: 'ON THIS WEEK',
                    percent: '+3',
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#273894' fill="#273894"
                            fillOpacity={1} />
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard
                  chartProperties={{
                    title: 'MAINTENANCES CLOSED',
                    prize: '12',
                    icon: 'stats',
                    bgColor: 'indigo',
                    styleName: 'down',
                    desc: 'ON THIS WEEK',
                    percent: '+3',
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#273894' fill="#273894"
                            fillOpacity={1} />
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <h3 className="col-md-12 entry-heading">MAINTAINERS</h3>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard chartProperties={{
                  title: 'USER 1',
                  prize: '30',
                  icon: 'stats',
                  bgColor: 'pink accent-2',
                  styleName: 'up',
                  desc: 'ON THIS WEEK',
                  percent: '+3',
                }}
                           children={<ResponsiveContainer width="100%" height={75}>
                             <AreaChart data={increamentData}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                               <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#da2361' fill='#da2361'
                                     fillOpacity={1} />
                             </AreaChart>
                           </ResponsiveContainer>}
                />

              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard
                  chartProperties={{
                    title: 'USER 2',
                    prize: '5',
                    icon: 'stats',
                    bgColor: 'pink accent-2',
                    styleName: 'up',
                    desc: 'ON THIS WEEK',
                    percent: '+3',
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#da2361' fill='#da2361'
                            fillOpacity={1} />
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard
                  chartProperties={{
                    title: 'USER 3',
                    prize: '10',
                    icon: 'stats',
                    bgColor: 'pink accent-2',
                    styleName: 'down',
                    desc: 'ON THIS WEEK',
                    percent: '+3',
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#da2361' fill='#da2361'
                            fillOpacity={1} />
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard
                  chartProperties={{
                    title: 'USER 4',
                    prize: '12',
                    icon: 'stats',
                    bgColor: 'pink accent-2',
                    styleName: 'down',
                    desc: 'ON THIS WEEK',
                    percent: '+3',
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#da2361' fill='#da2361'
                            fillOpacity={1} />
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <h3 className="col-md-12 entry-heading">PROFESSIONALS</h3>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard chartProperties={{
                  title: 'USER 1',
                  prize: '30',
                  icon: 'stats',
                  bgColor: 'info',
                  styleName: 'up',
                  desc: 'ON THIS WEEK',
                  percent: '+3',
                }}
                           children={<ResponsiveContainer width="100%" height={75}>
                             <AreaChart data={increamentData}
                                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                               <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#0c8e9f' fill='#0c8e9f'
                                     fillOpacity={1} />
                             </AreaChart>
                           </ResponsiveContainer>}
                />

              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard
                  chartProperties={{
                    title: 'USER 2',
                    prize: '5',
                    icon: 'stats',
                    bgColor: 'info',
                    styleName: 'up',
                    desc: 'ON THIS WEEK',
                    percent: '+3',
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#0c8e9f' fill='#0c8e9f'
                            fillOpacity={1} />
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard
                  chartProperties={{
                    title: 'USER 3',
                    prize: '10',
                    icon: 'stats',
                    bgColor: 'info',
                    styleName: 'down',
                    desc: 'ON THIS WEEK',
                    percent: '+3',
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#0c8e9f' fill='#0c8e9f'
                            fillOpacity={1} />
                    </AreaChart>
                  </ResponsiveContainer>}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <ChartCard
                  chartProperties={{
                    title: 'USER 4',
                    prize: '12',
                    icon: 'stats',
                    bgColor: 'info',
                    styleName: 'down',
                    desc: 'ON THIS WEEK',
                    percent: '+3',
                  }}
                  children={<ResponsiveContainer width="100%" height={75}>
                    <AreaChart data={increamentData}
                               margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#0c8e9f' fill='#0c8e9f'
                            fillOpacity={1} />
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

export default HomePage;