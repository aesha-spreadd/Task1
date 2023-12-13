import React from 'react';
import Avatar from '../Avtar/Avtar';

export default {
  title: 'Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const CircleProfile = Template.bind({});

export const SquareProfile = Template.bind({});
SquareProfile.args = {
  square: true,
};
