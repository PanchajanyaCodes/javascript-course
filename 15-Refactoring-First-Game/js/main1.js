// Asking to play game
let playGame = prompt("Shall we play rock, paper and scissors game: ");

// if user wants to play
if (playGame) {
	let playAgain = true;
	while (playAgain) {
		const playerChoice = prompt("Enter rock, paper or scissors: ");

		// if user made a choice
		if (playerChoice) {
			const player = playerChoice.trim().toLowerCase();

			// if user made a valid choice
			if (
				player === "rock" ||
				player === "paper" ||
				player === "scissors"
			) {
				const computerChoice = Math.floor(Math.random() * 3);
				// computer choice
				const gameArray = ["rock", "paper", "scissors"];
				const computer = gameArray[computerChoice];

				// game conditions
				const result =
					player === computer
						? `Player: ${player}\nComputer: ${computer}\nTie Game!`
						: player === "rock" && computer === "paper"
						? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
						: player === "paper" && computer === "scissors"
						? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
						: player === "scissors" && computer === "rock"
						? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
						: `Player: ${player}\nComputer: ${computer}\nPlayer Wins!`;
				alert(result);

				// if user wants to play again
				playAgain = confirm("Play Again?");
				if (!playAgain) alert("Ok, Thanks for playing!");
			} else {
				alert("You didn't enter rock, paper, or scissors.");
			}
		} else {
			alert("I guess you changed your mind. Maybe next time.");
			break;
		}
	}
} else {
	alert("Ok, maybe next time!");
}
