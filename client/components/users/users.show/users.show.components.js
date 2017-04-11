var template = require(__dirname +  '/users.show.html');
var controller = require(__dirname + '/users.show.controller.js');

var component = {
     controller: controller,
     template: template
};

angular
    .module('imbibleApp')
    .component('UsersShow', component);


// var UsersShowTemplate = require(__dirname +  '/cocktails-show-show.html');
// var UsersShowComponent = require(__dirname + '/cocktails-show.component.js');

// var UsersShowComponent = {
//      controller: usersshowController,
//      template: usersshowTemplate
// };

// angular
//     .module('imbibleApp')
//     .component('UsersShowComponent', UsersShowComponent);
