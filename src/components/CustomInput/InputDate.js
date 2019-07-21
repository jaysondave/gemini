import React from "react";

export const InputDate = (props) => {
  return (
    <input
      className='form-control form-control-lg'
      value={props.value}
      readOnly={true}
      placeholder={props.placeholder ? props.placeholder : "Click to select date"}
      onClick={props.onClick}/>
  );
};
