import React from 'react';

const PlayerCardArea = () => {
  const cardSlotStyle = {

    marginBottom: '20px',

    position: 'relative',
    width: '330px',
    height: '128px',
    border: '3px dotted #ccc',
    borderRadius: '10px', // Rounded edges

    // Adjusted dot styling
    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
    backgroundSize: '20px 20px', // Increased size of dots
  };

  return <div style={cardSlotStyle}></div>;
};

export default PlayerCardArea;