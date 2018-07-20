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

function spotifyThisSong(songName) {

    //  I need to loop through the data object based on the user input (songName) and then display the pathways given. 
    var songName = process.argv[3];
    songRequest = songName;

    spotify.search({
            type: "track",
            query: songRequest
        },

        function (err, data) {
            if (!err && data) {
                for (var i = 0; i < 5; i++) {
                    if (trackInfo[i]){
                        var SpotifyResults = 
                        "Artist: " + songInfo[i].artist[0].name;
                        "Song: " + songInfo[i].name;
                        "Album: " + songInfo[i].album.name;

                        console.log(SpotifyResults)

                    }
                }
            } else {
                console.log("no song for you")
            }
        }

    )}

    function movieThis() {


         
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=bb02159f"
   
        request(queryUrl, function (error, response, body){
            if (!error && response.statusCode === 200){
                
                var movieData =JSON.parse(body);
                var movieResults = 
                    "Title: " + movieData.Title + '/n' +
                    "Year: " + movieData.Year + '/n'+
                    "Rating: " + movieData.Ratings[0].Value + '/n' +
                    "Rotten Tomatoes Rating: " + movieData.Ratings[1].Value + '/n' +
                    "Origin Country: " + movieData.Country + '/n' +
                    "Language: " + movieData.Language + '/n' +
                    "Plot: " + movieData.Plot + '/n' +
                    "Actors: " + movieData.Actors; 
        
                console.log(movieResults);

            }
        })
   
   
    }

    function doWhatItsays() {
//  Use `fs` Node package and connect to the random.txt
// using the text inside the .txt file it will call one of the commands
//  LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


    }







