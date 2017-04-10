CocktailsShowController.$inject = ['CocktailsService', '$stateParams'];

function CocktailsShowController(CocktailsService, $stateParams) {

	const vm = this;

	vm.cocktail = {};

	function loadCocktail() {
		CocktailsService
			.loadCocktail($stateParams.cocktailId)
			.then(function resolve(response) {
				vm.cocktail = response.data.cocktail;
			});
	}

}

module.exports = CocktailsShowController;
