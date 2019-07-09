import React from "react";
import InProgressCell from "./InProgressCell";

const InProgressList = ({ maintenanceList }) => {
  return (
    <div className="contact-main-content">
      {maintenanceList.map((maintenance, index) =>
        <InProgressCell
          key={index}
          maintenance={maintenance}
        />
      )}

    </div>
  );
};

export default InProgressList;
