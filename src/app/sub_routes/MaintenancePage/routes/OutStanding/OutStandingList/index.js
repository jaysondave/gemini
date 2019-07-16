import React from "react";
import OutStandingCell from "./OutStandingCell";

const OutStandingList = ({ maintenanceList }) => {
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

export default OutStandingList;
