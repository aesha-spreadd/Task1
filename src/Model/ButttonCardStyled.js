// ButtonCardStyled.js
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const ButtonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PublishButton = styled.button`
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Card = styled.div`
  background-color: #e49393;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: -1;
`;

const ButtonCardStyled = ({ showCard, handleButtonClick }) => {
  return (
    <>
      <GlobalStyle />
      <ButtonCardContainer>
        <PublishButton onClick={handleButtonClick}>Publish</PublishButton>
        {showCard && (
          <Card>
            <h1> This is the card content.</h1>
            <button className="square">Hello World</button>
          </Card>
        )}
      </ButtonCardContainer>
    </>
  );
};

export default ButtonCardStyled;
