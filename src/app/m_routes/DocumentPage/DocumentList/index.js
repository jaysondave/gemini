import React from 'react';
import DocumentCell from "./DocumentCell";

const DocumentList = ({documents,  onRegisterSelect, onDeleteRegister }) => {
  return (
    <div className="contact-main-content">
      {documents.map((document, index) =>
        <DocumentCell key={index} document={document}
                      onDeleteRegister={onDeleteRegister}
                      onRegisterSelect={onRegisterSelect}/>
      )}

    </div>
  )
};

export default DocumentList;
