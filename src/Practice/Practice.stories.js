// MyComponent.stories.js
import React from 'react';
import Practice from './Practice';

export default {
  title: 'MyComponent',
  component: Practice,
};

export const Example = () => (
  <>
    <Practice color="blue" text="Hello, this is MyComponent with blue color!" />
    <Practice
      color="green"
      text="Hello, this is MyComponent with green color!"
    />
    <Practice color="red" text="Hello, this is MyComponent with red color!" />
  </>
);
