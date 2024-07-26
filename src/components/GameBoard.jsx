import React from 'react';
import Card from './Card';
import styles from '../styles/GameBoard.module.css';

const GameBoard = ({cards, onCardClick}) => {

  return (
      <div className={styles.gameBoard}>
      {cards.map(card => (
        <Card 
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;