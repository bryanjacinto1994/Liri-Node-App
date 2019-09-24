//Reads and sets any evironment variables with the 'dotenv' package
require('dotenv').config();

//A variable that imports the keys.js file
var keys = require("./keys.js"); 

//Access the keys information with spotify
var spotify = new Spotify(keys.spotify);

/*
Make liri.js take these commands in:
conert-this
spotify-this-song
movie-this
do-what-it-says
*/

//BandsinTown Concerts
/* Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")*/

//Include axios npm package
var axios = require("axios");