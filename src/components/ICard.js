import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

const ICard = ({ x, y, imageSrc }) => {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial position only when x or y are non-zero
    if (x !== 0 || y !== 0) {
      setCurrentPosition({ x, y });
    }
  }, [x, y]);

  const handleDragStart = () => {
    // No need to update currentPosition here
  };

  const handleDragStop = (e, data) => {
    const dropX = data.x;
    const dropY = data.y;

    // Define the drop spots
    const dropSpots = [
      { x: 100, y: 100 },
      { x: 300, y: 300 },
    ];

    // Check if the card touches any of the drop spots
    const isCardInDropSpot = dropSpots.some((spot) => {
      return (
        dropX >= spot.x &&
        dropX <= spot.x + 100 /* Width of the card */ &&
        dropY >= spot.y &&
        dropY <= spot.y + 128 /* Height of the card */
      );
    });

    // Set the position based on drop spot or back to original spawn location
    if (isCardInDropSpot) {
      setCurrentPosition({ x: dropX, y: dropY });
    } else {
      setCurrentPosition({ x, y });
    }
  };

  return (
    <div style={{ position: 'absolute', top: currentPosition.y, left: currentPosition.x }}>
      <Draggable
        position={{ x: currentPosition.x, y: currentPosition.y }}
        onStart={handleDragStart}
        onStop={handleDragStop}
      >
        <div
          style={{
            width: '100px',
            height: '128px',
            backgroundColor: 'lightblue',
            border: '1px solid #ccc',
            borderRadius: '8px',
            cursor: 'grab',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={imageSrc} alt="Card" style={{ width: '100%', height: '100%' }} draggable="false" />
        </div>
      </Draggable>
    </div>
  );
};

export default ICard;
