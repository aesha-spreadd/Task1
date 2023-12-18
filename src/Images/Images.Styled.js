import styled, { css } from 'styled-components';

const containerStyles = css`
  align-items: center;
  border-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  justify-content: center;
  padding: 15px 50px;
  row-gap: 10px;
`;

const imageStyles = css`
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 150px;
  object-fit: cover;
  overflow-clip-margin: content-box;
  overflow-x: clip;
  overflow-y: clip;
  width: 150px;
`;

export const ContainerStyled = styled.div`
  ${containerStyles};
  height: 150px;
  width: 866px;
`;

export const ImageStyled = styled.img`
  ${imageStyles};
`;

export const ImageStyledCircle = styled.img`
  ${imageStyles};
  border-radius: 50%;
`;

export const ContainerResponsive = styled.div`
  ${containerStyles};
  height: auto;
  width: auto;
  object-fit: cover;
`;

export const StyledImage = styled.img`
  ${imageStyles};
  height: auto;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
