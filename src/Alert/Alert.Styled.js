// styles.js
import styled from 'styled-components';
import theme from '../theme';

const alertTextStyles = `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const baseAlertStyles = `
  border: 1px solid;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 100%;
  border-radius: 4px;
  opacity: 0.9;
  margin: 0.5rem 0;
  font-family: Rubik, sans-serif;
  font-size: 14px;
  ${alertTextStyles}
`;

export const StyledAlert = styled.div`
  ${baseAlertStyles}
  height: 38px;
  margin: 5px 0;
  padding: 10px 15px;
  width: 428px;
`;

const createAlert = (backgroundColor, textColor) => styled(StyledAlert)`
  color: ${textColor};
  background-color: ${backgroundColor};
`;

export const PrimaryAlert = createAlert(theme.primary, theme.badgeText);
export const SecondaryAlert = createAlert(theme.secondary, theme.badgeText);
export const SuccessAlert = createAlert(theme.success, theme.badgeText);
export const WarningAlert = createAlert(theme.warning, theme.badgeText);

export const OutlinePrimaryAlert = createAlert(theme.badgeText, theme.primary);
export const OutlineSecondaryAlert = createAlert(
  theme.badgeText,
  theme.secondary
);
export const OutlineSuccessAlert = createAlert(theme.badgeText, theme.success);
export const OutlineWarningAlert = createAlert(theme.badgeText, theme.warning);
