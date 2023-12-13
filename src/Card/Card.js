// card.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  SingleCard,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardButton,
} from './Card.Styled';

const Card = ({ imageSrc, title, text, buttonLabel }) => (
  <SingleCard>
    {imageSrc && (
      <CardImage src={imageSrc} className="card-img-top" alt="Card Image" />
    )}
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardButton href="#" className="btn btn-primary">
        {buttonLabel}
      </CardButton>
    </CardBody>
  </SingleCard>
);

Card.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default Card;
