// 'use strict';
// // Welcomes and greets the user

// var user = prompt('What is your name?');
// var welcome = alert('Welcome ' + user + '!');
// var userGreeting = alert('I hope you enjoy my game ' + user + '. Let\'s see if you know some things about me!')

// // About Me Guessing Game

// var counter = 0;

// var snowBoarding = prompt('Do I like to snowboard?');

// if (snowBoarding.toUpperCase() === "YES" || snowBoarding.toUpperCase() === "Y") {
//     // console.log('You got that right!')
//     alert('You got that right!')
//     counter++;
// } else {
//     // console.log('Unfortunately, that\'s not correct');
//     alert('Unfortunately, that\'s not correct');
// }

// var coding = prompt('Do I like to code?');

// if (coding.toUpperCase() === "YES" || coding.toUpperCase() === "Y") {
//     // console.log('You got that right!')
//     alert('You got that right!')
//     counter++;
// } else {
//     // console.log('Unfortunately, that\'s not correct');
//     alert('Unfortunately, that\'s not correct');
// }

// var outdoors = prompt('Do I enjoy the outdoors?');

// if (outdoors.toUpperCase() === "YES" || outdoors.toUpperCase() === "Y") {
//     // console.log('You got that right!')
//     alert('You got that right!')
//     counter++;
// } else {
//     // console.log('Unfortunately, that\'s not correct');
//     alert('Unfortunately, that\'s not correct');
// }

// var home = prompt('Do I currently live in Redmond?');

// if (home.toUpperCase() === "YES" || home.toUpperCase() === "Y") {
//     // console.log('Unfortunately, that\'s not correct');
//     alert('Unfortunately, that\'s not correct');
// } else {
//     // console.log('You got that right!')
//     alert('You got that right!')
//     counter++;
// }

// var pets = prompt('Do I own any pets?');

// if (pets.toUpperCase() === "YES" || pets.toUpperCase() === "Y") {
//     // console.log('Unfortunately, that\'s not correct');
//     alert('Unfortunately, that\'s not correct');
// } else {
//     // console.log('You got that right!')
//     alert('You got that right!')
//     counter++;
// }



var number = Math.floor(Math.random() * 11);
console.log(number)
var count = 0;
var userGuess = false;

while ( (!userGuess) && (count < 4) ) {
    var guessNumber = prompt('Guess a number 1-10');
    var tries;
    if (parseInt(guessNumber) === number) {
        userGuess = true;
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


// if (counter >= 3) {
//     alert('Awesome ' + user + '!' + ' You got ' + counter + ' out of 5 correct!')
//     alert('I guess you know a lot about me ' + user + '!')
// } else {
//     alert('Too bad ' + user + ',' + ' You only got ' + counter + ' out of 5 correct!')
//     alert('It\'s ok, ' + user + ' we have 5 months to know more about each other!')
// }

