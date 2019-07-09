import React from "react";
import NewJobCell from "./NewJobCell";

const NewJobList = ({ maintenanceList }) => {
  return (
    <div className="contact-main-content">
      {maintenanceList.map((maintenance, index) =>
        <NewJobCell
          key={index}
          maintenance={maintenance}
        />
      )}

    </div>
  );
};

export default NewJobList;
