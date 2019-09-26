//Reads and sets any evironment variables with the 'dotenv' package
require("dotenv").config();

/*
Make liri.js take these commands in:
conert-this
spotify-this-song
movie-this
do-what-it-says
*/


//============================= [Spotify Keys] =============================//
//A variable that imports the keys.js file
var keys = require("./keys.js"); 
var Spotify = require('node-spotify-api');
//Access the keys information with spotify
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

//============================= [NPM Packages] =============================//
//Include axios npm package
var axios = require("axios");
//Include moment npm package
var moment = require('moment');


//============================= [Switch Case Break] =============================//
//Make a Switch statement that has different actions

var action = process.argv[2];
var search = process.argv[3];



switch(action){
    
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
Name of the artist
Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")*/


//Store arguments in an Array
// var nodeArguments = process.argv;


function concertLiri(artistName){
    //Make an empty variable to hold artist name


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

}


//============================= [Spotify] =============================//

function spotifyLiri(){

    spotify.search({ type: 'track', query: musicName})
    .then(function(response){
        //This holds the Artist name
        console.log("Artist: " + response.tracks.items[0].artist[0].name);
    })
    .catch (function(error){
        if (error.response){
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
    })
    
        


}


//============================= [Open Movie Data Base] =============================//

function omdbLiri(movieName){
//Make a variable that holds the open movie data base (OMDB) URL link
var movieURL = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
console.log(movieURL);

//Get function via axio to make requests with the API key
axios.get(movieURL).then(
    function(response){
        // console.log(response);
        
        if (response.data.Title != undefined){
        //This logs the movie Title name
        console.log("\nTitle: " + response.data.Title + "\n");
        //This logs the Year of the movie
        console.log("Year: " + response.data.Year + "\n");
        //This logs the Rating of the movie via IMDB
        console.log("IMDB Ratings: " + response.data.imdbRating + "\n");
        //This logs the Rating of the movie via Rotten Tomatoes
        // console.log("Other Ratings: " + response.data.Ratings + "\n"); ==================== Go back to this ==================
        //This logs the Country where the movie was produced
        console.log("Country: " + response.data.Country + "\n");
        //This logs the Plot of the movie
        console.log("Plot: " + response.data.Plot + "\n");
        //This logs the Actors in the movie
        console.log("Cast: " + response.data.Actors + "\n");
        }
        else{
            omdbLiri("Mr. Nobody")
        }
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

}


//============================= [Do-What-It-Says] =============================//

function doWhatItSaysLiri(){
    //Make a fs.readFile function that stores random.txt
fs.readFile("random.txt", "utf8", function(error, data){
    //This will log to the Terminal/Git Bash if there are any errors
    if(error){
        return console.log(error);
    }

    //Prints the contents of data
    console.log(data);

    var dataArray = data.split(",");
    spotifyLiri(dataArray[1]);
    

    })
}


