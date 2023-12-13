import styled from 'styled-components';

export const SquareAvatar = styled.div`
  display: flex;
  gap: 1rem;
  background-color: var(--active-color);
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 50px;

  .avatar-square {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
  }

  .sm {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 0.5rem;
    border-radius: 5px;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    height: 34px;
    margin: 0;
    overflow: clip margin content-box;
    overflow-x: clip;
    overflow-y: clip;
    padding: 0;
    width: 34px;
  }

  .md {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 5px;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    height: 44px;
    margin: 0;
    overflow: clip margin content-box;
    overflow-x: clip;
    overflow-y: clip;
    padding: 0;
    width: 44px;
  }

  .lg {
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 5px;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    height: 54px;
    margin: 0;
    overflow: clip margin content-box;
    overflow-x: clip;
    overflow-y: clip;
    padding: 0;
    width: 54px;
  }
`;

export const CircleAvatar = styled.div`
  display: flex;
  gap: 1rem;
  background-color: var(--active-color);
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 50px;

  .avatar-circular {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .sm {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    height: 34px;
    margin: 0;
    overflow: clip margin content-box;
    overflow-x: clip;
    overflow-y: clip;
    padding: 0;
    width: 34px;
  }

  .md {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    height: 44px;
    margin: 0;
    overflow: clip margin content-box;
    overflow-x: clip;
    overflow-y: clip;
    padding: 0;
    width: 44px;
  }

  .lg {
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 50%;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    height: 54px;
    margin: 0;
    overflow: clip margin content-box;
    overflow-x: clip;
    overflow-y: clip;
    padding: 0;
    width: 54px;
  }
`;
