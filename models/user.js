var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var Video = require("./video")

var User = new mongoose.Schema({
	local : {
		userName: String,
		password: String
	},
	videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video"}]
})

User.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(6));
}

User.methods.isValidPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("User", User);