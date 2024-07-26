import React from 'react';
import styles from '../styles/Scoreboard.module.css';

const Scoreboard = ({score, bestScore}) => {
  return (
    <div className={styles.scoreBoard}>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
};

export default Scoreboard;