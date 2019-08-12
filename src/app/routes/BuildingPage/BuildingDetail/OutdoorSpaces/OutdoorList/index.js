import React from "react";
import OutdoorCell from "./OutdoorCell";

const OutdoorList = ({data, onEdit, onDelete}) => {
    return (
        data != null ?
            <div className="contact-main-content">
                {data.map((outdoor, index) =>
                    <OutdoorCell key={index}
                                 item={outdoor}
                                 onEdit={onEdit}
                                 onDelete={onDelete}
                    />
                )}

            </div>
            :
            null
    );
};

export default OutdoorList;
