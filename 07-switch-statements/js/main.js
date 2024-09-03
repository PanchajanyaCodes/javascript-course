let playerOne = "scissors";
let computer = "scissors";

switch (playerOne) {
	case computer:
		console.log("Tie Game!");
		break;
	case "rock":
		if (computer === "paper") {
			console.log("Computer Wins!");
		} else {
			console.log("Player Wins!");
		}
		break;
	case "paper":
		if (computer === "scissors") {
			console.log("Computer Wins!");
		} else {
			console.log("Player Wins!");
		}
		break;
	default:
		if (computer === "rock") {
			console.log("Computer Wins!");
		} else {
			console.log("Player Wins!");
		}
		break;
}
