import React, { useEffect, useState } from 'react';
import '../style/Alert.css';

const Alert = ({ title, content, onClose }) => {

  const handleCloseAlert  = () => {
    onClose();
  };

  return (
    <div className='alert'>
        <h1>{title}</h1>
        <button onClick={handleCloseAlert}>X</button>
      <div>{content}</div>
    </div>
  );
};

export default Alert;
