import React from "react";
import RejectedReportCell from "./RejectedReportCell";

const RejectedReportList = ({ maintenanceList }) => {
  return (
    <div className="contact-main-content">
      {maintenanceList.map((maintenance, index) =>
        <RejectedReportCell
          key={index}
          maintenance={maintenance}
        />
      )}

    </div>
  );
};

export default RejectedReportList;
