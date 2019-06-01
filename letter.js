// String value to store the underlying charater of the letter
// boolean value that store whether the letter has been guessed yet
// function that returns the underlying character if the ltter has be guessed, or placeholder  if the letter has not been guessed yet
// function that takes a character as an arguement and checks it against the underying character, updating the scotre boolean value to true if guessed correctly
// inquirer used here...

var testWord = ["beta", "sport", "crag", "trad"]
// pass a word through the constructor Letter function
// the word will be split into an array of letters & set to an array []
// function will display an equivalent # of items in the array with "_" for each letter
// function to loop through the guess string, if user guess is in the array
// if user guess === a letter in guessString[i], correctGuess = true, & console.log that letter, eventually all correct guesses will build the word. 
// else, correctGuess = false, console.log the the incorrect letter

// if letter is guess correctly, we will swap out "_" for the correct letter displayed
// if letter is guess incorrectly, that letter wil be displayed as "Guesses:"...

var testGuess = process.argv[2]
var test = new Letter();

function Letter() {
    this.guessString = [],
        this.correctGuess = true,
        this.wordGuess = function (word) {
            guessString = word.split("");
            // console.log(guessString);
        },
        this.charGuessed = function () {
            // function to loop through the guessString
            for (var i = 0; i < guessString.length; i++) {
                // console.log(guessString[i])
                if (testGuess === guessString[i]) {
                    correctGuess = true;
                    console.log("TEST");
                } else {
                    correcGuess = false;
                    console.log("X")
                }
            }

        },
        this.printLetters = function () {

        }
};


test.wordGuess(testWord[0]);

module.exports = Letter;