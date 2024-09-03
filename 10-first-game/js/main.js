// Asking to play game
let playGame = prompt("Shall we play rock, paper and scissors game: ");
// if user wanna play
if (playGame) {
	let playerChoice = prompt("Enter rock, paper or scissors: ");
	// if user made a choice
	if (playerChoice) {
		let player = playerChoice.trim().toLowerCase();
		// if user made a valid choice
		if (player === "rock" || player === "paper" || player === "scissors") {
			let computerChoice = Math.floor(Math.random() * 3 + 1);
			// computer choice
			let computer =
				computerChoice === 1
					? "rock"
					: computerChoice === 2
					? "paper"
					: "scissors";
			// game conditions
			let result =
				player === computer
					? "Tie Game!"
					: player === "rock" && computer === "paper"
					? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
					: player === "paper" && computer === "scissors"
					? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
					: player === "scissors" && computer === "rock"
					? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
					: `Player: ${player}\nComputer: ${computer}\nPlayer Wins!`;
			alert(result);
			// if user wanna play again
			let playAgain = confirm("Play Again?");
			playAgain ? location.reload() : alert("Ok, Thanks for playing!");
		} else {
			alert("You didn't entered rock paper or scissors.");
		}
	} else {
		alert("I guess you changed your mind. Maybe next time.");
	}
} else {
	alert("Ok, may be next time!");
}
