var users = require('./../controllers/user.controller.js');
var jwt = require('express-jwt');
var config = require('./../../config/config.js');

var auth = jwt({
  secret: config.sessionSecret,
  userProperty: 'payload'
});

module.exports = function(app) {
    app.route('/api/users/')
       .get(users.loadAll)
       .post(users.createUser);

    app.route('/api/users/login')
       .post(users.login);

    app.route('/api/users/:userId')
       .get(auth, users.getUser);
}
