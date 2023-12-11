// Alert.js
import React from 'react';
import './AlertStyled';

const Alert = ({ type, message, outline = false }) => {
  const alertClass = outline ? `outline-${type}` : type;

  return (
    <div className={`alert ${alertClass}`}>
      <strong className="au-alert-text">
        {type.charAt(0).toUpperCase() + type.slice(1)}!
      </strong>{' '}
      {message}
    </div>
  );
};

export default Alert;
