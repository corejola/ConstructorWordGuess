var letter = require("./letter");
var testWord = ["beta", "sport", "crag", "trad"];
//JS library for random word generation

var
// 1. Based on the randomly selected word, 
// the word will be split into an array of letters & set to an array []
// function will display an equivalent # of items in the array with "_" for each letter


// if user guess === a letter in guessString[i], correctGuess = true, & console.log that letter, eventually all correct guesses will build the word. 
// else, correctGuess = false, console.log the the incorrect letter

// if letter is guess correctly, we will swap out "_" for the correct letter displayed
// if letter is guess incorrectly, that letter wil be displayed as "Guesses:"...
// pass a word through the constructor Letter function


function Word(word) {
    this.wordGuess = function (word) {
        guessString = word.split("");
        // console.log(guessString);
    };


};


module.exports = Word;