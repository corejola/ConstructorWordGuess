// Letter.js to determine the state of the string and return values to display

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