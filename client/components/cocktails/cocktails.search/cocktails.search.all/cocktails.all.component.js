const controller = require('./cocktails.all.controller.js');
const template = require('./cocktails.all.html');

const CocktailsAllComponent = {
    controller: controller,
    template: template
};

angular
    .module('imbibleApp')
    .component('allResults', CocktailsAllComponent);
