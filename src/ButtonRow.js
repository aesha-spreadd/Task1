// ButtonRow.js
import React from 'react';
import { ButtonRowContainer, Button } from './styled';

export const ButtonRow = () => {
  return (
    <ButtonRowContainer>
      <Button color="primary">PRIMARY BUTTON</Button>
      <Button color="secondary">SECONDARY BUTTON</Button>
      <Button color="success">SUCCESS BUTTON</Button>
      <Button color="warning">WARNING BUTTON</Button>
    </ButtonRowContainer>
  );
};
