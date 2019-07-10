import React from "react";
import AcceptedJobCell from "./AcceptedJobCell";

const AcceptedJobList = ({ maintenanceList }) => {
  return (
    <div className="contact-main-content">
      {maintenanceList.map((maintenance, index) =>
        <AcceptedJobCell
          key={index}
          maintenance={maintenance}
        />
      )}

    </div>
  );
};

export default AcceptedJobList;
