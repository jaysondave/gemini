import React from "react";
import SystemCell from "./SystemCell";

const SystemList = ({data, onEdit, onDelete}) => {
  return (
      data != null?
      <div className="contact-main-content">
        {data.map((item, index) =>
          <SystemCell key={index} item={item}
                      onEdit={onEdit}
                      onDelete={onDelete}
          />
        )}

      </div>
      :
      null
  );
};

export default SystemList;
