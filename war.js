/// DEAL ///


// each card (1,1)

///math random times 52, picks index to giuve to player 

let cardNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let cardSuit = ["s","c","d","h"]


    function deal() {
    let deck = []
    for (i of cardNumber) {
        for (j of cardSuit) {
          deck.push(i+j)
        }
    }
    return deck
}







let playerOne = []
let playerTwo = []

for (let ct = 0; ct < 26; ct++) {
    //if (ct % 2 === 0) {
   playerOne.concat(deal().splice(Math.floor(Math.random()*(26-ct)),1))


   // }

   /* else {
        playerTwo.push(deal()[(Math.floor(Math.random()*deal().length))])
    }
    
    playerOne.push(deal()[(Math.floor(Math.random()*deal().length))])

} */ }

console.log(deal())
console.log(playerOne)

// for (let k of ) //


// ANCHOR the play///





