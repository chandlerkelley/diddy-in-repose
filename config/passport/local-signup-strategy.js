var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../../models/user');

var strategy = new LocalStrategy({
    usernameField : 'userName',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, userName, password, callback) {
    // Find a user with this e-mail
    User.findOne({ 'local.userName' : userName }, function(err, user) {
      if (err) return callback(err);
      if (user) {
        // A user with this user name already exists
        return callback(null, false, req.flash('error', 'This user name is already taken.'));
      }
      else {
        // Create a new user
        var newUser            = new User();
        newUser.local.userName = userName;
        newUser.local.password = newUser.encrypt(password);

        newUser.save(function(err) {
          return callback(err, newUser);
        });
      }
    });
  });

module.exports = strategy;
