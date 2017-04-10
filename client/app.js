const angular = require('angular');
require('angular-ui-router');
var uiRouterSetup = require('./../config/angular.js');

angular
    .module('imbibleApp', ['ui.router'])
    .config(uiRouterSetup);

// uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
//
// function uiRouterSetup($stateProvider, $urlRouterProvider) {
//     $stateProvider
//         .state('list', {
//             url: '/list',
//             template: '<cocktails-list></cockatails-list>'
//         });
//
//     $urlRouterProvider.otherwise('/');
// }
