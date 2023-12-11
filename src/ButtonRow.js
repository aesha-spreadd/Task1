// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './styled'; // Import your button styles

const Button = ({ className, children, style, onClick }) => (
  <button className={`button ${className}`} style={style} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
