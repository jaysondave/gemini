import React from 'react';
import BuildingTypeCell from "./BodyTypeCell";

const BodyTypeList = ({data, onEdit, onDelete, onUpdateActive, selectedPageNum}) => {
    return (
        <div className="contact-main-content">
            {data.map((item, index) =>
                <BuildingTypeCell key={index + selectedPageNum*10}
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

export default BodyTypeList;
