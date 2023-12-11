// src/components/Card.js
import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  SingleCard,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardButton,
} from './CardStyled';

const Card = ({ title, text, buttonLabel, imageSrc }) => {
  return (
    <SingleCard>
      <CardImage src={imageSrc} className="card-img-top" alt="Card Image" />
      <CardBody>
        <CardTitle className="card-title">{title}</CardTitle>
        <CardText className="card-text">{text}</CardText>
        <CardButton href="#" className="btn btn-primary">
          {buttonLabel}
        </CardButton>
      </CardBody>
    </SingleCard>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const CardRow = () => {
  return (
    <CardContainer>
      <Card
        title="Card Title 1"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonLabel="Go somewhere"
        imageSrc="https://via.placeholder.com/300"
      />
      <Card
        title="Card Title 2"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonLabel="Go somewhere"
        imageSrc="https://via.placeholder.com/300"
      />
      <Card
        title="Card Title 3"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonLabel="Go somewhere"
        imageSrc="https://via.placeholder.com/300"
      />
    </CardContainer>
  );
};

export default CardRow;
