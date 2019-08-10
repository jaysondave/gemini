import React from "react";
import SubBuildingCell from "./SubBuildingCell/index";

const SubBuildingList = ({
                             data,
                             onEdit,
                             onDelete,
                         }) => {
    return (
        data != null ?
            <div className="contact-main-content">
                {data.map((subBuilding, index) =>
                    <SubBuildingCell key={index}
                                     item={subBuilding}
                                     onEdit={onEdit}
                                     onDelete={onDelete}
                    />
                )}

            </div>
            :
            null
    );
};

export default SubBuildingList;
