var UsersIndexTemplate = require(__dirname +  '/users.index.html');
var UsersIndexController = require(__dirname + '/users.index.controller.js');

var usersIndexComponent = {
     controller: usersIndexController,
     template: usersIndexTemplate
};

angular
    .module('imbibleApp')
    .component('UsersIndexComponent', UsersIndexComponent);
