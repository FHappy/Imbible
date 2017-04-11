var users = require('./../controllers/user.controller.js');

module.exports = function(app) {
    app.route('/api/users/')
       .get(users.loadAll)
       .post(users.createUser);
}
