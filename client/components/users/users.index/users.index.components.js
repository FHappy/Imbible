var usersIndexTemplate = require(__dirname +  '/cocktails-index.html');
var usersIndexController = require(__dirname + '/cocktails-index.controller.js');

var usersIndexComponent = {
     controller: usersIndexController,
     template: usersIndexTemplate
};

angular
    .module('imbibleApp')
    .component('usersIndex', usersIndexComponent);
