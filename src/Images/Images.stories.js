import React from 'react';

import { Images, Circle } from './Images'; // Correct import statement

export default {
  title: 'Images',
  component: Images,
};

export const SquareImage = () => <Images />;
export const CircularImage = () => <Circle />;
