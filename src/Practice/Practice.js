// MyComponent.js
import React from 'react';

import { StyledComponent, AdditionalDiv } from './Practice.Styled';

const Practice = ({ color, text }) => {
  return (
    <StyledComponent color={color}>
      {text}
      <AdditionalDiv>Additional Content</AdditionalDiv>
    </StyledComponent>
  );
};

export default Practice;
