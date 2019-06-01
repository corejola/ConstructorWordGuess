var word = require("./word")
var inquirer = require('inquirer');

var count = 0
// 1. inquirer will prompt the user to guess a letter
// randomly generated word will be chosen & , "_" for the amount of letters in the array[], will initially be displayed. 
// rand
// 2. user guess's a letter, this guess will 

function initiateGame() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "DO YOU WANT TO PLAY A GAME??",
        }])
        .then(function (answer) {
            if (answer) {
                wordGuess()
            } else {
                return
            }
        });
};

function wordGuess() {
    if (count < 10) {
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Guess a letter",
                validate: function (val) {
                    if (val === "" || typeof val != string) return false;
                    return true;
                }
            }
        ]).then(function () {
            //call word.js
        });
    } else {
        console.log('Game Over')
    }
}