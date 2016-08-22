var express = require("express");
var router = express.Router();
var passport = require("passport");
var Video = require("../models/video");
var User = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
	Video.find({})
	.then(function(videos) {
		videos.forEach(function(video) {
			if (currentUser && currentUser._id.equals(video._user)) {
				video.currentUser = true;
			}
		})
	res.render('pages/index', {videos: videos});
	})
});

// Post /signup
router.post("/signup", function(req, res, next) {
	var signUpStrategy = passport.authenticate("local-signup", {
		successRedirect : "/",
		failureRedirect : "/",
		failureFlash : true
	});
	return signUpStrategy(req, res, next);
})

// Post /login
router.post('/login', function(req, res, next) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/',
    failureFlash : true
  });

  return loginProperty(req, res, next);
});

// Get /logout
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

/* Create */
router.post("/", function(req, res, next) {
	var linkUrl = req.body.url
	var urlStart = linkUrl.indexOf("=") + 1;
	var urlCode = linkUrl.substr(urlStart, 11);
	var time = req.body.min*60 + req.body.sec;
	var newVideo = new Video ({
		url: "https://www.youtube.com/embed/" + urlCode + "?rel=0&start=" + time,
		title: req.body.title,
		artist: req.body.artist,
		description: req.body.description,
		userName: global.currentUser.local.userName,
		_user: global.currentUser._id
	});
	newVideo.save()
	.then(function() {
		res.redirect("/");
	});
});

module.exports = router;
