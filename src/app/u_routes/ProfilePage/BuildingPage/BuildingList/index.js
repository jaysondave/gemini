import React from 'react';
import BuildingCell from "./BuildingCell/index";

const BuildingList = ({buildingList,  onBuildingSelect, onSaveBuilding, onDeleteBuilding }) => {
  return (
    <div className="contact-main-content">
      {buildingList.map((building, index) =>
        <BuildingCell key={index} building={building}
                      onSaveBuilding={onSaveBuilding}
                      onDeleteBuilding={onDeleteBuilding}
                      onBuildingSelect={onBuildingSelect}/>
      )}

    </div>
  )
};

export default BuildingList;
