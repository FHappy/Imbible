const controller 			= require('./cocktails.form.controller.js');
const template 				= require('./cocktails.form.html');

const CocktailsFormComponent = {
    controller: controller,
    template: template
};

angular
    .module('imbibleApp')
    .component('cocktailsForm', CocktailsFormComponent);
