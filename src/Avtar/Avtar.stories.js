// Avtar.stories.js
import React from 'react';
import Avatar from './Avtar';

export default {
  title: 'Avatar',
  component: Avatar,
};

const avatarData = [
  { size: 'sm', imageUrl: 'https://i.pravatar.cc/41' },
  { size: 'md', imageUrl: 'https://i.pravatar.cc/42' },
  { size: 'lg', imageUrl: 'https://i.pravatar.cc/43' },
];

const Template = (args) => <Avatar {...args} />;

export const CircleProfile = Template.bind({});
CircleProfile.args = { avatars: avatarData };

export const SquareProfile = Template.bind({});
SquareProfile.args = { square: true, avatars: avatarData };
