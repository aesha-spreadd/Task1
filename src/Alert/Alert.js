// Alert.js
import React from 'react';
import './Alert.Styled';

const Alert = ({ type, message, outline = false }) => {
  const alertClass = outline ? `outline-${type}` : type;

  return (
    <div className={`alert ${alertClass}`}>
      <strong>
        {type.charAt(0).toUpperCase() + type.slice(1)}!
      </strong>{' '}
      {message}
    </div>
  );
};

export default Alert;
