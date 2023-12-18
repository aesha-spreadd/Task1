// MyComponent.styled.js
import styled from 'styled-components';

export const StyledComponent = styled.div`
  color: ${(props) => props.color || 'black'};
  font-size: 16px;
  padding: 10px;
  background-color: ${(props) => {
    switch (props.color) {
      case 'blue':
        return 'lightblue';
      case 'green':
        return 'lightgreen';
      case 'red':
        return 'lightcoral';
      default:
        return 'lightgray';
    }
  }};
`;

export const AdditionalDiv = styled.div`
  margin-top: 10px;
  padding: 5px;
  background-color: lightyellow;
`;
