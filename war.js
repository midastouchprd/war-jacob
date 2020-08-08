class Deck {
    constructor() {
        this.deck = []


       const suit = ["hearts", "spades", "clubs", "diamonds"]
       const rank = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    
        for (let i of suit) {
           for (let j of rank) {
               this.deck.push([j,i])
           }
       }
   }
}


deck1 = new Deck()
// console.log(deck1.deck) 




class Deal {
   constructor() {
      this.playerOne = []
      this.playerTwo = []

   

       for (let i = 0;i < 52;i++) {
           let randIndex = deck1.deck.splice([Math.random()*(deck1.deck.length-1)],1)
           if (i % 2 === 0) {
               this.playerTwo.push(randIndex)
           }
           else {
               this.playerOne.push(randIndex)
           }

       }

   }

   
}



decks = new Deal()

// console.log(decks.playerTwo)
// console.log(decks.playerOne)
// console.log(decks.playerOne[0][0][0]) this is how you get the rank for comparison






    compare = () => {

        while (decks.playerOne !== 0 && decks.playerTwo !== 0) {
            if (decks.playerOne[0][0][0] > decks.playerTwo[0][0][0]) {

                decks.playerOne.push(decks.playerOne[0][0][0])
                decks.playerOne.push(decks.playerTwo[0][0][0])
                decks.playerOne.shift(decks.playerOne[0][0][0])
                decks.playerTwo.shift(decks.playerTwo[0][0][0])
                


            }
            else if (decks.playerOne[0][0][0] < decks.playerTwo[0][0][0]) {

                decks.playerTwo.push(decks.playerOne[0][0][0])
                decks.playerTwo.push(decks.playerTwo[0][0][0])
                decks.playerOne.shift(decks.playerOne[0][0][0])
                decks.playerTwo.shift(decks.playerTwo[0][0][0])

            }
            else {

                war = () => {
                    
                }
            
        }

        return `player 1: ${decks.playerOne.length} player 2: ${decks.playerTwo.length}`

    }
        
    }


