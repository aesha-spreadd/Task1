import React from 'react';
import {
  PrimaryStyledButton,
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
  ButtonIcon,
  IconImg,
  TextButton,
} from '../styled';
import ButtonRow from '../ButtonRow';

export default {
  title: 'Button',
  component: ButtonRow, // <-- Corrected component name
};

const buttonStyle = {
  margin: '10px',
  width: '200px',
};

export const ContainedButtons = () => (
  <div>
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
  </div>
);

export const OutlinedButtons = () => (
  <div>
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
  </div>
);

export const TextButtons = () => (
  <div>
    <TextButtonPrimary style={buttonStyle}>PRIMARY BUTTON</TextButtonPrimary>
    <TextButtonSecondary style={buttonStyle}>
      SECONDARY BUTTON
    </TextButtonSecondary>
    <TextButtonSuccess style={buttonStyle}>SUCCESS BUTTON</TextButtonSuccess>
    <TextButtonWarning style={buttonStyle}>WARNING BUTTON</TextButtonWarning>
  </div>
);

export const ButtonsWithIcons = () => (
  <div>
    <ContainedPrimaryStyledButton style={buttonStyle}>
      <ButtonIcon>
        <IconImg src="https://i.pravatar.cc/43" alt="Custom Icon" />
        PRIMARY BUTTON
      </ButtonIcon>
    </ContainedPrimaryStyledButton>

    <PrimaryStyledButton style={buttonStyle}>
      <ButtonIcon>
        <IconImg src="https://i.pravatar.cc/41" alt="Custom Icon" />
        PRIMARY BUTTON
      </ButtonIcon>
    </PrimaryStyledButton>
  </div>
);
