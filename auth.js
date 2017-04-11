var bcrypt = require('bcrypt-nodejs');
var User = require('/users.index');

function createSecure(req, res, next) {
  var password = req.body.password

  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next()
}

function loginUser(req, res, next) {
  
  var password = req.body.password;

  // var query = User.findOne({ email: email }).exec()
  User.findOne({email: email})
    .exec(function(err, user) {
      if (err) {console.log(err);}
      if (user == null) {
      res.json({status: 401, data: "unauthorized"})
      } else if (bcrypt.compareSync(password, user.password_digest)) {
        req.session.currentUser = foundUser;
      }
          next();
    });
  // query.then(function(foundUser){
  //   if (foundUser == null) {
  //     res.json({status: 401, data: "unauthorized"})

  //   } else if (bcrypt.compareSync(password, foundUser.password_digest)) {
  //     req.session.currentUser = foundUser;
  //   }
  //   next()
  // })
  // .catch(function(err){
  //   res.json({status: 500, data: err})
  // });
}

function authorize(req, res, next) {
  var currentUser = req.session.currentUser;

  if (!currentUser || currentUser._id !== req.params.id ) {
    res.json({status: 401, data: 'unauthorized'});
  } else {
    next();
  }
};

module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  authorize: authorize
}