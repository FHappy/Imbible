var UsersEditTemplate = require(__dirname +  '/users-list.html');
var UsersEditComponent = require(__dirname + '/users-list.controller.js');

var UsersEditComponent = {
     controller: userseditController,
     template: userseditTemplate
};

angular
    .module('fhappyApp')
    .component('userseditController', userseditComponent);
