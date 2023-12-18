import styled from 'styled-components';

export const ContainerStyled = styled.div`
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 150px;
  justify-content: center;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  row-gap: 10px;
  width: 866px;
`;

export const ImageStyled = styled.img`
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

export const ImageStyledCircle = styled.img`
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
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

export const ContainerResponsive = styled.div`
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 59.5px;
  justify-content: center;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  row-gap: 10px;
  width: auto;
  height: auto;
  object-fit: cover;
`;

export const StyledImage = styled.img`
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: auto;
  object-fit: cover;
  overflow: hidden;
  padding: 0;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
