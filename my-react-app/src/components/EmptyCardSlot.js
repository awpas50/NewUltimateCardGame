import React from 'react';

const EmptyCardSlot = () => {
  const cardSlotStyle = {
    width: '100px',
    height: '150px',
    border: '2px dotted #ccc',
    margin: '5px', // Increased gap between card slots
    borderRadius: '10px', // Rounded edges

    // Adjusted dot styling
    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
    backgroundSize: '20px 20px', // Increased size of dots
  };

  return <div style={cardSlotStyle}></div>;
};

export default EmptyCardSlot;