import React from 'react';
import BuildingCell from "./BuildingCell/index";

const BuildingList = ({ data, onEdit, onDelete }) => {
  return (
    <div className="contact-main-content">
      {data.map((building, index) =>
        <BuildingCell
            key={index}
            building={building}
            onEdit={onEdit}
            onDelete={onDelete}
        />
      )}

    </div>
  )
};

export default BuildingList;
