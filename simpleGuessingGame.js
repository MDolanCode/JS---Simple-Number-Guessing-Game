//create secret Number
var secretNumber = 4;

//ask user to guess
var stringGuess = prompt("Guess a Number");
var guess = Number(stringGuess);

//check number guessed
if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}
//check if guess is too high
else if (guess > secretNumber) {
  alert("Too High. Guess Again!");
}

else {
  alert("Too Low. Guess Again!");
}
