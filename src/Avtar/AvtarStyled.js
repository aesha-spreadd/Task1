import styled from 'styled-components';

export const SquareAvatar = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 2.5rem;
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
