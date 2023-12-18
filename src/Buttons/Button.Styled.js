import styled from 'styled-components';
import theme from '../theme';

const commonStyles = `
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 10px;
  font-family: Arial;
  font-weight: 600;
  padding-block-end: 11px;
  padding-block-start: 11px;
  padding-bottom: 11px;
  padding-inline-end: 28px;
  padding-inline-start: 28px;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 11px;
`;

const commonButtonStyles = `
  &:hover,
  &:active {
    color: ${theme.badgeText};
  }
  margin-bottom: 10px; 
`;

const buttonContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  ${buttonContainerStyles}
`;

export const StyledButton = styled.button`
  ${commonStyles}
`;

export const IconImg = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 8px;
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const PrimaryStyledButton = styled(StyledButton)`
  background-color: ${theme.primary};
  color: ${theme.badgeText};
  border: 1px solid ${theme.primary};

  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.badgeText};
  }
`;

export const SecondaryStyledButton = styled(StyledButton)`
  background-color: ${theme.secondary};
  color: ${theme.badgeText};
  border: 1px solid ${theme.secondary};

  &:hover,
  &:active {
    background-color: ${theme.secondary};
    color: ${theme.badgeText};
  }
`;

export const SuccessStyledButton = styled(StyledButton)`
  background-color: ${theme.success};
  color: ${theme.badgeText};
  border: 1px solid ${theme.success};

  &:hover,
  &:active {
    background-color: ${theme.success};
    color: ${theme.badgeText};
  }
`;

export const WarningStyledButton = styled(StyledButton)`
  background-color: ${theme.warning};
  color: ${theme.badgeText};
  border: 1px solid ${theme.warning};

  &:hover,
  &:active {
    background-color: ${theme.warning};
    color: ${theme.badgeText};
  }
`;

export const ContainedPrimaryStyledButton = styled(StyledButton)`
  background-color: ${theme.badgeText};
  color: ${theme.primary};
  border: 1px solid ${theme.primary};

  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.badgeText};
  }
`;

export const ContainedSecondaryStyledButton = styled(StyledButton)`
  background-color: ${theme.badgeText};
  color: ${theme.secondary};
  border: 1px solid ${theme.secondary};

  &:hover,
  &:active {
    background-color: ${theme.secondary};
    color: ${theme.badgeText};
  }
`;

export const ContainedSuccessStyledButton = styled(StyledButton)`
  background-color: ${theme.badgeText};
  color: ${theme.success};
  border: 1px solid ${theme.success};

  &:hover,
  &:active {
    background-color: ${theme.success};
    color: ${theme.badgeText};
  }
`;

export const ContainedWarningStyledButton = styled(StyledButton)`
  background-color: ${theme.badgeText};
  color: ${theme.warning};
  border: 1px solid ${theme.warning};

  &:hover,
  &:active {
    background-color: ${theme.warning};
    color: ${theme.badgeText};
  }
`;

const handleTextButtonClick = () => {
  console.log('Text button clicked');
};

export const TextButtonPrimary = styled(StyledButton)`
  color: ${theme.primary};
  background-color: transparent; 

  &:active {
    console.log('Text button clicked');
  }
`;

export const TextButtonSecondary = styled(StyledButton)`
  color: ${theme.secondary};

  background-color: transparent;
`;
export const TextButtonSuccess = styled(StyledButton)`
  color: ${theme.success};

  background-color: transparent;
`;

export const TextButtonWarning = styled(StyledButton)`
  color: ${theme.warning};

  background-color: transparent;
`;
