import React, { useState } from 'react';

interface Card {
  name: string;
  img: string;
}

interface CardProps {
  card: Card;
  handleCardClick: (card: Card) => void;
}

function Card({ card, handleCardClick }: CardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
    handleCardClick(card);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      {/* Renderiza el contenido de la carta aquí */}
    </div>
  );
}

export default Card;
