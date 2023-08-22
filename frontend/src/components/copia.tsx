import React, { useEffect, useState } from 'react';
import { CardProps } from './Card'; // Asegúrate de importar correctamente CardProps
import './card.css';
import { AxiosResponse } from 'axios';
import { getThemes } from '@/services/lib/themes';
function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
function Board() {
  const [themes, setThemes] = useState<CardProps[]>([]);
    const [randomThemes, setRandomThemes] = useState<CardProps[]>([]);

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [pairsClicked, setPairsClicked] = useState<number>(0);
  const [pairsGuessed, setPairsGuessed] = useState<number>(0);
  useEffect(() => {
    // Simula la obtención de temas y configuración de las cartas
    const fetchThemes = async () => {
      try {
        const response: AxiosResponse = await getThemes();
            // console.log(response.data.data);
            setThemes(response.data);
            setRandomThemes(shuffleArray(response.data));
        const exampleThemes: CardProps[] = [
          // Aquí configura tus temas como necesites
        ];
        setThemes(exampleThemes);
      } catch (error) {
        console.error('Error al obtener las cartas:', error);
      }
    };
    fetchThemes();
  }, []);
  const handleCardClick = (index: number) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
    if (flippedCards.length === 1 && !flippedCards.includes(index)) {
      const firstCardIndex = flippedCards[0];
      const match = themes[firstCardIndex].img === themes[index].img;
      if (match) {
        setPairsGuessed(pairsGuessed + 2);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
      setPairsClicked(pairsClicked + 2);
    }
  };

  return (
    <div className="memory-game">
      <div className="card-container">
        {randomThemes.map((theme, index) => (
          <div
            key={index}
            className={`card ${flippedCards.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <p>{theme.name}</p>
            <img
              src={`https://res.cloudinary.com/drjyg98uv/image/upload/v1692700208/memory-game/${theme.img}`}
              alt={theme.name}
            />
          </div>
        ))}
      </div>
      <p>Pairs Clicked: {pairsClicked}</p>
      <p>Pairs Guessed: {pairsGuessed}</p>
      <p>Game Finished: {pairsGuessed === themes.length ? 'Yes' : 'No'}</p>
    </div>
  );
}
export default Board;