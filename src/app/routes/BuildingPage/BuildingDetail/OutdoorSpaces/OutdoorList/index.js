import React from "react";
import OutdoorCell from "./OutdoorCell";

const OutdoorList = ({
                           subBuildingList,
                           onSubBuildingItemSelect,
                           onSubBuildingSelect,
                           onSaveSubBuilding,
                           onDeleteSubBuilding,
                         }) => {
  return (
    subBuildingList != null?
      <div className="contact-main-content">
        {subBuildingList.map((subBuilding, index) =>
          <OutdoorCell key={index} subBuilding={subBuilding}
                           onSubBuildingItemSelect={onSubBuildingItemSelect}
                           onDeleteSubBuilding={onDeleteSubBuilding}
                           onSaveSubBuilding={onSaveSubBuilding}
                           onSubBuildingSelect={onSubBuildingSelect}
          />
        )}

      </div>
      :
      null
  );
};

export default OutdoorList;
