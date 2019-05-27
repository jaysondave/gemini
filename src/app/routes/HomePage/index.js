import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

class HomePage extends React.Component {

  render() {
    console.log('-----', this.props);
    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.homePage"/>}/>
        <div className="d-flex justify-content-center">
          <h1><IntlMessages id="pages.homePage.description"/></h1>
        </div>

      </div>
    );
  }
}

export default HomePage;