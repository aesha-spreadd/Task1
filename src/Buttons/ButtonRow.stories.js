import React from 'react';
// Change this line
import {
  PrimaryStyledButton,
  handlePrimaryClick,
  buttonStyle,
  ButtonIcon,
  IconImg,
  SecondaryStyledButton,
  SuccessStyledButton,
  WarningStyledButton,
  ContainedPrimaryStyledButton,
  ContainedSecondaryStyledButton,
  ContainedSuccessStyledButton,
  ContainedWarningStyledButton,
  TextButtonWarning,
  TextButtonPrimary,
  TextButtonSecondary,
  TextButtonSuccess,
  commonButtonStyles,
  TextButton,
  ButtonContainer,
  buttonContainersStyles, // <-- Fix the capitalization here
} from './Button.Styled';

import ButtonRow from './ButtonRow';

export default {
  title: 'Button',
  component: ButtonRow,
};

export const ContainedButtons = () => (
  <div>
    <buttonContainersStyles>
      <PrimaryStyledButton style={buttonStyle}>
        PRIMARY BUTTON
      </PrimaryStyledButton>
      <SecondaryStyledButton style={buttonStyle}>
        SECONDARY BUTTON
      </SecondaryStyledButton>
      <SuccessStyledButton style={buttonStyle}>
        SUCCESS BUTTON
      </SuccessStyledButton>
      <WarningStyledButton style={buttonStyle}>
        WARNING BUTTON
      </WarningStyledButton>
    </buttonContainersStyles>
  </div>
);

export const OutlinedButtons = () => (
  <div>
    <buttonContainersStyles>
      <ContainedPrimaryStyledButton style={buttonStyle}>
        PRIMARY BUTTON
      </ContainedPrimaryStyledButton>
      <ContainedSecondaryStyledButton style={buttonStyle}>
        SECONDARY BUTTON
      </ContainedSecondaryStyledButton>
      <ContainedSuccessStyledButton style={buttonStyle}>
        SUCCESS BUTTON
      </ContainedSuccessStyledButton>
      <ContainedWarningStyledButton style={buttonStyle}>
        WARNING BUTTON
      </ContainedWarningStyledButton>
    </buttonContainersStyles>
  </div>
);

export const TextButtons = () => (
  <div>
    <buttonContainersStyles>
      <TextButtonPrimary style={buttonStyle}>PRIMARY BUTTON</TextButtonPrimary>
      <TextButtonSecondary style={buttonStyle}>
        SECONDARY BUTTON
      </TextButtonSecondary>
      <TextButtonSuccess style={buttonStyle}>SUCCESS BUTTON</TextButtonSuccess>
      <TextButtonWarning style={buttonStyle}>WARNING BUTTON</TextButtonWarning>
    </buttonContainersStyles>
  </div>
);

export const ButtonsWithIcons = () => (
  <div>
    <buttonContainersStyles>
      <ContainedPrimaryStyledButton style={buttonStyle}>
        <ButtonIcon>
          <IconComponent />
          PRIMARY BUTTON
        </ButtonIcon>
      </ContainedPrimaryStyledButton>
    </buttonContainersStyles>
    <buttonContainersStyles>
      <PrimaryStyledButton style={buttonStyle}>
        <ButtonIcon>
          <IconComponent />
          PRIMARY BUTTON
        </ButtonIcon>
      </PrimaryStyledButton>
    </buttonContainersStyles>
  </div>
);

const IconComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    className="iconify iconify--mdi"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z"
      fill="currentColor"
    ></path>
  </svg>
);
