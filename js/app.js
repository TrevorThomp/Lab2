'use strict';

// // // Welcomes and greets the user
var user = prompt('What is your name?');
var welcome = alert('Welcome ' + user + '!');
var userGreeting = alert('I hope you enjoy my game ' + user + '. Let\'s see if you know some things about me!')

// // // About Me Guessing Game
var correctAnswers = 0;
var question;
var answer;
var abbreviatedAnswer;
var response = [];

var quiz = [
    ['Do I like to snowboard?', 'YES', 'Y'],
    ['Do I like to code?', 'YES', 'Y'],
    ['Do I enjoy the outdoors?', 'YES', 'Y'],
    ['Do I currently live in Redmond?', 'NO', 'Y'],
    ['Do I own any pets?', 'NO', 'Y']
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

// //Random number guessing question
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


// 7th Question with multiple possible answers
var answers = ['JUPITER', 'MARS', 'NEPTUNE', 'SATURN', 'VENUS', 'EARTH'];
var attempt = 6;

for (var i = 0; i < 6; i++) {
    var planetQuestion = prompt('What is one of the planets in our solar system');
    if (planetQuestion.toUpperCase() === answers[i]) {
        alert('Congratulations you got it correct! These were all the possible answers: ' + answers.toString());
        correctAnswers++;
        break;
    } else {
        attempt--;
        alert('Unfortunately, that is not correct. You have ' + attempt + ' attempts left')
    }
    if(attempt === 0) {
        alert('You have run out of attempts. The possible answers were ' + answers.toString());
        break;
    }
}

// If statement alerting the user how many questions they got correct.
if (correctAnswers >= 5) {
    alert('Awesome ' + user + '!' + ' You got ' + correctAnswers + ' out of 7 correct!')
} else {
    alert('Too bad ' + user + ',' + ' You only got ' + correctAnswers + ' out of 7 correct!')
}
