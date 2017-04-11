const controller 		= require('./cocktails.edit.controller.js');
const template 			= require('./cocktails.edit.html');

const cocktailEditComponent = {
	controller: controller,
	template: template
};

angular
	.module('imbibleApp')
	.component('cocktailsEdit', cocktailEditComponent);