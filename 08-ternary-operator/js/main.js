// SYNTAX:
// condition ? ifTrue : ifFalse

let playerOne = "scissors";
let computer = "rock";

let result =
	playerOne === computer
		? "Tie Game!"
		: playerOne === "rock" && computer === "paper"
		? "Computer Wins!"
		: playerOne === "paper" && computer === "scissors"
		? "Computer Wins!"
		: playerOne === "scissors" && computer === "rock"
		? "Computer Wins!"
		: "Player Wins!";

console.log(result);
