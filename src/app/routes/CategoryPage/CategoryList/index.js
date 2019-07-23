import React from 'react';
import CategoryCell from "./CategoryCell";

const CategoryList = ({ categories }) => {
  return (
    <div className="contact-main-content">
      {categories.map((category, index) =>
        <CategoryCell key={index}
                      index={index + 1}
                      category={category}
        />
      )}

    </div>
  )
};

export default CategoryList;
