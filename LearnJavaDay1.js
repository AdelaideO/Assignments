var userChoice = prompt("Do you choose rock, paper or scissors?");

var Choices = ["rock","paper","scissors"];
var computerChoice = Choices[Math.floor(Math.random()) * 3];
console.log("The computers choice is " + computerChoice);
console.log("Your choice is " + userChoice);

if (userChoice === computerChoice)
{
	console.log("Its a Tie");
}
else if (computerChoice === "rock" && userChoice !=="paper") { 
	console.log("You loose");
}
else if (computerChoice ==="paper" && userChoice !=="scissors") {
	console.log("You Loose");
}
else if (computerChoice ==="scissors" && userChoice !=="rock") {
	console.log("You Loose");
}
else 
{
	console.log("You Win");
}