// Button.stories.js
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
  TextButton,
} from '../styled';
import theme from '../theme'; // Import your theme file

export default {
  title: 'Button',
};

export const BackgroundColoredButtons = () => (
  <div>
    <PrimaryStyledButton>Primary Button</PrimaryStyledButton>
    <SecondaryStyledButton>Secondary Button</SecondaryStyledButton>
    <SuccessStyledButton>Success Button</SuccessStyledButton>
    <WarningStyledButton>Warning Button</WarningStyledButton>
  </div>
);

export const ContainedButtonsWithBorder = () => (
  <div>
    <ContainedPrimaryStyledButton>Primary Button</ContainedPrimaryStyledButton>
    <ContainedSecondaryStyledButton>
      Secondary Button
    </ContainedSecondaryStyledButton>
    <ContainedSuccessStyledButton>Success Button</ContainedSuccessStyledButton>
    <ContainedWarningStyledButton>Warning Button</ContainedWarningStyledButton>
  </div>
);

export const TextButtons = () => (
  <div>
    <TextButton style={{ color: theme.primary }}>Primary Button</TextButton>
    <TextButton style={{ color: theme.secondary }}>Secondary Button</TextButton>
    <TextButton style={{ color: theme.success }}>Success Button</TextButton>
    <TextButton style={{ color: theme.warning }}>Warning Button</TextButton>
  </div>
);
