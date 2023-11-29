import React, { useState } from 'react';
import Draggable from 'react-draggable';

const ICard = () => {
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
    const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  
    const handleDragStart = (e, data) => {
      setCurrentPosition({ x: data.x, y: data.y });
    };
  
    const handleDragStop = () => {
      setCurrentPosition({ x: 0, y: 0 });
    };
  
    return (
      <div style={{ marginTop: '20px', position: 'absolute'}}>
        <Draggable
          defaultPosition={currentPosition}
          position={null}
          onStart={(e, data) => setInitialPosition({ x: data.x, y: data.y })}
          onDrag={(e, data) => handleDragStart(e, data)}
          onStop={() => handleDragStop()}
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
            <span>Drag Me!</span>
          </div>
        </Draggable>
        <button
          onClick={() => {
            setCurrentPosition(initialPosition);
          }}
        >
          Return to Initial Position
        </button>
      </div>
    );
  };

  export default ICard;