import React from "react";
import SubBuildingCell from "./SubBuildingCell/index";

const SubBuildingList = ({
                           subBuildingList,
                           onSubBuildingItemSelect,
                           onSubBuildingSelect,
                           onSaveSubBuilding,
                           onDeleteSubBuilding,
                           onSaveCadastral,
                           onSaveRent,
                           onSaveSystem,
                           onSaveCertificate
                         }) => {
  return (
    subBuildingList != null?
      <div className="contact-main-content">
        {subBuildingList.map((subBuilding, index) =>
          <SubBuildingCell key={index} subBuilding={subBuilding}
                           onSubBuildingItemSelect={onSubBuildingItemSelect}
                           onDeleteSubBuilding={onDeleteSubBuilding}
                           onSaveSubBuilding={onSaveSubBuilding}
                           onSubBuildingSelect={onSubBuildingSelect}
                           onSaveCadastral={onSaveCadastral}
                           onSaveRent={onSaveRent}
                           onSaveSystem={onSaveSystem}
                           onSaveCertificate={onSaveCertificate}
          />
        )}

      </div>
      :
      null
  );
};

export default SubBuildingList;
