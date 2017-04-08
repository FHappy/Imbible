const angular = require('angular');
require('angular-ui-router');
var uiRouterSetup = require('./../config/angular.js');

angular
    .module('imbibleApp', ['ui.router'])
    .config(uiRouterSetup);
