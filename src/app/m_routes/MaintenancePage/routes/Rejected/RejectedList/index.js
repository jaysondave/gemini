import React from "react";
import RejectedCell from "./RejectedCell";

const RejectedList = ({ maintenanceList }) => {
  return (
    <div className="contact-main-content">
      {maintenanceList.map((maintenance, index) =>
        <RejectedCell
          key={index}
          maintenance={maintenance}
        />
      )}

    </div>
  );
};

export default RejectedList;
