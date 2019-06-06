var Word = require("./word")
var inquirer = require('inquirer');

var guessCount = 0

// 1. Upon running node index.js, game will prompt whether user wants to play Word Guess Game (Y/N)
// if "N", display message "Ok Whatever"
// if "Y", initiateGame()
// initiateGame() will randomly select a word from a predetermined array of words Math.floor(Math.random() * wordArray[i])
// utilize Word Constructor to store the selected word
// Inquirer will prompt the user to guess a letter with a total of up to 10 incorrect guesses

// run random word, or create word bank file

var words = ["beta", "sport", "crag", "trad"];
//JS library for random word generation

var randomGenerator = Math.floor(Math.random() * words.length);

function randomWord() {
    return words[randomGenerator]
};

//setting up initial conditions
var gameState = {
    currentWord: null,
    guessesSoFar: [],
    totalGuesses: 10,
    wins: 0,
    losses: 0,
    incorrectGuesses: [],
}

//callback B
function initiateGame() {
    // reset global variables
    var selectedWord = randomWord();
    gameState.guessesSoFar = [];
    gameState.totalGuesses = 10;
    gameState.incorrectGuesses = [];
    currentWord = new Word(selectedWord);
    console.log("\nRemaining Guesses: " + gameState.totalGuesses + "\n");
    currentWord.displayLetters();
    console.log("\n")
    // console.log(selectedWord)
    // call on random word
    // prompt game (Y/N)
    // global

};

initiateGame();

callbackA
function guessLetter() {
    // inquirer.prompt

    // validation, if guesses left > 0 
    // valdation if gueses left === 0 , promt play again, initiate game
    // validation, if isNaN
    // validation if letter has been already guessed
    // if !guessesSoFar.includes(Inquirer Answer) { 
    // guessesSoFar, + inquirer answer to guessesSoFar
    // currentWord.validateGuess(Include Inquirer value, guessLetter()\, inigiateGame,gameState )
    // }

}
