import React from 'react';
import MaintenanceCell from "./MaintenanceCell";

const MaintenanceList = ({maintenanceList,  onMaintenanceSelect, onDeleteMaintenance }) => {
  return (
    <div className="contact-main-content">
      {maintenanceList.map((maintenance, index) =>
        <MaintenanceCell key={index} maintenance={maintenance}
                         onDeleteMaintenance={onDeleteMaintenance}
                         onMaintenanceSelect={onMaintenanceSelect}/>
      )}

    </div>
  )
};

export default MaintenanceList;
