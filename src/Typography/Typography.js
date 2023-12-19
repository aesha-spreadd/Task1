import React from 'react';
import {
  Heading,
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
} from './Typography.Styled';

export const HeadingsTypography = () => (
  <>
    <Heading>H1. Adorn Box heading</Heading>
    <Divider />
    <Heading2>H2. Adorn Box heading</Heading2>
    <Divider />
    <Heading3>H3. Adorn Box heading</Heading3>
    <Divider />
    <Heading4>H4. Adorn Box heading</Heading4>
    <Divider />
    <Heading5>H5. Adorn Box heading</Heading5>
    <Divider />
    <Heading6>H6. Adorn Box heading</Heading6>
    <Divider />
  </>
);

export const TextTypography = () => (
  <>
    <Text1>Adorn Box text with primary color</Text1>
    <Divider />
    <Text2>Adorn Box text with primary color</Text2>
    <Divider />
    <Text3>Adorn Box text with success color</Text3>
    <Divider />
    <Text4>Adorn Box text with danger color</Text4>
    <Divider />
    <Text5>Adorn Box text with warning color</Text5>
    <Divider></Divider>
  </>
);
