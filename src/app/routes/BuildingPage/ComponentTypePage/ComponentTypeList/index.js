import React from 'react';
import ComponentTypeCell from "./ComponentTypeCell";

const ComponentTypeList = ({data, onEdit, onDelete, onUpdateActive, selectedPageNum}) => {
    return (
        <div className="contact-main-content">
            {data.map((item, index) =>
                <ComponentTypeCell key={index + selectedPageNum*10}
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

export default ComponentTypeList;
