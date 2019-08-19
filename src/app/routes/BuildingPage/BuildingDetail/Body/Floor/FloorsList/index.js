import React from "react";
import FloorCell from "./FloorCell";

const FloorsList = ({ data, onEdit, onDelete }) => {
  return (
      data != null?
      <div className="contact-main-content">
        {data.map((item, index) =>
          <FloorCell key={index} item={item}
                     onEdit={onEdit}
                     onDelete={onDelete}
          />
        )}
      </div>
      :
      null
  );
};

export default FloorsList;
