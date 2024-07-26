import React from 'react';
import Scoreboard from './Scoreboard';
import styles from '../styles/Header.module.css';

const Header = ({ score, bestScore }) => {

  return (
    <>
      <div className={styles.header}>
        <h1>Pokémon Memory Game</h1>
        <Scoreboard score={score} bestScore={bestScore} />
      </div>
      <div className={styles.instructions}>
        <p>Click on a Pokémon to earn a point, but don't click on the same Pokémon more than once! Test your memory and see how high you can score!</p>
      </div>
    </>

  );
};

export default Header;