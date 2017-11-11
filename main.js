var inquirer = require("inquirer");
var Word = require("./word.js");
var game = require("./game.js");
var Letter = require("./letter.js");


function hangman(){
	
	inquirer.prompt([{
		name: "guess",
		message: "Lets play Hangman, LOTR style"
	}]).then(function(answers) {
			var guess = answers.guess.toLowerCase();
			
			// check guess
			if(newGame.checkGuess(guess, letter.spaceholder)){
				letter.correctGuess(guess, newGame.inputWord);
			};

			// win or loose, do you want to play again?
			if (!newGame.checkScore(letter.spaceholder)){				
				inquirer.prompt([{
					name: "replay",
					type: 'confirm',
					message: "Another round?"
				}]).then(function(answers) {
					if(answers.replay){
						newGame.reSetUp();
						letter.initialPrint(newGame.inputWord);
						hangman();
					} else {
						console.log("Farewell, until the next adventure");
						return false;
					}
				});					
			
			// keep going; haven't won or lost
			} else {
				hangman();
			}
		});
}

// play game

var newGame = new Word(game.getInput());
var letter = new Letter(newGame.inputWord);

newGame.printStats();
letter.initialPrint(newGame.inputWord);
hangman();
