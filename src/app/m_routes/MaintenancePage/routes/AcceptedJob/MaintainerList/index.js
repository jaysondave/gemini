import React from 'react';
import MaintainterCell from "./MaintainterCell";

const MaintenanceList = ({maintainerList,  onMaintainerSelect }) => {
  return (
    <div className="contact-main-content">
      {maintainerList.map((maintainer, index) =>
        <MaintainterCell key={index} maintainer={maintainer}
                         onMaintainerSelect={onMaintainerSelect}/>
      )}

    </div>
  )
};

export default MaintenanceList;
