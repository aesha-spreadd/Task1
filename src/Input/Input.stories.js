import React from 'react';
import { Inputs } from './Inputs';
import {
  Container,
  InputGroup,
  Label,
  LabelP,
  Input,
  InputError,
} from './Inputs.Styled';

export default {
  title: 'Input',
  component: Container,
};

export const LabeledInput = () => {
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
