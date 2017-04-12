CocktailsShowController.$inject = ['CocktailsService', '$stateParams', '$state', 'AuthenticationService'];

function CocktailsShowController(CocktailsService, $stateParams, $state, AuthenticationService) {

	const vm = this;

	vm.cocktail = {};
	vm.deleteCocktail = deleteCurrentCocktail;
	vm.currentUser = AuthenticationService.currentUser();
	vm.yourCocktail = false;
	// vm.average = getReviewAverage();
	vm.average = null;

	activate();
	function activate() {
		loadCocktail();
		console.log(vm.cocktail);
		vm.average = getReviewAverage();
	}

	function loadCocktail() {
		CocktailsService
			.loadCocktail($stateParams.cocktailId)
			.then(function resolve(response) {
				console.log(vm.currentUser);
				vm.cocktail = response.data.cocktail;
				// vm.average = getReviewAverage();
				console.log(vm.cocktail.createdBy);
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

	function getReviewAverage() {
		if (vm.cocktail.reviews) {
		var reviewsLength = vm.cocktails.reviews.length;
		var rawAverage = vm.cocktails.reviews.reduce(function(acc, val) {
			return acc + (val / 5 * reviewsLength);
		}, 0);
		return rawAverage * 100;
	} else {
			return "No reviews have been submitted yet. Make a review!";
		}
	}

}

module.exports = CocktailsShowController;
