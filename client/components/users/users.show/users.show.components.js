var UsersShowTemplate = require(__dirname +  '/users-show.html');
var UsersShowComponent = require(__dirname + '/users-show.controller.js');

var UsersShowComponent = {
     controller: usersshowController,
     template: usersshowTemplate
};

angular
    .module('fhappyApp')
    .component('usersshowController', usersshowComponent);
