import React from 'react';
import CategoryCell from "./CategoryCell";

const CategoryList = ({ categories, onEditCategory, onDelete, onUpdateActive, selectedPageNum }) => {
  return (
    <div className="contact-main-content">
      {categories.map((category, index) =>
        <CategoryCell key={index}
                      index={index + 1 + selectedPageNum*10}
                      category={category}
                      onEditCategory={onEditCategory}
                      onDelete={onDelete}
                      onUpdateActive={onUpdateActive}
        />
      )}

    </div>
  )
};

export default CategoryList;
