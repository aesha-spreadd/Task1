import React from 'react';

const Card = () => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2>Card Title</h2>
      <p>This is a simple card component in React.</p>
    </div>
  );
};

export default Card;
