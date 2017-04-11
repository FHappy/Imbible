const controller 		= require('./cocktails.new.controller.js');
const template 			= require('./cocktails.new.html');

const cocktailNewComponent = {
	controller: controller,
	template: template
};

angular
	.module('imbibleApp')
	.component('cocktailsNew', cocktailNewComponent);