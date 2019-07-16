import React from "react";
import ClosedReportCell from "./ClosedReportCell";

const ClosedReportList = ({ maintenanceList }) => {
  return (
    <div className="contact-main-content">
      {maintenanceList.map((maintenance, index) =>
        <ClosedReportCell
          key={index}
          maintenance={maintenance}
        />
      )}

    </div>
  );
};

export default ClosedReportList;
