import React from "react";
import ClosedCell from "./ClosedCell";

const ClosedList = ({ maintenanceList }) => {
  return (
    <div className="contact-main-content">
      {maintenanceList.map((maintenance, index) =>
        <ClosedCell
          key={index}
          maintenance={maintenance}
        />
      )}

    </div>
  );
};

export default ClosedList;
