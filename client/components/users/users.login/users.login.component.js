const controller = require('./users.login.controller.js');
const template = require('./users.login.html');

const UsersLoginComponent = {
  controller: controller,
  template: template
};

angular
  .module('imbibleApp')
  .component('usersLogin', UsersLoginComponent);
