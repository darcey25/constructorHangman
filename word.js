var Letter = require("./letter.js");

var wordStatus = "";

var Word = function(currentWord) {
	this.lettersArray = [],
	this.guessWords = [],
	this.createLettersObject = function() {
		for (var i = 0; i < currentWord.length; i++) {
			this.lettersArray.push(new Letter(currentWord[i]));
		}
	};
	this.showWord = function() {
		wordStatus = "";
		for (var k = 0; k < this.lettersArray.length; k++) {
			wordStatus += this.lettersArray[k].letterStatus();
		}
		this.guessWords.push(wordStatus);
		return wordStatus;
	};
	this.checkLetter = function(userGuess) {
		for(var j = 0; j < this.lettersArray.length; j++) {
			this.lettersArray[j].guessCheck(userGuess);
		}
	};
	this.currentWord = function() {
		var splitWord = "";
		for (f = 0; f < currentWord.length; f++) {
			splitWord += currentWord[f] + " ";
		}
		return splitWord;
	}
	this.userCorrect = function(userGuess) {
		if (this.currentWord() === this.guessWords[this.guessWords.length-1]) {
			return "done";
		}
		else if (currentWord.indexOf(userGuess) === -1) {
			return false;
		}
		else {
			return true;
		}

	};
}

module.exports = Word;