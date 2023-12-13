// typography.stories.js
import React from 'react';
import { HeadingsTypography, TextTypography } from './Typography'; // Corrected import

export default {
  title: 'Typography',
};

export const HeadingStory = () => <HeadingsTypography />;
export const TextStory = () => <TextTypography />;
