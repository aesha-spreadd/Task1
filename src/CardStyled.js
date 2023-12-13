// src/components/CardStyled.js
import styled from 'styled-components';
import theme from './theme';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SingleCard = styled.div`
  width: 30%;
  background-color: ${theme.badgeText};
  border: 1px solid ${theme.cardBorderColor};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  color: ${theme.cardTitleColor};
`;

export const CardText = styled.p`
  font-size: 15px;
  color: ${theme.cardTextColor};
`;

export const CardButton = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: ${theme.cardButtonBg};
  color: ${theme.badgeText};
  text-decoration: none;
  border-radius: 4px;
  margin-top: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.cardButtonHoverBg};
  }
`;

export const ErenYeagerCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 30rem;
  background-color: var(--off-white);
  border-radius: 5px;
  padding: 1rem;
  transition: 500ms;
  margin: 0.5rem;
  border: 1px solid ${theme.cardBorderColor};
`;

export const ErenYeagerCardTitle = styled.div`
  color: ${theme.primary};
  font-size: 1.8rem;
  font-weight: 500;
`;

export const ErenYeagerCardText = styled.div`
  color: var(--default-color);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4em;
`;

export const EcommerceCardBadge = styled.div`
  position: absolute;
  top: 10px; /* Adjust top position as needed */
  left: -1px;
  background-color: ${theme.primary}; // Update to theme.primary
  color: ${theme.offWhite}; // Update to theme.offWhite
  font-weight: 300;
  font-size: 1rem; /* Set the desired font size */
  padding: 0.3rem 0.5rem; /* Set the desired padding */
`;

export const EcommerceCardContainer = styled.div`
  position: relative;
  width: 300px;
  height: auto;
  border: 1px solid ${theme.cardBorderColor};
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
`;

export const CardsImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const CardsTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${theme.primary};
  margin: 10px;
`;

export const CardsText = styled.div`
  font-size: 1.2rem;
  font-weight: 100;
  color: ${theme.cardTextColor};
  margin: 10px;
`;
