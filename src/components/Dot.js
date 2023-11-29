import React, { useState, useEffect } from 'react';

const Dot = ({ x, y }) => {

    const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setCurrentPosition({ x, y });
    }, [x, y]);

  return (
    <div style={{ position: 'absolute', top: currentPosition.y, left: currentPosition.x }}>
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'black',
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
    </div>
  );
};

export default Dot;