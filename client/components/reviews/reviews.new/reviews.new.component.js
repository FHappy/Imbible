const controller 		= require('./reviews.new.controller.js');
const template 			= require('./reviews.new.html');

const reviewNewComponent = {
	controller: controller,
	template: template
};

angular
	.module('imbibleApp')
	.component('reviewsNew', reviewNewComponent);