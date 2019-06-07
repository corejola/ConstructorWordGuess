var Letter = require("./letter");

// 1. Based on the randomly selected word, 
// the word will be split into an array of letters & set to an array []
// function will display an equivalent # of items in the array with "_" for each letter


// if user guess === a letter in guessString[i], correctGuess = true, & console.log that letter, eventually all correct guesses will build the word. 
// else, correctGuess = false, console.log the the incorrect letter

// if letter is guess correctly, we will swap out "_" for the correct letter displayed
// if letter is guess incorrectly, that letter wil be displayed as "Guesses:"...
// pass a word through the constructor Letter function

// Word.wordsplit();

class Word {
    constructor(word) {
        this.word = word;
        this.wordArr = this.word.split("")
        this.display = '';
        // returns array of unique letters ie. apple => a p l e, for validation portion guessing...
        this.wordLetters = word.split("").filter(function (letter, pos) {
            return word.split("").indexOf(letter) == pos;
        });
        this.letterObjects = [];
        this.createLetterObject();

    };
    //create letter objects
    createLetterObject() {
        var self = this;
        this.wordArr.forEach(function (letter) {
            var newLetter = new Letter(letter);
            self.letterObjects.push(newLetter);
        })

    }
    //display function

    displayLetters() {
        var self = this;
        this.letterObjects.forEach(function (letterObject) {
            self.display = self.display + letterObject.currentVal + " ";
        })
        console.log("Word To Guess: " + this.display);
    }

    //validate function, this will be for all the letter guessing
    validateGuess(guessLetter, callbackA, callbackB, gameState) {
        var self = this;
        if (this.wordLetters.includes(guessLetter)) {
            console.log("\nCorrect Guess");
            this.letterObjects.forEach(function (letterObject) {
                if (letterObject.isLetter === false && letterObject.letter === guessLetter) {
                    letterObject.isLetter = true;
                    letterObject.currentVal = guessLetter;
                } else {
                    //total guess --;
                    gameState.totalGuesses--;
                    //push into gameState
                    gameState.incorrectGuesses.push(guessLetter)
                };
            });
            var i = this.wordLetters.indexOf(guessLetter);
            this.wordLetters.splice(i, 1)
            // check if word letters length ===0 means they win, gameState.wins++;
            // Display you win & final word
            // when player wins or guessesLeft =0; invoke the callbackB = initiateGame()

            // check else if word letters !== 0, callbackA = guessLetters
        };
    };
};

module.exports = Word;
