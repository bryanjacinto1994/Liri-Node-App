# Liri-Node-App

### Links: 

Github: <br>
https://github.com/bryanjacinto1994/Liri-Node-App



## Images

![Site]()


<hr>

## Tools Used:

* Visual Studio Code - Open source code editor for building and debugging web and cloud applications.
* JavaScript - A scripting language that uses curly-bracket syntax, first class functions and object-oriented.
* jQuery - A JavaScript library that simplifys to manipulate HTML DOM.
* Git - Version control system to track changes to source code.
* Github - Hosts respository that can be deployed to GitHub pages.
<br>
### NPM Packages Used:
* MomentJS
* Axios
* File System
* Spotify 
* Dotenv


<hr>

## Summary

Using JavaScript and all the NPM packages listed above via Visual Studio Code, 


<hr>

## Code Snippet

liri.js : <br> Switch function allows the user to type the case name that is specified to each different functions. By inputting "node liri.js casename" (Example: node liri.js concert-this "artist name"), the output gives you the results such as the name of the artist, when the artist's next event and the location of the event. You can also choose other cases to search up movies and songs. 
```javascript
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
```
liri.js:<br>
This is a snippet of the "spotify-this-song" command. There is a statement made "(!search)" if there is no song input, it will give the default song, "The Sign, Ace of Base", automatically. <br><br>
A spotify.search function was created to get the song that was searched by inputting "node liri.js spotify-this-song "song/artist name" on the Terminal/Git Bash.
```javascript
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
```


liri.js:<br>
fs.appendfile appends (or add on) the data input to the log.txt file. whe

```javascript
fs.appendFile("log.txt", action + ', ', function(err){
    if (err) throw err;
    console.log("The Data Was Appended To log.txt");
})
```


## Author Links
Linkedin: https://www.linkedin.com/in/bryan-jacinto-100438aa/

Github:
https://github.com/bryanjacinto1994
