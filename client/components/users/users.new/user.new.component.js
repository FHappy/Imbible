var UsersNewTemplate = require(__dirname +  '/users-new.html');
var UsersNewComponent = require(__dirname + '/users-new.controller.js');

var UsersNewComponent = {
     controller: usersnewController,
     template: usersnewTemplate
};

angular
    .module('fhappyApp')
    .component('usersnewController', usersnewComponent);
