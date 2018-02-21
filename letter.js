var Letter = function(letter){
	this.letter = letter,
	this.guessStatus = false,
	this.letterStatus = function() {
		if (this.guessStatus === true) {
			return this.letter + " ";
		}
		else {
			return "_ ";
		}
	};
	this.guessCheck = function(character) {
		if (this.letter === character) {
			this.guessStatus = true;
		}
		else {
		}
	};
}

module.exports = Letter;




