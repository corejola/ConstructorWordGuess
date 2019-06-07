// String value to store the underlying charater of the letter
// boolean value that store whether the letter has been guessed yet
// function that returns the underlying character if the ltter has be guessed, or placeholder  if the letter has not been guessed yet
// function that takes a character as an arguement and checks it against the underying character, updating the scotre boolean value to true if guessed correctly
// inquirer used here...
// letter function constructor only deals with specific letters

class Letter {
    constructor(letter) {
        //ternary 
        this.character = (letter !== " ") ? "_" : " ";
        this.letter = letter;
        this.currentVal = this.character;
        this.isLetter = false;
    };
};

module.exports = Letter;