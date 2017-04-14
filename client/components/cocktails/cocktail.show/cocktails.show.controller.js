CocktailsShowController.$inject = ['CocktailsService', '$stateParams', '$state', 'AuthenticationService'];

function CocktailsShowController(CocktailsService, $stateParams, $state, AuthenticationService) {

	const vm = this;

	vm.cocktail = {};
	vm.deleteCocktail = deleteCurrentCocktail;
	vm.currentUser = AuthenticationService.currentUser();
	vm.yourCocktail = false;
	// vm.average = getReviewAverage();
	// vm.average = null;

	activate();
	function activate() {
		loadCocktail();
		// vm.average = getReviewAverage();
	}

	function loadCocktail() {
		CocktailsService
			.loadCocktail($stateParams.cocktailId)
			.then(function resolve(response) {
				console.log(vm.currentUser);
				vm.cocktail = response.data.cocktail;
				// vm.average = getReviewAverage();
				console.log(vm.cocktail.createdBy);
				// vm.currentCocktail = vm.cocktail;
				vm.cocktail.average = getReviewAverage(vm.cocktail);
				if (vm.currentUser.email == vm.cocktail.createdBy) {
					vm.yourCocktail = true;
				}
			});
	}

	function deleteCurrentCocktail() {
		console.log('bye')
		CocktailsService
			.deleteCocktail(vm.cocktail)
			.then(function resolve(response) {
                $state.go('list');
            });
	}

	function getReviewAverage(cocktail) {
		console.log(cocktail);
		if (cocktail.reviews) {
			var reviewsLength = cocktail.reviews.length;
			var rawAverage = cocktail.reviews.reduce(function(acc, val) {
						return acc + (val.rating / (5 * reviewsLength));
				}, 0);
		return rawAverage * 100;
	} else {
			return "No reviews have been submitted yet. Make a review!";
		}
	}

}

module.exports = CocktailsShowController;
