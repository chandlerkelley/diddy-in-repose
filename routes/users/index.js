var express = require("express");
var router = express.Router();

var Video = require("../models/video");

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
  var videos = Video.find({});
  res.render('users/index', { videos: videos, message: req.flash() });
});