'use strict';
// Welcomes and greets the user

var user = prompt('What is your name?');
var welcome = alert('Welcome ' + user + '!');
var userGreeting = alert('I hope you enjoy my game ' + user + '. Let\'s see if you know some things about me!')

// About Me Guessing Game

var snowBoarding = prompt('Do I like to snowboard?');

if (snowBoarding.toUpperCase() === "YES" || snowBoarding.toUpperCase() === "Y") {
    // console.log('You got that right!')
    alert('You got that right!')
} else {
    // console.log('Unfortunately, that\'s not correct');
    alert('Unfortunately, that\'s not correct');
}

var coding = prompt('Do I like to code?');

if (coding.toUpperCase() === "YES" || coding.toUpperCase() === "Y") {
    // console.log('You got that right!')
    alert('You got that right!')
} else {
    // console.log('Unfortunately, that\'s not correct');
    alert('Unfortunately, that\'s not correct');
}

var outdoors = prompt('Do I enjoy the outdoors?');

if (outdoors.toUpperCase() === "YES" || outdoors.toUpperCase() === "Y") {
    // console.log('You got that right!')
    alert('You got that right!')
} else {
    // console.log('Unfortunately, that\'s not correct');
    alert('Unfortunately, that\'s not correct');
}

var home = prompt('Do I currently live in Redmond?');

if (home.toUpperCase() === "YES" || home.toUpperCase() === "Y") {
    // console.log('Unfortunately, that\'s not correct');
    alert('Unfortunately, that\'s not correct');
} else {
    // console.log('You got that right!')
    alert('You got that right!')
}

var pets = prompt('Do I own any pets?');

if (pets.toUpperCase() === "YES" || pets.toUpperCase() === "Y") {
    // console.log('Unfortunately, that\'s not correct');
    alert('Unfortunately, that\'s not correct');
} else {
    // console.log('You got that right!')
    alert('You got that right!')
};
