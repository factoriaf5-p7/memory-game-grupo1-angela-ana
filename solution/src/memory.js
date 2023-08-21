export class MemoryGame {


    constructor(cards) {
        this.cards = cards;
        this.pickedCards = []
        this.pairsClicked=0;
        this.pairsGuessed=0;
    };

    shuffleCard(cards) {
        console.log(cards);
        const newArr = [...cards];
        // for (let x = this.cards.length - 1; x > 0; x--) {
        //     const y = Math.floor(Math.random() * x);
        //     [this.cards[x],this.cards[y]]=[this.cards[y],this.cards[x]];
        // }
        for (let x = newArr.length - 1; x > 0; x--) {
            const y = Math.floor(Math.random() * x);
            [newArr[x],newArr[y]]=[newArr[y],newArr[x]];
        }
        console.log(newArr);
        return newArr;
    };

    checkIfPair(firstCard, secondCard) {
        this.pairsClicked ++;
        if(firstCard === secondCard)
         this.pairsGuessed += 1;

        return firstCard===secondCard;


    }

    finished() {
        if (this.pairsGuessed && this.cards.length/2 === this.pairsGuessed)
                return true;

        return false
        }

}