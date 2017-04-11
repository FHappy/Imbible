var UsersIndexTemplate = require(__dirname +  '/users-index.html');
var UsersIndexComponent = require(__dirname + '/users-index.controller.js');

var UsersIndexComponent = {
     controller: usersindexController,
     template: usersindexTemplate
};

angular
    .module('fhappyApp')
    .component('usersindexController', usersindexComponent);
