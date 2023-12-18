// Images.stories.js
import React from 'react';
import { Images, Circle, Responsive } from './Images';

export default {
  title: 'Images',
  component: Images,
};

const imageArray = [
  'https://picsum.photos/350/350/?blur',
  'https://picsum.photos/350/351/?blur',
];

const imagesArray = ['https://picsum.photos/350/350/?blur'];

export const SquareImage = () => <Images imageArray={imageArray} />;
export const CircularImage = () => <Circle imageArray={imageArray} />;
export const ResponsiveImage = () => <Responsive imageArray={imagesArray} />;
