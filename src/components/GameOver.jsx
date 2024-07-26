import React from 'react';
import styles from '../styles/GameOver.module.css';

const GameOver = ({ score, bestScore, onPlayAgain }) => {

  return (
    <div className={styles.overlay}>
      <div className={styles.gameOverBox}>
        <h2>Game Over!</h2>
        <div className={styles.scoreB}>
          <p>Your Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOver;