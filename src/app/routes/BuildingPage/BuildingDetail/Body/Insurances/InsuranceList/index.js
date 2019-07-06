import React from "react";
import InsuranceCell from "./InsuranceCell";

const InsuranceList = ({
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
          <InsuranceCell key={index} subBuilding={subBuilding}
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

export default InsuranceList;
