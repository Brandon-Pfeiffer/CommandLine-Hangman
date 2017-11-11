var game = require("./game.js");

var Letter = function(word) {
	this.inputWord = word;
	this.spaceholder = "",

	this.initialPrint = function(frodo){
		this.spaceholder = "";
		for (var n = 0; n < frodo.length; n++) {
			
			if (/[a-zA-Z]/.test(frodo[n])){
				this.spaceholder += "_ ";
			} else {
				this.spaceholder += "  ";
			}
		}
		console.log(this.spaceholder);
	},

	
	this.changeSpaces = function(x){
		if (x > 0){
			var y = x*2;
			var temp = this.spaceholder.substr(0, y) + game.inputWord
			[x] + this.spaceholder.substr(y+1);
			this.spaceholder = temp;
		} else {
			var temp = this.spaceholder.substr(0, x) + game.inputWord
			[x] + this.spaceholder.substr(x+1);
			this.spaceholder = temp;
		}
		
	}

	this.correctGuess = function(alpha, frodo){
		var correct = 0;
		for (var n = 0; n < frodo.length; n++) {			
			if (alpha == frodo[n].toLowerCase()){
				this.changeSpaces(n);
				correct++;
			}
		};		
		if (correct > 0) {
			console.log(this.spaceholder);
		};
	}

}

module.exports = Letter;