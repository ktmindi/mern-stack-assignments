class Deck {
    constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
    suits.forEach(suit=>{
        faces.forEach(face=> {
        deck.push(this.createCard(suit, face));
        });
    });
    this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}

//console.log(new Deck({suits:"suits", faces:"faces"}));
let meow = new Deck();
console.log(meow.deck)

//ternary operators lets say i want to create a function to determine if i can or cannot afford an item:
//basic if statement
//let canAfford = (itemPrice,accountBalance) => {
//    if (itemPrice>accountBalance) {
///        return `Cannot afford! You are $${itemPrice - accountBalance} short`;
//    } else {
//        return "Can afford!";
//    }
//};
//ternary statement
let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance //is the itemPrice > accountBalance
    ? `Cannot Afford! You are $${itemPrice - accountBalance} short ` 
    //yes? then return cannot afford
    : "Can afford"; //no? then return can afford
}

let myBankAccountBalance = 1000;
const drone = 1002;

let droneOnSale = drone - drone * 0.03;
console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));

//if we invoke these statements with either of these functions (if statement or ternary statement)  they will return the same exact result the only difference is THE TERNARY STATEMENT IS SHORTER

//special note take care when nesting ternary stements as they can tend to become unwieldy and unreadable. for instance
const myVar = 10 < 20
    ? 5 < 10
        ? true
        : false
    : false
