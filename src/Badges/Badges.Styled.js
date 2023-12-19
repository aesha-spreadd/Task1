import styled from 'styled-components';
import theme from '../theme';

export const BadgesContainer = styled.div`
  align-items: center;
  background-color: ${theme.cardMain};
  border-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 55.5px;
  justify-content: center;
  margin: 0;
  padding: 15px 50px;
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
  align-items: center;
  margin-right: 10px;
`;

export const BadgesContainerThird = styled.div`
  display: flex;
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
  background-color: ${theme.horizontalTitle};
  border: 2px solid ${theme.textColor};
  border-radius: 50%;
  color: ${theme.textColor};
  display: flex;
  font-family: 'Rubik', sans-serif;
  font-size: 10px;
  height: 18px;
  justify-content: center;
  margin: 40px 0 0 25px;
  padding: 0;
  position: absolute;
  top: 0;
  width: 18px;
`;

export const NumberBadgeSecond = styled.div`
  align-items: center;
  background-color: ${theme.horizontalTitle};
  border: 2px solid ${theme.textColor};
  border-radius: 50%;
  color: ${theme.textColor};
  display: flex;
  font-family: 'Rubik', sans-serif;
  font-size: 10px;
  height: 18px;
  justify-content: center;
  margin: 39px 0 0 29px;
  padding: 0;
  position: absolute;
  top: 0;
  width: 18px;
`;

export const NumberBadgeThird = styled.div`
  align-items: center;
  background-color: ${theme.horizontalTitle};
  border: 2px solid ${theme.textColor};
  border-radius: 50%;
  color: ${theme.textColor};
  display: flex;
  font-family: 'Rubik', sans-serif;
  font-size: 10px;
  height: 18px;
  justify-content: center;
  margin: 37px 0 0 38px;
  padding: 0;
  position: absolute;
  top: 0;
  width: 18px;
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
  margin: 35px 0 0 -17px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${theme.successColor};
    border: 2px solid ${theme.textColor};
    border-radius: 50%;
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
  margin: 35px 0 0 -22px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${theme.secondaryColor};
    border: 2px solid ${theme.textColor};
    border-radius: 50%;
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
    background-color: ${theme.horizontalTitle};
    border: 2px solid ${theme.textColor};
    border-radius: 50%;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    height: 15px;
    width: 15px;
  }
`;
