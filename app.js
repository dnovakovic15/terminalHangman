let inquirer = require('inquirer');
let word = require('./word.js');
let letter = require('./letter.js');

let guessesRemaining = 10;
let letterCount = 0;
let letterArray = [];
let userWord = '';

let newWord = new word();
userWord = newWord.generate();
askQuestion();


function askQuestion(userWord){
    inquirer.prompt([
    {
        name: 'letter',
        message: '? Please enter a letter!'
    }
    ]).then(function(answer){
        if(answer.letter.length != 1){
            console.log("");
            console.log("Please enter 1 letter!");
            console.log("");
            askQuestion();
        }
        else{
            displayLetter(answer.letter);
        }
    });
}

function displayLetter(guessedLetter){
    let userLetter = new letter(guessedLetter);
    userLetter.checkLetter(userWord);

    for(let i = 0; i < userWord.length; i++){
        if(letterArray[i] !== undefined){
            process.stdout.write(letterArray[i]);
            process.stdout.write(' ');
        }
        else if(userLetter.letter != userWord[i]){
            process.stdout.write('_');
            process.stdout.write(' ');
        }
        else{
            process.stdout.write(userLetter.letter);
            process.stdout.write(' ');
            letterArray[i] = userLetter.letter; 
            letterCount++;
        }
    }


    if(userLetter.correct == false){
        console.log('');
        console.log('');
        console.log('Incorrect Guess!');
        guessesRemaining--;
    }
    else{
        console.log('');
        console.log('');
        console.log('You guessed correctly!');
    }

    console.log('');

    console.log('Guesses Remaining: ' + guessesRemaining);

    console.log('');

    if(letterCount == userWord.length){
        console.log('YOU WIN!');
        replay();
    }
    else if(guessesRemaining > 0){
        askQuestion();
    }
    else{
        console.log('YOU LOSE!');
        replay();
    }
}

function replay(){
    inquirer.prompt([
    {
        name: 'replay',
        message: 'Would you like to play again? (y/n)'
    }
    ]).then(function(answer){
        if(answer.replay == 'y' || answer.replay == 'Y'){
            guessesRemaining = 10;
            letterCount = 0;
            letterArray = [];

            newWord = new word();
            userWord = newWord.generate();
            askQuestion();
        }
        else{
            console.log('');
            console.log('Thanks for Playing!!!');
        }
    });
}
