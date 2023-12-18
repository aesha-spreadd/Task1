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

  .avatar-square,
  .sm,
  .md,
  .lg {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    margin: 0;
    overflow: clip margin content-box;
    overflow-x: clip;
    overflow-y: clip;
    padding: 0;
  }

  .sm {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 5px;
  }

  .md {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 5px;
  }

  .lg {
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 5px;
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

  .avatar-circular,
  .sm,
  .md,
  .lg {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 6px;
    margin: 0;
    overflow: clip margin content-box;
    overflow-x: clip;
    overflow-y: clip;
    padding: 0;
  }

  .sm {
    width: 3.4rem;
    height: 3.4rem;
  }

  .md {
    width: 4.4rem;
    height: 4.4rem;
  }

  .lg {
    width: 5.4rem;
    height: 5.4rem;
  }
`;
