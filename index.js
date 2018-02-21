var Word = require("./word.js");
var inquirer = require("inquirer");
var guessingWords = ["ecuador", "colombia", "venezuela", "chile", "brazil", "argentina", "uruguay", "paraguay", "bolivia", "peru", "suriname", "guyana"];
var randomWord = guessingWords[Math.floor(Math.random()*guessingWords.length)];
var guessesLeft = 10
var currentWord = "";
var guessedLetters = "";

console.log("Welcome to hangman, category is South American Countries!");
var newGame = function() {
	guessedLetters = "";
	guessesLeft = 10;
	var randomword = guessingWords[Math.floor(Math.random()*guessingWords.length)];
	currentWord = new Word(randomword);
	currentWord.createLettersObject();
	console.log(currentWord.showWord());
	userInput();
}


var userInput = function() {	
	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter?",
			name: "userGuess"
		}
	]).then(function(response) {
		if (!(guessedLetters.indexOf(response.userGuess) === -1)) {
			console.log("You already guessed that letter!");
			checkGuesses();
		}
		else if (response.userGuess.toLowerCase().charCodeAt() >= 96 && response.userGuess.toLowerCase().charCodeAt() <= 122) {
			currentWord.checkLetter(response.userGuess.toLowerCase());
			console.log(currentWord.showWord());
			correct(response.userGuess);
		}
		else {
			guessesLeft--;
			console.log("Please only guess letters!");
			console.log(guessesLeft + " guesses left!");
			checkGuesses();
		}
		guessedLetters += response.userGuess + " ";
	});
}

var correct = function(userGuess) {
	var result = currentWord.userCorrect(userGuess);
	if (result === "done") {
		console.log("Congrats, you guessed the word!");
		playAgain();
	}
	else if (result) {
		console.log("Correct Guess");
		checkGuesses();
	}
	else {
		console.log("wrong Guess");
		guessesLeft--;
		console.log(guessesLeft + " guesses left!");
		checkGuesses();
	}
	
}
var playAgain = function() {
	inquirer.prompt([
		{
			type: "confirm",
			message: "Would you like to play again?",
			name: "answer"
		}
	]).then(function(response) {
		if (response.answer === true) {
			newGame();
		}
		else {
			console.log("Thank you for playing!");
		}
	})
}

var checkGuesses = function() {
	if (guessesLeft === 0) {
		console.log("You lost!");
		playAgain();
	}
	else {
		userInput();
	}
}

newGame();