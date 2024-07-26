import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({id, name, image, onCardClick}) => {

  return (
    <div className={styles.card} onClick={() => onCardClick(id)}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;