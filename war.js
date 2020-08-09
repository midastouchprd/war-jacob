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

 //console.log(decks.playerTwo)
// console.log(decks.playerOne)
// console.log(decks.playerOne[0][0][0]) this is how you get the rank for comparison


//console.log(decks.playerOne.length)
//console.log(decks.playerTwo[0][0])



compare = () => {
    while (decks.playerOne.length !== 0 || decks.playerTwo !== 0) {
        if (decks.playerOne[0][0][0] > decks.playerTwo[0][0][0]) {
            decks.playerOne.push(decks.playerOne[0],decks.playerTwo[0])
            decks.playerOne.shift()
            decks.playerTwo.shift()
        }
        else if (decks.playerOne[0][0][0] > decks.playerTwo[0][0][0]) {
            decks.playerTwo.push(decks.playerOne[0],decks.playerTwo[0])
            decks.playerOne.shift()
            decks.playerTwo.shift()
        }
        else {
            console.log("war")
            
          war = (i = 2) => {  
            if (decks.playerOne[i][0][0] > decks.playerTwo[i][0][0]) {
                for (let j=0;j<=i;j++) {
                decks.playerOne.push(decks.playerOne[j],decks.playerTwo[j])
                decks.playerOne.shift()
                decks.playerTwo.shift()
                }
            }
            else if (decks.playerOne[i][0][0] > decks.playerTwo[i][0][0]) {
                for (j=0;j<=i;j++) {
                decks.playerTwo.push(decks.playerOne[j],decks.playerTwo[j])
                decks.playerOne.shift()
                decks.playerTwo.shift()
                }
                    
            }
            else {
            war(i+=2)
            }
        
        }     
         war()   
        }
        console.log(`player 1: ${decks.playerOne.length} player 2: ${decks.playerTwo.length}`)
    }
}



compare()












/*    compare = (i=0) => {

        while (decks.playerOne.length !== 0 && decks.playerTwo.length !== 0) {
            if (decks.playerOne[0][0][0] > decks.playerTwo[0][0][0]) {

                console.log("player 1 wins this round")

                decks.playerOne.push(decks.playerOne[0][0],decks.playerTwo[0][0])
                decks.playerOne.shift()
                decks.playerTwo.shift()
                


            }
            else if (decks.playerOne[0][0][0] < decks.playerTwo[0][0][0]) {

                console.log("player 2 wins this round")

                decks.playerTwo.push(decks.playerOne[0][0],decks.playerTwo[0][0])
                decks.playerOne.shift()
                decks.playerTwo.shift()

            }
             else if (decks.playerOne[0][0][0] === decks.playerTwo[0][0][0]) {
                console.log("tie")
                war = () => {
                    let warWinnings = []
                    while (decks.playerOne[0][0][0] === decks.playerTwo[0][0][0]) {
                        
                        return compare() 
                    
                        
                    
                    }
                }

                war() 
            
        }

       console.log(`player 1: ${decks.playerOne.length} player 2: ${decks.playerTwo.length}`)

    }
        
    



compare() */
