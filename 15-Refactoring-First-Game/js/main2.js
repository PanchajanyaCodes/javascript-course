// function to get the player's choice
function getPlayerChoice() {
	const choice = prompt("Enter rock, paper or scissors: ");
	return choice ? choice.trim().toLowerCase() : null;
}

// function to get the computer's choice
function getComputerChoice() {
	const gameArray = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * 3);
	return gameArray[randomIndex];
}

// function to determine the winner
function determineWinner(player, computer) {
	if (player === computer) {
		return `Player: ${player}\nComputer: ${computer}\nTie Game!`;
	} else if (
		(player === "rock" && computer === "paper") ||
		(player === "paper" && computer === "scissors") ||
		(player === "scissors" && computer === "rock")
	) {
		return `Player: ${player}\nComputer: ${computer}\nComputer Wins!`;
	} else {
		return `Player: ${player}\nComputer: ${computer}\nPlayer Wins!`;
	}
}

// main game function
function playGame() {
	const playGame = prompt("Shall we play rock, paper and scissors game: ");
	if (!playGame) {
		alert("Ok, maybe next time!");
		return;
	}

	let playAgain = true;
	while (playAgain) {
		const playerChoice = getPlayerChoice();
		if (!playerChoice) {
			alert("I guess you changed your mind. Maybe next time.");
			break;
		}

		if (["rock", "paper", "scissors"].includes(playerChoice)) {
			const computerChoice = getComputerChoice();
			const result = determineWinner(playerChoice, computerChoice);
			alert(result);

			playAgain = confirm("Play Again?");
			if (!playAgain) alert("Ok, Thanks for playing!");
		} else {
			alert("You didn't enter rock, paper, or scissors.");
		}
	}
}

// start the game
playGame();
