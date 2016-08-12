var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	userName: { type: String, required: true },
	passWord: { type: String, required: true },
	videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video"}]
})

module.exports = mongoose.model("User", UserSchema);