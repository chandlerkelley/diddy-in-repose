var express = require("express");
var router = express.Router();
var Video = require("../models/video");
var User = require("../models/user")
var passport = require('passport');

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
};

function authenticate(req, res, next) {
  if(!req.isAuthenticated()) {
    req.flash("error", "Not Allowed");
    res.redirect('/');
  }
  else {
    next();
  }
}

//INDEX
router.get('/', authenticate, function(req, res, next) {
  Video.find({ "_user" : currentUser._id})
  .then(function(videos) {
    videos.forEach(function(video) {
      if (currentUser && currentUser._id.equals(video._user)) {
        video.currentUser = true;
      }
    })
    res.render("pages/user", { videos : videos })
  })
});

//New vid page
router.get("/new", authenticate, function(req, res, next) {
  res.render("pages/new");
});

//Edit vid page
router.get("/edit/:id", authenticate, function(req, res, next) {
  Video.findById(req.params.id)
  .then(function(video) {
    res.render("pages/edit", {video : video});
  })
})

//Update vid
router.put("/:id", authenticate, function(req, res, next) {
  Video.findById(req.params.id)
  .then(function(video) {
    video.url = req.body.url;
    video.artist = req.body.artist;
    video.title = req.body.title;
    video.description = req.body.description;
    video.minutes = req.body.minutes;
    video.seconds = req.body.seconds;
    return video.save();
  })
  .then(function() {
    res.redirect("/users");
  }, function(err) {
    return next(err);
  });
})

//View other user
router.get("/:id", function(req, res, next) {
  var userId = req.params.id;
  console.log(userId);
  Video.find({"_user" : userId})
  .then(function(videos) {
    res.render("pages/view", { videos: videos, message: req.flash() })
  })
})



module.exports = router;
