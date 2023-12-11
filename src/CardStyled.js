// src/components/CardStyled.js
import styled from 'styled-components';
import theme from './theme'; // Update the path accordingly

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SingleCard = styled.div`
  width: 30%;
  background-color: #fff;
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
  height: 150px; /* Adjust the height based on your design */
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
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.cardButtonHoverBg};
  }
`;
