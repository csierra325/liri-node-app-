require("dotenv").config();

var request = require("request");

var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var Twitter = require("twitter")
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var id = process.env.SPOTIFY_ID;
var secret = process.env.SPOTIFY_SECRET;
var twitConKey = process.env.TWITTER_CONSUMER_KEY;
var twitConSecret = process.env.TWITTER_CONSUMER_SECRET;
var twitTokenKey = process.env.TWITTER_ACCESS_TOKEN_KEY;
var twitTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;



var liriCommand = process.argv[2];
var movieName = process.argv[3];




if (liriCommand === "my-tweets") {
    console.log("firstCommand");
    myTweets();
} else if (liriCommand === "spotify-this-song") {
    console.log("secondCommand")
    spotifyThisSong();
} else if (liriCommand === "movie-this") {
    console.log("ThirdCommand")
    movieThis();
} else if (liriCommand === "do-what-it-says") {
    console.log("fourthCommand")
    doWhatItsays();
} else {
    console.log("incorrect command")
}


function myTweets() {
    var params = {
        screen_name: 'camille51267659'
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {

            tweets.forEach(tweetObj => console.log(tweetObj.text));
        }
    });
};

function spotifyThisSong() {
    spotify
        .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
}

function movieThis() {

}

function doWhatItsays() {

}







// inquirer.prompt([

//     {
//         type: "input",
//         name: "userInput",
//         message: ""

//     }
// ]).then(function(command){   



// })