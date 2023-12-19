// Images.js
import React from 'react';
import {
  ContainerStyled,
  ImageStyled,
  ImageStyledCircle,
  StyledImage,
  ContainerResponsive,
} from './Images.Styled';

const Images = ({ imageArray }) => {
  return (
    <ContainerStyled>
      {imageArray.map((image, index) => (
        <ImageStyled
          key={index}
          className="au-image"
          src={image}
          alt={`au-image-${index}`}
        />
      ))}
    </ContainerStyled>
  );
};

const Circle = ({ imageArray }) => {
  return (
    <ContainerStyled>
      {imageArray.map((image, index) => (
        <ImageStyledCircle
          key={index}
          className="au-image"
          src={image}
          alt={`au-image-${index}`}
        />
      ))}
    </ContainerStyled>
  );
};

const Responsive = ({ imageArray }) => {
  // Correct the prop name here
  return (
    <ContainerResponsive>
      {imageArray.map((image, index) => (
        <StyledImage
          key={index}
          className="au-image-full-width"
          src={image}
          alt={`Full Width Image - ${index}`}
        />
      ))}
    </ContainerResponsive>
  );
};

export { Images, Circle, Responsive };
