// styles.js
import styled from 'styled-components';
import theme from '../theme';

export const StyledAlert = styled.div`
  height: 40px;
  border: 1px solid;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  font-size: 1.4rem;
  width: 100%;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  opacity: 0.9;
  margin: 0.5rem 0;
`;

const alertTextStyles = `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PrimaryAlert = styled(StyledAlert)`
  color: ${theme.badgeText};
  background-color: ${theme.primary};
  ${alertTextStyles}
`;

export const SecondaryAlert = styled(StyledAlert)`
  color: ${theme.badgeText};
  background-color: ${theme.secondary};
  ${alertTextStyles}
`;

export const SuccessAlert = styled(StyledAlert)`
  color: ${theme.badgeText};
  background-color: ${theme.success};
  ${alertTextStyles}
`;

export const WarningAlert = styled(StyledAlert)`
  color: ${theme.badgeText};
  background-color: ${theme.warning};
  ${alertTextStyles}
`;

export const OutlinePrimaryAlert = styled(StyledAlert)`
  color: ${theme.primary};
  background-color: ${theme.badgeText};
  ${alertTextStyles}
`;

export const OutlineSecondaryAlert = styled(StyledAlert)`
  color: ${theme.secondary};
  background-color: ${theme.badgeText};
  ${alertTextStyles}
`;

export const OutlineSuccessAlert = styled(StyledAlert)`
  color: ${theme.success};
  background-color: ${theme.badgeText};
  ${alertTextStyles}
`;

export const OutlineWarningAlert = styled(StyledAlert)`
  color: ${theme.warning};
  background-color: ${theme.badgeText};
  ${alertTextStyles}
`;
