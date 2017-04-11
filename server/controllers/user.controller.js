var User = require('mongoose').model('User');

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
