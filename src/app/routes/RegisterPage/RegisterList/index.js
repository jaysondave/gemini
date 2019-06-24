import React from 'react';
import RegisterCell from "./RegisterCell";

const RegisterList = ({registerList,  onRegisterSelect, onDeleteRegister }) => {
  return (
    <div className="contact-main-content">
      {registerList.map((register, index) =>
        <RegisterCell key={index} register={register}
                      onDeleteRegister={onDeleteRegister}
                      onRegisterSelect={onRegisterSelect}/>
      )}

    </div>
  )
};

export default RegisterList;
