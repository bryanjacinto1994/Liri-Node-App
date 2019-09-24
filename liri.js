//Reads and sets any evironment variables with the 'dotenv' package
require('dotenv').config();

//A variable that imports the keys.js file
var keys = require("./keys.js"); 

//Access the keys information with spotify
var spotify = new Spotify(keys.spotify);

