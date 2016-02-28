////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove=='rock' && computerMove=='scissors') {
	winner='player'
    console.log("Player Wins!");
} else if (playerMove=='paper' && computerMove=='rock'){
	winner='player'
    console.log("Player Wins!");
} else if (playerMove=='scissors' && computerMove=='paper'){
	winner='player'
    console.log("Player Wins!");
} else if (playerMove=='rock' && computerMove=='paper'){
	winner='computer'
    console.log("Computer Wins!");
} else if (playerMove=='paper' && computerMove=='scissors'){
	winner='computer'
    console.log("Computer Wins!");
} else if (playerMove=='scissors' && computerMove=='rock'){
	winner='computer'
    console.log("Computer Wins!");
} else {
    winner='tie'
    console.log("Tie");
}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
var playerMove = getPlayerMove();
var computerMove = getComputerMove();
var winner = getWinner(playerMove,computerMove);
    if (winner === 'player'){
        console.log('Player played ' + playerMove + ', Computer played ' + computerMove + '. Player wins this round.')
            playerWins += 1;
    } else if (winner === 'computer'){
        console.log('Player played ' + playerMove + ', Computer played ' + computerMove + '. Computer wins this round.')
            computerWins += 1;
} else if (winner === 'tie' ){
    console.log('this round is a tie')
}
}
 return [playerWins, computerWins];
}
