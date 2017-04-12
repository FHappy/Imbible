CocktailsShowController.$inject = ['CocktailsService', '$stateParams', '$state', 'AuthenticationService'];

function CocktailsShowController(CocktailsService, $stateParams, $state, AuthenticationService) {

	const vm = this;

	vm.cocktail = {};
	vm.deleteCocktail = deleteCurrentCocktail;
	vm.currentUser = AuthenticationService.currentUser();
	vm.yourCocktail = false;

	activate();
	function activate() {
		loadCocktail();
	}

	function loadCocktail() {
		CocktailsService
			.loadCocktail($stateParams.cocktailId)
			.then(function resolve(response) {
				console.log(vm.currentUser);
				vm.cocktail = response.data.cocktail;
				console.log(vm.cocktail.createdBy);
				if (vm.currentUser.email === vm.cocktail.createdBy) {
					vm.yourCocktail = false;
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

}

module.exports = CocktailsShowController;
