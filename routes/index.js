var express = require("express");
var router = express.Router();
var Video = require("../models/video");

/* GET home page. */
router.get('/', function(req, res, next) {
	Video.find({})
	.then(function(videos) {
		res.render('pages/index', {videos: videos});
	})
});

module.exports = router;
