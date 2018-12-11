// .env file
require('dotenv').config();

// Node modules for API requests
var request = require('request');
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require("moment");

// Create spotify function
function runSpotifySearch(songName) {
    var Spotify = require('node-spotify-api');
    var keys = require('./keys.js');

    var spotify = new Spotify(keys.spotify);

    spotify.search({
            type: 'track',
            query: songName
        },
        function (err, data) {
            if (data) {
                var trackInfo = data.tracks.items[0];
                var trackResult = console.log('Song Name: ' + songInfo.name);
                console.log('Artist Name: ' + songInfo.artists[0].name);
                console.log('A preview link of the song from Spotify' + songInfo.preview_url);
                console.log('This song is part of the following album ' + songInfo.album.name);

            } else(err) => {
                return console.log('An error has ocurred: ' + err);
            };

        });
};

// Search Concerts/Bands in Town 
var artist = process.argv.slice(3).join('+');
var action = process.argv[2];


//Switches for various userCommands
function liriSwitch(action, artist) {
    switch (action) {
        case "spotify-this-song":
            runSpotifySearch(artist);
            break;

        case "movie-this":
            movieThis(artist);
            break;

        case "do-what-it-says":
            runRandomTxt(artist);
            break;

        case "concert-this":
            concertThis(artist);
            break;

            //Instructions for user trying liri in command line
        default:
            console.log("\n" + "type any command after 'node liri.js': " + "\n" +
                "spotify-this-song 'any song title' " + "\n" +
                "movie-this 'any-movie-title' " + "\n" +
                "do-what-it-says " + "\n");
    };
};
liriSwitch(action, artist);
// Bands in Town/ Concert info
function concertThis(search) {


    request("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp", function (error, response, body) {
            if (error) {
                return console.log('Error occurred: ' + error);
            }
            var data = JSON.parse(body);
            console.log("The name of the venue is: " + data[0].venue.name);
            console.log("The location of this venue is: " + data.city);
            var date = moment(date).format("MM/DD/YYYY")
            console.log("The date of this event is: " + date + "!");
        }

    )}
    

// Movie search 

function movieThis(search) {
    if (search === undefined) {
        search === 'Mr.Nobody';
    }
    var axios = require("axios");

    var queryURL = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
    console.log(queryURL);

    axios.get(queryURL).then(
        function (response) {
            console.log("Movie Title: " + response.data.Title);
            console.log("Year Released: " + response.data.Year);
            console.log("Rating: " + response.data.Rating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country of Production: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Movie's Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);

        }
    );
};
// random.text function
function runRandomTxt() {
    var fs = require('fs');
    fs.readFile('random.text', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        var dataArr = data.split(",");
        console.log(dataArr);
        runSpotifySearch(dataArr[1]);

    });
};



console.log("===================================");
console.log('Liri: "What can I help you with?"');
console.log("===================================");

function askLiri() {
    inquirer.prompt([{
        type: "list",
        message: "Liri, can you please...",
        choices: ["look up a song.",
            "find info about a concert.",
            "look up a movie.",
            "<error>"
        ],
        name: "searchType"


    }]).then(function (response) {

    });
};