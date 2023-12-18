// Avtar.js
import React from 'react';
import { SquareAvatar, CircleAvatar } from './Avtar.Styled';

const Avatar = ({ square, avatars }) => {
  return (
    <div className="code-container">
      {square ? (
        <SquareAvatar>
          {avatars.map((avatar, index) => (
            <img
              key={index}
              className={`avatar avatar-square ${avatar.size}`}
              src={avatar.imageUrl}
              alt={`avatar-${index}`}
            />
          ))}
        </SquareAvatar>
      ) : (
        <CircleAvatar>
          {avatars.map((avatar, index) => (
            <img
              key={index}
              className={`avatar avatar-circular ${avatar.size}`}
              src={avatar.imageUrl}
              alt={`avatar-${index}`}
            />
          ))}
        </CircleAvatar>
      )}
    </div>
  );
};

export default Avatar;
