import React from "react";
import DocumentCell from "./DocumentCell";

const DocumentList = ({data, onEdit, onDelete}) => {
    return (
        data != null ?
            <div className="contact-main-content">
                {data.map((item, index) =>
                    <DocumentCell key={index} item={item}
                                  onEdit={onEdit}
                                  onDelete={onDelete}
                    />
                )}

            </div>
            :
            null
    );
};

export default DocumentList;
