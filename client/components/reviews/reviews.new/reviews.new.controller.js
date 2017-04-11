ReviewsNewController.$inject = ['CocktailsService', '$state'];

function ReviewsNewController(CocktailsService, $state) {

	const vm = this;

	vm.addNewReview = addNewReview;
	vm.newReview = {};

	activate();

	function activate() {

	};

	function addNewReview() {
		CocktailsService
			.addReview(vm.newReview)
			.then(function resolve(response) {
				vm.newReview = {};
				$state.go('show')
			});
	}
}

module.exports = ReviewsNewController;