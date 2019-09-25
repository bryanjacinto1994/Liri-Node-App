//Reads and sets any evironment variables with the 'dotenv' package
require("dotenv").config();

/*
Make liri.js take these commands in:
conert-this
spotify-this-song
movie-this
do-what-it-says
*/


//============================= [BandsinTown Concerts] =============================
//A variable that imports the keys.js file
var keys = require("./keys.js"); 
var Spotify = require('node-spotify-api');
//Access the keys information with spotify
var spotify = new Spotify(keys.spotify);



//============================= [BandsinTown Concerts] =============================//
/* 
Name of the artist
Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")*/

//Include axios npm package
var axios = require("axios");
//Include moment npm package
var moment = require('moment');

//Store arguments in an Array
// var nodeArguments = process.argv;

/*

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
var bandsURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp"

//Log the URL for future de-bugging.
console.log(bandsURL);

//Get function via axio to make requests with the API key
axios.get(bandsURL).then(
    function(response){
        //This logs the artist name 
        console.log("\nArtist: " + artistName + "\n");
        //A variable holding a value of venue name and console.log venueName
        var venueName = response.data[0].venue.name;
        console.log("\nVenue Name: " + venueName + "\n");
        //A variable holding a value of venue city and state(region) location
        var venueCity = response.data[0].venue.city;
        var venueState = response.data[0].venue.region;
        console.log("\nThe Venue is located at: " + venueCity + ", " + venueState + ".\n")
        //Holds the date with the moment MM Do YYYY Format
        var venueDate = response.data[0].datetime;
        // var venueDateFormat = "YYYY MM DD T hh:mm:ss";
        // var venueDateConverted = moment(venueDate, venueDateFormat);
        console.log("\n" + artistName.toUpperCase() + " will be performing on " + moment(venueDate).format("MM/DD/YYYY") + " at the " + venueName + ".\n");


        
    })
        .catch(function(error){
            if(error.response){
                console.log(error.response.name);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request){
                console.log(error.request);
            }
            else{
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
*/
//============================= [Open Movie Data Base] =============================//

//Make a variable that holds value of process.argv[2]
var movieName = process.argv[2];
//Make a variable that holds the open movie data base (OMDB) URL link
var movieURL = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
console.log(movieURL);

//Get function via axio to make requests with the API key
axios.get(movieURL).then(
    function(response){
        console.log(response);
        //This logs the movie Title name
        console.log("\nTitle: " + movieName + "\n");
        //This logs the Year of the movie
        console.log("\nYear: " + response.Year + "\n");
        //This logs the Rating of the movie via IMDB
        console.log("\nYear: " + response.imdbRating + "\n");
        //This logs the Rating of the movie via Rotten Tomatoes
        console.log("\nYear: " + response.Ratings + "\n");
        //This logs the Country where the movie was produced
        console.log("\nYear: " + response.Country + "\n");
        //This logs the Plot of the movie
        console.log("\nYear: " + response.Plot + "\n");
        //This logs the Actors in the movie
    }
)