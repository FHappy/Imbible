const controller                = require('./cocktails.search.controller.js');
const template                  = require('./cocktails.search.html');

const CocktailsSearchComponent = {
    controller: controller,
    template: template
};

angular
    .module('imbibleApp')
    .component('cocktailsSearch', CocktailsSearchComponent);
