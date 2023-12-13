// Typography.js
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const baseStyles = `
  margin: 0;
  padding: 0;
  color: ${theme.textcolor};
`;

const centeredTextStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadingBase = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-size: 48px;
  font-weight: 800;
  height: 50.3984px;
  line-height: 50.4px;
  text-transform: uppercase;
  color: ${theme.textcolor};
  ${centeredTextStyles}
`;

const Heading2 = styled(HeadingBase)`
  font-size: 36px;
  font-weight: 700;
  height: 45px;
  color: ${theme.textcolor};
  ${centeredTextStyles}
`;

const Heading3 = styled(HeadingBase)`
  font-size: 28px;
  font-weight: 600;
  height: 35px;
  color: ${theme.textcolor};
  ${centeredTextStyles}
`;

const Heading4 = styled(HeadingBase)`
  font-size: 18px;
  font-weight: 500;
  height: 21.9531px;
  color: ${theme.textcolor};
  ${centeredTextStyles}
`;

const Heading5 = styled(HeadingBase)`
  font-size: 14px;
  font-weight: 500;
  height: 17.0781px;
  color: ${theme.textcolor};
  ${centeredTextStyles}
`;

const Heading6 = styled(HeadingBase)`
  font-size: 10px;
  font-weight: 400;
  height: 12.1953px;
  color: ${theme.textcolor};
  ${centeredTextStyles}
`;

const TextBase = styled.p`
  ${baseStyles}
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  line-height: 24px;
`;

const Text1 = styled(TextBase)`
  color: ${theme.primary};
  ${centeredTextStyles}
  height: 24px;
`;

const Text2 = styled(TextBase)`
  color: ${theme.primary};
  ${centeredTextStyles}
  height: 24px;
`;

const Text3 = styled(TextBase)`
  color: ${theme.success};
  ${centeredTextStyles}
  height: 24px;
`;

const Text4 = styled(TextBase)`
  color: ${theme.danger};
  ${centeredTextStyles}
  height: 24px;
`;

const Text5 = styled(TextBase)`
  color: ${theme.warning};
  ${centeredTextStyles}
  height: 24px;
`;

const Divider = styled.hr`
  border: 1px inset ${theme.textcolor};
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 0px;
  ${centeredTextStyles}
  ${baseStyles}
  width: 1040px;
`;

export {
  HeadingBase as Heading,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Text1,
  Text2,
  Text3,
  Text4,
  Text5,
  Divider,
};
