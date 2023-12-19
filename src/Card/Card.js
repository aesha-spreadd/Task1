import React from 'react';
import {
  ErenYeagerCardContainer,
  ErenYeagerCardTitle,
  ErenYeagerCardText,
  CardContainer,
  EcommerceCardMainContainer,
  EcommerceCardContainer,
  EcommerceCardBadge,
  DismissCardBadge,
  DismissCardMainContainer,
  CardsImage,
  CardsDismissText,
  DismissCardContainer,
  CardsTitle,
  CardsText,
  PrimaryaStyledButton,
  HorizontalMainContainer,
  HorizontalContainer,
  HorizontalBody,
  HorizontalText,
  HorizontalTitle,
  HorizontalImage,
  PrimaryxStyledButton,
} from './Card.Styled';

export const Card = () => {
  return (
    <CardContainer>
      <ErenYeagerCardContainer className="card">
        <ErenYeagerCardTitle>Eren Yeager</ErenYeagerCardTitle>
        <ErenYeagerCardText>
          Eren Yeager was a former member of the Survey Corps. He was the main
          protagonist of Attack on Titan. He lived in Shiganshina District,
        </ErenYeagerCardText>
      </ErenYeagerCardContainer>
    </CardContainer>
  );
};

export const CardBadge = () => {
  return (
    <EcommerceCardMainContainer>
      <EcommerceCardContainer>
        <CardsImage
          src="https://picsum.photos/300/200/?blur"
          alt="product-image"
        />
        <EcommerceCardBadge>The training</EcommerceCardBadge>
        <CardsTitle>Survey Corps</CardsTitle>
        <CardsText>
          In the year 847, Eren, Mikasa Ackerman, and Armin Arlert joined the
          104th Training Corps. The three graduated with Eren ranking 5th best,
          and they joined the Survey Corps following the battle of Trost
          District
        </CardsText>
      </EcommerceCardContainer>
    </EcommerceCardMainContainer>
  );
};

export const CardWithDismiss = () => {
  return (
    <DismissCardMainContainer>
      <DismissCardContainer>
        <CardsImage
          src="https://picsum.photos/300/200/?blur"
          alt="product-image"
        ></CardsImage>
        <DismissCardBadge>X</DismissCardBadge>
        <CardsTitle>Survey Corps Story</CardsTitle>
        <CardsDismissText>Rs.250</CardsDismissText>
        <PrimaryaStyledButton>CHECKOUT</PrimaryaStyledButton>
      </DismissCardContainer>
    </DismissCardMainContainer>
  );
};

export const Horizontal = () => {
  return (
    <HorizontalMainContainer>
      <HorizontalContainer>
        <HorizontalImage
          src=" https://picsum.photos/300/200/?blur"
          alt="product-image"
        ></HorizontalImage>
        <HorizontalBody>
          <HorizontalTitle>Founding Titan</HorizontalTitle>
          <HorizontalText>
            Despite having the ability to control the Titans, no Founding Titan
            of royal blood after the Great Titan War expressed any desire to get
            rid of the Titans outside the Walls, even if the inheritor had
            expressed that desire previously.
          </HorizontalText>
          <PrimaryxStyledButton>READ MORE</PrimaryxStyledButton>
        </HorizontalBody>
      </HorizontalContainer>
    </HorizontalMainContainer>
  );
};
