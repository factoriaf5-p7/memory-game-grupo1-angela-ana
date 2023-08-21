import { MemoryGame } from "./memory.js";

const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

const createDivElement = nameClass => {
  const card = document.createElement('div');
  card.className = nameClass;
  return card;
}

const createCard = (superheroe, index) => {
  const wrapCard = createDivElement('card');
  const backCard = createDivElement('back');
  backCard.id = index;
  const frontCard = createDivElement('front');
  frontCard.id = superheroe.name;
  frontCard.classList.add('hidden');
  frontCard.style.backgroundImage = `url('img/${superheroe.img}')`

  wrapCard.appendChild(backCard);
  wrapCard.appendChild(frontCard);

  return wrapCard;
}

const setTableCards = (arrayCards, container) => {
  arrayCards.forEach((element, index) => container.appendChild(createCard(element, index)))
  return container
}

addEventListener("load", () => {
  let firstcard;
  let clicked = false;
  const audio = new Audio("img/flash-and-quicksilver-103357.mp3");
  const memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCard();
  setTableCards(memoryGame.cards, document.getElementById("memory_board"));

  Array.from(document.getElementsByClassName('card')).forEach(element => {
    element.addEventListener("click", (e) => {

      e.target.classList.add('hidden', 'blocked');
      e.target.nextSibling.classList.add('blocked');
      e.target.nextSibling.classList.remove('hidden');

      if (!clicked) {
        firstcard = e.target.id;
        document.getElementById('pairs_clicked').innerText = ++memoryGame.pairsClicked;
        clicked = true;
      } else {

        if (memoryGame.checkIfPair(cards[firstcard].name, cards[e.target.id].name)) {
          document.getElementById('pairs_guessed').innerText = memoryGame.pairsGuessed;
          if (cards[firstcard].name === 'flash')
            audio.play();
          console.log(memoryGame.finished())
          if (memoryGame.finished()) {
            document.getElementById('score').style.display = 'none';
            document.getElementById('memory_board').style.display = 'none';
            document.querySelector('dialog').showModal();
          }
        } else {
          setTimeout(() => {
            e.target.classList.remove('blocked', 'hidden')
            e.target.nextSibling.classList.add('hidden')
            document.getElementById(firstcard).classList.remove('blocked', 'hidden')
            document.getElementById(firstcard).nextSibling.classList.add('hidden');
          }, 500)
        }
        clicked = false;
      }

    });
  });

});
