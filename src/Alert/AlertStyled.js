// AlertStyled.js
import styled from 'styled-components';

export const StyledAlert = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid;
  display: inline-block;
`;

export const PrimaryAlert = styled(StyledAlert)`
  color: white;
  background-color: red;
`;

export const SecondaryAlert = styled(StyledAlert)`
  color: black;
  background-color: white;
`;

export const SuccessAlert = styled(StyledAlert)`
  color: white;
  background-color: green;
`;

export const WarningAlert = styled(StyledAlert)`
  color: white;
  background-color: yellow;
`;

export const OutlinePrimaryAlert = styled(StyledAlert)`
  color: red;
  background-color: white;
`;

export const OutlineSecondaryAlert = styled(StyledAlert)`
  color: black;
  background-color: white;
`;

export const OutlineSuccessAlert = styled(StyledAlert)`
  color: green;
  background-color: white;
`;

export const OutlineWarningAlert = styled(StyledAlert)`
  color: yellow;
  background-color: white;
`;
