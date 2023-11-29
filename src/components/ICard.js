import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

const ICard = ({ x, y }) => {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setCurrentPosition({ x, y });
  }, [x, y]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (_, data) => {
    //setCurrentPosition({ x: data.x, y: data.y });
  };

  const handleDragStop = () => {
    setIsDragging(false);
    animateToPosition({ x, y });
  };

  const animateToPosition = ({ x: targetX, y: targetY }) => {
    const animationTime = 0.5; // Animation duration in seconds
    const intervalTime = 20; // Interval time for animation frames
    const framesCount = animationTime * 1000 / intervalTime;
    const xStep = (targetX - currentPosition.x) / framesCount;
    const yStep = (targetY - currentPosition.y) / framesCount;

    let currentFrame = 0;
    const animateTo = setInterval(() => {
      currentFrame++;
      setCurrentPosition(prevPosition => ({
        x: prevPosition.x + xStep,
        y: prevPosition.y + yStep,
      }));

      if (currentFrame === framesCount) {
        clearInterval(animateTo);
        setCurrentPosition({ x: targetX, y: targetY }); // Set final position
      }
    }, intervalTime);
  };

  return (
    <div style={{ position: 'absolute', top: currentPosition.y, left: currentPosition.x }}>
      <Draggable
        position={{ x: currentPosition.x, y: currentPosition.y }}
        onDrag={handleDrag}
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
          <span>A</span>
        </div>
      </Draggable>
    </div>
  );
};

export default ICard;