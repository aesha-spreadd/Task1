import styled from 'styled-components';
import theme from '../theme';

export const CardContainer = styled.div`
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
  height: 129.875px;
  justify-content: center;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  row-gap: 10px;
  width: 695px;
`;

export const ErenYeagerCardContainer = styled.div`
  background-color: rgb(246, 249, 252);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 109.875px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  max-width: 300px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  row-gap: 10px;
  transition-behavior: normal;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: all;
  transition-timing-function: ease;
  width: 300px;
`;

export const ErenYeagerCardTitle = styled.p`
  color: rgb(255, 78, 84);
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight: 600;
  height: 21.5px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  width: 300px;
`;

export const ErenYeagerCardText = styled.p`
  color: rgb(74, 74, 104);
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 78.375px;
  line-height: 19.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  width: 300px;
`;
// --------

export const EcommerceCardMainContainer = styled.div`
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
  height: 490px;
  justify-content: center;
  margin: 0;
  padding: 15px 50px;
  row-gap: 10px;
  width: 900px;
`;

export const CardsImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CardsImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const EcommerceCardBadge = styled.div`
  position: absolute;
  top: 12px;
  left: -10px;
  background-color: ${theme.primary};
  color: ${theme.badgeText};
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
`;

export const CardsTitle = styled.h1`
  font-size: 19px;
  font-weight: 700;
  font-family: 'Rubik', sans-serif;
  color: ${theme.primary};
  margin: 2px;
  margin-top: 10px;
`;

export const CardsText = styled.div`
  font-size: 14px;
  font-weight: 400;
  height: 97.9688px;
  line-height: 19.6px;
  font-family: 'Rubik', sans-serif;
  color: black;
  margin: 2px;
  margin-top: 10px;
`;

export const EcommerceCardContainer = styled.div`
  position: relative;
  width: 300px;
  height: auto;
  border: 10px solid ${theme.badgeText};
  border-radius: 8px;
  margin: 10px;
  background-color: ${theme.badgeText};
`;

export const DismissCardBadge = styled.div`
  background-color: rgb(255, 78, 84);
  color: rgb(246, 249, 252);
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  opacity: 0.8;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  position: absolute;
  right: 10px;
  top: 9px;
  transition-behavior: normal;
  transition-delay: 0s;
  transition-duration: 0.8s;
  transition-property: all;
  transition-timing-function: ease;
`;

export const commonStyles = `
padding: 10px;
border: none;
cursor: pointer;
border-radius: 4px;
font-size: 14px;
margin-right: 10px;
font-family: Arial;
font-weight: 600;
padding-block-end: 11px;
padding-block-start: 11px;
padding-bottom: 11px;
padding-inline-end: 28px;
padding-inline-start: 28px;
padding-left: 28px;
padding-right: 28px;
padding-top: 11px;
margin-top: 15px;
padding-block-end: 11px;
padding-block-start: 11px;
padding-bottom: 11px;
padding-inline-end: 28px;
padding-inline-start: 28px;
padding-left: 28px;
padding-right: 28px;
padding-top: 11px;
width: 300px;
`;

const commonButtonStyles = `
  &:hover,
  &:active {
    color: ${theme.badgeText};
    /* Add any additional styles for hover state */
  }
  margin-bottom: 10px; /* Add space between buttons */
`;

export const StyledButton = styled.button`
  ${commonStyles}
`;

export const PrimaryaStyledButton = styled(StyledButton)`
  background-color: ${theme.badgeText};
  color: ${theme.primary};
  border: 1px solid ${theme.primary};

  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.badgeText};
  }
`;

export const DismissCardMainContainer = styled.div`
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
  height: 490px;
  justify-content: center;
  margin: 0;
  padding: 15px 50px;
  row-gap: 10px;
  width: 900px;
`;

export const DismissCardContainer = styled.div`
  position: relative;
  width: 300px;
  height: auto;
  border: 10px solid ${theme.badgeText};
  border-radius: 8px;
  margin: 10px;
  background-color: ${theme.badgeText};
`;

export const CardsDismissText = styled.div`
  font-size: 14px;
  font-weight: 500;

  font-family: 'Rubik', sans-serif;
  color: black;
  margin: 2px;
  margin-top: 10px;
`;

export const HorizontalMainContainer = styled.div`
  align-items: center;
  background-color: rgb(255, 237, 237);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 180px;
  justify-content: center;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  row-gap: 10px;
  width: 900px;
`;

export const HorizontalContainer = styled.div`
  background-color: rgb(246, 249, 252);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 140px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  max-width: 600px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  row-gap: 10px;
  transition-behavior: normal;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: all;
  transition-timing-function: ease;
  width: 600px;
`;

export const HorizontalImage = styled.img`
  display: block;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 90px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  width: 100.789px;
`;

export const HorizontalBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 120.281px;
  justify-content: space-between;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  width: 489.211px;
`;

export const HorizontalText = styled.div`
  color: black;
  display: block;
  font-family: Rubik, sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 21.5px;
  margin-bottom: px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 9px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  width: 489.211px;
`;

export const HorizontalTitle = styled.div`
  color: rgb(255, 78, 84);
  display: block;
  font-family: Rubik, sans-serif;
  font-size: 18px;
  font-weight: 600;
  height: 21.5px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 2px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  width: 489.211px;
`;

export const commonStyle = `
  align-items: flex-start;
  appearance: auto;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-family: Arial;
  font-feature-settings: normal;
  font-kerning: auto;
  font-optical-sizing: auto;
  font-stretch: 100%;
  font-style: normal;
  font-variant-alternates: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-variant-position: normal;
  font-variation-settings: normal;
  font-weight: 600;
  height: 40px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 45px;
  padding-block-end: 11px;
  padding-block-start: 11px;
  padding-bottom: 11px;
  padding-inline-end: 28px;
  padding-inline-start: 28px;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 11px;
  text-align: center;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-transform: none;
  transition-behavior: normal;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  width: 489.211px;
  word-spacing: 0px;
  -webkit-border-image: none;
`;

export const StyledButtons = styled.button`
  ${commonStyle}
`;

export const PrimaryxStyledButton = styled(StyledButtons)`
  background-color: ${theme.badgeText};
  color: ${theme.primary};
  border: 1px solid ${theme.primary};

  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.badgeText};
  }
`;
