const controller 		= require('./reviews.edit.controller.js');
const template 			= require('./reviews.edit.html');

const reviewEditComponent = {
	controller: controller,
	template: template
};

angular
	.module('imbibleApp')
	.component('reviewsEdit', reviewEditComponent);