import React from 'react';
import BuildingCell from "./BuildingCell/index";

const BuildingList = ({buildingList }) => {
  return (
    <div className="contact-main-content">
      {buildingList.map((building, index) =>
        <BuildingCell key={index} building={building}/>
      )}

    </div>
  )
};

export default BuildingList;
