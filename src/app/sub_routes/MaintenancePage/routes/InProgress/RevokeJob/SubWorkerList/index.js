import React from "react";
import SubWorkerCell from "./SubWorkerCell";

const SubWorkerList = ({ maintenanceList }) => {
  return (
    <div className="contact-main-content">
      {maintenanceList.map((maintenance, index) =>
        <SubWorkerCell
          key={index}
          maintenance={maintenance}
        />
      )}

    </div>
  );
};

export default SubWorkerList;
