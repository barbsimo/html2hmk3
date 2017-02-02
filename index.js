/*
Assignment 3 for HTML200
*/
/******************************************************
/*
/* Changes:
/* 1/31/17 Barbara Simonsen
/*         Started this from assignment in JavaScript 100.
/*
/******************************************************/


//Prompt the user to enter his name
//Store the user's entry in a variable

var uname = prompt("Please enter your name");
//Display user name in an alert
alert("Hello " + uname);

var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location1 + 2;
var guess;
var hits = 0
var guesses = 0;
var isSunk = false;

while (isSunk === false) {                      					
	guess = prompt("Ready, aim, fire! (enter a number from 0-6):"); 
	if (guess < 0 || guess > 6) {									
		alert("Please enter a valid cell number!");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("HIT!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Noooo! You sank my battleship!");
			}
		} else {
			alert("Neener, Neener, Neener  YOU MISSED");
		}
	}
}																	//Close while loop

	var stats = "You took " + guesses + " guesses to sink the battleship, " +
	"which means your shooting accuracy was " + (3/guesses);
	alert(stats);

