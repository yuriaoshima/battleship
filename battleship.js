//variables that hold the locations of the ship
//using random number generator to get the locations of the ship
var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

//variables to hold the users guess, number of hits and guesses
var guess;
var hits = 0;
var guesses = 0;

//variable for whether all three points were hit
var isSunk = false;

//testing if ship has been sunk
while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  //checking if user entered valid grid value
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    //if they did enter a valid value, increment guesses
    //and check if their guess matches the three locations
    guesses++;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!")
      hits++;
      //if there are three hits then the ship is sunk
      //what if they keep entering the same coordinate?
      if (hits == 3) {
        isSunk = true;
        alert("You sunk my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}
//give the user their stats for the game
var stats = "You took " + guesses + " guesses to sink the battleship, " + " which means your shooting accuracy was " + (3 / guesses);

alert(stats);