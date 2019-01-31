# 🤖Liri Bot 🤖
# Welcome

### Overview
LIRI is a Language Interpretation and Recognition Interface, just like Iphone's SIRI. However, LIRI is a command line node app that takes in parameters and gives you back some data. You can tell Liri to look up a song for you, you can ask for the info on a movie, and you can also find out about concerts about a certain band/artist.

![alt text](assets/images/liri-bot.png)


### Getting Started
To get started you will need to install some NPM packages!
You will need request, node-spotify-API, inquirer, moment, and dotev.
You can install these packages by running the following line in your termninal:
`npm install <packagename>`

Here is a code snippet of my switch cases :

``` 

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

```

### Built With
* JavaScript
* NPM Packages
* [VSC](https) - Visual Studio Code, Editor


## Authors

* **Maira Jimenez** - *Initial work* - [Mairaaj14](https://github.com/Mairaaj14)


## Acknowledgments

* Jerome Chenette
* Sasha Patsel
* Jimmy Tu
