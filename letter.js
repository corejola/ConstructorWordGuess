// String value to store the underlying charater of the letter
// boolean value that store whether the letter has been guessed yet
// function that returns the underlying character if the ltter has be guessed, or placeholder  if the letter has not been guessed yet
// function that takes a character as an arguement and checks it against the underying character, updating the scotre boolean value to true if guessed correctly
// inquirer used here...
// letter function constructor only deals with specific letters

var testGuess = process.argv[2]
var test = new Letter();

function Letter(input) {
    this.letter = input;
    this.guessed = false;
    // determine spaces in the input word
    this.string = function () {
        if (this.letter === " ") {
            this.guessed = true;
            return " ";
        } else {
            if (this.guessed === false) {
                return "_"
            } else {
                return this.letter
            }
        };
    };
    // letter guess logic
    this.guess = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    };
};

module.exports = Letter;