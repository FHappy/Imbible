var users = require('./../controllers/user.controller.js');
var jwt = require('express-jwt');
var auth = jwt({
  secret: '',
  
})
module.exports = function(app) {
    app.route('/api/users/')
       .get(users.loadAll)
       .post(users.createUser);

    app.route('/api/users/login')
       .post(users.login);
}
