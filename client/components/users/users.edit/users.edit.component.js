var template = require(__dirname +  '/users.edit.html');
var controller = require(__dirname + '/users.edit.controllers.js');

var component = {
     controller: controller,
     template: template
};

angular
    .module('imbibleApp')
    .component('UsersEditComponent', component);