import { random } from "@/utils/random";
import data from "../data/data.json";
import { useEffect, useState } from "react";

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
  const shuffleData = random(
    data.map((card, index) => ({ ...card, index: index, flipped: false }))
  );
  const [cards, setCards] = useState<CardsUpdated[]>(shuffleData);

  const handleCardClick = (cardIndex: number) => {
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
        console.log("hola");
      }
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const timeout = setTimeout(() => {
        const updatedCards = cards.map((card) => {
          if (flippedCards.includes(card.index)) {
            if (matchedPairs.includes(card.name)) {
              return { ...card, flipped: true };
            } else {
              return { ...card, flipped: false };
            }
          }
          return card;
        });
        console.log(cards);
        console.log(flippedCards);
        console.log("matched cards");
        console.log(matchedPairs);

        setCards(updatedCards);
        setFlippedCards([]);
      }, 1000);

      return () => clearTimeout(timeout);
    }
    console.log(cards);
    console.log(flippedCards);
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
          Pairs Clicked: <span id="pairs_clicked">0</span>
        </p>
        <p>
          Pairs Guessed: <span id="pairs_guessed">0</span>
        </p>
      </div>
    </>
  );
};

// export const Game = () => {
//   const imgRoute = "src/assets/img/";
//   const [cardsRandom, setCardsRandom] = useState<CardsUpdated[]>([]);
//   const [flippedCards, setFlippedCards] = useState<CardsUpdated[]>([]);

//   const compareCards = (nombre1: string, nombre2: string) =>
//     nombre1 === nombre2;

//   const flippedTrue = (array: CardsUpdated[]) => {
//     // Utiliza map para crear un nuevo array con las propiedades actualizadas
//     return array.map((card) => ({
//       ...card,
//       flipped: true,
//     }));
//   };

//   const matchCards = (array: CardsUpdated[]) => {
//     // Utiliza map para crear un nuevo array con las propiedades actualizadas
//     return array.map((card) => ({
//       ...card,
//       matched: true,
//     }));
//   };

//   //FUNCION UBICA LAS CARTAS FLIPPED SIN MATCH
//   const flippedCount = (array: CardsUpdated[]) => {
//     return array.filter((card) => card.flipped && !card.matched);
//   };

//   //FUNCION AL HACER CLICK
//   const turnCard = (event: MouseEvent<HTMLDivElement>) => {
//     const id = +(event.target as HTMLDivElement).id;
//     console.log(id);
//     console.log(cardsRandom);
//     console.log(flippedCards);

//     // if (flippedCards.length < 2) {
//     //   flippedTrue(cardsRandom);
//     //   setFlippedCards(flippedCards.concat(cardsRandom[id]));
//     //   console.log(flippedCards);
//     // }
// card.flipped = true;
//     // flippedCount(cardsRandom);

//     setCardsRandom(
//       cardsRandom.map((card, index) => {
//         if (
//           index == id &&
//           !card.matched &&
//           flippedCount(cardsRandom).length < 2
//         ) {
//           flippedTrue;
//           console.log("hola");

//           if (
//             flippedCount(cardsRandom).length == 2 &&
//             compareCards(
//               flippedCount(cardsRandom)[0].name,
//               flippedCount(cardsRandom)[1].name
//             )
//           ) {
//             console.log("hola otra vez");
//             matchCards(flippedCount(cardsRandom));
//             setCardsRandom(matchCards(flippedCount(cardsRandom)));
//             console.log(matchCards(flippedCount(cardsRandom)));
//           }
//         }
//         return card;
//       })
//     );
//   };

//   // if ( 0 flipped or 1 flipped && matched: false){
//   // i can turncard
//   // }

//   useEffect(() => {
//     const randomize = random(cards);
//     const updatedCards: CardsUpdated[] = randomize.map((card) => ({
//       ...card,
//       flipped: false, // Agrega la nueva propiedad "flipped" con el valor "false"
//       matched: false,
//     }));
//     setCardsRandom(updatedCards);
//   }, []);

//   //display: none

//   return (
//     <>
//       <div>
//         <h1>Superhero Memory Game</h1>
//       </div>
//       <div id="memory_board" role="cards">
//         {cardsRandom.map((card, i) => (
//           <div
//             className="card"
//             id={i.toString()}
//             style={
//               card.flipped
//                 ? {
//                     backgroundImage: `url(${imgRoute + card.img})`,
//                   }
//                 : { background: "#000" }
//             }
//             onClick={turnCard}
//           >
//             <p>{card.name}</p>
//           </div>
//         ))}
//       </div>
//       <div id="score">
//         <h2>Score </h2>
//         <p>
//           Pairs Clicked: <span id="pairs_clicked">0</span>
//         </p>
//         <p>
//           Pairs Guessed: <span id="pairs_guessed">0</span>
//         </p>
//       </div>
//     </>
//   );
// };
