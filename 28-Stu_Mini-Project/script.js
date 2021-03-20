// Create an object that tracks wins, losses and ties
// Create a function to play a game
// In the function, it will prompt the user for R, P, S
// Randomly select what the computer selects
// Determine the winner
// Alert the user who won
// Alert the user their stats
// Call the play game function

// TO start the game, we need to have a prompt and store what the user types
let userChoice = prompt("Do you want to play a game? Please type in rock, paper, or scizzors to start!");
userChoice.toLowerCase;

// Created an object for the user choice and stats
let choices = ["rock", "paper", "scizzors"]; 

// if (userChoice !== choices) {
//     prompt("Please enter a valid choice. Choose rock, paper, or scizzors to start!");
// }

var ties = 0;
var wins = 0;
var losses = 0;

// Create function for computer choice
function computerChoice() {
    // get a number between 0 and 2
    const index = Math.floor(Math.random() * choices.length);
    // get a choice from the choices array
    return choices[index];
};

const computerEnter = computerChoice();

alert("The computer chose " + computerEnter);

if (userChoice === computerEnter) {
    alert("You tied!")
    ties++;
} else if (
    userChoice === "rock" && computerEnter === "scizzors" ||
    userChoice === "paper" && computerEnter === "rock"||
    userChoice === "scizzors" && computerEnter === "paper"
    ){
    wins++
    alert("You won!");

} else {
    loses++
    alert("You lost!");
}

alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );














// // This only allows the user to choose a capital R, P or S
// if (userChoice === "R" || userChoice === "P" || userChoice === "S") {
// // Some other stuff goes here... eventually!
// } else {
// alert ("You did not enter a valid choice")
// }

// // Store user choices

// function computerRandomChoice (){
//     Math.floor(Math.random() * )
// }




