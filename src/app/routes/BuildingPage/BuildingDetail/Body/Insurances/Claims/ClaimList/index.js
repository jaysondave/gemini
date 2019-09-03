import React from "react";
import ClaimCell from "./ClaimCell";

const ClaimList = ({ data, onEdit, onDelete }) => {
  return (
      data != null?
      <div className="contact-main-content">
        {data.map((item, index) =>
          <ClaimCell key={index} item={item}
                     onEdit={onEdit}
                     onDelete={onDelete}
          />
        )}

      </div>
      :
      null
  );
};

export default ClaimList;
