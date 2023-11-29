import React from 'react';
import EmptyCardSlot from './EmptyCardSlot'; // Assuming EmptyCardSlot is in the same directory

const CardGrid = () => {
  const gridContainerStyle = {
    position: 'relative',
    left: '20px',
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)', // 3 columns each 100px wide
    gridTemplateRows: 'repeat(6, 150px)', // 6 rows each 150px tall
    columnGap: '15px', // Tiny gap between card slots
    /* Add any additional styling for your grid container */
  };

  return (
    <div style={gridContainerStyle}>
      {/* Render multiple instances of EmptyCardSlot */}
      {Array.from({ length: 18 }, (_, index) => (
        <EmptyCardSlot key={index} />
      ))}
    </div>
  );
};

export default CardGrid;