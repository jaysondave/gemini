import React from "react";
import InsuranceCell from "./InsuranceCell";

const InsuranceList = ({data, onEdit, onDelete}) => {
    return (
        data != null ?
            <div className="contact-main-content">
                {data.map((item, index) =>
                    <InsuranceCell key={index} item={item}
                                   onEdit={onEdit}
                                   onDelete={onDelete}
                    />
                )}

            </div>
            :
            null
    );
};

export default InsuranceList;
