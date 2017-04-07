const angular = require('angular');
require('angular-ui-router');
var uiRouterSetup = require('./../config/angular.js');

angular
    .module('project3App', ['ui.router'])
    .config(uiRouterSetup);
