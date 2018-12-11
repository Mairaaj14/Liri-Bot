require("dotenv").config();

// assign variables 
var keys = require("./keys.js");
var fs = required("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require("request");
var movieName = process.argv[3];
var liriReturn = process.argv[2];
var Bands = require('bands');
var client = new Band (keys.Bands);


//Switches for various commands
switch (liriReturn) {
    case "spotify-this-song":
    spotifyThisSong();
    break;

    case "movie-this":
    movieThis();
    break;

    case "do-what-it-says":
    doWhatItSays();
    break;


//Instructions for user trying liri in command line
default: console.log("\n" + "type any command after 'node liri.js': " + "\n" +
"spotify-this-song 'any song title' " + "\n" +
"movie-this 'any-movie-title' " + "\n" +
"do-what-it-says " + "\n" +
"Use-quotes for multiword tittles!");
}



