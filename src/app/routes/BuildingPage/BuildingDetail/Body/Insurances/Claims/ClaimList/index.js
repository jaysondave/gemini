import React from "react";
import ClaimCell from "./ClaimCell";

const ClaimList = ({
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
          <ClaimCell key={index} subBuilding={subBuilding}
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

export default ClaimList;
