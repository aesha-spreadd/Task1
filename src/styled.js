// ButtonStyled.js
import styled from 'styled-components';
import theme from './theme'; // Import your theme file

const commonStyles = `
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 10px; // Add margin between buttons
`;

export const StyledButton = styled.button`
  ${commonStyles}
`;

const handlePrimaryClick = () => {
  // Your custom logic for primary buttons
  console.log('Primary button clicked');
};

export const PrimaryStyledButton = styled(StyledButton)`
  background-color: ${theme.primary};
  color: white;
  border: 1px solid ${theme.primary};

  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: white;
  }

  /* Add the click event handling function */
  &:active {
    ${handlePrimaryClick}
  }
`;

export const SecondaryStyledButton = styled(StyledButton)`
  background-color: ${theme.secondary};
  color: white;
  border: 1px solid ${theme.secondary};

  &:hover,
  &:active {
    background-color: ${theme.secondary};
    color: white;
  }
`;

export const SuccessStyledButton = styled(StyledButton)`
  background-color: ${theme.success};
  color: white;
  border: 1px solid ${theme.success};

  &:hover,
  &:active {
    background-color: ${theme.success};
    color: white;
  }
`;

export const WarningStyledButton = styled(StyledButton)`
  background-color: ${theme.warning};
  color: white;
  border: 1px solid ${theme.warning};

  &:hover,
  &:active {
    background-color: ${theme.warning};
    color: white;
  }
`;

export const ContainedPrimaryStyledButton = styled(StyledButton)`
  background-color: white;
  color: ${theme.primary};
  border: 1px solid ${theme.primary};

  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: white;
  }
`;

export const ContainedSecondaryStyledButton = styled(StyledButton)`
  background-color: white;
  color: ${theme.secondary};
  border: 1px solid ${theme.secondary};

  &:hover,
  &:active {
    background-color: ${theme.secondary};
    color: white;
  }
`;

export const ContainedSuccessStyledButton = styled(StyledButton)`
  background-color: white;
  color: ${theme.success};
  border: 1px solid ${theme.success};

  &:hover,
  &:active {
    background-color: ${theme.success};
    color: white;
  }
`;

export const ContainedWarningStyledButton = styled(StyledButton)`
  background-color: white;
  color: ${theme.warning};
  border: 1px solid ${theme.warning};

  &:hover,
  &:active {
    background-color: ${theme.warning};
    color: white;
  }
`;

// Function to handle click events for primary buttons
const handleTextButtonClick = () => {
  // Your custom logic for text buttons
  console.log('Text button clicked');
};

export const TextButtonPrimary = styled(StyledButton)`
  color: ${theme.primary};
  background-color: transparent; // No background color

  /* Add the click event handling function */
  &:active {
    ${handleTextButtonClick}
  }
`;

// ... (other text button styles)

export const TextButtonSecondary = styled(StyledButton)`
  color: ${theme.secondary};

  background-color: transparent; // No background color
`;
export const TextButtonSuccess = styled(StyledButton)`
  color: ${theme.success};

  background-color: transparent; // No background color
`;

export const TextButtonWarning = styled(StyledButton)`
  color: ${theme.warning};

  background-color: transparent; // No background color
`;
