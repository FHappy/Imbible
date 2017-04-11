var UsersEditTemplate = require(__dirname +  '/users-edit.html');
var UsersEditComponent = require(__dirname + '/users-edit.controller.js');

var UsersEditComponent = {
     controller: userseditController,
     template: userseditTemplate
};

angular
    .module('fhappyApp')
    .component('userseditController', userseditComponent);
