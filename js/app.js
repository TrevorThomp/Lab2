'use strict';

// // Welcomes and greets the user
var correctAnswers = 0;
var user = prompt('What is your name?');

function start(){
    welcome();
    guessingGame();
    numberGame();
    planets();
    totalCorrect();
}

function welcome() {
    var welcome = alert('Welcome ' + user + '!');
    var userGreeting = alert('I hope you enjoy my game ' + user + '. Let\'s see if you know some things about me!')
}

// // About Me Guessing Game

function guessingGame(){
    var question;
    var answer;
    var abbreviatedAnswer;
    var response = [];

    var quiz = [    
        ['Do I like to snowboard?', 'YES', 'Y'],
        ['Do I like to code?', 'YES', 'Y'],
        ['Do I enjoy the outdoors?', 'YES', 'Y'],
        ['Do I currently live in Redmond?', 'NO', 'N'],
        ['Do I own any pets?', 'NO', 'N']
    ];

    // Loops through array prompting questions 
    for (var i = 0; i < quiz.length; i++) {
        question = quiz[i][0];
        answer = quiz[i][1];
        abbreviatedAnswer = quiz[i][2];
        //Stores responses into response array
        response.push(prompt(question));
            if (response[i].toUpperCase() === answer || response[i].toUpperCase() === abbreviatedAnswer) {
                alert('You got that right!')
                correctAnswers++;
            } else {
                alert('Unfortunately, that\'s not correct.')
            }
    }
}


// // Random number guessing question
function numberGame() {
    var number = Math.floor(Math.random() * 11);
    var userGuess = false;
    var count = 0;
    
    // Loop continues while userGuess remains false and count is less than 4
    while ( (!userGuess) && (count < 4) ) {
        var guessNumber = prompt('Guess a number 1-10');
        var tries;
        if (parseInt(guessNumber) === number) {
            userGuess = true;
            correctAnswers++;
            alert('You guessed it!')
        } else if (parseInt(guessNumber) < number){
            alert('Too low! Try again.')
            count++;
            tries = alert('You have ' + (4 - count) + ' tries left!')
        } else if (parseInt(guessNumber) > number) {
            alert('Too high! Try again.')
            count++;
            tries = alert('You have ' + (4 - count) + ' tries left!')
        } 
        if (count === 4) {
            alert('Out of attempts. The correct answer is ' + number)
        }
    };
}



// 7th Question with multiple possible answers
function planets(){
    var answers = ['JUPITER', 'MARS', 'NEPTUNE', 'SATURN', 'VENUS', 'EARTH'];
    var attempt = 0;
    var userGuess2 = false;
    
    while (attempt < 6 && userGuess2 === false) {
        var questionResponse = prompt('What is one of the planets in our solar system?');
        for (var i = 0; i < answers.length -1; i++) {
            if (questionResponse.toUpperCase() === answers[i]) {
                alert('Congratulations you got it correct! These were all the possible answers: ' + answers)
                userGuess2 = true;
                correctAnswers++;
            }
        }
        attempt++;
    }
}

// Alerts the user how many questions they got correct.
function totalCorrect(){
    if (correctAnswers >= 5) {
        alert('Awesome ' + user + '!' + ' You got ' + correctAnswers + ' out of 7 correct!')
    } else {
        alert('Too bad ' + user + ',' + ' You only got ' + correctAnswers + ' out of 7 correct!')
    }
}

