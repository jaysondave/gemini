import React from "react";
import WareHouseCell from "./WareHouseCell";

const WareHoustList = ({
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
          <WareHouseCell key={index} subBuilding={subBuilding}
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

export default WareHoustList;
