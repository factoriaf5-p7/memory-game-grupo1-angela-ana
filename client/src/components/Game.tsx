import { random } from "@/utils/random";
import data from "../data/data.json";
import { useEffect, useState } from "react";
import useThemeFetcher from "../service/ThemeCompleteFetch";
import { Theme } from "@/interface/ThemeInterface";

export interface Cards {
  name: string;
  img: string;
}

export interface CardsUpdated extends Cards {
  name: string;
  img: string;
  index: number;
  flipped: boolean;
}

export const Game = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const { themes, loading } = useThemeFetcher();

  function getSelectedTheme(themes: Theme[]) {
    // Verificar si hay un tema guardado en el local storage
    const localTheme = localStorage.getItem("localTheme");
    // Si no hay un tema en el almacenamiento local, selecciona el primero de la lista
    if (!localTheme) {
      return themes[0];
    }
    // Encuentra el tema en themes que coincide con el tema guardado en el almacenamiento local
    const selectedTheme = themes.find((theme) => theme.name === localTheme);
    // Si se encontró un tema que coincide, devuélvelo; de lo contrario, selecciona el primero
    if (selectedTheme) {
      return selectedTheme;
    } else {
      return themes[0];
    }
  }

  // Uso de la función para obtener el tema seleccionado
  const selectedTheme = getSelectedTheme(themes);

  console.log(selectedTheme);
  // console.log(selectedTheme.cards);

  const dataRandom = random(data);
  const shuffleData = dataRandom.map((card, index) => ({
    ...card,
    index: index,
    flipped: false,
  }));
  const [cards, setCards] = useState<CardsUpdated[]>(shuffleData);
  let [clickCount, setClickCount] = useState<number>(0);
  let [pairCount, setPairCount] = useState<number>(0);

  //  FUNCION AL CLICK !

  const handleCardClick = (cardIndex: number) => {
    setClickCount((prevClickCount) => prevClickCount + 1);
    if (
      flippedCards.length === 2 ||
      matchedPairs.includes(cards[cardIndex].name)
    ) {
      return;
    }

    const updatedCards = cards.map((card) => {
      if (card.index === cardIndex) {
        return { ...card, flipped: true };
      }
      return card;
    });

    setCards(updatedCards);
    setFlippedCards([...flippedCards, cardIndex]);

    if (flippedCards.length === 1 && flippedCards[0] !== cardIndex) {
      if (cards[flippedCards[0]].name === cards[cardIndex].name) {
        setMatchedPairs([...matchedPairs, cards[cardIndex].name]);
      }
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const timeout = setTimeout(() => {
        const updatedCards = cards.map((card) => {
          if (flippedCards.includes(card.index)) {
            if (matchedPairs.includes(card.name)) {
              setPairCount((prevPairCount) => prevPairCount + 0.5);
              return { ...card, flipped: true };
            } else {
              return { ...card, flipped: false };
            }
          }
          return card;
        });

        setCards(updatedCards);
        setFlippedCards([]);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [flippedCards, cards, matchedPairs]);

  return (
    <>
      <div className="container">
        <h1>Memory Game</h1>
      </div>
      <div id="memory_board" role="cards">
        {cards.map((card) => (
          <div
            className="card"
            style={
              card.flipped
                ? {
                    backgroundImage: `url(src/assets/img/${card.img})`,
                  }
                : { background: "#123456" }
            }
            onClick={() => handleCardClick(card.index)}
          ></div>
        ))}
      </div>
      <div id="score">
        <h2>Score </h2>
        <p>
          Cards Clicked: <span id="pairs_clicked">{clickCount}</span>
        </p>
        <p>
          Pairs Guessed: <span id="pairs_guessed">{pairCount}</span>
        </p>
      </div>
    </>
  );
};
