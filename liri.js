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

//Store arguments in an Array
// var nodeArguments = process.argv;

//Make an empty variable to hold artist name
var artistName = process.argv[2];

//Make a 'for loop' function so the search can take in two words name.
// for (var i = 2; i < nodeArguments.length; i++){
//     if(i > 2 && i < nodeArguments.length){
//         artistName = artistName + "+" + nodeArguments[i];
//     }
//     else{
//         artistName += nodeArguments[i];
//     }
// }

//Make a url request with BandsinTown
var queryURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp&date=upcoming"

//Log the URL for future de-bugging.
console.log(queryURL);

//Get function via axio to make requests with the API key
axios.get(queryURL).then(
    function(response){
        //Holds artist name and console.log that artist is searched
        var artist = response.name;
        console.log("You have searched " + artist);
        console.log(artist);
        var venueName = response.venue;
        console.log("The name of the venue where " + artist + " is performing is at " + venueName);
        console.log(venueName);
        var date = response.datetime;
        

        
        
    }

)