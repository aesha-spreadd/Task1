// src/stories/Card.stories.js
import React from 'react';
import Card from '../Card';

export default {
  title: 'Card',
  component: Card,
};

export const SingleCard = () => (
  <Card
    title="Card Title"
    text="Some quick example text to build on the card title and make up the bulk of the card's content."
    buttonLabel="Go somewhere"
    imageSrc="https://via.placeholder.com/300"
  />
);
