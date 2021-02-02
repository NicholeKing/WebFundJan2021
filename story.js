// Mario and his adventure through the JavaScript Kingdom

// Create our character
// String -- we can treat this like an index
var character = "Mario";
// fun fact about strings:
// console.log(character[3]);

// Numbers
var health = 100;
// Remember that === are EXACT and == is a little more arbitrary 
// if (health === "100"){
//     console.log("It matches!")
// }

// Arrays -- collections of data
var moves = ["Jump", "Double jump", "Fireball", "Bomb"];
// How would I call on Double Jump?
// console.log(moves[1]);

// Boolean
var isAlive = true;
// it can ONLY be true or false, never anything else

var coinsCollected = 0;

console.log("Welcome to Super JavaScript Adventures! Use your skills in Javascript to get to the end of the game!");

console.log("*************************");

console.log(character + " enters the screen as is faced by a horde of goombs! How many goombas??")
console.log("Render all the goombas!!")
console.log("*************************");
console.log("CHALLENGE ONE: Given a specific number of goomba enemies, render the word 'goomba' for each enemy and its associated number! Ex: 'Goomba #10'");

var numGoombas = 10;

// So how do I render all these Goombas?

for(var goombas = 1; goombas <= numGoombas; goombas++){
    console.log("Goomba #" + goombas)
}

console.log("Wow, that's a lot of goomba! What will " + character + " do?!")

// function displayGoombas(num){
//     for(var goombas = 1; goombas <= num; goombas++){
//         console.log("Goomba #" + goombas)
//     }
// }

// displayGoombas(numGoombas)

// WHILE LOOPS
// While loops are used when you DON'T know how long your loop will run
var chance = 0;
while(numGoombas > 0) {
    if(chance % 3 == 0){
        console.log(character + " uses " + moves[0] + " to destroy a Goomba!");
        numGoombas--;
    } else {
        console.log("You did not kill the goomba!");
    }
    chance++;
}

console.log(character + " successfully defeated all the goombas and progresses to the next stage!");