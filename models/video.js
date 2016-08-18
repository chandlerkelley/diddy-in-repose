var mongoose = require("mongoose");

//should appearTime be a string?

var VideoSchema = new mongoose.Schema({
	url: { type: String, required: true },
	artist: { type: String, rquired: true },
	title: { type: String, required: true },
	description: { type: String },
	goodDogCount: { type: Number },
	badDogCount: { type: Number },
	userName: { type: String },
	_user: { type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Video", VideoSchema);