import React from 'react';
import SubWorkerCell from "./SubWorkerCell";

const SubWorkerList = ({maintainerList,  onMaintainerSelect }) => {
  return (
    <div className="contact-main-content">
      {maintainerList.map((maintainer, index) =>
        <SubWorkerCell key={index} maintainer={maintainer}
                         onMaintainerSelect={onMaintainerSelect}/>
      )}

    </div>
  )
};

export default SubWorkerList;
