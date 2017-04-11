var UsersEditTemplate = require(__dirname +  '/users-edit.html');
var UsersEditComponent = require(__dirname + '/users-edit.controller.js');

var UsersEditComponent = {
     controller: usersEditController,
     template: usersEditTemplate
};

angular
    .module('imbibleApp')
    .component('UsersEditComponent', usersEditComponent);
