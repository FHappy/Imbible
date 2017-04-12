const template = require(__dirname +  '/users.new.html');
const controller = require(__dirname + '/users.new.controllers.js');

const component = {
     controller: controller,
     template: template
};

angular
    .module('imbibleApp')
    .component('usersNew', component);
