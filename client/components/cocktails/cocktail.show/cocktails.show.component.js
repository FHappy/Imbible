const controller 		= require('./cocktails.show.controller.js');
const template 			= require('./cocktails.show.html');

const cocktailShowComponent = {
	controller: controller,
	template: template
};

angular
	.module('imbibleApp')
	.component('cocktail', cocktailShowComponent);
