var template = require(__dirname +  '/users.new.html');
var controller = require(__dirname + '/users.new.controllers.js');

var component = {
     controller: controller,
     template: template
};

angular
    .module('imbibleApp')
    .component('usersNew', component);
