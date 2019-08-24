import React from "react";
import RentCell from "./RentCell/index";

const RentList = ({ data, onEdit, onDelete }) => {
  return (
      data != null?
      <div className="contact-main-content">
        {data.map((item, index) =>
          <RentCell key={index} item={item}
                    onEdit={onEdit}
                    onDelete={onDelete}
          />
        )}

      </div>
      :
      null
  );
};

export default RentList;
