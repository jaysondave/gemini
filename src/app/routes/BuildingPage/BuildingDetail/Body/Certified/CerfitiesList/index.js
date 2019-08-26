import React from "react";
import CertifiedCell from "./CertifiedCell";

const CerfitiesList = ({data, onEdit, onDelete}) => {
    return (
        data != null ?
            <div className="contact-main-content">
                {data.map((item, index) =>
                    <CertifiedCell key={index} item={item}
                                   onEdit={onEdit}
                                   onDelete={onDelete}
                    />
                )}

            </div>
            :
            null
    );
};

export default CerfitiesList;
