import styled from 'styled-components';
import theme from '../theme';

const commonStyless = `
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
`;

const commonContainerStyle = `
  ${commonStyless}
  border-radius: 5px;
  column-gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardContainer = styled.div`
  ${commonContainerStyle}
  align-items: center;
  height: 129.875px;
  padding: 15px 50px;
  width: 695px;
`;

export const ErenYeagerCardContainer = styled.div`
  ${commonContainerStyle}
  background-color: ${theme.textColor};
  flex-direction: column;
  height: 109.875px;
  max-width: 300px;
  padding: 10px;
  transition: all 0.5s ease;
`;

export const ErenYeagerCardTitle = styled.p`
  ${commonStyless}
  color: ${theme.horizontalTitle};
  font-size: 18px;
  font-weight: 600;
  height: 21.5px;
  width: 300px;
`;

export const ErenYeagerCardText = styled.p`
  color: ${theme.inputBorder};
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 78.375px;
  line-height: 19.6px;
  width: 300px;
`;
// --------

const commonContainerStyles = `
  align-items: center;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  justify-content: center;
`;

export const EcommerceCardMainContainer = styled.div`
  ${commonContainerStyles}
  background-color: ${theme.textColor};
  border-radius: 5px;
  height: 490px;
  padding: 15px 50px;
  width: 900px;
`;

export const CardsImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CardsImage = styled.img`
  ${commonImageStyles}
  width: 100%;
  object-fit: cover;
`;

const commonImageStyles = `
  border-radius: 5px;
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
  ${commonDismissCardBadgeStyles}
`;

const commonDismissCardBadgeStyles = `
  background-color: ${theme.horizontalTitle};
  color: ${theme.textColor};
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  opacity: 0.8;
  padding: 5px 10px;
  position: absolute;
  right: 10px;
  top: 9px;
  transition: all 0.8s ease;
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
  margin-top: 15px;
  padding-block: 11px;
  padding-inline: 28px;
  width: 300px;
`;

const commonButtonStyles = `
  &:hover,
  &:active {
    color: ${theme.badgeText};
  }
  margin-bottom: 10px; 
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
  background-color: ${theme.textColor};
  border-radius: 5px;
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
  background-color: ${theme.textColor};
  border-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font: 600 6px 'Rubik', sans-serif;
  height: 180px;
  justify-content: center;
  margin: 0;
  padding: 15px 50px;
  row-gap: 10px;
  width: 900px;
`;

export const HorizontalContainer = styled.div`
  background-color: ${theme.textColor};
  border-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font: 600 6px 'Rubik', sans-serif;
  height: 140px;
  max-width: 600px;
  padding: 10px;
  transition: all 0.5s ease;
  width: 600px;
`;

export const HorizontalImage = styled.img`
  display: block;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 90px;
  border-radius: 5px;
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
  width: 489.211px;
`;

export const HorizontalText = styled.div`
  color: black;
  display: block;
  font-family: Rubik, sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 21.5px;
  margin-top: 9px;
  width: 489.211px;
`;

export const HorizontalTitle = styled.div`
  color: ${theme.horizontalTitle};
  display: block;
  font-family: Rubik, sans-serif;
  font-size: 18px;
  font-weight: 600;
  height: 21.5px;
  margin-top: 2px;
  width: 489.211px;
`;

export const commonStyle = `
  align-items: flex-start;
  border: 1px solid;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font: 600 40px Arial;
  height: 40px;
  margin: 45px 0 0;
  padding: 11px 28px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  width: 489.211px;
  word-spacing: 0;
`;

export const StyledButtons = styled.button`
  ${commonStyle}
  font:600 14px Arial;
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
