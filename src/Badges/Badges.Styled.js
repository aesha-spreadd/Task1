import styled from 'styled-components';
import theme from '../theme';

// Common styles for badge containers
export const BadgesContainer = styled.div`
  align-items: center;
  background-color: rgb(255, 237, 237);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 55.5px;
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

export const BadgesContainerFirst = styled.div`
  display: flex;

  align-items: center;
  margin-right: 10px;
`;

export const BadgesContainerSecond = styled.div`
  display: flex;
  //position: relative;
  align-items: center; // Added position property
  margin-right: 10px;
`;

export const BadgesContainerThird = styled.div`
  display: flex;
  // position: relative; // Added position property
  align-items: center;
  margin-right: 10px;
`;

export const BadgeImageFirst = styled.img`
  border-radius: 50%;
  height: 34px;
  width: 34px;
`;

export const BadgeImageSecond = styled.img`
  border-radius: 50%;
  height: 44px;
  width: 44px;
`;

export const BadgeImageThird = styled.img`
  border-radius: 50%;
  height: 54px;
  width: 54px;
`;

export const NumberBadgeFirst = styled.div`
  align-items: center;
  background-color: rgb(255, 78, 84);
  border-radius: 50%; // Make it circular
  color: rgb(246, 249, 252);
  border-bottom-color: rgb(246, 249, 252);
  display: flex;
  font-family: 'Rubik', sans-serif;
  font-size: 10px;
  border-right-width: 2px;
  border-left-width: 2px;
  height: 18px;
  justify-content: center;
  margin-bottom: 0;
  margin-left: 25px; // Adjusted margin-left to position it to the left
  margin-right: 0;
  margin-top: 40px; // Adjusted margin-top to position it above
  padding: 0;
  position: absolute;
  top: 0;
  width: 18px;
  border-right-color: rgb(246, 249, 252);
  border-left-color: rgb(246, 249, 252);
`;
export const NumberBadgeSecond = styled.div`
  align-items: center;
  background-color: rgb(255, 78, 84);
  border-radius: 50%; // Make it circular
  color: rgb(246, 249, 252);
  border-bottom-color: rgb(246, 249, 252);
  display: flex;
  font-family: 'Rubik', sans-serif;
  font-size: 10px;
  border-right-width: 2px;
  border-left-width: 2px;
  height: 18px;
  justify-content: center;
  margin-bottom: 0;
  margin-left: 29px; // Adjusted margin-left to position it to the left
  margin-right: 0;
  margin-top: 39px; // Adjusted margin-top to position it above
  padding: 0;
  position: absolute;
  top: 0;
  width: 18px;
  border-right-color: rgb(246, 249, 252);
  border-left-color: rgb(246, 249, 252);
`;

export const NumberBadgeThird = styled.div`
  align-items: center;
  background-color: rgb(255, 78, 84);
  border-radius: 50%; // Make it circular
  color: rgb(246, 249, 252);
  border-bottom-color: rgb(246, 249, 252);
  display: flex;
  font-family: 'Rubik', sans-serif;
  font-size: 10px;
  border-right-width: 2px;
  border-left-width: 2px;
  height: 18px;
  justify-content: center;
  margin-bottom: 0;
  margin-left: 38px; // Adjusted margin-left to position it to the left
  margin-right: 0;
  margin-top: 37px; // Adjusted margin-top to position it above
  padding: 0;
  position: absolute;
  top: 0;
  width: 18px;
  border-right-color: rgb(246, 249, 252);
  border-left-color: rgb(246, 249, 252);
`;

export const BadgeImage = styled.img`
  border-radius: 50%;
`;

export const ContainerStyled = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10px;
  row-gap: 10px;
  width: 706px;
  padding: 15px 50px;
  border-radius: 5px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const BadgemlContainer = styled.div`
  margin-right: 10px;
`;

export const BadgelgContainer = styled.div`
  margin-right: 10px;
`;

export const SmallBadgesStyled = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 35px;
  margin-left: -17px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgb(76, 175, 80);
    border-bottom-color: rgb(246, 249, 252);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(246, 249, 252);
    border-left-style: solid;
    border-left-width: 2px;
    border-right-color: rgb(246, 249, 252);
    border-right-style: solid;
    border-right-width: 2px;
    border-top-color: rgb(246, 249, 252);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-top-style: solid;
    border-top-width: 2px;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    height: 12px;
    width: 12px;
  }
`;

export const MlImageStyled = styled.img`
  border-radius: 50%;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 44px;
  margin-right: 10px;
  display: inline;
  overflow-clip-margin: content-box;
  overflow-x: clip;
  overflow-y: clip;
  padding: 0;
  width: 44px;
`;

export const MlBadgesStyled = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 35px;
  margin-left: -22px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgb(255, 152, 0);
    border-bottom-color: rgb(246, 249, 252);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(246, 249, 252);
    border-left-style: solid;
    border-left-width: 2px;
    border-right-color: rgb(246, 249, 252);
    border-right-style: solid;
    border-right-width: 2px;
    border-top-color: rgb(246, 249, 252);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-top-style: solid;
    border-top-width: 2px;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    height: 12px;
    width: 12px;
  }
`;

export const SmImageStyled = styled.img`
  border-radius: 50%;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 34px;
  margin-right: 5px;
  display: inline;
  overflow-clip-margin: content-box;
  overflow-x: clip;
  overflow-y: clip;
  padding: 0;
  width: 34px;
`;

export const LgImageStyled = styled.img`
  border-radius: 50%;
  font-family: 'Rubik', sans-serif;
  overflow-clip-margin: content-box;
  font-size: 6px;
  height: 54px;
  margin-right: 5px;
  display: inline;
  overflow-x: clip;
  overflow-y: clip;
  width: 54px;
`;

export const LgBadgesStyled = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 35px;
  margin-left: -19px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgb(244, 67, 54);
    border-bottom-color: rgb(246, 249, 252);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(246, 249, 252);
    border-left-style: solid;
    border-left-width: 2px;
    border-right-color: rgb(246, 249, 252);
    border-right-style: solid;
    border-right-width: 2px;
    border-top-color: rgb(246, 249, 252);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-top-style: solid;
    border-top-width: 2px;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    height: 15px;
    width: 15px;
  }
`;
