import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  InputGroup,
  Label,
  LabelP,
  Input,
  InputError,
} from './Inputs.Styled';

const LabeledInput = ({ label, type, error }) => {
  return (
    <InputGroup>
      {type === 'password' ? (
        <LabelP>{label} *</LabelP>
      ) : (
        <Label>{label} *</Label>
      )}
      <Input type={type} className="au-input" />
      {error && <InputError>{error}</InputError>}
    </InputGroup>
  );
};

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
};
