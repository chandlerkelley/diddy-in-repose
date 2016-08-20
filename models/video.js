var mongoose = require("mongoose");

//should appearTime be a string?

var Video = new mongoose.Schema({
	url: { type: String, required: true },
	artist: { type: String, rquired: true },
	title: { type: String, required: true },
	description: { type: String },
	userName: { type: String },
	_user: { type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Video", Video);