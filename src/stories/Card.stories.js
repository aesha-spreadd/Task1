// src/components/card.stories.js
import React from 'react';
import Card from '../Card';
import EcommerceCard from '../Card';

import {
  ErenYeagerCardContainer,
  ErenYeagerCardTitle,
  ErenYeagerCardText,
  EcommerceCardContainer,
  EcommerceCardBadge,
  CardsTitle,
  CardImage,
  CardsImage,
  CardsText,
} from '../CardStyled';

export default {
  title: 'Card',
  component: Card,
};

// Story 1
export const Story1 = () => (
  <Card
    imageSrc="https://i.pravatar.cc/41"
    title="Card Title 1"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    buttonLabel="Read More"
  />
);

Story1.storyName = 'Card with Image';

// Story 2
export const Story2 = () => (
  <ErenYeagerCardContainer className="card">
    <ErenYeagerCardTitle>Eren Yeager</ErenYeagerCardTitle>
    <ErenYeagerCardText>
      Eren Yeager was a former member of the Survey Corps. He was the main
      protagonist of Attack on Titan. He lived in Shiganshina District,
    </ErenYeagerCardText>
  </ErenYeagerCardContainer>
);

Story2.storyName = 'Custom Card';

// Story 3
export const Story3 = () => (
  <EcommerceCardContainer className="card card-ecommerce">
    <div className="product-image-container">
      <EcommerceCardBadge>The training</EcommerceCardBadge>
      <CardImage
        src="https://picsum.photos/300/200/?blur"
        alt="product-image"
      />
    </div>
    <CardsTitle className="card-title">Survey Corps</CardsTitle>
    <CardsText className="card-text">
      In the year 847, Eren, Mikasa Ackerman, and Armin Arlert joined the 104th
      Training Corps. The three graduated with Eren ranking 5th best, and they
      joined the Survey Corps following the battle of Trost District
    </CardsText>
  </EcommerceCardContainer>
);

Story3.storyName = 'Custom Ecommerce Card';
