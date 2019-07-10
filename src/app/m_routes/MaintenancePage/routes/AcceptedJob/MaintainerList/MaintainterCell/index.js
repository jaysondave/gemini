import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import StarRatings from 'react-star-ratings';
import { withRouter } from "react-router-dom";

class MaintainterCell extends React.Component {

  onBuildingOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  onBuildingClose = () => {
    this.setState({ addBuildingState: false });
  };
  onDeleteBuilding = (maintenance) => {
    this.setState({ addBuildingState: false });
    this.props.onDeleteMaintenance(maintenance);
  };
  onEditBuilding = () => {
    this.setState({ menuState: false, addBuildingState: true });
  };
  onBodies = () => {
    this.props.history.push("/app/buildingDashboard/detail");
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
      addBuildingState: false
    };
  }
  render() {
    const { maintainer, onMaintainerSelect } = this.props;
    const { menuState, anchorEl } = this.state;
    const { id,
      name,
      avatar,
      address,
      category,
      availibilty,
      durc,
      ranking } = maintainer;

    return (

      <div className="contact-item module-list-item">

        <Checkbox color="primary"
                  checked={maintainer.selected}
                  value="checkedF"
                  onClick={() => {
                    onMaintainerSelect(maintainer);
                  }}
        />
        <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>

          <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>
            <div className="row con-inf-mw-100" style={{ flex: 2 }}>
              <div className="mx-1 mx-md-3"
                   style={{ fontSize: 16, position: "relative"}}>
                {(avatar === null || avatar === '') ?
                  <div className="rounded-circle size-40 bg-blue text-center text-white mx-1 mx-md-3 align-center"
                       style={{fontSize: 20}}>
                    {name.charAt(0).toUpperCase()}
                  </div> :
                  <img className="rounded-circle size-40 mx-1 mx-md-3 align-center" alt={name} src={avatar}/>}
              </div>
              <div className="col">
                <p className="mb-0">
                  <span className="text-truncate contact-name text-primary-color text-bold">
                      {name}
                  </span>
                </p>

                <div className="text-muted">
                <span className="email d-inline-block mr-2">
                    {address}
                </span>
                </div>
                <div className="text-muted">
                <span className="phone d-inline-block text-primary-accent-4-color">
                  {category.map(c => {return c + " "})}
                </span>
                </div>
              </div>

            </div>
            <div className="col con-inf-mw-100" style={{ flex: 0.5, position: 'relative' }}>
              <div className="text-muted align-center">
                <div className="email d-inline-block mr-2">
                    {'Ability'}
                </div>
                <div className="d-inline-block rounded-circle size-20 bg-green">
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="col con-inf-mw-100" style={{ flex: 1 }}>
              <div className="text-muted align-center">
                <div className="email d-inline-block mr-2">
                  {'DURC'}
                </div>
                <div className="d-inline-block rounded-circle size-20 bg-red">
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="col con-inf-mw-100" style={{ flex: 1 }}>
              <div className="text-muted align-center">
                <div className="d-inline-block mr-2">
                  <StarRatings
                    rating={3}
                    starRatedColor="#f4db1d"
                    starHoverColor="#f4db1d"
                    numberOfStars={5}
                    name='rating'
                    starDimension="25px"
                    starSpacing="1px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MaintainterCell);
