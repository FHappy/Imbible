var User = require('mongoose').model('User');
var passport = require('passport');

exports.createUser = function(req, res, next) {
    var user = new User();

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save(function(err) {
        if (err) {res.json({message: err});}
        var token = user.generateJwt();
        res.status(200);
        res.json({"token": token});
    });
};

exports.loadAll = function(req, res, next) {
    User.find({})
        .exec(function(err, users) {
          if (err) {res.json({message: 'Could not find any users'});}
          res.json({users: users});
        });
};

exports.login = function(req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      var token;

      if (err) {
        res.status(404).json(err);
        return;
      }

      if (user) {
        token = user.generateJwt();
        res.status(200);
        res.json({"token": token});
      } else {
        res.status(401).json(info);
      }
    })(req, res);
};

exports.getUser = function (req, res, next) {
    if (!req.payload._id) {
      res.status(401).json({
        "message": "Bummer!: This is a private profile!"
      });
    } else {
      // var id = req.params.userId;
      var id = req.payload._id;
      User.find({_id: id})
          .exec(function(err, user) {
            if (err) {res.json({message: 'Could not find the specified user.'});}

            res.json({user: user});
          });
    }
};
