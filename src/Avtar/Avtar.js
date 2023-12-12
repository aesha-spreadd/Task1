import React from 'react';
import { SquareAvatar, CircleAvatar } from './Avtar.Styled';

const Avatar = ({ square }) => {
  return (
    <div className="code-container">
      {square ? (
        <SquareAvatar>
          <img
            className="avatar avatar-square sm"
            src="https://i.pravatar.cc/41"
            alt="avatar-7"
          />
          <img
            className="avatar avatar-square md"
            src="https://i.pravatar.cc/42"
            alt="avatar-6"
          />
          <img
            className="avatar avatar-square lg"
            src="https://i.pravatar.cc/43"
            alt="avatar-5"
          />
        </SquareAvatar>
      ) : (
        <CircleAvatar>
          <img
            className="avatar avatar-circular sm"
            src="https://i.pravatar.cc/43"
            alt="avatar-2"
          />
          <img
            className="avatar avatar-circular md"
            src="https://i.pravatar.cc/44"
            alt="avatar-3"
          />
          <img
            className="avatar avatar-circular lg"
            src="https://i.pravatar.cc/45"
            alt="avatar-4"
          />
        </CircleAvatar>
      )}
    </div>
  );
};

export default Avatar;
