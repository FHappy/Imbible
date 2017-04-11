ReviewsEditController.$inject = ['CocktailsService', '$stateParams'];

function ReviewsEditController(CocktailsService, $stateParams) {

	const vm = this;

	vm.current = {};
	vm.editCurrentReview = editCurrentReview;

	activate();

	function activate() {
		editCurrentReview();
	}

	function editCurrentReview() {
		CocktailsService
			.editReview($stateParams.reviewId)
			.then(function resolve(response) {
				vm.current = response.data.cocktail.review;
			});
	}
}

module.exports = ReviewsEditController;
