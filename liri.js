//Reads and sets any evironment variables with the 'dotenv' package
require("dotenv").config();

//A variable that imports the keys.js file
var keys = require("./keys.js"); 
var Spotify = require('node-spotify-api');
//Access the keys information with spotify
var spotify = new Spotify(keys.spotify);

/*
Make liri.js take these commands in:
conert-this
spotify-this-song
movie-this
do-what-it-says
*/

//============================= [BandsinTown Concerts] =============================
/* 
Name of the artist
Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")*/

//Include axios npm package
var axios = require("axios");

//Grab the artist or band's name with a value of process.argv[2]
var artistName = process.argv[2];

//Make a url request with BandsinTown
var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

//Log the URL for future de-bugging.
console.log(queryURL);

//Get function via axio to make requests with the API key
axios.get(queryURL).then(
    function(response){
        console.log("You have searched " + response.name);
        console.log(response.name)
    }

)