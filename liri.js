//Reads and sets any evironment variables with the 'dotenv' package
require("dotenv").config();

//============================= [Spotify Keys] =============================//
//A variable that imports the keys.js file
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
//Access the keys information with spotify
var spotify = new Spotify(keys.spotify);

//============================= [NPM Packages] =============================//
//Include file system npm package
var fs = require("fs");
//Include axios npm package
var axios = require("axios");
//Include moment npm package
var moment = require('moment');


//============================= [Switch Case Break] =============================//
//Make a Switch statement that has different actions

//Make a variable that holds in the "process.argv[2]"
var action = process.argv[2];
var search = process.argv[3];

/*
Make liri.js take these commands in:
conert-this
spotify-this-song
movie-this
do-what-it-says
*/

switch (action) {

    case "concert-this":
        concertLiri(search);
        break;

    case "spotify-this-song":
        spotifyLiri(search);
        break;

    case "movie-this":
        omdbLiri(search);
        break;

    case "do-what-it-says":
        doWhatItSaysLiri();
        break;
}



//============================= [BandsinTown Concerts] =============================//
/*
-Name of the artist
-Name of the venue
-Venue location
-Date of the Event (use moment to format this as "MM/DD/YYYY")
*/

/*
var artistName ="";
//Store arguments in an Array
var nodeArguments = process.argv;


    //Make a 'for loop' function so the search can take in two words name. //////////////////// ================= GO BACK TO THIS ================= ////////////////////
    for (var i = 2; i < nodeArguments.length; i++){
        if(i > 2 && i < search.length){
            artistName = artistName + "+" + nodeArguments[i];
        }
        else{
            artistName += nodeArguments[i];
        }
    }

*/

function concertLiri(artistName) {
    

    //Make a url request with BandsinTown
    var bandsURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp"

    //Log the URL for future de-bugging.
    // console.log(bandsURL);

    //Get function via axio to make requests with the API key
    axios.get(bandsURL).then(
        function (response) {
            //This logs the artist name 
            console.log("\nArtist: " + artistName + "\n");
            //A variable holding a value of venue name and console.log venueName
            var venueName = response.data[0].venue.name;
            console.log("Venue Name: " + venueName + "\n");
            //A variable holding a value of venue city and state(region) location
            var venueCity = response.data[0].venue.city;
            var venueState = response.data[0].venue.region;
            console.log("The Venue is located at: " + venueCity + ", " + venueState + ".\n")
            //Holds the date with the moment MM Do YYYY Format
            var venueDate = response.data[0].datetime;
            // var venueDateFormat = "YYYY MM DD T hh:mm:ss";
            // var venueDateConverted = moment(venueDate, venueDateFormat);
            console.log(artistName.toUpperCase() + " will be performing on " + moment(venueDate).format("MM/DD/YYYY") + " at the " + venueName + ".\n");



        })
        
        //This function catches any error if there is one 
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.name);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request) {
                console.log(error.request);
            }
            else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}


//============================= [Spotify] =============================//
/*
-Artist(s)
-The song's name
-A preview link of the song from Spotify
-The album that the song is from
*/

function spotifyLiri(search) {

    // console.log(search)

    //If there is no search inputed in the Terminal/Git Bash, this function will automatically search up the default song.
    if(!search){
        search = "The Sign, Ace of Base";        
    }

    //This function searches for a song, artist, or track. *Google [node-spotify-api] for examples*
    spotify.search({ type: 'track', query: search })
        .then(function (response) {

           //This holds the Artist name
            console.log("\nArtist: " + response.tracks.items[0].artists[0].name + "\n");
            //This holds the Song name
            console.log("Song: " + response.tracks.items[0].name + "\n");
            //This holds the Preview link
            console.log("Preview Song: " + response.tracks.items[0].preview_url + "\n");
            //This holds the Album name
            console.log("Album: " + response.tracks.items[0].album.name + "\n");
        })
           
            //This function catches any error if there is one 
          .catch(function (error) {
            if (error.response) {
                console.log(error.response.name);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request) {
                console.log(error.request);
            }
            else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
};


//============================= [Open Movie Data Base] =============================//

function omdbLiri(movie) {
    //Make a variable that holds the open movie data base (OMDB) URL link
    var movieURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    //Log the URL for future de-bugging.
    console.log(movieURL);

    //Get function via axio to make requests with the API key
    axios.get(movieURL).then(
        function (response) {
            // console.log(response);

            //Made an if or else statement.
            //If 
            if (movie != undefined) {
                //This logs the movie Title name
                console.log("\nTitle: " + movie + "\n");
                //This logs the Year of the movie
                console.log("Year: " + response.data.Year + "\n");
                //This logs the Rating of the movie via IMDB
                console.log("IMDB Ratings: " + response.data.imdbRating + "\n");
                //This logs the Rating of the movie via Rotten Tomatoes
                console.log("RottenTomatoes Ratings: " + response.data.Ratings[1].Value + "\n"); 
                //This logs the Country where the movie was produced
                console.log("Country: " + response.data.Country + "\n");
                //This logs the Plot of the movie
                console.log("Plot: " + response.data.Plot + "\n");
                //This logs the Actors in the movie
                console.log("Cast: " + response.data.Actors + "\n");
            }
            else {
                omdbLiri("Mr. Nobody")
            }
        })
        
        //This function catches any error if there is one 
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.name);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request) {
                console.log(error.request);
            }
            else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}


//============================= [Do-What-It-Says] =============================//

function doWhatItSaysLiri() {
    //Make a fs.readFile function that stores random.txt
    fs.readFile("random.txt", "utf8", function (error, data) {
        //This will log to the Terminal/Git Bash if there are any errors
        if (error) {
            return console.log(error);
        }

        //Prints the contents of data
        // console.log(data);

        //1. Made a variable to store the data.split(", ").
        var dataArray = data.split(",");
        //2. Made for a for loop to iterate through all the songs in the random.txt file
        for (var i = 0; i < dataArray.length; i++){
        //3. Called out the spotifyLiri function with an arguement of the variable storing the data.split(", ")
            spotifyLiri(dataArray[i]);
        }
        
    })
}

//============================= [BONUS] =============================//

//This 'fs.appendfile' function appends the data that is input in the Terminal/Git Bash

fs.appendFile("log.txt", action + ', ', function(err){
    if (err) throw err;
    console.log("The Data Was Appended To log.txt");
})