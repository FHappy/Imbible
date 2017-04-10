const controller        = require('./cocktails.list.controller.js');
const template          = require('./cocktails.list.html');

const CocktailsListComponent = {
    controller: controller,
    template: template
};

angular
    .module('imbibleApp')
    .component('cocktailsList', CocktailsListComponent);
