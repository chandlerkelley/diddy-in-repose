var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var Video = require("./models/video");

mongoose.connect("mongodb://localhost/dogs-on-film")

function quit() {
	mongoose.disconnect();
	console.log("Disconnecting from server.")
};

var videos = [
{
	url: "https://www.youtube.com/watch?v=4HWcViTXdYc",
	artist: "Real Estate",
	title: "It's Real",
	appearTime: 0,
	description: "Many dogs, but ones that wear green bows are the obvious stars"
},
{
	url: "https://www.youtube.com/watch?v=-hIjgofcuWU",
	artist: "Snoop Dogg",
	title: "Who Am I (What's My Name)",
	appearTime: 28,
	description: "Snoop turns into a dog! Wow!"
}
]

Video.remove({})
.then(function() {
	Video.create(videos);
})
.then(function() {
	return Video.find({})
})
.then(function(vids) {
	console.log(vids)
})
.then(function() {
	quit();
})