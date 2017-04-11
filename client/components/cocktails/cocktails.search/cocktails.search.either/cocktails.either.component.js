const controller              = require('./cocktails.either.controller.js');
const template                = require('./cocktails.either.html');

const CocktailsEitherComponent = {
    controller: controller,
    template: template
};

angular
    .module('imbibleApp')
    .component('eitherResults', CocktailsEitherComponent);
