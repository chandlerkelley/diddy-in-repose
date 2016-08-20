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
  Video.find({ "_user" : global.currentUser._id})
  .then(function(videos) {
    res.render("pages/user", { videos : videos })
  })
});

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
