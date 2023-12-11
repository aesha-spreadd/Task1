// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonRow = ({ className, children, style, onClick }) => (
  <StyledButton className={className} style={style} onClick={onClick}>
    {children}
  </StyledButton>
);

ButtonRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default ButtonRow;
