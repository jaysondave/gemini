import React from "react";
import CadstralCell from "./CadstralCell";

const CadstralsList = ({ data, onEdit, onDelete }) => {
  return (
      data != null?
      <div className="contact-main-content">
        {data.map((item, index) =>
          <CadstralCell key={index} item={item}
                        onEdit={onEdit}
                        onDelete={onDelete}
          />
        )}

      </div>
      :
      null
  );
};

export default CadstralsList;
