import React from 'react';
import {
  Container,
  InputGroup,
  Label,
  LabelP,
  Input,
  InputError,
} from './Inputs.Styled';

export const Inputs = () => {
  return (
    <Container>
      <InputGroup>
        <Label>Username *</Label>
        <Input type="text" className="au-input" />
      </InputGroup>

      <InputGroup>
        <LabelP>Password *</LabelP>
        <Input type="password" className="au-input" />
        <InputError>Password is incorrect</InputError>
      </InputGroup>
    </Container>
  );
};
