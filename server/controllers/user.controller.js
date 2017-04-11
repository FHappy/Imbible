var User = require('mongoose').model('User');

exports.createUser = function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err) {
      if (err) {res.json({message: err});}

      res.json({user: user});
    });
};

exports.loadAll = function(req, res, next) {
    User.find({})
        .exec(function(err, users) {
          if (err) {res.json({message: 'Could not find any users'});}
          res.json({users: users});
        });
};
