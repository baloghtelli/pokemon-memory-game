import { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import GameOver from './components/GameOver';

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [generation, setGeneration] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetchCards(generation);
  }, [generation]);

  const fetchCards = async (newGeneration = generation) => {
    try {
      const offset = (newGeneration - 1) * 12;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
      const data = await response.json();
      const fetchedCards = data.results.map((pokemon, index) => {
        const id = offset + index + 1;
        return {
          id: id,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }

      });

      setCards(shuffleCards(fetchedCards));

    } catch (error) {
      console.log('Error fetching cards: ', error);
    }
  };

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setGameOver(true);
    } else {
      setClickedCards([...clickedCards, id]);
      const newScore = score + 1;
      setScore(newScore);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      if (newScore % 12 === 0) {
        setGeneration(prevGeneration => {
          const newGeneration = prevGeneration + 1;
          fetchCards(newGeneration);
          return newGeneration;
        });
        setClickedCards([]);
      }
    }
    setCards(shuffleCards(cards));
  };

  const shuffleCards = (cardsToShuffle = cards) => {
    const shuffledCards = [...cardsToShuffle].sort(() => Math.random() - 0.5);
    return shuffledCards;
  };

  const handlePlayAgain = () => {
    setScore(0);
    setClickedCards([]);
    setGameOver(false);
    setGeneration(1);
  }

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <GameBoard cards={cards} onCardClick={handleCardClick} />
      {gameOver && (
        <GameOver
          score={score}
          bestScore={bestScore}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  )
}

export default App;
