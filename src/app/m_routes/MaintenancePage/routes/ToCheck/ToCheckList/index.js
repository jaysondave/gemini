import React from "react";
import OutStandingCell from "./ToCheckCell";

const ToCheckList = ({ maintenanceList }) => {
  return (
    <div className="contact-main-content">
      {maintenanceList.map((maintenance, index) =>
        <OutStandingCell
          key={index}
          maintenance={maintenance}
        />
      )}

    </div>
  );
};

export default ToCheckList;
