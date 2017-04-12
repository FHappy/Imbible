CocktailsShowController.$inject = ['CocktailsService', '$stateParams', '$state'];

function CocktailsShowController(CocktailsService, $stateParams, $state) {

	const vm = this;

	vm.cocktail = {};
	vm.deleteCocktail = deleteCurrentCocktail;

	activate();
	function activate() {
		loadCocktail();
	}

	function loadCocktail() {
		CocktailsService
			.loadCocktail($stateParams.cocktailId)
			.then(function resolve(response) {
				vm.cocktail = response.data.cocktail;
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
