import React from 'react';
import {
  ContainerStyled,
  ImageStyled,
  ImageStyledCircle,
  StoryContainer,
  StoryImage,
} from './Images.Styled';

export const Images = () => {
  return (
    <ContainerStyled>
      <ImageStyled
        className="au-image"
        src="https://picsum.photos/350/350/?blur"
        alt="au-image-1"
      />
      <ImageStyled
        className="au-image"
        src="https://picsum.photos/350/351/?blur"
        alt="au-image-2"
      />
    </ContainerStyled>
  );
};

export const Circle = () => {
  return (
    <ContainerStyled>
      <ImageStyledCircle
        className="au-image"
        src="https://picsum.photos/350/350/?blur"
        alt="au-image-1"
      />
      <ImageStyledCircle
        className="au-image"
        src="https://picsum.photos/350/351/?blur"
        alt="au-image-2"
      />
    </ContainerStyled>
  );
};
