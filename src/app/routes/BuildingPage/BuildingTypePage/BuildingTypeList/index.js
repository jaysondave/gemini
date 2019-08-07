import React from 'react';
import BuildingTypeCell from "./BuildingTypeCell";

const BuildingTypeList = ({data, onEdit, onDelete, onUpdateActive, selectedPageNum}) => {
    return (
        <div className="contact-main-content">
            {data.map((item, index) =>
                <BuildingTypeCell key={index}
                                  index={index + 1 + selectedPageNum*10}
                                  item={item}
                                  onEdit={onEdit}
                                  onDelete={onDelete}
                                  onUpdateActive={onUpdateActive}
                />
            )}

        </div>
    )
};

export default BuildingTypeList;
