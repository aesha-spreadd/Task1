// Alert.stories.js
import React from 'react';
import Alert from './Alert';
import {
  PrimaryAlert,
  SecondaryAlert,
  SuccessAlert,
  WarningAlert,
  OutlinePrimaryAlert,
  OutlineSecondaryAlert,
  OutlineSuccessAlert,
  OutlineWarningAlert,
} from './Alert.Styled';

export default {
  title: 'Alert',
  component: Alert,
};

export const NormalAlerts = () => (
  <div>
    <PrimaryAlert>
      <strong>Primary!</strong> This is a Primary Alert - Check it now!
    </PrimaryAlert>
    <SecondaryAlert>
      <strong>Secondary!</strong> This is a Secondary Alert - Check it now!
    </SecondaryAlert>
    <SuccessAlert>
      <strong>Success!</strong> This is a Success Alert - Check it now!
    </SuccessAlert>
    <WarningAlert>
      <strong>Warning!</strong> This is a Warning Alert - Check it now!
    </WarningAlert>
  </div>
);

export const OutlinedAlerts = () => (
  <div>
    <OutlinePrimaryAlert>
      <strong className="au-alert-text">Primary!</strong> This is a Primary
      Alert - Check it now!
    </OutlinePrimaryAlert>
    <OutlineSecondaryAlert>
      <strong className="au-alert-text">Secondary!</strong> This is a Secondary
      Alert - Check it now!
    </OutlineSecondaryAlert>
    <OutlineSuccessAlert>
      <strong className="au-alert-text">Success!</strong> This is a Success
      Alert - Check it now!
    </OutlineSuccessAlert>
    <OutlineWarningAlert>
      <strong className="au-alert-text">Warning!</strong> This is a Warning
      Alert - Check it now!
    </OutlineWarningAlert>
  </div>
);
