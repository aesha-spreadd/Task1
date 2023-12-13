import React, { useState } from 'react';
import ButtonCardStyled from './ButttonCard.Styled';

const ButtonCard = () => {
  const [showCard, setShowCard] = useState(false);

  const handleButtonClick = () => {
    setShowCard(!showCard);
  };

  return (
    <ButtonCardStyled
      showCard={showCard}
      handleButtonClick={handleButtonClick}
    />
  );
};

export default ButtonCard;
