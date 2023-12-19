import React from 'react';
import PropTypes from 'prop-types';
import './Button.Styled';

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
