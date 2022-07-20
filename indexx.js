// Code your solutions in this file
/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`)
}

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);

The above is an exaple that is not efficient and does not utilize loops. 
*/
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

const cardsForFriends = []

function writeCards(names, holiday) {
    for (let i = 0; i < names.length; i++) {
        cardsForFriends.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
    }
   return(cardsForFriends)
}

function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber--);
    }
}
console.log(countDown(5))