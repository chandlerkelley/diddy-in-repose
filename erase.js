var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var Video = require("./models/video");
var User = require("./models/user");


mongoose.connect("mongodb://localhost/dogs-on-film");

function quit() {
	mongoose.disconnect();
	console.log("Disconnecting from server.")
};

Video.remove({})
.then(function() {
	User.remove({});
})
.then(function() {
	quit();
});