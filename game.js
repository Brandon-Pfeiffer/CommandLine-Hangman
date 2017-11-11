module.exports = {
	LordRings: [
		
		"Legolas", "Frodo Baggins", "Gandalf", "Boromir",
		"Gimli", "Saruman", "Gollum","Bilbo Baggins",
		"Aragorn", "Pippin", "Arwen", "Lord Elrond", "Merry",
		"Treebeard", "Smeagol", "Sauron", "Witch-King of Angmar",
		"Samwise", "Galadriel","Lady of the Wood",

		"Fly you fools","My Precious","You shall not pass",
		"Fellowship of the Ring","A wizard is never late",
		"Second Breakfast","Eye of Sauron", "One ring to rule them all",

		"To the keep", "One does not simply walk into Mordor", 
		"You have my sword","You have my bow", "You have my axe", ],

	inputWord: "",

	getInput: function(){
		this.inputWord = this.LordRings[Math.floor(Math.random() * 33)];
		console.log(this.inputWord);
		return this.inputWord;
	}
}
