import React from 'react';

const ScoresHeader = () => {
  const player1Score = 0;
  const player2Score = 0;

  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: '#fff',
      padding: '5px',
      display: 'flex',
      justifyContent: 'space-evenly', // Align elements with space in between
    }}>
      <p style={{ margin: '0' }}>玩家1分數: {player1Score}</p>
      <p style={{ margin: '0' }}>玩家2分數: {player2Score}</p>
    </div>
  );
};

export default ScoresHeader;
