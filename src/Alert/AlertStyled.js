// styles.js
import styled from 'styled-components';
import theme from '../theme';

export const StyledAlert = styled.div`
  height: 40px;
  margin: 10px;
  border: 1px solid;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const alertTextStyles = `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PrimaryAlert = styled(StyledAlert)`
  color: white;
  background-color: ${theme.primary};
  ${alertTextStyles}
`;

export const SecondaryAlert = styled(StyledAlert)`
  color: white;
  background-color: ${theme.secondary};
  ${alertTextStyles}
`;

export const SuccessAlert = styled(StyledAlert)`
  color: white;
  background-color: ${theme.success};
  ${alertTextStyles}
`;

export const WarningAlert = styled(StyledAlert)`
  color: white;
  background-color: ${theme.warning};
  ${alertTextStyles}
`;

export const OutlinePrimaryAlert = styled(StyledAlert)`
  color: ${theme.primary};
  background-color: white;
  ${alertTextStyles}
`;

export const OutlineSecondaryAlert = styled(StyledAlert)`
  color: ${theme.secondary};
  background-color: white;
  ${alertTextStyles}
`;

export const OutlineSuccessAlert = styled(StyledAlert)`
  color: ${theme.success};
  background-color: white;
  ${alertTextStyles}
`;

export const OutlineWarningAlert = styled(StyledAlert)`
  color: ${theme.warning};
  background-color: white;
  ${alertTextStyles}
`;
