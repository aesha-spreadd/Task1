import React from 'react';
import {
  ContainerStyled,
  ImageStyled,
  ImageStyledCircle,
  StyledImage,
  StoryContainer,
  StoryImage,
  ContainerResponsive,
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

export const Responsive = () => {
  return (
    <ContainerResponsive>
      <StyledImage
        className="au-image-full-width"
        src="https://fastly.picsum.photos/id/389/256/128.jpg?blur=5&hmac=xHRSbiQuU84z5xbbnCoNgNd4b66TsJ293PMsXInVMBo"
        alt="Full Width Image"
      />
    </ContainerResponsive>
  );
};
